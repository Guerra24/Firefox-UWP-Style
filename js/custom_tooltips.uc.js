"use strict";

Components.utils.import("resource://gre/modules/Services.jsm");
var ss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

var custom_tooltips = {

	init: function() {

	var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
	\
	@namespace html url("http://www.w3.org/1999/xhtml");\
	tooltip {\
		-moz-appearance: none !important;\
		color: white !important;\
		background-color: #2B2B2B !important;\
		border: 1px solid #1C1C1C !important;\
		padding: 6px !important;\
	}\
	\
	'), null, null);

	ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

	}
};

custom_tooltips.init();
console.log("Init Custom Tooltips!");