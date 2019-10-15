import { Vue } from 'vue-property-decorator'
import ModalVue from './ItModal.vue'

declare module 'vue/types/vue' {
  interface Vue {
    $Modal: IModal
  }
}
interface IModalOptions {
  type?: string
  title?: string
  content?: string
  closableMask?: boolean
  hideFooter?: boolean
  okClick?(): void
  cancelClick?(): void
}

interface IModal {
  // Invoke signature.
  (options: IModalOptions): ModalVue

  close: (onclose: () => void, id: number) => void

  success(options: IModalOptions): ModalVue
  warning(options: IModalOptions): ModalVue
  danger(options: IModalOptions): ModalVue
}

const modalTypes = ['primary', 'success', 'danger', 'warning']
const ModalConstructor = Vue.extend(ModalVue)

// tslint:disable-next-line: only-arrow-functions
const Modal = function(options: IModalOptions = {}) {
  const instance = new ModalConstructor({
    propsData: options
  })

  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
} as IModal

modalTypes.forEach((type) => {
  Modal[type] = (options: IModalOptions): ModalVue =>
    Modal({ type, ...options })
})

export default Modal