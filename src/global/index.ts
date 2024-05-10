import registerElementPlus from './registerElementPlus'
import registerElementPlusIcon from './registerElementPlusIcon'
import type { App } from 'vue'



// 全局注册
export const setregisterGlobal = (app: App) => {
    app.use(registerElementPlus)
    app.use(registerElementPlusIcon)
}



// export default {
//     install: (app: App) => {
//
//     }
// }
// app.use(ElementPlus)




