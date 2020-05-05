var app = new Vue ({
  el:'#app',
  data:{
    message: 'Hello, Vue.js!',
    list: ['Ruby','Python','JavaScript'],
    input_text: 'Here You written',
    show: true
  },
  methods:{
    handleClick: function(event){
      alert(event.target)
    },
    switchShow: function(event){
      if (app.show == true) {
        app.show = false;
        } else {
        app.show = true;
        }
    }
  }
})
