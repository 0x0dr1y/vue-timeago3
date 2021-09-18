import defaultConverter from './converter'
import { h, reactive } from 'vue';


export const createTimeago = (opts = {}) => {
 const name = opts.name || 'Timeago'
 return {
    name,
    props: {
        datetime: {
          required: true
        },
        title: {
          type: [String, Boolean]
        },
        autoUpdate: {
          type: [Number, Boolean]
        },
        converter: {
          type: Function
        },
        converterOptions: {
          type: Object
        }
      },
      data() {
        return {
          timeago: this.getTimeago(),
        
        }
      },
    
      mounted() {
        this.startUpdater()
      },
  
      beforeUnmount() {
        this.stopUpdater()
      },

      render() {
        return h(
          'time',
          {
            attrs: {
              datetime: new Date(this.datetime).toISOString(),
              title:
                typeof this.title === 'string'
                  ? this.title
                  : this.title === false
                  ? null
                  : this.timeago
            }
          },
          [this.timeago]
        )
      },
      methods: {
        getTimeago(datetime) {
          const converter = this.converter || defaultConverter
          return converter(
            datetime || this.datetime,
            this.converterOptions || {}
          )
        },
  
        convert(datetime) {
          this.timeago = this.getTimeago(datetime)
        },
  
        startUpdater() {
          if (this.autoUpdate) {
            const autoUpdaye = this.autoUpdate === true ? 60 : this.autoUpdate
            this.updater = setInterval(() => {
              this.convert()
            }, autoUpdaye * 1000)
          }
        },
  
        stopUpdater() {
          if (this.updater) {
            clearInterval(this.updater)
            this.updater = null
          }
        }
      },
  
      watch: {
        autoUpdate(newValue) {
          this.stopUpdater()
          if (newValue) {
            this.startUpdater()
          }
        },
  
        datetime() {
          this.convert()
        },
        converter() {
          this.convert()
        },
        converterOptions: {
          handler() {
            this.convert()
          },
          deep: true
        }
      }

}
}
export const install = (app, options) => {
  if (app.config.globalProperties.$timeago) {
    return
  }

  if (process.env.NODE_ENV === 'development' && !reactive) {
    console.warn(`[vue-timeago] Vue 3.2 or above is recommended.`)
  }

  const Component = createTimeago(options)
  app.component(Component.name, Component)
}

export const converter = defaultConverter

export default install
