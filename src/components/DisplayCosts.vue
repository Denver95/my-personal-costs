<template>

	<div class="block-display-costs">
		<h3 class="SumCosts">Сумма общих расходов {{ getSumCosts }} р.</h3>
		<ul class="table-display-costs">
			<ul class="string-table-head">
				<li class="colum-id table-text table-margin"><span class="tabel-span">№</span></li>
				<li class="colum-date table-text table-margin"><span class="tabel-span">Дата</span></li>
				<li class="colum-category table-text table-margin"><span class="tabel-span">Наименование</span></li>
				<li class="colum-value table-text table-margin"><span class="tabel-span">Цена(p.)</span></li>
			</ul>
			<ul v-for="(item, index) of costsList" class="string-table-array" v-bind:key="index">
				<li class="colum-id table-text table-margin">{{ index + 1 }}</li>
				<li class="colum-date table-text table-margin">{{ item.date }}</li>
				<li class="colum-category table-text table-margin">{{ item.category }}</li>
				<li class="colum-value table-text table-margin">{{ item.value }} p.</li>
			</ul>
		</ul>
	</div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
	name: 'DisplayCosts',
	computed: {
		...mapGetters({
			getSumCosts: 'getCostsListValue',
			costsList: 'getCostsList'
		}),
	},
}



</script>

<style>
li {
	list-style-type: none;
}



.table-display-costs {
	width: 600px;
	background-color: rgb(210 188 139 / 51%);
	margin: 0 auto;
}

.string-table-head {
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.colum-id {
	width: 60px;
	height: 30px;
}

.table-text {
	font-size: 20px;
	line-height: 30px;
}



.colum-date {
	width: 140px;
	height: 30px;
}

.colum-category {
	width: 300px;
	height: 30px;

}

.colum-value {
	width: 100px;
	height: 30px;
}

.string-table-array {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
</style>