<template>
    <dashboardHeader />
    <div v-if="successPush" id="toast-top-right"
        class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
        role="alert">
        <div class="success-icon">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path
                    d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
            </svg>
        </div>
        <div class="text-sm font-normal">Player successfully added</div>
    </div>
    <div class="main-wrap">
       <sideBar />
        <div class="content-box">
            <div class="content-box__title">
                Neuen Spieler hinzufügen:
            </div>
            <div class="content-container ">
                <div class="preview-table bg-gray-100">

                    <div class="flex mb-2 photo-player items-center justify-center w-full">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Spieler Foto:
                        </label>

                        <label for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click
                                        to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input ref="fileInput" id="dropzone-file" type="file" @change="uploadFile" class="hidden" />
                            <div class="info-photo" v-if="playerImg">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z"/></svg>
                            </div>
                        </label>
                    </div>
                    <div class="mb-2 field">
                        <label for="base-input"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input v-model="name" type="text" id="base-input"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mb-2 field">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Datum der Geburt:</label>
                        <input v-model="dateOfBirth" type="date" id="base-input"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="field mb-2">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wählen Sie den Befehl</label>
                        <select v-model="team" id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a team</option>
                            <option value="Herren">Herren</option>
                            <option value="CA">Frauen</option>
                            <option value="FR">Junioren</option>
                        </select>
                    </div>
                    <div class="field mb-2">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wählen Sie eine Position</label>
                        <select v-model="position" id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a position</option>
                            <option value="Torwart">Torwart</option>
                            <option value="Abwehrspieler">Abwehrspieler</option>
                            <option value="Innenverteidiger">Innenverteidiger</option>
                            <option value="Außenverteidiger">Außenverteidiger</option>
                            <option value="Mittelfeldspieler">Mittelfeldspieler</option>
                            <option value="Defensiver Mittelfeldspieler">Defensiver Mittelfeldspieler</option>
                            <option value="Zentraler Mittelfeldspieler">Zentraler Mittelfeldspieler</option>
                            <option value="Offensiver Mittelfeldspieler">Offensiver Mittelfeldspieler</option>
                            <option value="Stürmer">Stürmer</option>
                            <option value="Flügelstürmer">Flügelstürmer</option>
                            <option value="Mittelstürmer">Mittelstürmer</option>
                        </select>
                    </div>
                    <div class="mb-3 field">
                        <label for="base-input"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nationalität</label>
                        <input v-model="nationality" type="text" id="base-input"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <button type="button" @click="sendData"
                        class="text-white  field bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Hinzufügen</button>

                </div>
            </div>
        </div>
    </div>

    {{ this.$store.state.userData }}
</template>
<script>
import axios from 'axios';
import sideBar from './sidebar.vue'

import dashboardHeader from '../components/dashboardHeader.vue';
export default {
    components: {
        sideBar,
        dashboardHeader
    },
    data() {
        return {
            playerImg: '',
            name: '',
            dateOfBirth: '',
            team: '',
            position: '',
            nationality: '',
            successPush: false
        }
    },

    methods: {
        uploadFile(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const folder = 'players'; // Замените на нужную папку (players, gallery, news)

            axios.post(`http://194.15.113.90/api/${folder}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log('File uploaded:', response.data.filePath);
                this.playerImg = response.data.filePath
                console.log(this.playerImg)
                // Далее можно сохранить путь к файлу в переменной состояния или использовать по своему усмотрению
            }).catch(error => {
                console.error('Error uploading file:', error);
            });
        },

        calculateAge(dateOfBirth) {
            const today = new Date();
            const birthDate = new Date(dateOfBirth);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();

            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            return age;
        },


        sendData() {
            axios.post('http://194.15.113.90/players/add', {
                photo: this.playerImg,
                name: this.name,
                dateOfBirth: this.dateOfBirth,
                age: this.calculateAge(this.dateOfBirth), // Используйте сохраненный возраст
                team: this.team,
                position: this.position,
                nationality: this.nationality
            })
                .then(response => {
                    console.log(response);
                    this.successPush = true;
                    setTimeout(() => {
                        this.successPush = false;
                    }, 5000);

                    this.photo = '';
                    this.name = '';
                    this.dateOfBirth = '';
                    this.team = '';
                    this.position = '',
                    this.nationality = '';
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
}
</script>
<style scoped>
@import url(../assets/styles/addPlayer.css);
</style>