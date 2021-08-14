const app = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    collectionData: [],
  },
  watch: {
    collectionData() {
      new Splide( '.splide' ).mount();
    }
  },
  created() {
    this.collectionData = collectionDataJson;
  },
})