<template>
  <div id="app">
    <!-- Контейнер для стилей или выравнивания -->
    <div class="style_container">
      <!-- Заголовок приложения -->
      <header class="header-top-costs">
        <div class="contsiner">
          <h2 class="header-top-costs-h2">My personal costs</h2>
        </div>
      </header>
      <!-- Основная разметка приложения, включая отдельные компоненты -->
      <main class="main-container">
        <div class="container">
          <!--Разметка для кнопки добавления расходов  -->
          <header class="button-add-costs">
            <ButtonAddCosts />
          </header>
          <!-- Блок для отображения формы ввода расходов -->
          <div class="form-add-costs">
            <!-- Принимаем значения  -->
            <FormAddCosts v-on:addNewPayment="addNewPayment" />
          </div>
          <!-- Блок отоборажения данных о затрах и граффик -->
          <div class="display-costs">
            <!-- Передаем данные из costsList в наш аргумент items -->
            <DisplayCosts :items="costsList" />
          </div>
        </div>
      </main>


    </div>




  </div>
</template>

<script>
import ButtonAddCosts from './components/ButtonAddCosts.vue';
import FormAddCosts from './components/FormAddCosts.vue';
import DisplayCosts from './components/DisplayCosts.vue';


export default {
  name: "App",
  components: {
    ButtonAddCosts,
    FormAddCosts,
    DisplayCosts,
  },
  data() {
    return {
      // Массив с расходами
      costsList: [],

    }
  },
  methods: {
    //функция fetchData отдает определенный набор текстовых данных массива
    fetchData() {
      return [
        {
          date: '01.11.2022',
          category: 'Продукты',
          value: 50,
        },
        {
          date: '02.11.2022',
          category: 'Заправка',
          value: 100,
        },
        {
          date: '03.11.2022',
          category: 'Продукты + обед',
          value: 70,
        },
        {
          date: '04.11.2022',
          category: 'Обед',
          value: 5,
        },
        {
          date: '05.11.2022',
          category: 'Обед',
          value: 6,
        },
        {
          date: '06.11.2022',
          category: 'Обед',
          value: 5,
        },
      ]
    },
    addNewPayment(data) {
      this.costsList = [... this.costsList, data];
    },
  },

  //Массив costsList принимает функцию с текстовыми
  created() {
    this.costsList = this.fetchData();
  },

}

</script>

<style lang="scss">

</style>
