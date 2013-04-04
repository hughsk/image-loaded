# image-loaded #

[![browser support](https://ci.testling.com/hughsk/image-loaded.png)](https://ci.testling.com/hughsk/image-loaded)

Call a callback when an image has loaded - adapted from
[desandro/imagesloaded](https://github.com/desandro/imagesloaded),
minus the jQuery.

## Installation ##

Using [npm](http://npmjs.org/) and [browserify](http://browserify.org/):

``` bash
npm install image-loaded
```

## Usage ##

**require('image-loaded')(image, callback)**

``` javascript
var loaded = require('image-loaded')
var image = document.getElementById('hidden-image')

loaded(image, function(err, alreadyLoaded) {
  // image is loaded!
})
```

If the image was already loaded beforehand, the callback will be called
instantly with the second argument set to `true`. Otherwise this will be
`false`.
