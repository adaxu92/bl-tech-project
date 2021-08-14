const app = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    message: 'Hello Vue!'
  },
  created() {
    const collectionHandles = document.getElementById('app').dataset.collectionHandles;
    this.collectionHandles = collectionHandles.split(',');
  },
})