<template>
	<v-container>
		<h3 class="add-costs-text">Сумма общих расходов {{ getSumCosts }} р.</h3>
		<v-row>
			<v-col :cols="1">№</v-col>
			<v-col :cols="3">Дата</v-col>
			<v-col :cols="5">Наименование</v-col>
			<v-col :cols="3">Цена(p.)</v-col>
		</v-row>
		<v-row v-for="(item, index) of items" v-bind:key="index">
			<v-col :cols="1">{{ index + 1 }}</v-col>
			<v-col :cols="3">{{ item.date }}</v-col>
			<v-col :cols="5">{{ item.category }}</v-col>
			<v-col :cols="2" align-center>{{ item.value }} p.</v-col>
			<v-col :cols="1" v-on:click="onClickItem($event, item, index)" class="cursor ">
				...
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

export default {
	name: 'DisplayCosts',
	props: {
		// Мы сделали строгий вид, чтоб в случии передачи нам НЕ массива то сразу выдаст ошибку
		items: {
			//Строгий вид с указанием значения (Array) массив
			type: Array,
			default: [],
		},
		getSumCosts: Number,

	},
	methods: {
		// Передаем данные события  ContextMEnu
		onClickItem($event, item, index) {
			const items = [
				{
					text: 'Редактировать',
					action: () => {
						console.log(index, 'Редактировать')
					}
				},
				{
					text: 'Удалить',
					action: () => {
						this.items.includes(index).splice(1, index)
					}
				}
			]
			this.$context.show({ $event, items })
		}
	},
}
</script>

<style>
.add-costs-text {
	text-align: center;
	margin: 10px 0px;
	background-color: red;
}

.text-center {
	text-align: center;
}

.cursor {
	cursor: pointer;
}
</style>