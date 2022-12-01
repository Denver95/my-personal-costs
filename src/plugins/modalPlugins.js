export default {
	install(Vue) {
		if (this.installed) {
			return
		}

		this.installed = true

		Vue.prototype.$modal = {

			EventBus: new Vue(),
			// Принимаем ид, чтоб знать какое из модальных окон показывать
			// Отправляем методы и нам нужно в нашем компаненте подписать на метод в mounted
			show(modalID) {
				this.EventBus.$emit('modalShow', modalID)
			},

			hide(modalID) {
				this.EventBus.$emit('modalHide', modalID)
			}

		}

	}

}