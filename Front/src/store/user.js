import instance from "@/middlewares";

export default {
    name: 'user',
    namespaced: true,
    state: () => ({
        user: null
    }),
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        async getUserByUid({ commit }) {
            const user = await instance.get('/api/users')
            if(user) return commit('setUser', user.data)
            console.log(user.message);
        },
        async fetchUserDetails({ commit }) {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await fetch('http://localhost:3000/api/users', {
                    headers: {
                        'x-access-token': accessToken
                    }
                });
                if (!response.ok) throw new Error('Ошибка запроса данных пользователя');
                const userData = await response.json();
                commit('setUser', userData);
            } catch (error) {
                console.error('Не удалось получить данные пользователя:', error);
            }
        }
    }
}