define(function () {

	// expand params
	//      listModel:
	//          selected: property
	//          opend: property
	//      render():
	//
	// new params:
	//      model:
	//          select: property
	//          opened: proeprty
	//
	// interact:
	//  - click to select
	//  - dblclick to open
	//
	// dispatch:
	//      listModel:
	//          change:select
	//      model:
	//          destroy
	var ItemView = Backbone.View.extend({
		events: {
			'click': function () {
				this.listModel.set('selected', this.model);
				return false;
			},
			'dblclick': function () {
				this.listModel.set('opened', this.model);
				return false;
			}
		},

		initialize: function () {
			this.listenTo(this.model, 'change:select', function (model, selected) {
				this.$el.editClass('selected', selected);
			});

			this.listenTo(this.model, 'change:opened', function (model, opened) {
				this.$el.editClass('opened', opened);
			});

			this.listenTo(this.model, 'destroy', this.remove);
		},

		listModel: null // override when extend
	});

	return ItemView;
});