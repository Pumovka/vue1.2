let app = new Vue({
    el: '#app',
    data: {
        list: [],
        showModal: false,
        userTask: ""
    },
    mounted(){
        this.list = JSON.parse(localStorage.getItem('list')) || []
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
            this.save()
        },
        save(){
            localStorage.setItem("list", JSON.stringify(this.list))
        }
    }
})

