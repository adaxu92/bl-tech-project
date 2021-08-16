import { slider } from './slider.js';

const app = new Vue({
  el: "#app",
  delimiters: ["${", "}"],
  components: {
    slider: slider,
  },
  data: {
    collectionData: [],
  },
  created() {
    this.collectionData = collectionDataJson;
  },
});
