const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT;
const { Op } = require('sequelize');
const cron = require('node-cron');
const fetchNews = require('./parser/newsParser');
const Post = require('./models/posts');

const posts_routes = require('./routes/posts')
const auths_routes = require('./routes/auths')
const users_routes = require('./routes/users')
const workoutController = require('./controllers/workoutController');
const eventController = require('./controllers/eventController');
const teamController = require('./controllers/teamController');

const { error } = require('console')
const bodyParser = require('body-parser')

app.use(cors({ 
    origin: ['http://localhost:8080'] 
}));
app.use(bodyParser.json());

app.use('/api/auths', auths_routes)
app.use('/api/users', users_routes)
app.use('/api/posts', posts_routes)

app.get('/api/workouts', workoutController.getWorkouts);
app.post('/api/workouts', workoutController.createWorkout);
app.delete('/api/workouts/:id', workoutController.deleteWorkout);

app.get('/api/events', eventController.getEvents);
app.get('/api/events/:id', eventController.getEventsRegistration);
app.get('/api/teams', teamController.getTeams);

// app.get('/api/events/:id', (req, res) => {
//     const eventId = Number(req.params.id);
//     const event = events.find(event => event.id === eventId);
//     if (event) {
//       res.json(event);
//     } else {
//       res.status(404).send('Event not found');
//     }
//   });

async function deleteOldNews(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);

    try {
        await Post.destroy({
            where: {
                createdAt: {
                    [Op.lt]: date
                }
            }
        });
        console.log('Old news deleted successfully');
    } catch (error) {
        console.error('Error deleting old news:', error);
    }
};

cron.schedule('0 0 * * *', () => {
    deleteOldNews(7); // Удаление новостей старше 7 дней
});

cron.schedule('0 0 * * *', () => {
    fetchNews('https://fsp-russia.com/'); // Получение новостей каждый час
});


app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})

app.use((error, request, response, next) => {
    if(error instanceof SyntaxError)
        response.status(400).send({ message: 'Неверные данные' })
    else next(error)
})