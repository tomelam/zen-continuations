dojo.provide("zen.module");

try {
    setUp = function () { // FIXME: Perhaps this should use the normal interface?
	console.log("Entering setUp");
	require(["dojo/dom", "dojo/_base/window", "dojo/query"], function(dom, win, query) {
	    var iframeDoc = dom.byId("testBody").contentWindow.document;
	    win.withDoc(iframeDoc, function() {
		var bodyNodeCompon = zen.createNew(zen.DomNodeCompon, null, win.body());
		console.log("bodyNodeCompon => " + bodyNodeCompon);
		bodyNodeCompon.remove();
		dojo.query("html")[0].appendChild(dojo.create("BODY"));
		bodyNodeCompon = zen.createNew(zen.DomNodeCompon, "body1", win.body());
	    });
	});
	zen.registry = { DomNodeCompon : {} };
	zen.DomNodeCompon.domNodeCompons = [];
    }
    //dojo.require("zen.test_snapshooter"); //This requires assistance from the web server.
    dojo.require("zen.test_creator");
    dojo.require("zen.test_domnodecompon");
    dojo.require("zen.test_zentree");
    dojo.require("zen.test_cssfixer");
} catch(e) {
    doh.debug(e);
}
