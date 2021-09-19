import Typeahead from "./Typeahead.vue";
Typeahead.install = function (app) {
  app.component(Typeahead.name, Typeahead);
};

export default Typeahead;
