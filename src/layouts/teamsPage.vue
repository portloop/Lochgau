<template>
    <dashboardHeader />

    <div class="container-sidebar">
        <sideBar />
        <div class="content-box">
            <div class="content-box-title">
                Liste der Mannschaften:
                <button type="button" @click="addTeam"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Eine neue hinzufügen
                </button>
            </div>
            <div class="player-list-container" v-if="teams && teams">
                <div class="players-item" v-for="(team, index) in teams.teams" :key="index">
                    <div class="player-item main-info">
                        <div class="player-item name">
                            {{ team.name }}
                        </div>
                    </div>

                    <div class="player-item age">
                        {{ countPlayersInTeam(team.name) }}
                    </div>
                    <button :data-id="team.name" @click="seeMember(event)" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Mitglieder</button>
                    <button :data-id="team._id" @click="editTeam(event)"   type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>

                    <button type="button" :data-id="team._id" @click="deleteTeam(team)"
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
            teams: [],
            players: [],
        }
    },

    methods: {
        editTeam () {
            const teamId = event.target.dataset.id;
            this.$router.push(`/editTeam/${teamId}`)
        },
        getTeams() {
            axios.get('http://194.15.113.90/api/teams')
                .then((response) => {
                    console.log(response.data)
                    this.teams = response.data
                    console.log(this.teams.teams)
                })
                .catch((error) => {
                    console.log('Error while get teams', error)
                })
        },
        getPlayers() {
            axios.get('http://194.15.113.90/users/list')
                .then((response) => {
                    console.log(response.data)
                    this.players = response.data
                })
                .catch((error) => {
                    console.log('Error while get players', error)
                })
        },

        addTeam() {
            this.$router.push('/dashboard/teams/add')
        },

        countPlayersInTeam(name) {
            let countPlayers = 0;
            for (let i = 0; i < this.players.length; i++) {
                const player = this.players[i];
                console.log('Input Data', player.team, name)
                if (player.team === name) {
                    countPlayers++;
                }
            }
            console.log('Players in team:', countPlayers);
            return countPlayers;
        },

        deleteTeam(team) {
            const teamId = team._id;

            axios
                .delete(`http://194.15.113.90/api/teams/${teamId}`)
                .then((response) => {
                    console.log(response);
                    this.getTeams()
                    //   this.teams = this.teams.filter((t) => t._id !== teamId);
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        seeMember() {
            const dataIdValue = event.target.dataset.id;

            this.$router.push(`/team/${dataIdValue}/list`)
        }
    },

    mounted() {
        this.getTeams()
        this.getPlayers()
    }
}
</script>
<style scoped>@import url(../assets/styles/playersList.css);</style>