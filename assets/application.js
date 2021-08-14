const app = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    message: 'Hello guys',
    collectionData: [],
  },
  created() {
    this.collectionData = collectionDataJson;
  },
  methods: {

  },
})