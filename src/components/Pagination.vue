<template>

	<div class="pagination">
		<v-btn color="#983" dark @click="onClick(cur - 1)" class="page-back"> - </v-btn>
		<!-- Выводим наши страницы -->
		<v-btn color="#983" dark v-for="page, index in maxPage" v-bind:key="index" @click="onClick(page)"
			:class="{ active: page == cur, stylePage: page }">
			{{
					page
			}}
		</v-btn>
		<v-btn color="#983" dark @click="onClick(cur + 1)" class="page-next"> + </v-btn>
	</div>

</template>

<script>


export default {
	name: 'Pagination',
	props: {
		//Колличество элементов выводимых на страницу
		n: Number,
		//Колличество всех элементов поделить на  n  и получить колличство страниц
		length: Number,
		// Текуща страница
		cur: Number,
	},
	computed: {
		//Возвращает колличество страниц 
		maxPage() {
			return Math.ceil(this.length / this.n)
		}
	},
	methods: {
		// При клике будет отправлять данные о текущей странице +- 
		onClick(p) {
			//проверка 
			if (p < 1 || p > this.maxPage) {
				return;
			}
			this.$emit('pagination', p)
		},

	},
}

</script>

<style>
.pagination {
	text-align: center;
	margin: 40px 0px;
}
</style>