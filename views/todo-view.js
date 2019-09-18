
function createForm(el, store) {
    return new Vue({
        el,
        store,
        methods: {
            onSubmit () {
                console.log("new todo submit")
                const s = this.$store
                s.dispatch('postNewItem', s.state.user.uid)
            }
        },
        computed: {
            newTodoItem: {
                get () {
                    return this.$store.state.todo.newItem
                },
                set (value) {
                    this.$store.dispatch('updateNewItemText', value)
                }
            }
        }
    })
}

function createElements({ form }, store){
    return {
        form: createForm(form, store),
    }
}



export { createElements }
