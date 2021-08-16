export const slider = Vue.component("slider", {
  name: "slider",
  props: ["data"],
  mounted() {
    this.$nextTick(function () {
      new Splide(".splide").mount();
    });
  },
  render(createElement) {
    if (this.data && this.data.length) {
      return createElement("div", { class: "splide__track" }, [
        createElement(
          "div",
          { class: "splide__list" },
          this.data.map((data) => {
            return createElement("div", { class: "splide__slide" }, [
              createElement(
                "a",
                {
                  attrs: {
                    href: data.url,
                  },
                },
                [
                  createElement("img", {
                    attrs: {
                      src: data.image,
                    },
                  }),
                  createElement("h3", {}, data.title),
                  createElement(
                    "p",
                    {},
                    `Number of products: ${data.product_count}`
                  ),
                ]
              ),
            ]);
          })
        ),
      ]);
    } else {
      return createElement("p", "No products found.");
    }
  },
});