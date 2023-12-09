<template>
    <div v-if="successPush" id="toast-top-right"
    class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
    role="alert">
    <div class="success-icon">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path
                d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
        </svg>
    </div>
    <div class="text-sm font-normal">Team successfully added</div>
</div>
    <dashboardHeader />

    <div class="container-sidebar">
        <sideBar />
        <div class="content-box">
            <div class="content-box-title">
                Add new team:
              
            </div>
            <div class="player-list-container">
                <div class="mb-2 field">
                    <label for="base-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Team name</label>
                    <input v-model="name" type="text" id="base-input"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <button type="button" @click="createNew" 
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add new
            </button>
            </div>
        </div>
    </div>
</template>
<script>
import dashboardHeader from '@/components/dashboardHeader.vue';
import sideBar from '@/components/sideBar.vue';
import axios from 'axios';
export default {
    components: {
        dashboardHeader,
        sideBar
    },
    data() {
        return {
          teams: [],
          name: '',
          successPush: false
        }
    },

    methods: {
        createNew () {
            axios.post('http://localhost:3000/api/teams', {
                name: this.name
            })
            .then((response) => {
                console.log(response)
                this.successPush = true;
                setTimeout(() => {
                    this.successPush = false
                }, 3000);
            })
            .catch((error) => {
                console.log('Error while creating team', error)
            })
        }
    }
}
</script>
<style scoped>@import url(../assets/styles/playersList.css);</style>