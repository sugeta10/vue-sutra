var app = new Vue ({
  // Applicationを紐付ける要素のセレクタ/mountする要素
  el:'#app',
  // アプリケーションで使用するデータ
  data:{
    message: 'Hello, Vue.js!',
    list: ['Ruby','Python','JavaScript'],
    input_text: 'Here You written',
    show: true,
    show_t: true
  },
  // アプリケーションで使用するメソッド
  methods:{
    handleClick: function(event){
      alert(event.target)
    },
    switchShow: function(){
      if (app.show == true) {
        app.show = false;
        } else {
        app.show = true;
        }
    }
  },
  // 算出プロパティ dataと似たように扱うことのできるデータ
  computed: {
    computedMessage: function(){
      // なにか処理をした結果をデータとして返す
      return this.message + '!'
    }
  },
  // ライフサイクルフック 色々あるがcreated では初期化が終わったら呼び出される
  created: function(){
    // 行いたい処理
  }
})


var app2 = new Vue ({
    el:'#app2',
    data:{
      message: 'Hello, Vue.js!',
      scroll: 0,
      count: 0,
      isChild: true,
      isActive: true,
      textColor: 'red',
      bgColor: 'lightgray',
      radius: 50,
      item: {
        id: 1,
        src: 'item.jpeg',
        alt: '商品１',
        width: 100,
        height: 100
      },
      classObject: {
        child: true,
        'is-active': true,
      },
      styleObject: {
        color: 'red',
        backgroundColor: 'lightgray',
      }
    },
    methods: {
      increment: function(){
        this.count += 1
      }
    },
    // 要素のスクロール量の操作のところはよくわかってない・・・
    mounted: function(){
      this.scroll = 100 //要素のスクロール量
    },
})
