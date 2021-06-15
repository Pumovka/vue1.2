// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Привет, Vue!'
//     }
// })
// var app2 = new Vue({
//     el: '#app-2',
//     data: {
//         message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
//     }
// })
let app = new Vue({
    el: '#app',
    data: {
        message: 'Привет',
        title: 'Это заголовочек',
        seen: false,
        articles: [
            "Статья 1",
            "Статья 2",
            "Статья 3"
        ],
        userText: null,
        showed: true
    },
    methods: {
        firstMethod() {
            alert('Метод работает!')

        },
        showText(){
            alert(this.userText)
        }
    }
})
