<template>
    <dashboardHeader />

    <div class="container-sidebar">
        <sideBar />
        <div class="content-box">
            <div class="content-box-title">
                Player list:
                <button type="button" @click="this.$router.push('/player/add')"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Add new
            </button>
            </div>
            <div class="player-list-container" v-if="players && players.length > 0">
                <div class="players-item" v-for="(player, index) in players" :key="index">
                    <div class="player-item main-info">
                        <div class="player-item photo">
                            <img v-if="player.photo" :src="player.photo" alt="">
                            <div v-if="player.photo == ''"
                                class="relative avatar w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg class="absolute  w-12 h-12 text-gray-400 -left-1" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="player-item name">
                            {{ player.name }}
                        </div>
                    </div>

                    <div class="player-item age">
                        {{ player.age }}
                    </div>
                    <div class="player-item">
                        {{ player.nationality }}
                    </div>
                    <div class="player-item">
                        {{ player.position }}
                    </div>
                    <button type="button" @click="viewPlayer(player)" :data-id="player._id"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                    <button type="button" @click="deletePlayer" :data-id="player._id"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import dashboardHeader from '../components/dashboardHeader.vue';
import sideBar from './sidebar.vue'

import axios from 'axios';
export default {
    components: {
        dashboardHeader,
        sideBar
    },
    data() {
        return {
            players: [],
        }
    },

    methods: {
        async fetchPlayers() {
            try {
                const response = await axios.get('http://194.15.113.90/players');
                this.players = Object.freeze(response.data);
                console.log(this.players)
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        },

        viewPlayer(player) {
            console.log(player.id);
            this.$router.push(`/user/edit/${player._id}`)
        },


        deletePlayer(event) {
            const dataIdValue = event.target.dataset.id;

            axios.delete(`http://194.15.113.90/players/${dataIdValue}`)
                .then((response) => {
                    console.log('Article successfully deleted');
                    this.fetchPlayers(); // Запускаем метод для получения обновленного списка
                    this.$router.push('/dashboard/players');
                })
                .catch((error) => {
                    console.log('Error while deleting data', error);
                });
        }
    },

    mounted() {
        this.fetchPlayers()
    }
}
</script>
<style scoped>@import url(../assets/styles/playersList.css);</style>