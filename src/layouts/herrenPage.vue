<template>
    <headerComponent />
    <div class="main-container">
        <div class="our-team">
            <div class="ot-title">
                Our team
            </div>
            <div class="players-container" v-if="players && players.length > 0">
                <div class="player-item" v-for="(player, index) in players" :key="index">
                  <img :src="player.photo" :alt="`${player.firstName} ${player.lastName}`">
                  <div class="player-info">
                    <div class="player-name">
                      {{ player.firstName }} {{ player.lastName }}
                    </div>
                    <div class="player-position">
                      {{ player.position }}
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="result-container">
                <div class="ot-title">
                    Our result
                </div>
                <div id="widget1"></div>
              </div>

            


        </div>

    </div>
    <socialMedia />

    <footerComponent />
</template>
<script>
import headerComponent from '../components/HeaderComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import socialMedia from '../components/socialMedia.vue';
import axios from 'axios';
export default {
    data() {
        return {
            players: []
        }
    },
    components: {
        headerComponent,
        footerComponent,
        socialMedia
    },

    methods: {
        getPlayers() {
            axios.get('http://localhost:3000/users/list')
                .then((response) => {
                    console.log(response);
                    this.players = response.data.filter(player => player.team == 'Herren');
                    console.log(this.players)
                })
                .catch((error) => {
                    console.error('Error getting players:', error);
                });
        }

    },

    mounted() {
        this.getPlayers();

        const headScript = document.createElement('script');
    headScript.type = 'text/javascript';
    headScript.src = 'https://www.fussball.de/static/layout/fbde2/egm//js/widget2.js';
    document.head.appendChild(headScript);

    // Додаємо скрипт із вмістом у тег <body>
    const bodyScript = document.createElement('script');
    bodyScript.type = 'text/javascript';
    bodyScript.innerHTML = `new fussballdeWidgetAPI().showWidget('widget1', '02NU8PI6QO000000VUM1DNQBVT4QHLI2');`;
    document.body.appendChild(bodyScript);
    }

}
</script>
<style scoped>
@import url('../assets/styles/herrenPage.css');
</style>