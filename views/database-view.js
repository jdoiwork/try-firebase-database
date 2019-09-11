
function createInfo(el, service, store) {
    return new Vue({
        el: el,
        data: {

        },
        store,
        computed: Vuex.mapGetters(['info']),

    })
} 

function createForm(el, service, store) {
  return new Vue({
    el: el,
    data: service.init(),
    methods: {
      onSubmit: function(){
        // write data
        service.post("618", this.name, this.email, "https://jdoi.pw");
        console.debug("submit")
      }
    }
  })
}

function createElements({ info, form }, service, store) {
    return {
        info: createInfo(info, service, store),
        form: createForm(form, service, store),
    }
}

export { createElements }

