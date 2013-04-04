var loaded = require('./')
  , test = require('tape')
  , src = 'https://raw.github.com/hughsk/image-loaded/master/test.png'

test('Image loaded already', function(t) {
  var image = new Image
  t.plan(2)

  image.onload = function() {
    loaded(image, function(err, already) {
      t.error(err)
      t.ok(already)
    })
  }
  image.src = src
})

test('Image loaded afterwards', function(t) {
  var image = new Image
  t.plan(2)

  loaded(image, function(err, already) {
    t.error(err)
    t.ok(!already)
  })

  setTimeout(function() {
    image.src = src
  }, 500)
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
