<template>
    <dashboardHeader />
    <div class="main-wrap">
        <sideBar />

        <div class="content-box">
            <div class="content-box__title">
                Hello, {{ this.$store.state.userData.firstName }} 👋
            </div>
            <div class="miniblock-container">
                <div class="content-container ">
                    <div class="preview-table bg-gray-100">
                        <div class="preview-table-title coolGray">
                            <span>Players</span>
                            <button type="button" @click="this.$router.push('/player/add')"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Add new
                            </button>

                        </div>
                        <div class="preview-table-container bg-gray-50">
                            <div v-for="(player, index) in players" :key="index" class="preview-table-item">
                                <div class="preview-table-item-name">
                                    {{ player.name }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ player.team }}
                                </div>
                                <div class="preview-table-item-button">
                                    <button @click="viewPlayer(player)" :data-id="player._id" type="button"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-container">
                    <div class="preview-table bg-gray-100">
                        <div class="preview-table-title coolGray">
                            <span>News</span>
                            <button type="button" @click="this.$router.push('/news/add')"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Add new
                            </button>

                        </div>
                        <div class="preview-table-container bg-gray-50">
                            <div v-for="(newsItem, index) in news" :key="index" class="preview-table-item">
                                <div class="preview-table-item-name">
                                    {{ newsItem.title }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ newsItem.team }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ newsItem.author.name }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ newsItem.publishedAt }}
                                </div>
                                <div class="preview-table-item-button">
                                    <button @click="goToNews" type="button" :data-id="newsItem._id"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                        <svg clip-rule="evenodd" :data-id="newsItem._id" fill-rule="evenodd"
                                            stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"
                                                fill-rule="nonzero" />
                                        </svg>
                                    </button>

                                    <button @click="deleteArticle" type="button" :data-id="newsItem._id"
                                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                        <svg width="20" height="20" :data-id="newsItem._id" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                            <path :data-id="newsItem._id"
                                                d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" />
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-container gallery">
                    <div class="preview-table bg-gray-100">
                        <div class="preview-table-title coolGray">
                            <span>Gallery</span>
                            <button type="button" @click="this.$router.push('/dashboard/gallery/add')"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Add new
                            </button>

                        </div>
                        <div class="preview-table-container bg-gray-50">
                            <div v-for="(galleryItem, index) in gallery" :key="index" class="preview-table-item">
                                <div class="preview-table-item-name">
                                    {{ galleryItem._id }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ galleryItem.title }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ galleryItem.src }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ galleryItem.text }}
                                </div>
                                <div class="preview-table-item-button">
                                    <button @click="this.$router.push('/dashboard/gallery/add')" type="button" :data-id="galleryItem._id"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                        <svg clip-rule="evenodd" :data-id="galleryItem._id" fill-rule="evenodd"
                                            stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"
                                                fill-rule="nonzero" />
                                        </svg>
                                    </button>

                                    <button @click="deleteArticle" type="button" :data-id="galleryItem._id"
                                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                        <svg width="20" height="20" :data-id="galleryItem._id" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                            <path :data-id="galleryItem._id"
                                                d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" />
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <button @click="this.$router.push('/news/add')">Asd</button>
    {{ this.$store.state.userData }}
</template>
<script>
import sideBar from '../components/sideBar.vue';
import axios from 'axios';
import dashboardHeader from '../components/dashboardHeader.vue';
export default {
    data() {
        return {
            players: [],
            news: [],
            gallery: []
        }
    },

    components: {
        sideBar,
        dashboardHeader
    },

    methods: {
        async fetchPlayers() {
            try {
                const response = await axios.get('https://yourufx.space/players');
                this.players = Object.freeze(response.data);
                console.log(this.players)
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        },
        viewPlayer(player) {
            console.log(player.id);
            this.$router.push(`/player/edit/${player._id}`)
        },

        getNewsList() {
            console.log('Method is called');
            axios.get('https://yourufx.space/api/news')
                .then((response) => {
                    this.news = response.data;

                    this.news.forEach((item) => {
                        const formattedDate = new Date(item.publishedAt).toLocaleString('ru-RU', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        });
                        item.publishedAt = formattedDate;
                    });

                    console.log(this.news)
                })
                .catch((error) => {
                    console.log('Error while getting news data:', error);
                });
        },

        goToNews() {
            const dataIdValue = event.target.dataset.id;
            // console.log('Data ID value:', dataIdValue); // Вывод значения атрибута data-id
            // Вы можете использовать это значение или передать его для дальй обработки
            this.$router.push(`/news/${dataIdValue}`)
        },


        deleteArticle(event) {
            const dataIdValue = event.target.dataset.id;

            axios.delete(`https://yourufx.space/api/news/${dataIdValue}`)
                .then((response) => {
                    console.log('Article successfully deleted');
                    this.getNewsList(); // Запускаем метод для получения обновленного списка
                    this.$router.push('/dashboard');
                })
                .catch((error) => {
                    console.log('Error while deleting data', error);
                });
        },


        getGallery () {
            axios.get(`https://yourufx.space/gallery`)
            .then((response) => {
                console.log(response.data)
                this.gallery = Object.freeze(response.data)
            })
            .catch((error) => {
                console.log('Error while get gallery:', error)
            })
        }
    },

    mounted() {
        this.fetchPlayers();
        this.getNewsList();
        this.getGallery();
    }
}
</script>
<style scoped>
@import url(../assets/styles/coachPage.css);
</style>