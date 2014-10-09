
define(function() {

  /*
     	a view when click something, it changes the property value of model
  
     	options: pass to `new`
  			el: the $dom
  			model: the model
  			property: the property of model
  			interact: a config boject which's format is <selector>: <value>
     			selector: the jquery selector of which you will click
     			value: change the property value when click
   */
  return Backbone.View.extend({
    initialize: function(options) {
      var selector, value, _ref, _results;
      _ref = options.interact;
      _results = [];
      for (selector in _ref) {
        value = _ref[selector];
        _results.push(this.$el.on('click', selector, {
          value: value
        }, function(e) {
          return options.model.set(options.property, e.data.value);
        }));
      }
      return _results;
    }
  });
});


