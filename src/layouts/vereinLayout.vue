<template>
    <div>
        <headerComponent />
        <vereinLine />
        <div class=" content-box">
            <div class="leftside" v-if="data.htmlContent?.leftside">
                <!-- <section v-for="item in data.htmlContent?.leftside" v-html="item"></section> -->
                <div v-for="item in data.htmlContent.leftside" :class="item.class" v-html="item.text"></div>
            </div>

            <div class="rightside" v-if="data.htmlContent && data.htmlContent.rightside">

                <lastNews v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('lastNews')" />
                <chronikPopup v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('chronikPopup')" />
                <compWeitere v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('compWeitere')" />
                <ehrenamtComponent v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('ehrenamtComponent')" />
                <graphicComponent v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('graphicComponent')" />
                <kontaktComponent v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('kontaktComponent')" />
                <mitgliederComponent v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('mitgliederComponent')" />
                <oktoberFest v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('oktoberFest')" />
                <ortsteilturnierPopup v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('ortsteilturnierPopup')" />
                <mitgliederComponent v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('mitgliederComponent')" />
                <pizzaComponent v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('pizzaComponent')" />
                <presseComp v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('presseComp')" />
                <spendenkontoLayout v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('spendenkontoLayout')" />
                <sponsorighComp v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('sponsorighComp')" />
                <stammtischComponent v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('stammtischComponent')" />
                <tournierVatertagsturnier v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('tournierVatertagsturnier')" />
                <weindorfPopup v-if="data.htmlContent.rightside && data.htmlContent.rightside.includes('weindorfPopup')" />
            
            </div>
            
        </div>
        <footerComponent />
    </div>
</template>

<script>
import axios from 'axios';
import headerComponent from '../components/headerComponent.vue';
import footerComponent from '../components/footerComponent.vue';
import vereinLine from '../components/vereinLine.vue';

import lastNews from '../components/vareinPage/lastNews.vue';
import chronikPopup from '../components/vareinPage/chronikPopup.vue';
import compHinweis from '../components/vareinPage/compHinweis.vue';
import compWeitere from '../components/vareinPage/compWeitere.vue';
import ehrenamtComponent from '../components/vareinPage/ehrenamtComponent.vue';
import graphicComponent from '../components/vareinPage/graphicComponent.vue';
import kontaktComponent from '../components/vareinPage/kontaktComponent.vue';
import mitgliederComponent from '../components/vareinPage/mitgliederComponent.vue';
import oktoberFest from '../components/vareinPage/oktoberFest.vue';
import ortsteilturnierPopup from '../components/vareinPage/ortsteilturnierPopup.vue';
import pizzaComponent from '../components/vareinPage/pizzaComponent.vue';
import presseComp from '../components/vareinPage/presseComp.vue';
import spendenkontoLayout from '../components/vareinPage/spendenkontoLayout.vue';
import sponsorighComp from '../components/vareinPage/sponsorighComp.vue';
import stammtischComponent from '../components/vareinPage/stammtischComponent.vue';
import tournierVatertagsturnier from '../components/vareinPage/tournierVatertagsturnier.vue';
import weindorfPopup from '../components/vareinPage/weindorfPopup.vue';

export default {
    components: {
        headerComponent,
        footerComponent,
        vereinLine,

        lastNews,
        chronikPopup,
        compHinweis,
        compWeitere,
        ehrenamtComponent,
        graphicComponent,
        kontaktComponent,
        oktoberFest,
        ortsteilturnierPopup,
        mitgliederComponent,
        pizzaComponent,
        presseComp,
        spendenkontoLayout,
        sponsorighComp,
        stammtischComponent,
        tournierVatertagsturnier,
        weindorfPopup
    },
    data () {
        return {
            data: {},
        };
    },
    methods: {
        async fetchData(name) {
            try {
                const response = await axios.get(`http://srv489299.hstgr.cloud/api/pages/url/${name}`);
                this.data = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async fetchFirstPage() {
            try {
                const response = await axios.get('http://srv489299.hstgr.cloud/api/pages/all');
                const firstPage = response.data[0];
                console.log('Pages', response.data)
                if (firstPage) {
                    this.fetchData(firstPage.url);
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    watch: {
        $route(to, from) {
            // Проверяем, есть ли параметр name в URL
            if (to.params.name) {
                this.fetchData(to.params.name);
            } else {
                // Если параметр name отсутствует, делаем запрос для самой первой страницы
                this.fetchFirstPage();
            }
        },
    },
    mounted() {
        // Вызываем fetchData или fetchFirstPage при инициализации компонента
        if (this.$route.params.name) {
            this.fetchData(this.$route.params.name);
        } else {
            this.fetchFirstPage();
        }
    },
};
</script>

<style scoped>
@import url(../assets/styles/vereinUniversal.css);
</style>