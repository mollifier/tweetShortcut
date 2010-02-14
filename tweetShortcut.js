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
      label: "Ctrl key",
      default: false
    }
  ]
};
jetpack.future.import("storage.settings");

function isTweetKey(e) {
  // 13 : Enter key code
  if (jetpack.storage.settings.ctrlkey) {
    return e.ctrlKey && e.keyCode === 13;
  } else {
    return e.keyCode === 13;
  }
}

function callback(doc) {
  var textBox = $("#status", doc);
  textBox.keydown(function(e) {
    if (isTweetKey(e) && textBox.value !== "") {
      $("#update-submit", doc).click();
    }
  });
}

var options = {};
options.matches = [
  "http://twitter.com/*",
  "https://twitter.com/*"
];
jetpack.pageMods.add(callback, options);


