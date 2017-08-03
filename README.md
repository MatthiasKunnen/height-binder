# Height binder
This package makes it possible to bind the height of multiple HTML elements.
Give all the items that have to be the same height the same group name like so:
`data-height-binding-group="group"`. Upon window load, the height binder will
automatically initialize the groups and apply the maximum height on all of the
items in the same group.

If you add items or groups after window load, call `heightBinding.initialize()`.
