
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

