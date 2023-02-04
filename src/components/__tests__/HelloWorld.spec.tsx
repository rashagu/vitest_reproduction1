import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import {defineComponent, Fragment, useSlots, h} from "vue";

test('test', async () => {
  const wrapper = mount(defineComponent(()=>()=><div>
    <Fragment>children</Fragment>
  </div>), {  })
})
