<template>

	<div>
		<ul>
			<li v-for="item of items"> {{ item }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'DisplayCosts',
	//Получение данных из родителя. Получение данных через свойсвтво (Называем наше свойство 'items')
	props: {
		//Мы сделали строгий вид, чтоб в случии передачи нам НЕ массива то сразу выдаст ошибку
		items: {
			//Строгий вид с указанием значения (Array) массив
			type: Array,
			default: [],
		}
	},



}



</script>

<style>

</style>