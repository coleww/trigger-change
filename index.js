module.exports = function(el, value){
  el.value = value
  var evt = document.createEvent("HTMLEvents")
  evt.initEvent("change", false, true)
  el.dispatchEvent(evt)
}
