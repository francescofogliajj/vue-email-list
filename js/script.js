// Esercizio: Generare 10 email e stamparle a schermo, utilizzando Vue e Axios.

var app = new Vue({

  el: "#root",

  data: {
    emailList: []
  },

  mounted: function() {

    for (let i = 0; i < 10; i++) {

      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then( result => {
        this.emailList.push(result.data.response)
      });

    }

  }

});
