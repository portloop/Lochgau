<template>
    <dashboardHeader />

    <div class="container-sidebar">
        <sideBar />
        <div class="content-box">
            <div class="content-box-title">
                Mannschaft :

            </div>




            <div class="relative overflow-x-auto mt-4 shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Vollständiger Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Position
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Mannschaft
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Telefon
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Aktion
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                        <tr v-for="(player, index) in players" :key="index" class='even:bg-gray-50 even:dark:bg-gray-800'>
                            <td class="px-6 py-4 whitespace-nowrap dark:text-white">
                                {{ player.firstName }} {{ player.lastName }}
                            </td>
                            <!-- Додайте інші комірки для інших властивостей об'єкта гравця -->
                            <td class="px-6 py-4">
                                {{ player.username }}
                            </td>
                            <td class="px-6 py-4">
                                {{ player.position }}
                            </td>
                            <td class="px-6 py-4">
                                {{ player.phone }}
                            </td>
                            <td class="px-6 py-4">
                                {{ player.phone }}
                            </td>
                            <td class="px-6 py-4" :data-id="player._id">
                                <a @click="editUser" :data-id="player._id"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Bearbeiten</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
        getUser() {
            const userID = this.$route.params.id;
            const teamName = this.$route.params.teamName;

            console.log(teamName);

            axios.get(`http://194.15.113.90/users/list/`)
                .then((response) => {
                    console.log('Users:', response.data);

                    // Фільтруємо користувачів за умовами
                    const filteredUsers = response.data.filter(user => {
                        return (user.role === 'User' || user.role === 'coach') && user.team === teamName;
                    });

                    // Виправлення помилки: використовуйте this.players замість this.players
                    this.players = filteredUsers;

                    console.log('Filtered Users:', filteredUsers);
                })
                .catch((error) => {
                    console.error('Error getting users:', error);
                });
        },

        editUser(event) {
            const dataIdValue = event.target.dataset.id;
            this.$router.push(`/user/edit/${dataIdValue}`)
        }

    },

    mounted() {
        this.getUser()
    }
}
</script>
<style scoped>
@import url(../assets/styles/playersList.css);
</style>