
function createInfo(el, store) {
    return new Vue({
        el: el,
        data: {

        },
        store,
        computed: Vuex.mapGetters(['info']),

    })
} 

function createForm(el, store) {
  return new Vue({
    el: el,
    data: {},
    store,
    computed: Vuex.mapGetters(['info', 'editingInfo']),
    methods: {
      onSubmit: function(){
        // write data
        let info = this.editingInfo
        // service.post("618", info.username, info.email, "https://jdoi.pw");
        this.$store.dispatch('commitInfo')
        console.debug("submit")
      }
    }
  })
}

function createElements({ info, form }, store) {
    return {
        info: createInfo(info, store),
        form: createForm(form, store),
    }
}

export { createElements }

