<template>
	<!-- Контейнер для стилей или выравнивания -->
	<v-container class="style_container">
		<!-- Заголовок приложения -->
		<div class="text-h5 text-md-h3 my-8 center-text">
			My personal costs
		</div>
		<!-- Основная разметка приложения, включая отдельные компоненты -->
		<v-row class=" main-container">
			<v-col class="container position">
				<!--Разметка для кнопки добавления расходов  -->
				<!-- Блок для отображения формы ввода расходов  с анимацией(Смотреть стили)-->
				<div>
					<!-- Принимаем значения  -->
					<FormAddCosts />
				</div>

				<div class="context-block">
					<ContextMenu />
				</div>
				<!-- Блок отоборажения данных о затрах и граффик -->
				<div class="display-costs">
					<!-- Передаем данные из costsList в наш аргумент items -->
					<DisplayCosts :items="curentElements" :getSumCosts="getSumCosts" />

				</div>

				<div class="pagination-costs">
					<Pagination :cur="page" :n="pageQuantity" :length="costsList.length" @pagination="onChangePage" />
				</div>
			</v-col>
			<v-col>
				<div>Good Nice</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import FormAddCosts from '../components/FormAddCosts.vue';
import DisplayCosts from '../components/DisplayCosts.vue';
import Pagination from '../components/Pagination.vue';
import ContextMenu from '@/components/ContextMenu.vue';


export default {
	name: 'Dashboard',
	components: {
		Pagination,
		FormAddCosts,
		DisplayCosts,
		ContextMenu,
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
.center-text {
	text-align: center;
}
</style>
