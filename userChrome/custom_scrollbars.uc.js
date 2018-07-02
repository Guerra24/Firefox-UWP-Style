"use strict";

/* Firefox 57+ userChrome.js tweaks - SCROLLBARS ********************************************** */
/* by Aris (aris-addons@gmx.net)*************************************************************** */
/* Github: https://github.com/aris-t2/customscrollbarsforfx *********************************** */
/* ******************************************************************************************** */

/* ******************************************************************************************** */
/* Custom Scrollbars for Firefox ************************************************************** */
/* version 1.0.4 ****************************************************************************** */
/* ******************************************************************************************** */

/* ***********************************************************************************************

 README
 
 [!] either 'method 1' or 'method 2' are required to prepare Firefox for custom JavaScript files
 [!] 'custom_scrollbars.uc.js' file belongs into Firefox profiles 'chrome' folder!
 -> finding profile folder: address bar > about:profiles > Root Directory > Open Folder
 -> add file to \chrome\ folder (create one, if needed)

 [!] STARTUP CACHE HAS TO BE DELETED AFTER EVERY CHANGE!
 -> finding 'startupCache' folder: address bar > about:profiles > Local Directory > Open Folder > startupCache
 -> close Firefox
 -> delete 'startupCache' folders content

 ENABLING options > set var to true
 DISABLING options > set var to false
 Modifying appearance > change values
 - color - name: red, blue, transparent / hex code: #33CCFF, #FFF
 - color - rgb(a): rgba(0,0,255,0.8) / hsl(a): hsla(240,100%,50%,0.8)
 - numbers: 1, 2, 3 ... 10, 11, 12 ...
 - opacity: 0.0 to 1.0 e.g. 1.4, 1,75
 - gradients: linear-gradient(direction, color, color, color)
 - gradients example: linear-gradient(to right, blue, #33CCFF, rgba(0,0,255,0.8))
 - unsettings predefined gradients: transparent,rgba(255,255,255,0.5),transparent -> transparent,rgba(255,255,255,0.0),transparent
 - button size with arrow (descriptions for vertical scrollbars - analogous for horizontal scrollbars)
 -- 1: space above arrow = arrow height
 -- 1.5: space above arrow = 0.5 * arrow height
 -- 2: no space above arrow
 
 NOTE
 - This is a tiny collection of scrollbar tweaks, not a port of 'NewScrollbars' add-on!
 - Small scrollbar width values will corrupt some parts of the ui!
 
*********************************************************************************************** */

// GENERAL SCROLLBAR SETTINGS
var hide_scrollbars = false; // default: hide_scrollbars = false
var hide_scrollbar_buttons = false; // default: hide_scrollbar_buttons = false
var custom_scrollbar_size = true; // default: custom_scrollbar_size = false
var custom_scrollbar_size_value = 16; // in px // default: custom_scrollbar_size_value = 17
var custom_scrollbar_opacity = false; // default: custom_scrollbar_opacity = false
var custom_opacity_value = "1.0"; // default: custom_opacity_value = "1.0"
// floating scrollbars
var enable_scrollbars_on_top_of_webcontent = false; // default: enable_scrollbars_on_top_of_webcontent = false // uses 'custom_scrollbar_size_value' inside its code
// custom scrollbars
var enable_custom_scrollbars = true; // default: enable_custom_scrollbars = true

// CUSTOM SCROLLBAR SETTINGS ("custom_scrollbar_" --> "cs_")
var cs_thumb_border = 0; // in px // default: cs_thumb_border = 0
var cs_thumb_roundness = 0; // in px // default: cs_thumb_roundness = 0
var cs_buttons_roundness = 0; // in px // default: cs_buttons_roundness = 0
var cs_buttons_as_arrows = false; // default: cs_buttons_as_arrows = false // uses 'custom_scrollbar_size_value' inside its code
var cs_arrows_on_buttons = true; // default: cs_arrows_on_buttons = true // uses 'custom_scrollbar_size_value' inside its code
// button size with arrow - 1: space above arrow = arrow height // 1.5: space above arrow = 0.5 * arrow height // 2: no space above arrow
var cs_arrows_on_buttons_buttons_size = 1.5; // default: cs_arrows_on_buttons_buttons_size = 1.5
// 'flat' scrollbars
var cs_ignore_color_gradients = true; // default: cs_ignore_color_gradients = false

