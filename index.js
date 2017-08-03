(function (heightBinding, undefined) {
    var groups = {};

    function Group(name) {
        this.name = name;
        this.maxHeight = -1;
        this.items = [];
    }

    heightBinding.initialize = function () {
        jQuery('[data-height-binding-group]').each(function () {
            var element = jQuery(this);
            var name = element.data('heightBindingGroup');
            var group;

            if (groups[name] === undefined) {
                group = new Group(name);
                groups[name] = group;
            } else {
                group = groups[name];
            }

            if (element.data('heightBindingInitialized') === undefined) {
                group.items.push(element);
                element.data('heightBindingInitialized', true);
            }
        });
        heightBinding.execute();
    };

    heightBinding.execute = function () {
        jQuery.each(groups, function (name, group) {
            group.maxHeight = -1;

            jQuery.each(group.items, function () {
                var element = jQuery(this);
                element.css('min-height', 'auto');
                group.maxHeight = Math.max(group.maxHeight, element.height());
            });

            jQuery.each(group.items, function () {
                var element = jQuery(this);
                element.css('min-height', group.maxHeight);
            });
        });
    };

    jQuery(function () {
        heightBinding.initialize();
    });

    jQuery(window).resize(function () {
        heightBinding.execute();
    });
}(window.heightBinding = window.heightBinding || {}));
