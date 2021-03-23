# Firefox UWP Style

A theme that follows MDL2 styling with the accent color and gray-on-black or gray-on-white elements, combines both while remaining original.

## Install

The theme uses OS-level dark/light setting to apply the correct colors. This can cause color issues if you select a theme inside Firefox, to avoid it use the default theme.

Light theme is not 100% finished, some rarely used pages may fallback to dark colors.

Firefox's density modes are supported but only the compact one has been thoroughly tested, if you see any issues please report them here.

Toggle `toolkit.legacyUserProfileCustomizations.stylesheets` pref in `about:config`.

Select the branch that targets your version of Firefox.

- master > Nightly
- firefox-88 > Firefox 88.
- firefox-76 > Firefox 76 ~ 87.

### With Git

Go into your Firefox profile folder and clone the repo:
`git clone -b <branch> https://github.com/Guerra24/Firefox-UWP-Style.git chrome`

Replace `<branch>` with the one that targets your version of Firefox.

Now restart Firefox and the theme will be enabled.

Remember to check for newer branches as the supported one can change when firefox updates.

### Without Git

Download the code of the branch as ZIP, copy the content inside the folder(where userChrome.css file is located) into your chrome folder.

Now restart Firefox and the theme will be enabled.

## Customize

### Custom CSS

If you want to change any rules use `customChrome.css` and `customContent.css`.

All the theme vars `--uwp-*` can be overridden, Firefox vars too but only if they are not set using `!important`.

### Accent Color (Only 88+)

If you want to override the accent color create two new prefs, both string type set to RGB Hex values.

`ui.-moz-accent-color=#FF00FF` Accent color

`ui.-moz-accent-color-foreground=#FFFFFF` Text color when the background is the accent color.

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
