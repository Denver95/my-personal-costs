<template>

	<div class="btn-add-costs">
		<button class="btn-new-costs" v-on:click="switchClass">add new costs</button>
	</div>

</template>

<script>

export default {
	name: 'ButtonAddCosts',
	methods: {
		switchClass() {
			document.querySelector('.form-container').classList.toggle('hidden');
		}
	},



}

</script>

<style>
.btn-add-costs {
	margin: 20px 0;
}

.btn-new-costs {
	text-transform: uppercase;
	font-size: 16px;
	line-height: 24px;
	padding: 10px;
	border-radius: 15px;
	border: none;
	box-shadow: inset 0px 0px 16px 11px #a09898;
	cursor: pointer;

}

.btn-new-costs:hover {
	box-shadow: 0px 0px 20px rgba(49, 122, 142, 0.732);
	background-color: rgb(160 152 152 / 50%);
}
</style>
