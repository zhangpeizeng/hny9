export default {
  bind (el) {
    el.oninput = () => {
      // el.children[0].value = el.children[0].value.replace(/[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g, '').replace(/\s/g, '')
      el.children[0].value = el.children[0].value.replace(/[^\u4e00-\u9fa5a-zA-Z0-9'-]/ig, '')
    }
  }
}
