
function createForm(el, store) {
    return new Vue({
        el,
        store,
        methods: {
            onSubmit () {
                console.log("new todo submit")
            }
        },
        computed: {
            newTodoItem: {
                get () {
                    return this.$store.state.todo.newItem
                },
                set (value) {
                    this.$store.commit('updateNewItemText', value)
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
