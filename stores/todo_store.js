
function create_module(service) {
    return {
        state: {
            newItem: 'new item',
            items: [],
        },
        getters: {
            newItemText (state) {
                return state.newItem.text
            },
            items (state) {
                return state.items
            }
        },
        mutations: {
            updateNewItemText: (state, text) => {
                state.newItem = text
            },
            addItem: (state, item) => {
                state.items = [...state.items, item]
            }
        },
        actions: {
            updateNewItemText: (context, text) => {
                context.commit('updateNewItemText', text)
            },
            postNewItem: (context, userId) => {
                service.postNew(userId, context.state.newItem)
            },
            subscribeTodoList: (context, user) => {
                console.debug("subscribe todo list")
                service.subscribe(user.uid, (key, value) => {
                    // console.log(key, value)
                    context.commit('addItem', value)
                })
            },
            unsubscribeTodoList: (context, user) => {
                console.debug("unsubscribe todo list")

            },
        },
    }
}

export default create_module
