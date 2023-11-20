<template>
    <div class="result-line">
        <div class="result-line__container">
            <div class="result-line__item">
                <div class="result-line__tournament">
                    <div class="result-line__tournament_logo">
                        {{ tournamentLogo }} asdasd
                    </div>
                    <div class="result-line__tournament_data">
                        <div class="result-line__name">
                            {{ roundName }} dasdasd
                        </div>
                        <div class="result-line__date">
                            {{ roundDate }} asdasd
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    mounted() {
        this.getNearMatches();
    },
    methods: {
        async getNearMatches() {
            const options = {
                method: 'GET',
                url: 'https://sofascore.p.rapidapi.com/teams/get-near-events',
                params: { teamId: '36653' },
                headers: {
                    'X-RapidAPI-Key': '547011392amshc9bfa8cafb92e14p172d45jsn6b187d656144',
                    'X-RapidAPI-Host': 'sofascore.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>
<style>
.result-line {
    background: rgba(235, 234, 234, 0.6);
}
</style>