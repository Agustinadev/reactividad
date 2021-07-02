const Component = (function () {
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  Constructor.prototype.render = function () {
    const $el = d.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
  };

  Constructor.prototype.setState = function (obj) {
    for (const key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  };

  Constructor.prototype.copyState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
