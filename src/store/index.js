import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //Обьект с данными
  state: {

    costsList: [],

    categoryList: [],
  },
  // Получение данных 
  getters: {

    getCostsListValue: state => {
      return state.costsList.reduce((res, cur) => res + cur.value, 0)
    },

    getCostsList: state => state.costsList,

    getCategoryList: state => state.categoryList,

  },
  // Все изменениявнутри хранилища(state) делается через мутацию (синхранный вызов)
  mutations: {

    setCostsListData(state, payload) {
      state.costsList = payload
    },

    addDataCosts(state, data) {
      state.costsList.unshift(data)
    },

    //Заполняем массив
    setCategoryData(state, payload) {
      // if (!Array.isArray(payload)) {
      //   payload = [payload]
      // }
      state.categoryList.push(...payload)
    },
  },
  //асинхранный вызво
  actions: {

    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              date: '06.11.2022',
              category: 'Продукты',
              value: 50,
            },
            {
              date: '05.11.2022',
              category: 'Заправка',
              value: 100,
            },
            {
              date: '04.11.2022',
              category: 'Продукты + обед',
              value: 70,
            },
            {
              date: '03.11.2022',
              category: 'Обед',
              value: 5,
            },
            {
              date: '02.11.2022',
              category: 'Обед',
              value: 6,
            },
            {
              date: '01.11.2022',
              category: 'Обед',
              value: 5,
            }, {
              date: '06.11.2022',
              category: 'Продукты',
              value: 50,
            },
            {
              date: '05.11.2022',
              category: 'Заправка',
              value: 100,
            },
            {
              date: '04.11.2022',
              category: 'Продукты + обед',
              value: 70,
            },
            {
              date: '03.11.2022',
              category: 'Обед',
              value: 5,
            },
            {
              date: '02.11.2022',
              category: 'Обед',
              value: 6,
            },
            {
              date: '01.11.2022',
              category: 'Обед',
              value: 5,
            }, {
              date: '06.11.2022',
              category: 'Продукты',
              value: 50,
            },
            {
              date: '05.11.2022',
              category: 'Заправка',
              value: 100,
            },
            {
              date: '04.11.2022',
              category: 'Продукты + обед',
              value: 70,
            },
            {
              date: '03.11.2022',
              category: 'Обед',
              value: 5,
            },
            {
              date: '02.11.2022',
              category: 'Обед',
              value: 6,
            },
            {
              date: '01.11.2022',
              category: 'Обед',
              value: 5,
            }, {
              date: '06.11.2022',
              category: 'Продукты',
              value: 50,
            },
            {
              date: '05.11.2022',
              category: 'Заправка',
              value: 100,
            },
            {
              date: '04.11.2022',
              category: 'Продукты + обед',
              value: 70,
            },
            {
              date: '03.11.2022',
              category: 'Обед',
              value: 5,
            },
            {
              date: '02.11.2022',
              category: 'Обед',
              value: 6,
            },
            {
              date: '01.11.2022',
              category: 'Обед',
              value: 5,
            }, {
              date: '06.11.2022',
              category: 'Продукты',
              value: 50,
            },
            {
              date: '05.11.2022',
              category: 'Заправка',
              value: 100,
            },
            {
              date: '04.11.2022',
              category: 'Продукты + обед',
              value: 70,
            },
            {
              date: '03.11.2022',
              category: 'Обед',
              value: 5,
            },
            {
              date: '02.11.2022',
              category: 'Обед',
              value: 6,
            },
            {
              date: '01.11.2022',
              category: 'Обед',
              value: 5,
            }, {
              date: '06.11.2022',
              category: 'Продукты',
              value: 50,
            },
            {
              date: '05.11.2022',
              category: 'Заправка',
              value: 100,
            },
            {
              date: '04.11.2022',
              category: 'Продукты + обед',
              value: 70,
            },
            {
              date: '03.11.2022',
              category: 'Обед',
              value: 5,
            },
            {
              date: '02.11.2022',
              category: 'Обед',
              value: 6,
            },
            {
              date: '01.11.2022',
              category: 'Обед',
              value: 5,
            }, {
              date: '06.11.2022',
              category: 'Продукты',
              value: 50,
            },
            {
              date: '05.11.2022',
              category: 'Заправка',
              value: 100,
            },
            {
              date: '04.11.2022',
              category: 'Продукты + обед',
              value: 70,
            },
            {
              date: '03.11.2022',
              category: 'Обед',
              value: 5,
            },
            {
              date: '02.11.2022',
              category: 'Обед',
              value: 6,
            },
            {
              date: '01.11.2022',
              category: 'Обед',
              value: 5,
            },
          ])
        }, 2000)
      }).then(res => {
        commit('setCostsListData', res)
      })
    },

    loadCategory({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Еда', 'Транспорт', 'Спорт', 'Хобби', 'Развлечение', 'Одежда', 'Обувь',])
        }, 2000);
      }).then(res => {
        commit('setCategoryData', res)
      })
    },
  },
  modules: {
  }
})
