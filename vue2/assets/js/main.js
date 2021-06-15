let app = new Vue({
    el: '#app',
    data: {
        list: [
            "Задача 1",
            "Задача 2",
            "Задача 3"
        ],
        showModal: false,
        userTask: ""
    },
    methods: {

        // openModal() {
        //     this.showModal = true
        // },
        // closeModal() {
        //     this.showModal = false
        // },
        toggleModal() {
            this.showModal = !this.showModal
        },
        addItem() {
// alert(this.userTask)
            if(this.userTask == ""){
                alert("Введите значение")
                return
            }
            this.list.push(this.userTask)
            this.userTask = ""
            this.toggleModal()
        }
    }
})