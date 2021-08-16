# Firefox UWP Style

A theme that follows MDL2 styling with the accent color and gray-on-black or gray-on-white elements.

## Install

Uses OS-level dark/light setting to apply the correct colors. This can cause color issues if you select a theme inside Firefox, to avoid them use the default theme.

Select the appropriate file:

- [Nightly](https://github.com/Guerra24/Firefox-UWP-Style/archive/refs/heads/nightly.zip)
- [Firefox 89 - 92](https://github.com/Guerra24/Firefox-UWP-Style/archive/refs/heads/firefox-89.zip)
- [Firefox 88](https://github.com/Guerra24/Firefox-UWP-Style/archive/refs/heads/firefox-88.zip)
- [Firefox 76 - 87](https://github.com/Guerra24/Firefox-UWP-Style/archive/refs/heads/firefox-76.zip)

Copy the content inside the folder where userChrome.css file is located into your *chrome* folder.

Toggle `toolkit.legacyUserProfileCustomizations.stylesheets` pref in `about:config` and restart Firefox.

## Customize

Toggle `layout.css.backdrop-filter.enabled` pref to enable *acrylic blur* in some menus.

### Custom CSS

If you want to change any rules use `customChrome.css` and `customContent.css`.

All the theme vars `--uwp-*` can be overridden, Firefox vars too but only if they are not set using `!important`.

### Accent Color (Only 88+)

If you want to override the accent color create two new prefs, both string type set to RGB Hex values.

`ui.-moz-accent-color`=`#FF00FF` Accent color

`ui.-moz-accent-color-foreground`=`#FFFFFF` Text color when the background is the accent color.

## Screenshots

![01](https://s3.guerra24.net/projects/firefox-uwp/screenshots/01.png)
![02](https://s3.guerra24.net/projects/firefox-uwp/screenshots/02.png)
![04](https://s3.guerra24.net/projects/firefox-uwp/screenshots/03.png)
![05](https://s3.guerra24.net/projects/firefox-uwp/screenshots/04.png)
![05](https://s3.guerra24.net/projects/firefox-uwp/screenshots/05.png)
![06](https://s3.guerra24.net/projects/firefox-uwp/screenshots/06.png)
![07](https://s3.guerra24.net/projects/firefox-uwp/screenshots/07.png)
![08](https://s3.guerra24.net/projects/firefox-uwp/screenshots/08.png)
![09](https://s3.guerra24.net/projects/firefox-uwp/screenshots/09.png)
