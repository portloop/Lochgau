<template>
    <dashboardHeader />

    <div class="container-sidebar">
        <sideBar />
        <div class="content-box">
            <div class="content-box-title">
                Documents:
                <button type="button" 
                class="text-white bg-blue-700 ml-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ein neues Dokument hinzufügen
            </button>
            <div v-if="registrationLink">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Invite link:</label>
            </div>
            </div>
            <div class="player-list-container" >
              
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
        // async fetchPlayers() {
        //     try {
        //         const response = await axios.get('https://194.15.113.90/users/list');
        //         this.players = Object.freeze(response.data);
        //         console.log(this.players)
        //     } catch (error) {
        //         console.error('Error fetching players:', error);
        //     }
        // },

        async fetchPlayers() {
    try {
        const response = await axios.get('https://194.15.113.90/users/list');
        const allPlayers = Object.freeze(response.data);

        // Фильтруем только тренеров
        const trainers = allPlayers.filter(player => player.role === "trainer");

        // Преобразуем формат даты
        const playersFormatted = trainers.map(player => {
            return {
                _id: player._id,
                username: player.username,
                firstName: player.firstName,
                lastName: player.lastName,
                dateOfBirth: new Date(player.dateOfBirth).toLocaleDateString('en-GB'), // Форматируем дату
                password: player.password,
                role: player.role,
                __v: player.__v,
                team: player.team,
                parentPhone: player.parentPhone,
                passport: player.passport,
                phone: player.phone,
                photo: player.photo,
                position: player.position,
                street: player.street,
                zip: player.zip,
                parent: player.parent,
                city: player.city,
                nationality: player.nationality,
                height: player.height,
                weight: player.weight
            };
        });

        this.players = Object.freeze(playersFormatted);
        console.log(this.players);
    } catch (error) {
        console.error('Error fetching trainers:', error);
    }
},


        viewPlayer(player) {
            console.log(player.id);
            this.$router.push(`/user/edit/${player._id}`)
        },


        deletePlayer(event) {
            const dataIdValue = event.target.dataset.id;

            axios.delete(`https://194.15.113.90/users/list/${dataIdValue}`)
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
            axios.get('https://194.15.113.90/generate-link')
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