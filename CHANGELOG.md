# Change Log
All notable changes to the "vuetify-resize-drawer" plugin will be documented in this file.

## v3.1.4
2024-03-13
[main] (@webdevnerdstuff)
* Change component to use `defineAsyncComponent`

## v3.1.3
2024-02-26
[main] (@webdevnerdstuff)
* Fix external rollup config
* Update packages

## v3.1.2
2024-01-11
[main] (@webdevnerdstuff)
* Minor style adjustments
* Update packages

## v3.1.0
2024-01-09
[main] (@webdevnerdstuff)
* Fix typescript issues
* Reorganizing
* Add vitest
* Update node version to v20.10.0

## v3.0.0
2023-11-10
[main] (@webdevnerdstuff)
* Merging in vuetify3-resize-drawer
* Changing package to an npm organization package
* Updating release version to be more inline with vue/vuetify 3 versions
  * The change from v2.1.1 to v3.0.0 is not a breaking change, only a version change

## v2.1.1
2023-10-02
[main] (@webdevnerdstuff)
* Fix build config to exclude Vuetify styles from being included in the build

## v2.1.0
2023-08-24
[main] (@webdevnerdstuff)
* Add @container classes to provide Vuetify grid class support for the drawer content, enhancing responsiveness without being constrained by screen size.
* Add Grid System section to documentation
* Add touch support for mobile devices
* Add emitted events for `drawer:mouseenter`, `drawer:mouseleave`, `handle:touchend`, `handle:touchmove`, and `handle:touchstart`
* Add `touchless` support to hide handle on mobile devices. This prop does not function the same as the prop which is not supported.
* Fix offsetWidth value that was returning the resized value (possible breaking change if you used emitted events to get the offsetWidth value)
* Fix issue with resized values being negative, returning positive values
* Fix width values that passed min/max width boundaries
* Fix issue with incorrect widths when min/max values set as percentage
* Fix issue with widthSnapBack prop preventing drawer resizing
* Fix `close` event not being emitted when drawer is closed
* Fix `update:modelValue` event not being emitted when model value was updated
* Update Vuetify package to v3.3.14
* Update other packages to latest versions
* Update Playground template to include grid drawer for testing

## v2.0.3
2023-08-01
[main] (@webdevnerdstuff)
* Add check for fasvg
* Add important to fa icon size

## v2.0.2
2023-06-02
[main] (@webdevnerdstuff)
* Update to turn off transition duration when resizing

## v2.0.0
2023-06-02
[main] (@webdevnerdstuff)
* Update `handleColor` prop to a string from an object. Now accepts various color values (variables, theme color names, color names, hex, rgb, rgba, etc)
* Add `maxWidth` and `minWidth` props to allow for a minimum and maximum width for the drawer.
  * Add `snapBackWidth` prop to allow for the drawer to snap back to the `maxWidth`/`minWidth` when the drawer is closed.
* Add `location` prop to allow `start` and `end` drawer locations
* Add `v-icon` to be used as handle with a new prop `handleIcon`
  * Add better support for `mdi` and `fa` icons
* Remove `top-icon` slot
* Update styles
* Add stronger typings
* Update how typings and props are defined
* Update Vuetify to current version `3.3.6`
* Improve organization of code
* Update documentation
* Add Developer Playground

## v1.1.2
2023-07-27
[main] Initial release (WebDevNerdStuff)
* Fix: Add missing transform to fix drawer right direction

## v1.1.1
2023-07-27
[main] Initial release (WebDevNerdStuff)
* Fix build missing vuetify imports

## v1.1.0
2023-07-26
[main] Initial release (WebDevNerdStuff)
* Update component to be more like v3 version
* Change handle to v-icon
* Change handle positions to be more like v3 version
* Add handle props
* Add min/max width props
* Remove overflow prop
* Update npm packages
* There may be some breaking changes in this release

## v1.0.0
2022-05-23
[main] Initial release (WebDevNerdStuff)
