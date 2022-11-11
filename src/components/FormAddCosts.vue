<template>
	<!-- Создали верстку для заполнения данных -->
	<div class="form-container">
		<input placeholder="Цена" v-model="value" />
		<input placeholder="Категория" v-model="category" />
		<input placeholder="Дата" v-model="date" />
		<!-- При нажатии на кнопку будем осуществлять передачу данных родителю при помощи (onSaveClick) -->
		<button v-on:click="onSaveClick">Сохранить</button>
	</div>

</template>

<script>

export default {
	name: 'FormAddCosts',
	// Добавили массив в который будет сохранятся данные от пользователя
	data() {
		return {
			date: '',
			category: '',
			value: '',
		}
	},
	computed: {
		// Функция для отображеияе корректной даты
		getCurrentDate() {
			const today = new Date();
			const d = today.getDate();
			const m = today.getMonth() + 1;
			const y = today.getFullYear();
			return `${d}.${m}.${y}`
		}
	},
	methods: {
		onSaveClick() {
			// Создаем переменную которая будет хранить передаваемые данные.
			// В параметр $emit передаем название события  (addNewPayment)  и данные которые ввели.
			const data = {
				value: +this.value,
				category: this.category,
				date: this.date || this.getCurrentDate,
			}

			this.$emit('addNewPayment', data);
		},
	},


}



</script>

<style>

</style>