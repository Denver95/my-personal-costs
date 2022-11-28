<template>
  <div id="app">
    <header>
      <div>
        <!-- Меняем все на router-link -->
        <router-link to="/payment" class="a-page">Dashboard</router-link>
        <router-link to="/about" class="a-page">About</router-link>
        <router-link to="/cart" class="a-page">Cart</router-link>
        <!-- <router-link to="/error" class="a-page">Error</router-link> -->
        <!-- <div @click="goTopage">click</div> -->
      </div>
      <!-- Тут мы указываем куда будем отображать содержимое страниц -->
      <router-view />
    </header>

  </div>
</template>

<script>

export default {
  name: "App",

  methods: {
    goTopage() {
      // Делаем проверку по Name
      if (this.$route.name === 'About') return
      this.$router.push({
        name: 'About'
        //Если мы находимся на этой странице и нажимаем на КЛИК (вызов метода) то будут ошибки. Нужно сделать проверку
      })
    }
  },
}

</script>

<style lang="scss">
html {
  height: 100%;
  background-color: rgb(120 71 24 / 48%);
  text-align: center;
}

* {
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.a-page {
  margin: 5px 10px;
  text-decoration: none;
  color: black;
  background-color: rgb(82 82 255 / 31%);
  padding: 5px;
}
</style>
