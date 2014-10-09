define(function (require) {
	var ItemView = require('./item-view');

	// extend
	//      ItemView
	//      model:
	//          selected: 表示被选中的item
	//          opend:
	//          list: 表示item的collection
	//
	// depend on item-view.
	// 适配:
	//  - add: add item view to $dom
	//  - reset: add item views to $dom
	var ItemListView = Backbone.View.extend({
		events: {
			'click': function () {
				this.model.set('selected', null);
			}
		},
		_append: function (model, index) {
			var itemView = new (this.ItemView)({
				model: model
			});
			this.$el.insertAt(itemView.render().$el, index);
		},
		ItemView: null,
		initialize: function (options) {
			// change:selected 切换别的item视图
			this.listenTo(this.model, 'change:selected', function (model, selected) {
				if (model.previous('selected')) {
					model.previous('selected').set('select', false);
				}
				if (selected) {
					selected.set('select', true);
				}
			});

			this.listenTo(this.model, 'change:opened', function (model, opened) {
				if (model.previous('opened')) {
					model.previous('opened').set('opened', false);
				}
				if (opened) {
					opened.set('opened', true);
				}
			});

			// add: 添加新的
			this.listenTo(this.model.get('list'), 'add', function (model, collection, options) {
				this._append(model, options.at);
			});

			// reset: 重置
			this.listenTo(this.model.get('list'), 'reset', function (models) {
				this.$el.empty();
				var me = this;
				models.forEach(function (model) {
					me._append(model);
				});
			});
		}
	});

	return ItemListView;
});