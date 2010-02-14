// @name: Tweet Shortcut
// @description: Bind Enter key to tweet.
// @auther : mollifier http://d.hatena.ne.jp/mollifier/
// @version : 0.0.1
//
// Tweet Shortcut is released under the MIT License.
// http://www.opensource.org/licenses/mit-license.php

jetpack.future.import("pageMods");

var manifest = {
  settings: [
    {
      name: "ctrlkey",
      type: "boolean",
      label: "Ctrl key" },
  ]
};

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


