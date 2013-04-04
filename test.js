var loaded = require('./')
  , test = require('tape')
  , src = 'https://raw.github.com/hughsk/image-loaded/master/test.png'

test('Image loaded already', function(t) {
  var image = new Image

  image.src = src
  image.onload = function() {
    loaded(image, function(err, already) {
      t.error(err)
      t.ok(already)
    })
  }
})

test('Image loaded afterwards', function(t) {
  var image = new Image

  loaded(image, function(err, already) {
    t.error(err)
    t.ok(!already)
  })

  image.src = src
})

test('Pass an error with the wrong element', function(t) {
  var div = document.createElement('div')
  t.plan(1)
  loaded(div, function(err) {
    t.ok(err)
  })
})

test('Pass an error with a non-element', function(t) {
  t.plan(1)
  loaded({}, function(err) {
    t.ok(err)
  })
})
