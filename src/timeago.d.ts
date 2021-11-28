import { defineComponent } from 'vue';
import { TimeagoOptions } from "./install";
declare const createTimeago: (opts?: TimeagoOptions) => ReturnType<typeof defineComponent>;
export { createTimeago };
