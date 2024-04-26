import instance from "@/middlewares";
import router from "@/router";

export default {
    name: 'feedback',
    actions: {
        async get_feedback({}, { email, name, message }) {
            const data = JSON.stringify({ email, name, message})
            console.log(data);
            const response = await fetch(`${process.env.VUE_APP_SERVER}/api/feedback/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: data      
            });

            window.alert('Мы получили ваше сообщение и скоро с вами свяжемся!');

            router.push('/')
            return
        }
    }
}