<template>
    <dashboardHeader />

    <div class="container-sidebar">
        <sideBar />
        <div class="content-box">
            <div class="content-box-title">
                Edit Team:
            </div>
            <div class="w-25">

                <div class="team-id mb-3">
                   Team ID: {{ teamId }}
                </div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Team name:</label>
                <input v-model="teamName" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team name" required>
            </div>
            <button type="button" @click="sendData" class=" mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>



            <div v-show="successPush" class=" push p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <span class="font-medium">Success changed!</span> 
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
            teamId: '',
            teamName: '',
            successPush: false,
        }
    },

    methods: {
        getTeam () {
            const teamId = this.$route.params.id

            axios.post(`http://194.15.113.90/api/teams/getTeamById`, { id: teamId })
            .then((response) => {
                this.teamId = response.data.team._id;
                this.teamName = response.data.team.name
                console.log(response.data.team)
                console.log(this.teamName)
            })
        },

        sendData () {
            const teamId = this.$route.params.id

            axios.put(`http://194.15.113.90/api/teams/${teamId}`, {
                name: this.teamName
            })
            .then((response) => {
                console.log(response.data)
                this.successPush = true;
                setTimeout(() => {
                    this.successPush = false
                }, 2000)
            })
        },
    },

    mounted () {
        this.getTeam()
    }
}
</script>
<style scoped>
@import url(../assets/styles/playersList.css);


.push {
    position: absolute;
    right: 20px;
    top: 20px;
}
</style>