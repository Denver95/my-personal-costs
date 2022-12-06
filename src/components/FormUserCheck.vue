<template>
	<div class="formUserCheck" v-if="isShown">
		<div class="blockForm">
			<input type="text" placeholder="UserName" class="inpt-check-form" v-model="userName" />
			<div class="blockCheck">
				<v-btn color="#983" dark class="btn-check-form mr-2" v-on:click="checkUserName">Verify UserName</v-btn>
				<v-btn color="#983" dark class="btn-check-form" v-on:click="$modal.hide('formUserCheck')">Close</v-btn>
			</div>
		</div>
		<div class="blockCheckName">
			<h2 v-if="ShownTrue">Доступ Разрешен</h2>
			<h2 v-if="ShownFalse">Доступ Запрещен</h2>
		</div>
	</div>

</template>

<script>

export default {
	name: 'FormUserCheck',
	data() {
		return {
			isShown: false,
			form: 'formUserCheck',
			userName: '',
			ShownTrue: false,
			ShownFalse: false,
		}
	},

	computed: {
	},

	methods: {
		onShow(id) {
			if (id == this.form) {
				this.isShown = true
			}
		},

		onHide(id) {
			if (id == this.form) {
				this.isShown = false
			}
		},

		checkUserName() {
			this.userName = this.userName
			if (this.userName == 'userName') {
				this.ShownTrue = true;
				this.ShownFalse = false;
			} else if (this.userName != 'userName') {
				this.ShownFalse = true;
				this.ShownTrue = false;
			};

			this.userName = ''

		}

	},
	mounted() {
		//Подписываемся на приходящие нам методы. И описываем их в методах
		this.$modal.EventBus.$on('modalShow', this.onShow)
		this.$modal.EventBus.$on('modalHide', this.onHide)
	}
}

</script>

<style>
.formUserCheck {
	margin-left: 200px;
}

.inpt-check-form {
	margin: 20px;
	font-size: 20px;
	padding: 5px;
	border-radius: 5px;
	background-color: rgb(153 136 51 / 20%);
	outline: none;
}
</style>

