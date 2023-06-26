const $ = (arg) => {
  //DOMContentLoaded
  if (typeof arg === "function") {
    document.addEventListener("DOMContentLoaded", arg);
  }

  //Selector de CSS
  if (typeof arg === "string") {
    const elements = document.querySelectorAll(arg);
    elements.css = (...arg) => {
      const [property, value] = arg;
      const isString = typeof property === "string";
      const isObject = typeof property === "object";
      elements.forEach((el) => {
        if (isString) {
          el.style[property] = value;
        } else if (isObject) {
          const entriesCss = Object.entries(property);
          entriesCss.forEach(([property, value]) => {
            el.style[property] = value;
          });
        }
      });
      return elements;
    };

    elements.on = (event, callback) => {
      elements.forEach((el) => {
        el.addEventListener(event, callback);
      });
    };

    return elements;
  }
};

$(() => {
  $("button")
    .css("background", "#966")
    .css("font-size", "2rem")
    .css({
      padding: "50px",
      borderRadius: "20px",
    })
    .on("click", () => {
      alert("Hola mundo desde mi Jquery");
    });
});
