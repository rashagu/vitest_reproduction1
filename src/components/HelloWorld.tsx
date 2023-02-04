import {defineComponent, ref, h, Fragment, useSlots} from 'vue'

interface HelloWorldProps {
  msg?: string
}

export const vuePropsType = {
  msg: String
}
const HelloWorld = defineComponent<HelloWorldProps>((props, {}) => {
  const slots = useSlots()


  return () => (
    <div>
      HelloWorld
    </div>
  )
})

HelloWorld.props = vuePropsType
HelloWorld.name = 'HelloWorld'

export default HelloWorld

