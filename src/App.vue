<template>
  <v-app id="app">
    <v-app-bar app text class="d-flex justify-center">
      <!-- Меняем все на router-link -->
      <v-btn plain :ripple="false" to="/payment">Dashboard</v-btn>
      <v-btn plain :ripple="false" to="/about">About</v-btn>
      <v-btn plain :ripple="false" to="/cart">Cart</v-btn>
      <!-- <router-link to="/error" class="a-page">Error</router-link> -->
      <!-- <div @click="goTopage">click</div> -->
    </v-app-bar>
    <!-- Тут мы указываем куда будем отображать содержимое страниц -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  methods: {
    goTopage() {
      // Делаем проверку по Name
      if (this.$route.name === 'About')
        return
      this.$router.push({
        name: 'About'
        //Если мы находимся на этой странице и нажимаем на КЛИК (вызов метода) то будут ошибки. Нужно сделать проверку
      })
    }
  },
}

</script>

<style lang="scss">

</style>
