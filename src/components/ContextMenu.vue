<template>
	<div class="context" v-if="isOnShow" :style="styles">
		<div class="cursorPointer " v-for="item, indx in items" :key="indx" v-on:click="onClick(item)"> {{ item.text }}
		</div>
		<div v-on:click="onClose" class="cursorPointer styleClose">x</div>

	</div>
</template>

<script>
export default {
	name: 'ContextMenu',
	data() {
		return {
			isOnShow: false,
			items: [],
			xPos: 0,
			yPos: 0,
		}
	},
	//При клике по айтаму срабатывает событие
	methods: {
		onClick(item) {
			item.action()

		},
		onClose() {
			this.$context.close()
		},

		onShow({ items, caller }) {

			this.items = items,
				this.isOnShow = true
			//Вызываем функцию которая будет отвечать за позиционирование 
			this.setPosition(caller)
		},

		onClose() {
			this.items = [],
				this.isOnShow = false
		},
		//Позиционирование контекста меню
		setPosition(caller) {
			//Возврщааем наш элемент с размерами
			const pos = caller.getBoundingClientRect()
			//Передаем кординаты  Переменным
			this.xPos = pos.left
			this.yPos = pos.top
			//Добовляем вычесляемое свойсво
		},
	},

	computed: {
		//Создаем вычесялемое свойство которое будете нам возвращать позиции
		styles() {
			return {
				top: `${this.yPos + 80}px`,
				left: `${this.xPos + 50}px`
				//Добовляем вычесляемое свойсво к разметке 
			}
		}
	},

	//Подписываемся на наши события
	mounted() {
		this.$context.EventBus.$on('show', this.onShow)
		this.$context.EventBus.$on('close', this.onClose)
	},

	beforeDestroy() {
		this.$context.EventBus.$off('show', this.onShow)
		this.$context.EventBus.$off('close', this.onClose)
	},

}

</script>


<style>
.context {
	position: absolute;
	width: 150px;
	background-color: rgb(221 196 196 / 37%);
}

.cursorPointer {
	cursor: pointer;
}

.styleClose {
	position: absolute;
	right: 5px;
	top: 5px;
	background-color: rgb(255 0 0);
	padding: 0 5px;
}
</style>