/*
 * Modified version of http://github.com/desandro/imagesloaded v2.1.1
 * MIT License. by Paul Irish et al.
 */

var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

function loaded(image, callback) {
  var src
    , onload

  if (!image.nodeName) return callback(new Error('First argument must be an image element'))
  if (image.nodeName.toLowerCase() !== 'img') return callback(new Error('Element supplied is not an image'))
  if (image.complete && image.naturalWidth !== undefined) return callback(null, true)

  image.addEventListener('load', function() {
    callback(null, false)
  })

  if (image.readyState || image.complete) {
    src = image.src
    image.src = BLANK
    image.src = src
  }
}

module.exports = loaded
