const { createApp } = Vue;

createApp({
    data() {
        return{
            randomMail: '',
            arrayMail: []
        }
    },
    mounted(){
        this.generateMailRandom();
    },
    methods: {
        generateMailRandom(){
            for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.randomMail = result.data.response
                    this.arrayMail.push(this.randomMail)
                })
            }
        }
    },
}).mount('#app')