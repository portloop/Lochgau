<template>
    <div class="result-main-container">

        <div class="near-event" v-if="nextMatch">

            <div class="near-event-timer">
                {{ formatTime(days) }}D:{{ formatTime(hours) }}H:{{ formatTime(minutes) }}M
            </div>
            <div class="near-event-info__container">
                <div class="near-event-tournament">
                    {{ nextMatch.tournament || '...' }}
                </div>
                <div class="near-event-time">
                    {{ nextMatch.time || '...' }}
                </div>
                <div class="result-line__teams_container" v-if="nextMatch.teams && nextMatch.teams[0]">
                    <div class="team-item">
                        <div class="result-line__team">
                            <div class="result-line__team_logo">
                                <img :src="nextMatch.teams[0].logo" alt="" v-if="nextMatch.teams[0].logo">
                            </div>
                            <div class="result-line__team_name">
                                {{ nextMatch.teams[0].club || '...' }}
                            </div>
                        </div>
                        <div class="result-line__vs">VS</div>
                        <div class="result-line__team">
                            <div class="result-line__team_logo">
                                <img :src="nextMatch.teams[1].logo" alt="" v-if="nextMatch.teams[1].logo">
                            </div>
                            <div class="result-line__team_name">
                                {{ nextMatch.teams[1].club || '...' }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="result-line">
            <div class="result-line__container">

                <swiper :slides-per-view="5" @swiper="onSwiper" @slideChange="onSlideChange"
                    :pagination="{ clickable: true }">
                    <div class="swiper-pagination"></div>
                    <swiper-slide v-for="(event, index) in eventData" :key="index" class="result-line__item"
                        :class="{ 'active-slide': index * 3 === activeSlide * 3 }">
                        <div class="result-line__tournament">
                            <div class="result-line__tournament_data">
                                <div class="result-line__name">{{ event.tournament }}</div>
                                <div class="result-line__date">{{ event.time }}</div>
                            </div>
                            <div class="result-line__teams_container">
                                <div class="result-line__team">
                                    <div class="result-line__team_logo">
                                        <img :src="event.teams[0].logo" alt="">
                                    </div>
                                </div>
                                <div class="result-line__vs">VS</div>
                                <div class="result-line__team">
                                    <div class="result-line__team_logo">
                                        <img :src="event.teams[1].logo" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide v-for="(event, index) in eventData" :key="index" class="result-line__item"
                        :class="{ 'active-slide': index * 3 === activeSlide * 3 }">
                        <div class="result-line__tournament">
                            <div class="result-line__tournament_data">
                                <div class="result-line__name">{{ event.tournament }}</div>
                                <div class="result-line__date">{{ event.time }}</div>
                            </div>
                            <div class="result-line__teams_container">
                                <div class="result-line__team">
                                    <div class="result-line__team_logo">
                                        <img :src="event.teams[0].logo" alt="">
                                    </div>
                                </div>
                                <div class="result-line__vs">VS</div>
                                <div class="result-line__team">
                                    <div class="result-line__team_logo">
                                        <img :src="event.teams[1].logo" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="arrow-right" @click="swiper.slideNext()">
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                            fill-rule="nonzero" />
                    </svg>
                </div>
                <div class="arrow-left" @click="swiper.slidePrev()">
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                            fill-rule="nonzero" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from 'swiper/modules';
import moment from 'moment';
import getData from '../../server/getData.js'



import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default {
    components: {
        Swiper,
        SwiperSlide,

    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
    data() {
        return {
            eventData: [],
            activeSlide: 0,
            swiper: null,
            durationInMinutes: 0,
            interval: null,
            seconds: 0,
            minutes: 0,
            formattedTime: '',
            nextEventIndex: 0,
            nextMatch: {},
            hours: ''
        };
    },

    methods: {

        getNearMatch() {
            let formattedDates = this.eventData.map(item => {
                const splittedDate = item.time.slice(4).split('|');
                return splittedDate.map(element => String(element).replace(/\s/g, '').split(','));
            });

            let currentDate = moment().format('DD.MM.YYYY HH:mm');
            let nextEventIndex = -1;

            for (let i = 0; i < formattedDates.length; i++) {
                const eventTime = formattedDates[i].join(' ');
                const format = 'DD.MM.YYYY HH:mm';
                const durationInMinutes = moment(eventTime, format).diff(moment(currentDate, format), 'minutes');

                if (durationInMinutes > 0) {
                    nextEventIndex = i;
                    break;
                }
            }

            if (nextEventIndex !== -1) {
                const eventTime = formattedDates[nextEventIndex].join(' ');
                const format = 'DD.MM.YYYY HH:mm';
                const durationInMinutes = moment(eventTime, format).diff(moment(currentDate, format), 'minutes');
                this.durationInMinutes = durationInMinutes;
                this.startTimer();
            } else {
                console.log("All events have already started.");
            }
            this.nextMatch = Object.freeze(this.eventData[nextEventIndex])
        },

        startTimer() {
            this.interval = setInterval(() => {
                if (this.durationInMinutes > 0 || this.seconds > 0) {
                    if (this.seconds === 0) {
                        this.durationInMinutes--;

                        this.hours = Math.floor(this.durationInMinutes / 60);
                        this.minutes = this.durationInMinutes % 60;
                        this.seconds = 59;
                    } else {
                        this.seconds--;
                    }

                    // Расчет дней
                    this.days = Math.floor(this.hours / 24);
                    this.hours %= 24;

                    // Форматирование времени в формат DD-HH-MM
                    this.formattedTime = `${this.formatDays(this.days)}D:${this.formatTime(this.hours)}H:${this.formatTime(this.minutes)}M`;
                } else {
                    clearInterval(this.interval);
                    // Таймер достиг нуля, выполните необходимые действия
                }
            }, 1000);
        },

        formatDays(days) {
            // Добавление ведущего нуля, если число меньше 10
            return days < 10 ? `${days}` : days;
        },

        formatTime(time) {
            return time < 10 ? `${time}` : time;
        },







        onSlideChange() {
            if (this.swiper) {
                this.activeSlide = this.swiper.activeIndex;
            }
        },
        onSwiper(swiper) {
            this.swiper = swiper;
        },
        async fetchData() {
            try {
                const response = await axios.get('http://yourufx.space/data');
                this.eventData = Object.freeze(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            this.getNearMatch()
        },
    },
    mounted() {
        this.fetchData();

    },
};
</script>

<style scoped>
.result-line {
    background: rgba(235, 234, 234, 0.6);
    padding: 80px 0;
    position: relative;
    transform: translateY(-40px);
    z-index: 0;
}

.result-line__vs {
    font-family: 'goboldI', sans-serif;
    font-size: 32px;
    color: #cc0033;
}



.result-line__tournament_data {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'metropolis', sans-serif;
    color: #003333;
    margin-bottom: 45px;
}

.result-line__date {
    font-family: 'dCondensed', sans-serif;
    font-size: 14px;
    margin-top: 10px;
}

.result-line__teams_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.result-line__team {
    max-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}


.result-line__item img {
    mix-blend-mode: color;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;

}

.result-line__item .result-line__team_logo {
    width: 50px;
    height: 50px;
    aspect-ratio: 3/2;

}

.arrow-left {
    left: 0;
}

.arrow-right {
    right: 0;
}

.arrow-right,
.arrow-left {
    position: absolute;
    width: 55px;
    height: 60px;
    top: calc(50% - 30px);
    z-index: 999 !important;
    opacity: 0.7;
    transition: 0.2s;
}

.arrow-right:hover,
.arrow-left:hover {
    cursor: pointer;
    opacity: 1;
}

.main-news-container {
    position: relative;
    z-index: 1;
}

.result-main-container {
    position: relative;
}

.near-event {
    background: #fff;
    position: absolute;
    z-index: 2;
    top: -30px;
    width: 440px;
    height: 320px;
    left: calc(50% - 220px);
    border-radius: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;

    -webkit-box-shadow: 0px 5px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 5px 10px -7px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 5px 10px -7px rgba(0, 0, 0, 0.75);
}

.near-event-timer {
    border-radius: 16px 16px 0 0;
    font-size: 18px;

}

.near-event-info__container {
    padding: 0 40px 40px 40px;


}

.near-event-timer {
    background: #cc0033;
    color: #fff;
    font-family: 'goboldI';
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    padding: 5px 0;
}

.near-event-tournament {
    font-family: 'metropolis', sans-serif;
    font-size: 18px;
    margin-bottom: 15px;
}

.near-event-time {
    font-size: 16px;
    font-family: 'metropolis', sans-serif;
    color: #003333;
    margin-bottom: 40px;
}


.result-line__team {
    display: flex;
    align-items: center;
    flex-direction: column;
    white-space: nowrap;
}

.near-event-info__container .result-line__team_logo {
    width: 60px;
    height: 60px;
}

.near-event-info__container .result-line__team_logo img {
    width: 100%;
    height: 100%;
}

.near-event-info__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #003333;
    width: 100%;
    padding: 40px 0;
}

.near-event-tournament {
    margin-bottom: 7px;
}

.near-event .team-item {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0 40px 20px 40px;
}

.near-event .result-line__team_name {
    font-size: 16px;
    color: #003333;
    font-family: 'metropolis', sans-serif;
    margin-top: 15px;
}


.result-line__item {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    justify-content: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin-right: 0 !important;
    width: 409px !important;
}
</style>


