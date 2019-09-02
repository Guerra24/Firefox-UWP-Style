# Firefox UWP Style

This is a very visually simple theme that follows MDL2 styling with the accent color and gray-on-black elements, combines both while remaining original.

## Install

This theme only supports the default Dark mode and Compact UI, selection of other type [in the customization page](https://puu.sh/AORte/1e2ae0255e.png) is disabled.

From Firefox 69 onwards, new users will have to toggle the `toolkit.legacyUserProfileCustomizations.stylesheets` pref in `about:config` to enable both userChrome.css and userContent.css, users that already had a css file will have it enabled by default.

Select the branch that targets your version of Firefox.

- master > Nightly
- firefox-68 > Firefox 68, 69 & 70.
- firefox-65 > Firefox 65, 66 & 67.
- firefox-61 > Firefox 61, 62, 63 & 64.
- firefox-58 > Firefox 58, 59 & 60.

### With Git

Go into your Firefox profile folder and clone the repo:
`git clone -b <branch> https://github.com/Guerra24/Firefox-UWP-Style.git chrome`

Replace `<branch>` with the one that targets your version of Firefox.

Now restart Firefox and the theme will be enabled.

### Without Git

Download the code of the branch as ZIP, copy the content inside the folder(where the userChrome.css file is located) into your chrome folder.

Now restart Firefox and the theme will be enabled.

## Tweaks

Check userChrome.css for customizable variables or restore elements.

## Acknowledges

Scrollbar JS loading code by [Aris-t2](https://github.com/Aris-t2) (https://github.com/Aris-t2/Scrollbars)

## Screenshots

![01](.github/screenshots/01.png)
![02](.github/screenshots/02.png)
![04](.github/screenshots/03.png)
![05](.github/screenshots/04.png)
![05](.github/screenshots/05.png)
![06](.github/screenshots/06.png)
![07](.github/screenshots/07.png)
![08](.github/screenshots/08.png)
![09](.github/screenshots/09.png)
