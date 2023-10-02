const { createApp } = Vue;
createApp({
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    requestCards() {
      axios
        .get("http://localhost:8888/php-dischi-json/dischi.php")
        .then((response) => (this.cards = response.data));
    },
  },
  created() {
    this.requestCards();
  },
}).mount("#app");
