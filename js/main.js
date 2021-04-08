var app = new Vue({
  el: "#app",
  data: {
    results: [],
    bests: [],
    flags: ["it", "en"],
    search: "",
  },
  methods: {
    ask: function () {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=fab054eb96530e8d5e0eea953e08c0c3&language=it-IT", {params : {query : this.search }})
      .then((result) => {
        this.results = result.data.results
        this.search = ""
        console.log(this.results)
       
      })
      axios.get("https://api.themoviedb.org/3/search/tv?api_key=fab054eb96530e8d5e0eea953e08c0c3&language=it-IT", {params : {query : this.search }})
      .then((result) => {
        const results = result.data.results;
        this.results = this.results.concat(results);
        this.search = "";
        console.log(this.results)
      })
    },
    vote(vote){
      return parseInt(vote /2);
    },
    getFlag(lang){
      return `img/${lang}.png`;
    },
    getPoster(poster) {
      return `http://image.tmdb.org/t/p/w185/${poster}`;
    },
    clean() {
      return this.results = []
    }
  },
  mounted() {
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=fab054eb96530e8d5e0eea953e08c0c3")
    .then((result) => {
      this.bests = result.data.results
      console.log(this.bests)
    })
  }
});