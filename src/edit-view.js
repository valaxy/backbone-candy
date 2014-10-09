define(function () {
	var EditView = Backbone.View.extend({
		//
		setValue: function (html) {
			throw "please override setValue";
		},
		isEnable: function () {
			return true;
		},
		events: {
			click: function () {
				if (this.isEnable()) {
					this.$el.attr('contentEditable', true).focus();
				}
			},
			blur: function () {
				var html = this.$el.removeAttr('contentEditable').html();
				this.setValue(html);
			},
			keypress: function (e) {
				if (e.charCode === 13) {
					this.$el.blur();
				}
			}
		}
	});
	return EditView;
});


