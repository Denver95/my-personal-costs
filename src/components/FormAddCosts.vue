<template>
	<!-- Создали верстку для заполнения данных -->
	<div class="form-container" v-if="isShown">
		<div class="block-form">
			<!-- <input placeholder="Наименование" v-model="category" class="input-form-add input-FA-category" /> -->
			<select v-model="category" class="input-form-add input-FA-category">
				<option v-for="option, ind in options" v-bind:key="ind">{{ option }}</option>
			</select>
			<input placeholder="Цена" v-model="value" class="input-form-add input-FA-value" />
			<input placeholder="Дата (01.01.2023)" v-model="date" class="input-form-add input-FA-date" />
		</div>
		<!-- При нажатии на кнопку будем осуществлять передачу данных родителю при помощи (onSaveClick) -->
		<button v-on:click="onSaveClick" class="btn-form-add">add</button>
		<button v-on:click="$modal.hide('formCosts')" class="btn-form-add">Close</button>
	</div>

</template>

<script>

import modalPlugins from '@/plugins/modalPlugins';
import { mapMutations, mapActions, mapGetters } from 'vuex';

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
.block-form {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom: 10px;
}



.input-form-add {
	width: 300px;
	text-align: center;
	margin: 5px;
	border: none;
	box-sizing: border-box;
	border-radius: 20px;
	height: 30px;
	box-shadow: inset 0px 0px 13px 8px #a09898;
	padding: 0 10px;
	display: inline-block;
	cursor: pointer;
	outline: none;
}

.input-form-add:hover {
	box-shadow: 0px 0px 20px rgba(49, 122, 142, 0.732);
	background-color: rgb(160 152 152 / 50%);
}

.btn-form-add {
	outline: none;
	text-align: center;
	margin: 5px;
	border: none;
	box-sizing: border-box;
	border-radius: 10px;
	height: 30px;
	box-shadow: inset 0px 0px 13px 8px #a09898;
	padding: 0 10px;
	width: 100px;
	cursor: pointer;
	text-transform: uppercase;
}

.btn-form-add:hover {
	box-shadow: 0px 0px 20px rgba(49, 122, 142, 0.732);
	background-color: rgb(160 152 152 / 50%);
}

.errorCategory,
.errorValue,
.errorDate {
	box-shadow: 0px 0px 20px rgba(255, 0, 0, 0.732);
	background-color: rgba(255, 0, 0, 0.5);
}
</style>