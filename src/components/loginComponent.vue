<template>
    <div class="popup">
        <div class="popup-container">
            <div class="close" @click="closePopup">
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                </svg>
            </div>
            <div class="title-img">
                <img src="../assets/logoComp.png" alt="">
            </div>
            <form>
                <div class="field" :class="{ 'error': emailError }">
                    <input type="text" v-model="email" placeholder="Email">
                    <span v-if="emailError && email.length === 0">Please enter a correct email</span>
                </div>

                <div class="field" :class="{ 'error': passwordError }">
                    <input type="password" v-model="password" placeholder="Password">
                    <span v-if="passwordError && password.length === 0">Please enter a correct password</span>
                </div>
                <div class="additional-links">
                    <span class="reset">Forgot password?</span>
                    <span class="reset" @click="openRegisterPopup">Sign Up</span>
                </div>

            </form>
            <redButton class="button" @click="login" :disabled="emailError || passwordError" path="" text="Sign In" />

        </div>
    </div>
</template>
<script>
import redButton from './redButton.vue';
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    components: {
        redButton
    },

    data() {
        return {
            email: '',
            password: '',
            emailError: false,
            passwordError: false
        }
    },
    watch: {
        email: 'validateEmail',
        password: 'validatePassword'
    },
    methods: {
        closePopup() {
            console.log('Method is called')
            this.$parent.showPopup = false;
        },


        login() {
            if (this.isEmailValid() && this.isPasswordValid() && this.email.length > 0 && this.password.length > 0) {
                axios.post('https://yourufx.space/auth/login', {
                    username: this.email,
                    password: this.password
                })
                    .then(response => {
                        console.log('Login successful!', response.data);

                        const token = response.data.token;
                        this.setCookie('connect.sid', token, 30);
                        window.location.href = '/'

                    })
                    .catch(error => {
                        console.error('Login failed. Please check your inputs.', error);
                    });
            } else {
                this.emailError = !this.isEmailValid() || this.email.length === 0;
                this.passwordError = !this.isPasswordValid() || this.password.length === 0;
            }
        },

        setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = "token=" + value + ";" + expires + ";path=/";
        },
        isEmailValid() {
            // Простая валидация почты (может быть улучшена в зависимости от требований)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(this.email);
        },
        isPasswordValid() {
            // Валидация пароля (минимум 6 символов)
            return this.password.length >= 6;
        },
        validateEmail() {
            this.emailError = !this.isEmailValid();
        },
        validatePassword() {
            this.passwordError = !this.isPasswordValid();
        },
        openRegisterPopup() {
            this.$parent.showPopup = false;
            this.$parent.showRegisterPopup = true
        }
    },




}
</script>
<style scoped>
@import url(../assets/styles/components/loginComponent.css);
</style>