// CUSTOM SCROLLBAR COLORS/GRADIENTS
// - background
var cs_background_color = "#1B1B1B"; // default: cs_background_color = "#DDDDDD"
var cs_background_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)"; // default: cs_background_image_vertical = "unset"
var cs_background_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)"; // default: cs_background_image_horizontal = "unset"
// - corner
var cs_corner_background_color = "#1B1B1B"; // default: cs_corner_background_color = "#DDDDDD"
var cs_corner_background_image = "linear-gradient(45deg,transparent 30%,rgba(255,255,255,0.5) 50%,transparent 70%),linear-gradient(-45deg,transparent 30%,rgba(255,255,255,0.5) 50%,transparent 70%)"; // default: cs_corner_background_image = "unset"
// - thumb/slider
var cs_thumb_color = "#494949"; // default: cs_thumb_color = "#33CCFF"
var cs_thumb_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)"; // default: cs_thumb_image_vertical = "unset"
var cs_thumb_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)"; // default: cs_thumb_image_horizontal = "unset"
var cs_thumb_hover_color = "#767676"; // default: cs_thumb_hover_color = "#66FFFF"
var cs_thumb_hover_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)"; // default: cs_thumb_hover_image_vertical = "unset"
var cs_thumb_hover_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)"; // default: cs_thumb_hover_image_horizontal = "unset"
var cs_thumb_active_color = "#A4A4A4"
var cs_thumb_border_color = "#33CCFF"; // default: cs_thumb_border_color = "#33CCFF"
// - buttons
var cs_buttons_color = "#1B1B1B"; // default: cs_buttons_color = "#66FFFF"
var cs_buttons_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)"; // default: cs_buttons_image_vertical = "unset"
var cs_buttons_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)"; // default: cs_buttons_image_horizontal = "unset"
var cs_buttons_hover_color = "#313131"; // default: cs_buttons_hover_color = "#33CCFF"
var cs_buttons_hover_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)"; // default: cs_buttons_hover_image_vertical = "unset"
var cs_buttons_hover_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)"; // default: cs_buttons_hover_image_horizontal = "unset"
var cs_buttons_active_color = "#A4A4A4"
// - button arrows
var cs_arrows_on_buttons_color = "#FFFFFF"; // default: cs_arrows_on_buttons_color = "#33CCFF"
var cs_arrows_on_buttons_hover_color = "#FFFFFF"; // default: cs_arrows_on_buttons_hover_color = "#66FFFF"
var cs_arrows_on_buttons_active_color = "#4F4F4F"

// unset background image color gradients -> flat scrollbars
if(cs_ignore_color_gradients==true)
	cs_background_image_vertical
	=cs_background_image_horizontal
	=cs_corner_background_image=cs_thumb_image_vertical
	=cs_thumb_image_horizontal
	=cs_thumb_hover_image_vertical
	=cs_thumb_hover_image_horizontal
	=cs_buttons_image_vertical
	=cs_buttons_image_horizontal
	=cs_buttons_hover_image_vertical
	=cs_buttons_hover_image_horizontal
	="unset";

/* ******************************************************************************************** */
/* ******************************************************************************************** */
/* ******************************************************************************************** */


// Scrollbar code

Components.utils.import("resource://gre/modules/Services.jsm");
var ss =  Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

