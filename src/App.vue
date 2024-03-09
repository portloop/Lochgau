<template>

  <router-view></router-view>
</template>
<script>
import Cookies from 'js-cookie';
import axios from 'axios';
import { useStore } from 'vuex';

export default {
  created() {
    this.checkSession();
  },
  methods: {
    async checkSession() {
      try {
        const token = Cookies.get('token'); // Получаем токен из кук (если необходимо)

        const checkTokenResponse = await axios.post('http://149.100.159.188/checkToken', { token });
        const user = checkTokenResponse.data.user;
        if (user) {
        const userDetailsResponse = await axios.get(`http://149.100.159.188/userDetails/${user.userId}`);

        // Сохранение данных пользователя в состоянии Vuex
        this.$store.dispatch('updateUserData', userDetailsResponse.data);
        this.$store.dispatch('updateUserAuthState', true);
        this.$store.dispatch('updateUserRole', userDetailsResponse.data.role);

      } else {
          this.$store.dispatch('updateUserAuthState', false);
          this.$store.dispatch('updateUserRole', ''); // Очистите роль, если пользователь не аутентифицирован
        }
      } catch (error) {
      }

      // console.log(this.$store.state.userRole); // Проверить значение userRole

    },

  },


  setup() {
    const store = useStore();

    const someAction = () => {
      store.dispatch('actionName');
    };

    return {
    };
  }
}

</script>
<style>
@font-face {
  font-family: 'dCondensed';
  src: url('./assets/fonts/DINCondensed-Regular.ttf');
}

@font-face {
  font-family: 'dintLight';
  src: url('./assets/fonts/DINTLight.ttf');
}

@font-face {
  font-family: 'goboldB';
  src: url('./assets/fonts/Gobold_Bold.ttf');
}

@font-face {
  font-family: 'goboldI';
  src: url('./assets/fonts/Gobold_Bold_Italic.ttf');
}

@font-face {
  font-family: 'metropolis';
  src: url('./assets/fonts/metropolis.semi-bold.otf');
}
@font-face {
  font-family: 'Pr';
  src: url('./assets/fonts/Poppins-Regular.ttf');
}

@font-face {
  font-family: 'goboldThin';
  src: url('./assets/fonts/Gobold_Light.ttf');
}


</style>
