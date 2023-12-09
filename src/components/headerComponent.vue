<template>
    <div class="header">
        <div class="header-container">
            <a href="/" class="logo">
                <img src="../assets/logo.png" alt="">
            </a>
            <div class="header-menu">
                <a href="/aktuelles" class="header-menu_item">
                    Aktuelles
                </a>
                <a href="/verein" class="header-menu_item">
                    Verein
                </a>
                <a href="/herren" class="header-menu_item">
                    Herren
                </a>
                <a href="/frauen" class="header-menu_item">
                    Frauen
                </a>
                <a href="/junioren" class="header-menu_item">
                    Junioren
                </a>
                <a href="/sponsoring" class="header-menu_item">
                    Sponsoring
                    <!--  -->
                </a>
            </div>
            <div class="header-botside_container">
                <div class="botside-item">
                    <span>Search</span>
                    <svg clip-rule="evenodd" width="22" height="24" fill-rule="evenodd" stroke-linejoin="round"
                        stroke-miterlimit="2" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
                            fill-rule="nonzero" />
                    </svg>
                </div>
                <div class="botside-item" @click="openPopup" v-if="this.$store.state.isAuthenticated == false">
                    <span>Login</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                    </svg>
                </div>
                <div class="botside-item" @click="$router.push('/profile')"
                    v-if="this.$store.state.isAuthenticated && this.$store.state.userRole == 'User'">
                    <span>Profile</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                    </svg>
                </div>
                <div class="botside-item" @click="$router.push('/dashboard')" v-if="shouldShowBotSideItem">

                    <span>Dashboard</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                    </svg>
                </div>
                <div class="botside-item" @click="logout" v-if="this.$store.state.isAuthenticated">
                    <span>Logout</span>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z" />
                    </svg>
                </div>


            </div>



        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';
export default {
    props: {
        eventHandler: Function
    },
    methods: {
        openPopup() {
            this.$parent.showPopup = true;

        },


        logout() {
            Cookies.remove('token');
            window.location.href = '/'
        }
    },

    computed: {
        shouldShowBotSideItem() {
            const isAuthenticated = this.$store.state.isAuthenticated;
            const userRole = this.$store.state.userRole;
            return isAuthenticated && (userRole === 'coach' || userRole === 'admin');
        }
    }

}
</script>
<style>
.header {
    border-bottom: 1px solid #cccccc;
    font-family: 'dCondensed', sans-serif;
    margin-bottom: 166px;

}

.header-container {
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 85px;
    padding-bottom: 30px;

}

.logo {
    position: absolute;
    height: 150px;
    top: calc(50% - 14px);
}

.logo::before {
    content: " ";
    display: flex;
    height: 10px;
    width: 92%;
    background-color: #fff;
    top: 80px;
    left: 6px;
    position: absolute;
    z-index: 0;
}

.logo img {
    height: 100%;
    position: relative;
}

.header-menu {
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}

.header-menu a {
    font-size: 22px;
    text-decoration: none;
    color: #003333;
}

.header-botside_container {
    position: absolute;
    right: 0;
    bottom: -60px;
    display: flex;
    align-items: center;
    padding: 20px 30px;
    box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.27);
    -webkit-box-shadow: 2px 8px 9px 0.5px rgba(0, 0, 0, 0.17);
    -moz-box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.27);
    font-family: 'metropolis', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
}

.botside-item {
    display: flex;
    align-items: center;
    padding-right: 7.5px;
}

.botside-item:hover {
    cursor: pointer;
}

.botside-item:first-child {
    padding-right: 7.5px;
    border-left: 0;
}


.botside-item {
    padding-left: 7.5px;
    border-left: 1px solid #cccccc;
}

.botside-item span {
    margin-right: 8px;
    color: #003333
}

.botside-item svg {
    fill: #003333;
}
</style>