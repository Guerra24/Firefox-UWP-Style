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
var cs_background_color = "#1B1B1B";
var cs_corner_background_color = "#1B1B1B";
var cs_thumb_color = "#494949";
var cs_thumb_hover_color = "#767676";
var cs_thumb_active_color = "#A4A4A4";

// Up and down are swapped
//
// cs_buttons_image_vertical_up = scroll-down
// cs_buttons_image_vertical_down = scroll-up
var cs_buttons_color = "#1B1B1B";
var cs_buttons_image_vertical_up = " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAABjSURBVDhPpc4xDsAgDENRLpb7z4w5TVoPlghYqFaHJ8GHIEZV/SKjQ0aHjA4ZHTI6jjDnrIh4l72j4WzvbQO4mJntEdWobWgduA3DEYiDt2GQkfiDva9kdMjokNEho0PG72o8XQnvdbbgCy0AAAAASUVORK5CYII=')";
var cs_buttons_image_vertical_down = " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMjHxIGmVAAAAYElEQVQ4T6XOQQrAIAwFUS+W+69d5jQpKQSqHYK/XbyFowmOiPgFowKjAqMCowJjMbNIe3/CmHLQ3W/dEow1XD/olrwCDXRLlkOac+LDbHm39+XwBUYFRgVGBUYFxnMxLkMm73UGjRV4AAAAAElFTkSuQmCC')";
var cs_buttons_image_horizontal_right = " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAABcSURBVDhPpdExCsAwDARBf0z/r1XqNUquMJhkwRIqBsIaXZOVmSMYOzB2YOzAKO6eZvZ+8vuGUXQcEdcRjFtlBOPpNvILX6OB27FglMqxYJTxb6zC2IGxA2NdrgfofO91PvWFQgAAAABJRU5ErkJggg==')";
var cs_buttons_image_horizontal_left = " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAABeSURBVDhPpdExDsAgDARBPub/15R+zSVXWELRFnYoRqBFdsOSdAXjBMYJjBMYTxGhvfd75XeMxcOZKZ/ft4LROsOGsTtsGK8XWHcJxtJZgvHk4d/f2IFxAuMExj6tB7ek73Xun2ciAAAAAElFTkSuQmCC')";
var cs_buttons_hover_color = "#313131";
var cs_buttons_hover_image_vertical_up = " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAABjSURBVDhPpc5BCgAhDENRj9jTu+pdOpNFwGqQCbN4oF8rjqr6RUaHjA4ZHTI6ZHQcYc5ZEfEue0fD2d7bBnAxM9sjqlHb0DpwG4YjEAdvwyAj8Qd7X8nokNEho0NGh4zf1XgAGvDy59ZQWw4AAAAASUVORK5CYII=')";
var cs_buttons_hover_image_vertical_down = " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMjHxIGmVAAAAX0lEQVQ4T6XOQQrAIAwFUY+Y07vKXVJSCFQ7BH+7eAtHExwR8QtGBUYFRgVGBcZiZpH2/oQx5aC737olGGu4ftAteQUa6JYshzTnxIfZ8m7vy+ELjAqMCowKjAqM52JciKPy55L9iPoAAAAASUVORK5CYII=')";
var cs_buttons_hover_image_horizontal_right = " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAABbSURBVDhPpdFBCsAwCETRHNHTu/IutrMIhPZDFBcPyg/OpiszRzB2YOzA2IFR3D3N7P3k9w2j6DgiriMYt8oIxtNt5Be+RgO3Y8EolWPBKOPfWIWxA2MHxrpcD+YC8uc2Zo3yAAAAAElFTkSuQmCC')";
var cs_buttons_hover_image_horizontal_left = " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAABdSURBVDhPpdExDsAgDARBnujXU/kvl1xhCUVb2KEYgRbZDUvSFYwTGCcwTmA8RYT23u+V3zEWD2emfH7fCkbrDBvG7rBhvF5g3SUYS2cJxpOHf39jB8YJjBMY+7QevYLy5xkA+vQAAAAASUVORK5CYII=')";
var cs_buttons_active_color = "#A4A4A4";
var cs_buttons_active_image_vertical_up = " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAABjSURBVDhPpc7BDcAgDENRNswAbJZl0/pgiYCFavXwJPgQxKiqX2R0yOiQ0SGjQ0bHEeaclZnvsnc0nO29bQAXI6I9ohq1Da0Dt2E4AnHwNgwyEn+w95WMDhkdMjpkdMj4XY0H1HvyP1u9LeMAAAAASUVORK5CYII=')";
var cs_buttons_active_image_vertical_down = " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMjHxIGmVAAAAYElEQVQ4T6XOQQrAIAwFUW+YA3izXDYlhUC1Q/C3i7dwNMEREb9gVGBUYFRgVGAs7h5p708YUw6a2a1bgrGG6wfdkleggW7JckhzTnyYLe/2vhy+wKjAqMCowKjAeC7GBSPD8j+KQ2wHAAAAAElFTkSuQmCC')";
var cs_buttons_active_image_horizontal_right = " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAABcSURBVDhPpdFBCsAwCETR3NADeDMvazuLQGg/RHHxoPzgbLoycwRjB8YOjB0Yxd0zIt5Pft8wio7N7DqCcauMYDzdRn7hazRwOxaMUjkWjDL+jVUYOzB2YKzL9QCBj/I/P50nTgAAAABJRU5ErkJggg==')";
var cs_buttons_active_image_horizontal_left = " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAABeSURBVDhPpdGxDcAgDERRNvQAbOZlL7nCEop+YYfiCfSR3bAkXcE4gXEC4wTGU2Zq7/1e+R1j8XBEyOf3rWC0zrBh7A4bxusF1l2CsXSWYDx5+Pc3dmCcwDiBsU/rAXav8j/f+WhKAAAAAElFTkSuQmCC')";

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
	scrollbar, scrollcorner, scrollbar thumb, scrollbar scrollbarbutton {\
		-moz-appearance: none !important;\
	}\
	scrollbar {\
		background-color: '+cs_background_color+' !important;\
	}\
	scrollcorner {\
		background-color: '+cs_corner_background_color+' !important;\
	}\
	scrollbar thumb {\
		background-color: '+cs_thumb_color+' !important;\
	}\
	scrollbar thumb:hover {\
		background-color: '+cs_thumb_hover_color+' !important;\
	}\
	scrollbar thumb:active {\
		background-color: '+cs_thumb_active_color+' !important;\
	}\
	scrollbar scrollbarbutton {\
		background-color: '+cs_buttons_color+' !important;\
	}\
	scrollbar scrollbarbutton:hover {\
		background-color: '+cs_buttons_hover_color+' !important;\
	}\
	scrollbar scrollbarbutton:active {\
		background-color: '+cs_buttons_active_color+' !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton[type="increment"] {\
		background-image: '+cs_buttons_image_vertical_up+' !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton[type="decrement"] {\
		background-image: '+cs_buttons_image_vertical_down+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton[type="increment"] {\
		background-image: '+cs_buttons_image_horizontal_right+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton[type="decrement"] {\
		background-image: '+cs_buttons_image_horizontal_left+' !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton[type="increment"]:hover {\
		background-image: '+cs_buttons_hover_image_vertical_up+' !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton[type="decrement"]:hover {\
		background-image: '+cs_buttons_hover_image_vertical_down+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton[type="increment"]:hover {\
		background-image: '+cs_buttons_hover_image_horizontal_right+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton[type="decrement"]:hover {\
		background-image: '+cs_buttons_hover_image_horizontal_left+' !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton[type="increment"]:active {\
		background-image: '+cs_buttons_active_image_vertical_up+' !important;\
	}\
	scrollbar[orient="vertical"] scrollbarbutton[type="decrement"]:active {\
		background-image: '+cs_buttons_active_image_vertical_down+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton[type="increment"]:active {\
		background-image: '+cs_buttons_active_image_horizontal_right+' !important;\
	}\
	scrollbar[orient="horizontal"] scrollbarbutton[type="decrement"]:active {\
		background-image: '+cs_buttons_active_image_horizontal_left+' !important;\
	}\
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
		min-height: 16px !important;\
	}\
	scrollbar thumb[orient="horizontal"] {\
		min-width: 16px !important;\
	}\
	\
	'), null, null);

	ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

	}
};

custom_scrollbars.init();
scrollbar_size.init();
console.log("Init Custom Scrollbars!");