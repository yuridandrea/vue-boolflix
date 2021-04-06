var app = new Vue({
  el: "#app",
  data: {
    movies: [],
    series: [],
    search: "",
  },
  methods: {
    ask: function () {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=fab054eb96530e8d5e0eea953e08c0c3&language=it-IT", {params : {query : this.search }})
      .then((result) => {
        result.data.results.forEach(x =>{
          console.log(x)
          x.vote_average = Math.round(x.vote_average / 2)
        })
        this.movies = result.data.results
        console.log(this.movies)
       
      })
      axios.get("https://api.themoviedb.org/3/search/tv?api_key=fab054eb96530e8d5e0eea953e08c0c3&language=it-IT", {params : {query : this.search }})
      .then((result) => {
        result.data.results.forEach(x =>{
          console.log(x)
          x.vote_average = Math.round(x.vote_average / 2)
        })
        this.series = result.data.results
        console.log(this.series)
      })
    }
  }
});