var custom_scrollbars = {

	init: function() {

	var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
	\
	@namespace html url("http://www.w3.org/1999/xhtml");\
	\
	scrollbar, scrollcorner, scrollbar thumb, scrollbar scrollbarbutton {\
	  -moz-appearance: none !important;\
	}\
	scrollbar {\
	  background-color: '+cs_background_color+' !important;\
	}\
	scrollbar[orient="vertical"] {\
	  background-image: '+cs_background_image_vertical+' !important;\
	}\
	scrollbar[orient="horizontal"] {\
	  background-image: '+cs_background_image_horizontal+' !important;\
	}\
	scrollcorner {\
	  background-color: '+cs_corner_background_color+' !important;\
	  background-image: '+cs_corner_background_image+' !important;\
	}\
	scrollbar thumb {\
	  background-color: '+cs_thumb_color+' !important;\
	  border-radius: '+cs_thumb_roundness+'px !important;\
	  border: '+cs_thumb_border+'px solid '+cs_thumb_border_color+' !important;\
	}\
	scrollbar thumb[orient="vertical"] {\
	  background-image: '+cs_thumb_image_vertical+' !important;\
	}\
	scrollbar thumb[orient="horizontal"] {\
	  background-image: '+cs_thumb_image_horizontal+' !important;\
	}\
	scrollbar thumb:hover {\
	  background-color: '+cs_thumb_hover_color+' !important;\
	}\
	scrollbar thumb:active {\
	  background-color: '+cs_thumb_active_color+' !important;\
	}\
	scrollbar thumb[orient="vertical"]:hover, scrollbar thumb[orient="vertical"]:active {\
	  background-image: '+cs_thumb_hover_image_vertical+' !important;\
	}\
	scrollbar thumb[orient="horizontal"]:hover, scrollbar thumb[orient="horizontal"]:active {\
	  background-image: '+cs_thumb_hover_image_horizontal+' !important;\
	}\
	scrollbar scrollbarbutton {\
	  background-color: '+cs_buttons_color+' !important;\
	  border-radius: '+cs_buttons_roundness+'px !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton {\
	  background-image: '+cs_buttons_image_vertical+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton {\
	  background-image: '+cs_buttons_image_horizontal+' !important;\
	}\
	scrollbar scrollbarbutton:hover {\
	  background-color: '+cs_buttons_hover_color+' !important;\
	}\
	scrollbar scrollbarbutton:active {\
	  background-color: '+cs_buttons_active_color+' !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton:hover {\
	  background-image: '+cs_buttons_hover_image_vertical+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton:hover {\
	  background-image: '+cs_buttons_hover_image_horizontal+' !important;\
	}\
	'), null, null);

	ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

	}
};

var cs_scrollbars_scrollbar_button_arrows = {

  init: function() {

  var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
	\
	@namespace html url("http://www.w3.org/1999/xhtml");\
	\
	scrollbar scrollbarbutton, \
	scrollbar[orient="vertical"] scrollbarbutton,\
	scrollbar[orient="horizontal"] scrollbarbutton, \
	scrollbar[orient="vertical"] scrollbarbutton:hover,\
	scrollbar[orient="horizontal"] scrollbarbutton:hover {\
	  background-color: unset !important;\
	  background-image: unset !important;\
	  border-radius: 0px !important;\
	}\
	scrollbar[orient="vertical"] > scrollbarbutton {\
	  min-height: '+(custom_scrollbar_size_value/cs_arrows_on_buttons_buttons_size)+'px !important;\
	  height: '+(custom_scrollbar_size_value/cs_arrows_on_buttons_buttons_size)+'px !important;\
	  max-height: '+(custom_scrollbar_size_value/cs_arrows_on_buttons_buttons_size)+'px !important;\
	  min-width: '+custom_scrollbar_size_value+'px !important;\
	  width: '+custom_scrollbar_size_value+'px !important;\
	  max-width: '+custom_scrollbar_size_value+'px !important;\
	}\
	scrollbar[orient="horizontal"] > scrollbarbutton {\
	  min-width: '+(custom_scrollbar_size_value/cs_arrows_on_buttons_buttons_size)+'px !important;\
	  width: '+(custom_scrollbar_size_value/cs_arrows_on_buttons_buttons_size)+'px !important;\
	  max-width: '+(custom_scrollbar_size_value/cs_arrows_on_buttons_buttons_size)+'px !important;\
	  min-height: '+custom_scrollbar_size_value+'px !important;\
	  height: '+custom_scrollbar_size_value+'px !important;\
	  max-height: '+custom_scrollbar_size_value+'px !important;\
	}\
	scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"] {\
	  border-left: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-right: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-bottom: '+(custom_scrollbar_size_value/2)+'px solid '+cs_buttons_color+' !important;\
	}\
	scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"]:hover {\
	  border-bottom: '+(custom_scrollbar_size_value/2)+'px solid '+cs_buttons_hover_color+' !important;\
	}\
	scrollbar[orient="vertical"] > scrollbarbutton[type="increment"] {\
	  border-left: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-right: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-top: '+(custom_scrollbar_size_value/2)+'px solid '+cs_buttons_color+' !important;\
	}\
	scrollbar[orient="vertical"] > scrollbarbutton[type="increment"]:hover {\
	  border-top: '+(custom_scrollbar_size_value/2)+'px solid '+cs_buttons_hover_color+' !important;\
	}\
	scrollbar[orient="horizontal"] > scrollbarbutton[type="decrement"] {\
	  border-top: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-bottom: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-right: '+(custom_scrollbar_size_value/2)+'px solid '+cs_buttons_color+' !important;\
	}\
	scrollbar[orient="horizontal"] > scrollbarbutton[type="decrement"]:hover {\
	  border-right: '+(custom_scrollbar_size_value/2)+'px solid '+cs_buttons_hover_color+' !important;\
	}\
	scrollbar[orient="horizontal"] > scrollbarbutton[type="increment"] {\
	  border-top: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-bottom: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-left: '+(custom_scrollbar_size_value/2)+'px solid '+cs_buttons_color+' !important;\
	}\
	scrollbar[orient="horizontal"] > scrollbarbutton[type="increment"]:hover {\
	  border-left: '+(custom_scrollbar_size_value/2)+'px solid '+cs_buttons_hover_color+' !important;\
	}\
	\
  '), null, null);

  ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

  }
};

var cs_scrollbars_arrows_on_buttons = {

  init: function() {

  var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
	\
	@namespace html url("http://www.w3.org/1999/xhtml");\
	\
	scrollbar scrollbarbutton, \
	scrollbar[orient="vertical"] scrollbarbutton,\
	scrollbar[orient="horizontal"] scrollbarbutton, \
	scrollbar[orient="vertical"] scrollbarbutton:hover,\
	scrollbar[orient="horizontal"] scrollbarbutton:hover {\
	  border-radius: 0px !important;\
	}\
	\
	scrollbar[orient="vertical"] > scrollbarbutton {\
	  min-height: '+(custom_scrollbar_size_value/cs_arrows_on_buttons_buttons_size)+'px !important;\
	  height: '+(custom_scrollbar_size_value/cs_arrows_on_buttons_buttons_size)+'px !important;\
	  max-height: '+(custom_scrollbar_size_value/cs_arrows_on_buttons_buttons_size)+'px !important;\
	  min-width: '+custom_scrollbar_size_value+'px !important;\
	  width: '+custom_scrollbar_size_value+'px !important;\
	  max-width: '+custom_scrollbar_size_value+'px !important;\
	}\
	scrollbar[orient="horizontal"] > scrollbarbutton {\
	  min-width: '+(custom_scrollbar_size_value/cs_arrows_on_buttons_buttons_size)+'px !important;\
	  width: '+(custom_scrollbar_size_value/cs_arrows_on_buttons_buttons_size)+'px !important;\
	  max-width: '+(custom_scrollbar_size_value/cs_arrows_on_buttons_buttons_size)+'px !important;\
	  min-height: '+custom_scrollbar_size_value+'px !important;\
	  height: '+custom_scrollbar_size_value+'px !important;\
	  max-height: '+custom_scrollbar_size_value+'px !important;\
	}\
	scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"] {\
	  border-left: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-right: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-bottom: '+(custom_scrollbar_size_value/2)+'px solid '+cs_arrows_on_buttons_color+' !important;\
	}\
	scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"]:hover {\
	  border-bottom: '+(custom_scrollbar_size_value/2)+'px solid '+cs_arrows_on_buttons_hover_color+' !important;\
	}\
	scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"]:active {\
	  border-bottom: '+(custom_scrollbar_size_value/2)+'px solid '+cs_arrows_on_buttons_active_color+' !important;\
	}\
	scrollbar[orient="vertical"] > scrollbarbutton[type="increment"] {\
	  border-left: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-right: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-top: '+(custom_scrollbar_size_value/2)+'px solid '+cs_arrows_on_buttons_color+' !important;\
	}\
	scrollbar[orient="vertical"] > scrollbarbutton[type="increment"]:hover {\
	  border-top: '+(custom_scrollbar_size_value/2)+'px solid '+cs_arrows_on_buttons_hover_color+' !important;\
	}\
	scrollbar[orient="vertical"] > scrollbarbutton[type="increment"]:active {\
	  border-top: '+(custom_scrollbar_size_value/2)+'px solid '+cs_arrows_on_buttons_active_color+' !important;\
	}\
	scrollbar[orient="horizontal"] > scrollbarbutton[type="decrement"] {\
	  border-top: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-bottom: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-right: '+(custom_scrollbar_size_value/2)+'px solid '+cs_arrows_on_buttons_color+' !important;\
	}\
	scrollbar[orient="horizontal"] > scrollbarbutton[type="decrement"]:hover {\
	  border-right: '+(custom_scrollbar_size_value/2)+'px solid '+cs_arrows_on_buttons_hover_color+' !important;\
	}\
	scrollbar[orient="horizontal"] > scrollbarbutton[type="decrement"]:active {\
	  border-right: '+(custom_scrollbar_size_value/2)+'px solid '+cs_arrows_on_buttons_active_color+' !important;\
	}\
	scrollbar[orient="horizontal"] > scrollbarbutton[type="increment"] {\
	  border-top: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-bottom: '+(custom_scrollbar_size_value/2)+'px solid transparent !important;\
	  border-left: '+(custom_scrollbar_size_value/2)+'px solid '+cs_arrows_on_buttons_color+' !important;\
	}\
	scrollbar[orient="horizontal"] > scrollbarbutton[type="increment"]:hover {\
	  border-left: '+(custom_scrollbar_size_value/2)+'px solid '+cs_arrows_on_buttons_hover_color+' !important;\
	}\
	scrollbar[orient="horizontal"] > scrollbarbutton[type="increment"]:active {\
	  border-left: '+(custom_scrollbar_size_value/2)+'px solid '+cs_arrows_on_buttons_active_color+' !important;\
	}\
	\
  '), null, null);

  ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

  }
};

