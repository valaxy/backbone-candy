define(function () {

	/*
	 options:
	 el:
	 model:
	 property:
	 values:
	 */
	return Backbone.View.extend({
		initialize: function (options) {
			this.$el.addClass(this.model.get(options.property));
			return this.listenTo(this.model, 'change:' + options.property, function (model, value) {
				var _i, _len, _ref;
				if (options.values instanceof Array) {
					_ref = options.values;
					for (_i = 0, _len = _ref.length; _i < _len; _i++) {
						value = _ref[_i];
						this.$el.removeClass(value);
					}
				} else {
					for (value in options.values) {
						this.$el.removeClass(value);
					}
				}
				return this.$el.addClass(this.model.get(options.property));
			});
		}
	});
});

