var tap = require('tape')
var triggerChange = require('./')

tap.test(function(t){
  t.plan(2)

  var inny = document.createElement('input')
  inny.value = 'cowabunga'

  inny.addEventListener('change', function(e){
    t.equal(e.target.value, 'PIZZA!', 'event is triggered')
  })

  triggerChange(inny, 'PIZZA!')
  t.equal(inny.value, 'PIZZA!', 'value changed')

})