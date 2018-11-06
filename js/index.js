var vm=new Vue({
	el:'#app',
	data:{
		messages:'hello',
		show:'123',
		title:'页面加载与'+new Date().toLocaleString(),
		seen:true

	}

});
// vm.seen=false;
var vm2=new Vue({
	el:'#app2',
	data:{
		todos:[
		{text:'学习'},
		{text:'锻炼'},
		{text:'提升'}
		],
		newdas:[
		{show:'嘿'},
		{show:'嘿'},
		{show:'哈'},
		{show:'咦'}
		]
	}
});
vm2.todos.push({ text: '新增的 爱谁谁'});
var vm3=new Vue({
	el:'#app3',
	data:{
		messages:'123456'
	},
	methods:{
		reverseMessages:function(){
			this.messages=this.messages.split('').reverse().join('');
		}
	}
});

var vm4=new Vue({
	el:'#app4',
	data:{
		message3:'数据绑定'
	}
});

// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var vm5 = new Vue({
  el: '#app5',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})

// watch
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: '直到你提出问题之前我不能给你一个答案！'
  },
  watch: {
    // 如果 question 发生改变，这个函数就会运行
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce 是一个通过 lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
    // ajax请求直到用户输入完毕才会发出
    // 学习更多关于 _.debounce function (and its cousin
    // _.throttle), 参考: https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        var vm = this
        if (this.question.indexOf('?') === -1) {
          vm.answer = 'Questions usually contain a question mark. :-)'
          return
        }
        vm.answer = 'Thinking...'
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // 这是我们为用户停止输入等待的毫秒数
      1000
    )
  }
})