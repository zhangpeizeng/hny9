import valid from './valid'

function install (Vue) {
  Vue.directive('valid', valid)
}

if (window.Vue) {
  window.valid = valid
  Vue.use(install); // eslint-disable-line
}

valid.install = install
export default valid
