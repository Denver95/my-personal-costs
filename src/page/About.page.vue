<template>
	<div>
		<h2 class="formUser-h2">Проверка подлинности</h2>
		<v-btn color="#983" dark class="btn-form-user " v-on:click="$modal.show('formUserCheck')">Open</v-btn>
		<Transition name="fade">
			<FormUserCheck />
		</Transition>
	</div>
</template>

<script>



export default {
	name: 'About',
	components: {
		FormUserCheck: () => import(/*webpackChunkName: 'FormUserCheck' */'@/components/FormUserCheck.vue')
	},
}

</script>

<style>
.formUser-h2 {
	text-align: center;
	margin: 20px;
}

.btn-form-user {
	margin: 50px 0 0 200px;
}
</style>