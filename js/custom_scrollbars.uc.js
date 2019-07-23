"use strict";

/* Firefox 57+ userChrome.js tweaks - SCROLLBARS ********************************************** */
/* by Aris (aris-addons@gmx.net)*************************************************************** */
/* Github: https://github.com/Aris-t2/Scrollbars ********************************************** */
/* ******************************************************************************************** */

/* ******************************************************************************************** */
/* Custom Scrollbars for Firefox ************************************************************** */
/* version 1.0.4 ****************************************************************************** */
/* ******************************************************************************************** */

/* ******************************************************************************************** */
/* Modified by Guerra24 for Firefox-UWP-Style													*/
/* ******************************************************************************************** */


var custom_scrollbar_size_value = 16;

var cs_buttons_image_vertical_up = "url(\"data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g stroke='%23D9D9D9' fill='none'><polyline points='4.5,9.5 7.5,6.5 8.5,6.5 11.5,9.5' shape-rendering='geometricPrecision' stroke-width='1.25' /></g></svg>\")";
var cs_buttons_image_vertical_down = "url(\"data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g stroke='%23D9D9D9' fill='none' transform='rotate(180, 8, 8)'><polyline points='4.5,9.5 7.5,6.5 8.5,6.5 11.5,9.5' shape-rendering='geometricPrecision' stroke-width='1.25' /></g></svg>\")";
var cs_buttons_image_horizontal_right = "url(\"data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g stroke='%23D9D9D9' fill='none' transform='rotate(90, 8, 8)'><polyline points='4.5,9.5 7.5,6.5 8.5,6.5 11.5,9.5' shape-rendering='geometricPrecision' stroke-width='1.25' /></g></svg>\")";
var cs_buttons_image_horizontal_left = "url(\"data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g stroke='%23D9D9D9' fill='none' transform='rotate(-90, 8, 8)'><polyline points='4.5,9.5 7.5,6.5 8.5,6.5 11.5,9.5' shape-rendering='geometricPrecision' stroke-width='1.25' /></g></svg>\")";

var cs_buttons_hover_image_vertical_up = "url(\"data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g stroke='%23DCDCDC' fill='none'><polyline points='4.5,9.5 7.5,6.5 8.5,6.5 11.5,9.5' shape-rendering='geometricPrecision' stroke-width='1.25' /></g></svg>\")";
var cs_buttons_hover_image_vertical_down = "url(\"data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g stroke='%23DCDCDC' fill='none' transform='rotate(180, 8, 8)'><polyline points='4.5,9.5 7.5,6.5 8.5,6.5 11.5,9.5' shape-rendering='geometricPrecision' stroke-width='1.25' /></g></svg>\")";
var cs_buttons_hover_image_horizontal_right = "url(\"data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g stroke='%23DCDCDC' fill='none' transform='rotate(90, 8, 8)'><polyline points='4.5,9.5 7.5,6.5 8.5,6.5 11.5,9.5' shape-rendering='geometricPrecision' stroke-width='1.25' /></g></svg>\")";
var cs_buttons_hover_image_horizontal_left = "url(\"data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g stroke='%23DCDCDC' fill='none' transform='rotate(-90, 8, 8)'><polyline points='4.5,9.5 7.5,6.5 8.5,6.5 11.5,9.5' shape-rendering='geometricPrecision' stroke-width='1.25' /></g></svg>\")";

var cs_buttons_active_image_vertical_up = "url(\"data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g stroke='%234F4F4F' fill='none'><polyline points='4.5,9.5 7.5,6.5 8.5,6.5 11.5,9.5' shape-rendering='geometricPrecision' stroke-width='1.25' /></g></svg>\")";
var cs_buttons_active_image_vertical_down = "url(\"data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g stroke='%234F4F4F' fill='none' transform='rotate(180, 8, 8)'><polyline points='4.5,9.5 7.5,6.5 8.5,6.5 11.5,9.5' shape-rendering='geometricPrecision' stroke-width='1.25' /></g></svg>\")";
var cs_buttons_active_image_horizontal_right = "url(\"data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g stroke='%234F4F4F' fill='none' transform='rotate(90, 8, 8)'><polyline points='4.5,9.5 7.5,6.5 8.5,6.5 11.5,9.5' shape-rendering='geometricPrecision' stroke-width='1.25' /></g></svg>\")";
var cs_buttons_active_image_horizontal_left = "url(\"data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g stroke='%234F4F4F' fill='none' transform='rotate(-90, 8, 8)'><polyline points='4.5,9.5 7.5,6.5 8.5,6.5 11.5,9.5' shape-rendering='geometricPrecision' stroke-width='1.25' /></g></svg>\")";

