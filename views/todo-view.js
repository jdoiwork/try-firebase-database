
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

function createList(el, store) {
    return new Vue({
        el,
        store,
        computed: {
            items: {
                get () {
                    return this.$store.state.todo.items
                }
            }
        }
    })
}

function createElements({ form, list }, store){
    return {
        form: createForm(form, store),
        list: createList(list, store),
    }
}



export { createElements }
