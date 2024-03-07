<template>
    <dashboardHeader />
    <div class="flex">
        <sideBar />
        <div class="content w-full p-4">
            <div class="title-section flex justify-between" >
                <div class="title text-2xl mb-4">Page list</div>
                <button class="red-btn" @click="this.$router.push('/dashboard/addVereinPage')">Add new</button>
            </div>



            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                URL
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Created at
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Author
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in pages"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                /{{ item.url }}
                            </th>
                            <td class="px-6 py-4">
                                {{ formatDate(item.createdAt) }}
                            </td>
                            <td class="px-6 py-4">
                                Admin
                            </td>
                            
                            <td class="px-6 py-4 text-right">
                                <a href="#" @click="this.$router.push(`/dashboard/pages/edit/${item._id}`)"
                                    class="font-medium mr-4 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>

                                    <a href="#" @click="deletePage(item._id)"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script>
import sideBar from './sideBar.vue'
import dashboardHeader from '../components/dashboardHeader.vue';
import axios from 'axios'
export default {
    components: {
        sideBar,
        dashboardHeader
    },

    data() {
        return {
            pages: [],
        }
    },

    methods: {
        getAllPages() {
            axios.get('http://srv489299.hstgr.cloud/api/pages/all')
                .then((response) => {
                    console.log(response.data)
                    this.pages = response.data
                })
        },

        formatDate(inputDate) {
            const date = new Date(inputDate);

            const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            };

            const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
            return formattedDate;
        },

        deletePage (id) {
            axios.delete(`http://srv489299.hstgr.cloud/api/pages/${id}`)
            .then((response) => this.getAllPages())
        },

        getName (id) {
            console.log(id)
            axios.get(`http://srv489299.hstgr.cloud/players/${id}`)
            .then((response) => {
                return response.data
            })
        }
    },

    mounted() {
        this.getAllPages();
    }
}
</script>

<style scoped>
@import url(../assets/styles/pageList.css);
</style>