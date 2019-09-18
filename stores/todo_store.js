
function create_module(service) {
    return {
        state: {
            newItem: 'new item',
        },
        getters: {
            newItemText (state) {
                state.newItem.text
            }
        },
        mutations: {
            updateNewItemText: (state, text) => {
                state.newItem = text
            },
        },
        actions: {
            updateNewItemText: (context, text) => {
                context.commit('updateNewItemText', text)
            },
            postNewItem: (context, userId) => {
                service.postNew(userId, context.state.newItem)
            }
        },
    }
}

export default create_module
