<template>
	<!-- Создали верстку для заполнения данных -->
	<div class="form-container hidden ">
		<div class="block-form">
			<input placeholder="Наименование" v-model="category" class="input-form-add input-FA-category" />
			<input placeholder="Цена" v-model="value" class="input-form-add input-FA-value" />
			<input placeholder="Дата (01.01.2023)" v-model="date" class="input-form-add input-FA-date" />

		</div>
		<!-- При нажатии на кнопку будем осуществлять передачу данных родителю при помощи (onSaveClick) -->
		<button v-on:click="onSaveClick" class="btn-form-add">ADD</button>
	</div>

</template>

<script>




export default {
	name: 'FormAddCosts',
	// Добавили обьект  в который будет сохранятся данные от пользователя
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

			return `${d}.${m}.${y}`;
		}
	},
	methods: {

		// < input placeholder="Payment description" v- model="category" class="input-form-add input-FA-category" />
		// <input placeholder="Payment amount" v-model="value" class="input-form-add input-FA-value" />
		// <input placeholder="Payment date(01.01.2023)" v-model="date" class="input-form-add input-FA-date" />

		checkCorrectValue() {

			const inputCategory = document.querySelector('.input-FA-category');
			const inputValue = document.querySelector('.input-FA-value');
			const inputDate = document.querySelector('.input-FA-date');



			if (this.category != String(this.category) || this.category == '' || this.category == Number(this.category)) {
				inputCategory.classList.add('errorCategory');
				inputCategory.placeholder = "Ожидается строка";
			} else {
				inputCategory.classList.remove('errorCategory');
				return this.category;
			};

			// Провекра ввода цена на корректное значение
			if (this.value != Number(this.value) || this.value == '') {
				inputValue.classList.add('errorValue');
				inputValue.placeholder = "Введите число";
			} else {
				inputValue.classList.remove('errorValue');
				return this.value;
			};

			//  Провекра ввода Даты на пустую строку. Если она пустаня то генерируется дата.
			// Если мы тут подставляем дату, то можно попробыть убрать метод 		getCurrentDate() {

			this.onSaveClick(this.value, this.category);
		},


		// checkCorrectValue(value, category, date) {

		// 	const inputCategory = document.querySelector('.input-FA-category');
		// 	const inputValue = document.querySelector('.input-FA-value');
		// 	const inputDate = document.querySelector('.input-FA-date');

		// 	if (value != Number(value)) {
		// 		inputValue.classList.add('errorValue');
		// 	} else if (date != Number(date)) {
		// 		inputDate.classList.add('errorDate');
		// 	} else if (category != String(category)) {
		// 		inputCategory.classList.add('errorCategory');
		// 	} else
		// 		onSaveClick(value, category, date);
		// },

		// onSaveClick(value, category, date) {
		// 	// Создаем переменную которая будет хранить передаваемые данные.
		// 	// В параметр $emit передаем название события  (addNewPayment)  и данные которые ввели.
		// 	const data = {
		// 		value: value,
		// 		category: category,
		// 		date: date || this.getCurrentDate,
		// 	}

		// 	this.$emit('addNewPayment', data);
		// // },



		onSaveClick() {
			// Создаем переменную которая будет хранить передаваемые данные.
			// В параметр $emit передаем название события  (addNewPayment)  и данные которые ввели.
			const data = {
				value: this.value,
				category: this.category,
				date: this.date,
			}

			this.$emit('addNewPayment', data);

			this.value = '';
			this.category = '';
			this.date = '';

		}
		// 	const data = {
		// 		value: value,
		// 		category: category,
		// 		date: date,
		// }

		// 	this.$emit('addNewPayment', data);

		// 	this.value = '';
		// 	this.category = '';
		// 	this.date = '';
		// },
		// onSaveClick() {
		// 	// Создаем переменную которая будет хранить передаваемые данные.
		// 	// В параметр $emit передаем название события  (addNewPayment)  и данные которые ввели.
		// 	const data = {
		// 		value: this.value,
		// 		category: this.category,
		// 		date: this.date || this.getCurrentDate,
		// 	}

		// 	this.$emit('addNewPayment', data);

		// 	this.value = '';
		// 	this.category = '';
		// 	this.date = '';
		// },

	},


}





</script>

<style>
.hidden {
	display: none;
}

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