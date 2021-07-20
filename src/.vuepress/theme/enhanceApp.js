import axios from 'axios'
import pageComponents from '@internal/page-components'

// import './styles/scss/my_bulma.scss'
// import './styles/scss/index.scss'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.prototype.$axios = axios

  // fix unable to scroll to anchor
  if (typeof document === 'undefined') return
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const { hash } = location
      const decoded = decodeURIComponent(hash)
      if (hash !== decoded) {
        document.querySelector(decoded).scrollIntoView()
      }
    }
  }

  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
}
