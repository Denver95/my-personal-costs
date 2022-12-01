<template>
	<!-- Контейнер для стилей или выравнивания -->
	<div class="style_container">
		<!-- Заголовок приложения -->
		<header class="header-top-costs">
			<div class="container">
				<h2 class="header-top-costs-h2">My personal costs</h2>
			</div>
		</header>
		<!-- Основная разметка приложения, включая отдельные компоненты -->
		<main class="main-container">
			<div class="container position">
				<!--Разметка для кнопки добавления расходов  -->
				<div class="btn-add-costs">
					<!-- Вызываем в modalPlugins метод show -->
					<button class="btn-new-costs" v-on:click="$modal.show('formCosts')">add new costs</button>
				</div>
				<!-- Блок для отображения формы ввода расходов  с анимацией(Смотреть стили)-->
				<Transition name="fade" class="form-add-costs">
					<!-- Принимаем значения  -->
					<FormAddCosts />
				</Transition>
				<!-- Блок отоборажения данных о затрах и граффик -->
				<div class="display-costs">
					<!-- Передаем данные из costsList в наш аргумент items -->
					<DisplayCosts :items="curentElements" :getSumCosts="getSumCosts" />
				</div>
				<div class="pagination-costs">
					<Pagination :cur="page" :n="pageQuantity" :length="costsList.length" @pagination="onChangePage" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import FormAddCosts from '../components/FormAddCosts.vue';
import DisplayCosts from '../components/DisplayCosts.vue';
import Pagination from '../components/Pagination.vue';

export default {
	name: 'Dashboard',
	components: {
		Pagination,
		FormAddCosts,
		DisplayCosts,
	},
	data() {
		return {
			page: 1,
			pageQuantity: 10,
		}
	},
	computed: {
		...mapGetters({
			costsList: 'getCostsList',
			getSumCosts: 'getCostsListValue',
		}),
		curentElements() {
			return this.costsList.slice(this.pageQuantity * (this.page - 1), this.pageQuantity * (this.page - 1) + this.pageQuantity);
		}
	},
	methods: {
		...mapActions([
			'fetchData'
		]),
		onChangePage(p) {
			this.page = p
		},
	},

	//Массив costsList принимает функцию с текстовыми
	created() {
		this.fetchData()
	},

	mounted() {
		// Динамически пути
		//      host:8080/dashboard/3/ при вводе номер страницы(3) у нас должно загружать эту страницу. Заходим в router и там добовляем 
		if (this.$route.params?.page) {
			this.page = Number(this.$route.params.page)
		}
	},
}

</script>

<style>
.header-top-costs {
	padding: 30px 0;
}

.container {
	width: 1140px;
	margin: 0 auto;
}

.btn-add-costs {
	margin: 20px 0;
}

.btn-new-costs {
	text-transform: uppercase;
	font-size: 16px;
	line-height: 24px;
	padding: 10px;
	border-radius: 15px;
	border: none;
	box-shadow: inset 0px 0px 16px 11px #a09898;
	cursor: pointer;

}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.hidden {
	display: none;
}

.btn-new-costs:hover {
	box-shadow: 0px 0px 20px rgba(49, 122, 142, 0.732);
	background-color: rgb(160 152 152 / 50%);
}

.position {
	position: relative;
}


.header-top-costs-h2 {
	display: inline-block;
	font-size: 30px;
	line-height: 45px;
}


.main-container {
	margin: 20px 0px;
}
</style>
