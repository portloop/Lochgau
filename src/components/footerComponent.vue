<template>
    <div class="footer">
        <div class="footer-container">
            <a href="/" class="logo-footer">
                <img src="../assets/logo-footer.png" alt="Logo footer">
            </a>
            <div class="footer-slider">
                <swiper  :slides-per-view="5" @swiper="onSwiper" @slideChange="onSlideChange"
                :pagination="{ clickable: true }">
                <div class="swiper-pagination"></div>
                <swiper-slide class="result-line__item">
                    <div class="image-container">
                        <img src="../assets/img/sponsorship/logo1.png" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide class="result-line__item">
                    <div class="image-container">
                        <img src="../assets/img/sponsorship/logo2.png" alt="">
                    </div>
                    
                </swiper-slide>
                <swiper-slide class="result-line__item">
                    <div class="image-container">
                        <img class="drop-shadow-logo" src="../assets/img/sponsorship/logo3.png" alt="">
                    </div>
                   
                </swiper-slide>
                <swiper-slide class="result-line__item">
                    <div class="image-container">
                        <img src="../assets/img/sponsorship/logo4.png" alt="">
                    </div>
                   
                </swiper-slide>
                <swiper-slide class="result-line__item">
                    <div class="image-container">
                        <img src="../assets/img/sponsorship/logo5.png" alt="">
                    </div>
                   
                </swiper-slide>
                <swiper-slide class="result-line__item">
                    <div class="image-container">
                        <img src="../assets/img/sponsorship/logo1.png" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide class="result-line__item">
                    <div class="image-container">
                        <img src="../assets/img/sponsorship/logo2.png" alt="">
                    </div>
                    
                </swiper-slide>
                <swiper-slide class="result-line__item">
                    <div class="image-container">
                        <img class="drop-shadow-logo" src="../assets/img/sponsorship/logo3.png" alt="">
                    </div>
                   
                </swiper-slide>
                <swiper-slide class="result-line__item">
                    <div class="image-container">
                        <img src="../assets/img/sponsorship/logo4.png" alt="">
                    </div>
                   
                </swiper-slide>
                <swiper-slide class="result-line__item">
                    <div class="image-container">
                        <img src="../assets/img/sponsorship/logo5.png" alt="">
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
            <div class="footer-links">
                <div class="links">
                    <a href="">Aktuelles</a>
                    <a href="">Verein</a>
                    <a href="">Herren</a>
                    <a href="">Frauen</a>
                    <a href="">Junioren</a>
                    <a href="">Sponsoring</a>
                </div>
                <div class="license">
                    © Copyright FV Löchgau e.V. website of RB Leipzig
                </div>
            </div>
           
        </div>
    </div>
</template>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    data () {
        return {
            activeSlide: 0,
            swiper: null,
        }
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

    methods: {
        onSlideChange() {
            if (this.swiper) {
                this.activeSlide = this.swiper.activeIndex;
            }
        },
        onSwiper(swiper) {
            this.swiper = swiper;
        },
    }
}
</script>
<style scoped>
    @import url(../assets/styles/footer.css);
</style>