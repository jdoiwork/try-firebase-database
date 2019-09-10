
function createInfo(el, service) {
    return new Vue({
        el: el,
        data: {
        info: {},
        },
        created: function(){
        // read data
        var self = this
        service.subscribe((val) => self.updateInfo(val))
    
        },
    
        methods: {
            updateInfo: function(val){
                this.info = val;
                console.debug("updateInfo", val, this)
            }
        }
    })
} 

function createForm(el, service) {
  return new Vue({
    el: '#form',
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

function createElements({ info, form }, service) {
    return {
        info: createInfo(info, service),
        form: createForm(form, service),
    }
}

export { createElements }

