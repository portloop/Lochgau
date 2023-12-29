<template>
    <dashboardHeader />

    <div class="container-sidebar">
        <sideBar />
        <div class="content-box">
            <div class="content-box-title">
                Spielerliste:
                <button type="button" @click="generateLink"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Einen Link erstellen
            </button>
            <div v-if="registrationLink">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Invite link:</label>
                <input v-model="registrationLink" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
            </div>
            </div>
            <div class="player-list-container" v-if="players && players.length > 0">
                <div class="players-item" v-for="(player, index) in players" :key="index">
                    <div class="player-item main-info">
                        <div class="player-item photo">
                            <img v-if="player.avatar" :src="player.avatar" alt="">
                            <div v-if="player.avatar == ''"
                                class="relative avatar w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg class="absolute  w-12 h-12 text-gray-400 -left-1" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="player-item name">
                            {{ player.firstName }} {{ player.lastName }}
                        </div>
                    </div>

                    <div class="player-item age">
                        {{ player.email }}
                    </div>
                    <div class="player-item age">
                        {{ player.dateOfBirth }}
                    </div>
                    <div class="player-item">
                        {{ player.role }}
                    </div>
                    <div class="player-item">
                        {{ player.position }}
                    </div>
                    <button type="button" @click="viewPlayer(player)" :data-id="player._id"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Bearbeiten</button>
                    <button type="button" @click="deletePlayer" :data-id="player._id"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Löschen</button>
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
            registrationLink: ''
        }
    },

    methods: {
        async fetchPlayers() {
            try {
                const response = await axios.get('http://localhost:3000/users/list');
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

            axios.delete(`http://localhost:3000/users/list/${dataIdValue}`)
                .then((response) => {
                    console.log('Article successfully deleted');
                    this.fetchPlayers(); // Запускаем метод для получения обновленного списка
                    this.$router.push('/users/list');
                })
                .catch((error) => {
                    console.log('Error while deleting data', error);
                });
        },

        generateLink () {
            axios.get('http://localhost:3000/generate-link')
            .then((response) => {
                this.registrationLink = response.data.link
                console.log(response.data.link)
            })
        }
    },

    mounted() {
        this.fetchPlayers()
    }
}
</script>
<style scoped>@import url(../assets/styles/playersList.css);</style>