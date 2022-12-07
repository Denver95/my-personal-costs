export default {
	install(Vue) {
		if (this.installed) {
			return
		}

		this.installed = true
		this.caller = null

		Vue.prototype.$context = {

			EventBus: new Vue(),
			// Принимаем ид, чтоб знать какое из модальных окон показывать
			// Отправляем методы и нам нужно в нашем компаненте подписать на метод в mounted
			show({ items, $event }) {
				const caller = $event.target
				if (caller !== this.caller) {
					this.caller = caller
					this.EventBus.$emit('show', { items, caller })

				} else {
					this.close()
				}
			},

			close() {
				this.EventBus.$emit('close',)
			}

		}

	}

}