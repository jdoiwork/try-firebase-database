
function createForm(el) {
    return new Vue({
        el,
        methods: {
            onSubmit () {
                console.log("new todo submit")
            }
        }
    })
}

function createElements({ form }){
    return {
        form: createForm(form),
    }
}



export { createElements }
