
function createInfo(el, service, store) {
    return new Vue({
        el: el,
        data: {
          info: {},
        },
        created: function(){
          // read data
          var self = this
          service.subscribe((val) => self.updateInfo(val), '618')
    
        },
    
        methods: {
            updateInfo: function(val){
                this.info = val;
                console.debug("updateInfo", val, this)
            }
        }
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

