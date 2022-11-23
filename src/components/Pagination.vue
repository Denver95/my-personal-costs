<template>

	<div class="pagination">
		<div @click="onClick(cur - 1)" class="page-back"> - </div>
		<!-- Выводим наши страницы -->
		<div v-for="page, index in maxPage" v-bind:key="index" @click="onClick(page)"
			:class="{ active: page == cur, stylePage: page }">
			{{
					page
			}}
		</div>
		<div @click="onClick(cur + 1)" class="page-next"> + </div>
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
	display: flex;
	background-color: rgb(34 126 20 / 47%);
	cursor: pointer;
	font-size: 20px;
	line-height: 30px;
	justify-content: center;
	margin: 20px auto;
	max-width: 400px;
}

.page-back {
	padding: 0 10px;
}

.page-next {
	padding: 0 10px;
}

.stylePage {
	padding: 0 5px;
}

.active {
	padding: 0 10px;
	background-color: burlywood;
}
</style>