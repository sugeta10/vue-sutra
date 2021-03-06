Vue.config.devtools = true;
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
    },
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
      okay: false,
      show: true,
      type: 'A',
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
      },
      list : [],
      monsterName: 'キマイラ',
      monsters: [
        {id: 1, name: 'スライム', hp: 100},
        {id: 2, name: 'ゴブリン', hp: 200},
        {id: 3, name: 'ドラゴン', hp: 500}
      ],
      url: 'https://sugeta10.github.io/vue-sutra/',
      message2: 'Hello <strong>Vue.js!</strong>',
    },
    methods: {
      increment: function(){
        this.count += 1
      },
      // 追加ボタンをクリックしたときのハンドラ
      doAdd: function () {
        // リスト内で1番大きいIDを取得
        var max = this.monsters.reduce(function (a, b) {
          return a > b.id ? a : b.id
        }, 0)
        // 新しいモンスターをリストに追加
        this.monsters.push({
          id: max + 1, // 現在の最大のIDに+1してユニークなIDを作成
          name: this.monsterName, // 現在のフォームの入力値
          hp: 500
        })
      },
      // 要素を削除ボタンをクリックしたときのハンドラ
      doRemove: function (index) {
        // 受け取ったインデックスの位置から1個要素を削除
        this.monsters.splice(index, 1)
      },
      doAttack: function (index) {
        this.monsters[index].hp -= 10 // HPを減らす
      },
      changeSlime: function () {
        this.$set(this.monsters, 0, {id:1, name: 'キングスライム', hp:500})
      },
      changeMonster: function () {
        this.monsters = this.monsters.filter(function(el) {
          return el.hp <= 499
        })
      },
      countUp() {
        var count = this.$refs.count
        if (count) {
          count.innerText = parseInt(count.innerText, 10) + 1
        }
      },
      fetchList(){
        axios.get('list.json').then(function (response) {
          // 取得完了したらlistリストに代入
          this.list = response.data
        }.bind(this)).catch(function (e) {
          console.error(e)
        })
      }
    },
    created: function(){
      // 代入したデータが文字列になるので要修正
      axios.get('list.json').then(function (response) {
        // 取得完了したらlistリストに代入
        this.list = response.data
      }.bind(this)).catch(function (e) {
        console.error(e)
      }),
      this.monsters.forEach(function(mon){
        this.$set(mon, 'active', false)
      }, this)
    },
    mounted: function(){
      // this.scroll = 100 //要素のスクロール量のようだがよくわかってない
      //console.log(this.$el)
      //console.log(this.$refs.hello) //undefinedになるのでなにか問題がある
      //console.log(this.$refs.count) //undefinedになるのでなにか問題がある
    },
})
