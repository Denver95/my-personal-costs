<template>
	<!-- Создали верстку для заполнения данных -->
	<v-dialog v-model="dialog" width="350px">
		<template v-slot:activator="{ on }">
			<v-btn color="#983" dark v-on="on">add new
				costs</v-btn>
		</template>
		<v-card class="text-left pa-8 ">
			<v-text-field v-model="date" label="Дата"></v-text-field>
			<v-select v-model="category" label="Категория" :items="options"></v-select>
			<v-text-field v-model.nubmer="value" label="Цена"></v-text-field>
			<v-btn color="#983" dark v-on:click="onSaveClick">add</v-btn>
			<v-btn color="#983" dark v-on:click="(dialog = false)">Close</v-btn>

		</v-card>
	</v-dialog>

</template>

<script>

import { mapMutations, mapGetters } from 'vuex';

export default {
	name: 'FormAddCosts',
	// Добавили обьект  в который будет сохранятся данные от пользователя
	data() {
		return {
			date: '',
			category: '',
			value: '',
			isShown: false,
			form: 'formCosts',
			dialog: false,
		}
	},
	computed: {
		// Функция для отображеияе корректной даты
		getCurrentDate() {
			const today = new Date();
			const d = today.getDate();
			const m = today.getMonth() + 1;
			const y = today.getFullYear();

			return `${d}.${m}.${y}`;
		},

		getCurrentValue() {
			if (this.value == '') {
				return Number(this.value = 0);
			}
		},

		...mapGetters({
			options: 'getCategoryList',
		}),

		// options() {
		// 	return this.$store.getters.getCategoryList
		// },
	},
	methods: {

		...mapMutations({
			addData: 'addDataCosts',
		}),

		onSaveClick() {
			// Создаем переменную которая будет хранить передаваемые данные.
			// В параметр $emit передаем название события  (addNewPayment)  и данные которые ввели.
			const data = {
				value: Number(this.value) || this.getCurrentValue,
				category: this.category,
				date: this.date || this.getCurrentDate,
			}

			this.addData(data)

			this.value = '';
			this.category = '';
			this.date = '';

		},

		onShow(id) {
			if (id == this.form) {
				this.isShown = true
			}
		},

		onHide(id) {
			if (id == this.form) {
				this.isShown = false
			}
		}
	},
	// ВЕРНУТСЯ
	mounted() {
		//Подписываемся на приходящие нам методы. И описываем их в методах
		this.$modal.EventBus.$on('modalShow', this.onShow)
		this.$modal.EventBus.$on('modalHide', this.onHide)

		if (!this.category?.length) {
			this.$store.dispatch('loadCategory')
		}

	},

}

</script>

<style>

</style>