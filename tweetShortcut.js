jetpack.future.import("pageMods");

var callback = function(doc){
  var textBox = $("#status", doc);
  textBox.keydown(function(e) {
    if (e.keyCode === 13 && textBox.value !== "") {
      // 13 : Enter key code
      $("#update-submit", doc).click();
    }
  });
};

var options = {};
options.matches = [
  "http://twitter.com/*",
  "https://twitter.com/*"
];
jetpack.pageMods.add(callback, options);