var scrollbar_buttons = {

  init: function() {

  var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
	\
	@namespace html url("http://www.w3.org/1999/xhtml");\
	\
	scrollbar scrollbarbutton {\
	  opacity: 0 !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton {\
	  min-height: 1px !important;\
	  height: 1px !important;\
	  max-height: 1px !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton {\
	  min-width: 1px !important;\
	  width: 1px !important;\
	  max-width: 1px !important;\
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
	  min-width: 0 !important;\
	  width: '+custom_scrollbar_size_value+'px !important;\
	  max-width: '+custom_scrollbar_size_value+'px !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton {\
	  min-height: 0 !important;\
	  height: '+custom_scrollbar_size_value+'px !important;\
	  max-height: '+custom_scrollbar_size_value+'px !important;\
	}\
	\
  '), null, null);

  ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

  }
};

var floating_scrollbars = {

  init: function() {

  var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
	\
	@namespace html url("http://www.w3.org/1999/xhtml");\
	\
	scrollbar {\
	  position: relative !important;\
	  z-index: 1000000000 !important;\
	}\
	scrollbar[orient="vertical"],\
	scrollbar[orient="horizontal"],\
	scrollbar, scrollcorner {\
	  background-color: transparent !important; \
	  background-image: unset !important; \
	}\
	scrollbar[orient="vertical"] {\
	  -moz-margin-start: -'+custom_scrollbar_size_value+'px !important;\
	  width: '+custom_scrollbar_size_value+'px !important;\
	}\
	scrollbar[orient="horizontal"] {\
	  margin-top: -'+custom_scrollbar_size_value+'px !important;\
	  height: '+custom_scrollbar_size_value+'px !important;\
	}\
	\
  '), null, null);

  ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

  }
};

var scrollbar_opacity = {

  init: function() {

  var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
	\
	@namespace html url("http://www.w3.org/1999/xhtml");\
	\
	scrollbar {\
	  opacity: '+custom_opacity_value+' !important;\
	}\
	\
  '), null, null);

  ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

  }
};

var remove_scrollbars = {

  init: function() {

  var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
	\
	@namespace html url("http://www.w3.org/1999/xhtml");\
	\
	scrollbar, scrollcorner {\
	  display: none !important;\
	  visibility: collapse !important;\
	}\
	\
  '), null, null);

  ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

  }
};

// enable settings as configured above
if(enable_custom_scrollbars==true) custom_scrollbars.init();
if(cs_buttons_as_arrows==true && hide_scrollbars==false) cs_scrollbars_scrollbar_button_arrows.init();
if(cs_arrows_on_buttons==true && cs_buttons_as_arrows==false && hide_scrollbars==false) cs_scrollbars_arrows_on_buttons.init();
if(hide_scrollbar_buttons==true) scrollbar_buttons.init();
if(custom_scrollbar_size==true) scrollbar_size.init();
if(enable_scrollbars_on_top_of_webcontent==true) floating_scrollbars.init();
if(custom_scrollbar_opacity==true) scrollbar_opacity.init();
if(hide_scrollbars==true) remove_scrollbars.init();