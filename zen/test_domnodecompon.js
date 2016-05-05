dojo.provide("zen.test_domnodecompon");

dojo.require("zen");

// Uncomment the next line for debugging and be sure to comment-out the 'var iframeDoc' line inside the runTest function you are debugging.
// Other such variables can be added here for debugging.
var iframeDoc;

tests.register(
    "zen.test_domnodecompon",
    [
	{
	    name: "1. Initially, there are zero DomNodeCompons",
	    setUp: function() {
		setUp();
	    },
	    runTest: function() {
		doh.assertEqual(0, zen.DomNodeCompon.domNodeCompons.length);
		doh.assertEqual(0, zen.DomNodeCompon.getCount());
	    }
	},
	{
	    name: "2. zen.createNew (zen.DomNodeCompon) returns a new Dom node component containing no DOM node",
	    setUp: function() {
		setUp();
	    },
	    runTest: function() {
		var domNodeCompon = zen.createNew(zen.DomNodeCompon);
		doh.assertTrue(domNodeCompon instanceof zen.DomNodeCompon, "zen.createNew should have returned a zen.DomNodeCompon");
		doh.assertEqual("[empty DomNodeCompon]",
				domNodeCompon.toString(), "The new DomNodeCompon should be represented as '[empty DomNodeCompon]'");
		doh.assertEqual(1, zen.DomNodeCompon.getCount(), "There should be exactly one DomNodeCompon as of now");
	    }
	},
 	{
	    name: "3. zen.createNew (zen.DomNodeCompon, null, dojo.body()) returns a unique DOM node component for the BODY element",
	    setUp: function() {
		setUp();
	    },
	    runTest: function() {
		var iframeDoc = dojo.byId("testBody").contentWindow.document;
		dojo.withDoc(iframeDoc, function() {
		    bodyNodeCompon = zen.createNew(zen.DomNodeCompon, null, dojo.body());
		    doh.assertTrue(bodyNodeCompon instanceof zen.DomNodeCompon,
				   "zen.createNew(zen.DomNodeCompon, null, dojo.body()) should return a new zen.DomNodeCompon");
		    doh.assertEqual("[HTML Compon HTMLBodyElement]",
				    bodyNodeCompon.toString(),
				    "The new DomNodeCompon should be represented as '[HTML Compon DomNodeCompon]'");
		    doh.assertEqual(1, zen.DomNodeCompon.getCount(), "There should be exactly two DomNodeCompons as of now");
		    doh.assertEqual("[object HTMLBodyElement]", bodyNodeCompon.getDomNode(),
				    "The new DomNodeCompon's DOM node should be represented as '[HTML Compon DomNodeCompon]'");
		    doh.assertEqual(0, bodyNodeCompon.getId().indexOf("zen_DomNodeCompon_"));
		});
	    }
	},
	{
	    name: "4. bodyNodeCompon.destroyCompon () reduces the count of DomNodeCompons by 1",
	    setUp: function() {
		setUp();
	    },
	    runTest: function() {
		doh.assertEqual(0, zen.DomNodeCompon.getCount(), "There should be exactly zero DomNodeCompon after deleting one");
		iframeDoc = dojo.byId("testBody").contentWindow.document;
		dojo.withDoc(iframeDoc, function() {
		    var body;
		    if ((body = dojo.body()) != null) {
			// A body element is left over from a previous test. Remove it.
			body.parentElement.removeChild(body);
		    }
		    bodyNodeCompon = zen.createNew(zen.DomNodeCompon, null, dojo.body());
		    bodyNodeCompon.remove();
		    doh.assertEqual("undefined", typeof dojo.body(),
				    "The BODY element should have been removed during the removal of the DomNodeCompon");
		});
	    }
	},
	{
	    name: "5. zen.createNew (zen.DomNodeCompon, 'body1', dojo.body()) returns a DOM node component for the BODY element and sets its id",
	    setUp: function() {
		setUp();
	    },
	    runTest: function() {
		var iframeDoc = dojo.byId("testBody").contentWindow.document;
		dojo.withDoc(iframeDoc, function() {
		    dojo.query("html")[0].appendChild(dojo.create("BODY"));
		    bodyNodeCompon = zen.createNew(zen.DomNodeCompon, "body1", dojo.body());
		    doh.assertEqual(1, zen.DomNodeCompon.getCount(), "There should be exactly one DomNodeCompon as of now");
		    doh.assertTrue(bodyNodeCompon instanceof zen.DomNodeCompon,
				   "zen.createNew should have returned a zen.DomNodeCompon");
		    doh.assertEqual("[HTML Compon HTMLBodyElement]",
				    bodyNodeCompon.toString(),
				    "The new DomNodeCompon should be represented as '[HTML Compon HTMLBodyElement]'");
		    doh.assertEqual("[object HTMLBodyElement]",
				    bodyNodeCompon.getDomNode(),
				    "The new DomNodeCompon's DOM node should be represented as '[object HTMLBodyElement]'");
		    doh.assertEqual("body1", bodyNodeCompon.getId(), "The ID of the new DomNodeCompon's DOM node should be 'body1'");
		    doh.assertEqual(bodyNodeCompon,
				    zen.DomNodeCompon.byId("body1"),
				    "The DomNodeCompon class method 'byId' should retrieve the DOM node component");
		});
	    }
	},
	{
	    name: "6. zen.createElement ('DIV', { style:'width:100px; height:50px; background-color:red' }) creates a 100-by-50-pixel red DIV",
	    setUp: function() {
		setUp();
	    },
	    runTest: function() {
		var iframeDoc = dojo.byId("testBody").contentWindow.document;
		dojo.withDoc(iframeDoc, function() {
		    var divCountBefore = dojo.query("div").length, id;
		    domNodeCompon = zen.createElement(
			"DIV", { style:'width:100px;height:50px;background-color:red' });
		    dojo.body().appendChild(domNodeCompon.getDomNode());
		    doh.assertEqual(divCountBefore+1, dojo.query("div").length, "There should be one more DomNodeCompons now");
		    id = domNodeCompon.getId();
		    doh.assertEqual(domNodeCompon, zen.DomNodeCompon.byId(id), "The DomNodeCompon should be retrievable by its id");
		    });
	    }
	}
    ]);
