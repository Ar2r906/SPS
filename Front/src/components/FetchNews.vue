<template>
    <div>
        <h1>Последние новости</h1>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div v-for="NewsItem in news" :key="NewsItem.link" class="news-item">
                <h3>{{ NewsItem.title }}</h3>
                <p>{{ NewsItem.description }}</p>
                <a :href="NewsItem.link" target="_blank">{{ NewsItem.link }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            news: [],
            loading: true
        };
    },
    async mounted() {
        try {
            const response = await axios.get('http://localhost:3000/api/posts');
            this.news = response.data;
        } catch (error) {
            console.error('Error loading news:', error);
        } finally {
            this.loading = false;
        }
    }
};
</script>

<style scoped>

</style>