/* ******************************************************************************************** */
/* ******************************************************************************************** */
/* ******************************************************************************************** */

Components.utils.import("resource://gre/modules/Services.jsm");
var ss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

var custom_scrollbars = {

	init: function() {

	var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
	\
	@namespace html url("http://www.w3.org/1999/xhtml");\
	\
	@media (prefers-color-scheme: dark) {\
		scrollbar {\
			--uwp-scrollbar: #1B1B1B;\
			--uwp-scrollbar-corner: #1B1B1B;\
			--uwp-scrollbar-thumb: #494949;\
			--uwp-scrollbar-thumb-hover: #767676;\
			--uwp-scrollbar-thumb-active: #A4A4A4;\
			--uwp-scrollbar-button: #1B1B1B;\
			--uwp-scrollbar-button-hover: #313131;\
			--uwp-scrollbar-button-active: #A4A4A4;\
		}\
	}\
	@media (prefers-color-scheme: light) {\
		scrollbar {\
			--uwp-scrollbar: #E9E9E9;\
			--uwp-scrollbar-corner: #E9E9E9;\
			--uwp-scrollbar-thumb: #BABABA;\
			--uwp-scrollbar-thumb-hover: #8C8C8C;\
			--uwp-scrollbar-thumb-active: #5D5D5D;\
			--uwp-scrollbar-button: #E9E9E9;\
			--uwp-scrollbar-button-hover: #D2D2D2;\
			--uwp-scrollbar-button-active: #5D5D5D;\
		}\
	}\
	scrollbar, scrollcorner, scrollbar thumb, scrollbar scrollbarbutton {\
		-moz-appearance: none !important;\
	}\
	scrollbar {\
		background-color: var(--uwp-scrollbar) !important;\
	}\
	scrollcorner {\
		background-color: var(--uwp-scrollbar-corner) !important;\
	}\
	scrollbar thumb {\
		background-color: var(--uwp-scrollbar-thumb) !important;\
	}\
	scrollbar thumb:hover {\
		background-color: var(--uwp-scrollbar-thumb-hover) !important;\
	}\
	scrollbar thumb:active {\
		background-color: var(--uwp-scrollbar-thumb) !important;\
	}\
	scrollbar scrollbarbutton {\
		background-color: var(--uwp-scrollbar-button) !important;\
	}\
	scrollbar scrollbarbutton:hover {\
		background-color: var(--uwp-scrollbar-button-hover) !important;\
	}\
	scrollbar scrollbarbutton:active {\
		background-color: var(--uwp-scrollbar-button-active) !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton[type="increment"] {\
		background-image: '+cs_buttons_image_vertical_down+' !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton[type="decrement"] {\
		background-image: '+cs_buttons_image_vertical_up+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton[type="increment"] {\
		background-image: '+cs_buttons_image_horizontal_right+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton[type="decrement"] {\
		background-image: '+cs_buttons_image_horizontal_left+' !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton[type="increment"]:hover {\
		background-image: '+cs_buttons_hover_image_vertical_down+' !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton[type="decrement"]:hover {\
		background-image: '+cs_buttons_hover_image_vertical_up+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton[type="increment"]:hover {\
		background-image: '+cs_buttons_hover_image_horizontal_right+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton[type="decrement"]:hover {\
		background-image: '+cs_buttons_hover_image_horizontal_left+' !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton[type="increment"]:active {\
		background-image: '+cs_buttons_active_image_vertical_down+' !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton[type="decrement"]:active {\
		background-image: '+cs_buttons_active_image_vertical_up+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton[type="increment"]:active {\
		background-image: '+cs_buttons_active_image_horizontal_right+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton[type="decrement"]:active {\
		background-image: '+cs_buttons_active_image_horizontal_left+' !important;\
	}\
	\
	'), null, null);

	ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

	}
};

var scrollbar_size = {

	init: function() {

	var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
	\
	@namespace html url("http://www.w3.org/1999/xhtml");\
	\
	scrollbar[orient="vertical"] scrollbarbutton {\
		width: '+custom_scrollbar_size_value+'px !important;\
		height: '+custom_scrollbar_size_value+'px !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton {\
		width: '+custom_scrollbar_size_value+'px !important;\
		height: '+custom_scrollbar_size_value+'px !important;\
	}\
	scrollbar thumb[orient="vertical"] {\
		min-height: '+custom_scrollbar_size_value+'px !important;\
	}\
	scrollbar thumb[orient="horizontal"] {\
		min-width: '+custom_scrollbar_size_value+'px !important;\
	}\
	\
	'), null, null);

	ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

	}
};

custom_scrollbars.init();
scrollbar_size.init();
console.log("Init Custom Scrollbars!");