import {App} from 'vue'
import { createTimeago } from './timeago'
import {converterOptions} from "./converter/defaultConverter";

export interface TimeagoOptions {
    name?: string,
    converter?: unknown,
    converterOptions?: converterOptions,
}

export default (app: App, options?: TimeagoOptions): void => {
    // check if component is registered
    if (app.config.globalProperties.$timeago) {
        return
    }

    // check Vue version
    const version = Number(app.version.split('.')[0])
    if (version < 3) {
        console.warn('[vue-timeago3] This plugin requires at least Vue version 3.0')
    }


    const Component = createTimeago(options)
    // eslint-disable-next-line vue/multi-word-component-names
    app.component(Component.name, Component)
}


