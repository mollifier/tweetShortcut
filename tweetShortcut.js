jetpack.future.import("pageMods");

var callback = function(doc){
  console.log("load callback");
  jetpack.notifications.show("Hello Jetpack!");
};

var options = {};
options.matches = [
  "http://twitter.com/*",
  "https://twitter.com/*"
];
jetpack.pageMods.add(callback, options);


