const { createApp } = Vue;

createApp({
    data() {
        return {
            arrayMail: []
        }
    },
    mounted() {
        this.generateMailRandom();
    },
    methods: {
        generateMailRandom() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    const randomMail = result.data.response
                    this.arrayMail.push(randomMail)
                })
            }
        }
    },
}).mount('#app')