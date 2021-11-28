import { App } from 'vue';
import { converterOptions } from "./converter/defaultConverter";
export interface TimeagoOptions {
    name?: string;
    converter?: unknown;
    converterOptions?: converterOptions;
}
declare const _default: (app: App, options?: TimeagoOptions | undefined) => void;
export default _default;
