<template>
    <div class="container">
        <div class="title">
            Vereinsführung | Hinweis
        </div>

        <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"
            :autoplay="autoplay">
            <swiper-slide>
                <a href="https://deli-malermeister.de/">
                    <img src="../../assets/carouselLogo/1.png" alt="">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="https://www.asys-group.com/de-de/">
                    <img src="../../assets/carouselLogo/2.png" alt="">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="https://www.asys-group.com/de-de/">
                    <img src="../../assets/carouselLogo/3.jpeg" alt="">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="https://www.guenter-weller-gmbh.de/">
                    <img src="../../assets/carouselLogo/4.jpeg" alt="">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="https://www.konzelmann.com/en/">
                    <img src="../../assets/carouselLogo/5.jpeg" alt="">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="http://www.sport-trinkner.de/">
                    <img src="../../assets/carouselLogo/6.png" alt="">
                </a>
            </swiper-slide>

            <swiper-slide>
                <a href="http://www.sport-trinkner.de/">
                    <img src="../../assets/carouselLogo/7.jpg" alt="">
                </a>
            </swiper-slide>

        </swiper>
    </div>

    <div class="popup" v-if="showPopup">
        <div class="close" @click="closePopup">
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
        </div>
        <div class="popup-container">
            <img src="../../assets/img/organigramm.png" alt="">
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/autoplay'

// Import Swiper styles
import 'swiper/css';
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
            showPopup: false,

            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
        }
    },


}
</script>
<style scoped>
.container {
    padding: 10px;
    margin-top: 20px;
    max-width: 500px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 10px 10px 26px -15px rgba(0, 0, 0, 0.75);
}

.title {
    color: #cc3366;
    font-family: 'goboldI', sans-serif;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    text-transform: uppercase;
}

.image {
    height: 122px;
    display: flex;
    align-items: center;
}

.image img {
    width: 100%
}

.text {
    font-size: 14px;
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
}


.close {
    position: absolute;
    right: 20px;
    top: 20px;
    height: 20px;
    width: 40px;
    fill: #fff;
}
</style>