// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail

// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// BONUS:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue({
    el: "#root",
    data:{
        mailList: [],
    },
    methods:{

    },
    mounted(){
        for(let i=0; i<30; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.mailList.push(response.data.response);
            })
        };
    }
});