
define(function () {
	var disable, enable, init, whenScroll;
	whenScroll = function () {
		var $items, index, item, me, scrollTop, _i, _len;
		scrollTop = this.scrollTop();
		$items = this.find(this.options.itemQuery);
		me = this;
		for (index = _i = 0, _len = $items.length; _i < _len; index = ++_i) {
			item = $items[index];
			if (item.offsetTop > scrollTop) {
				me.trigger('catalogScroll.move', index === 0 ? 0 : index - 1);
				break;
			}
		}
		if (index === $items.length) {
			this.trigger('catalogScroll.move', $items.length - 1);
		}
		return this;
	};
	init = function (options) {
		var defaultOptions;
		defaultOptions = {
			itemQuery: ''
		};
		this.options = $.extend(defaultOptions, options);
		return enable.call(this);
	};
	disable = function () {
		return this.off('scroll', whenScroll.bind(this));
	};
	enable = function () {
		return this.on('scroll', whenScroll.bind(this));
	};
	$.fn.catalogScroll = function (options) {
		if (typeof options === 'string') {
			switch (options) {
				case 'disable':
					return disable.call(this);
				case 'enable':
					return enable.call(this);
			}
		} else {
			return init.call(this, options);
		}
	};
	return null;
});


