# EVEE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Notes
To disable cross origin security (spotify):  
https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome  
`chromium-browser --disable-web-security` to disable it   
`--user-data-dir="[some directory here]"` might also need to be added    
`-–allow-file-access-from-files` to allow your brower to access file system    
`--disable-site-isolation-trials` also seem to be necessary   
` --kiosk --disable-infobars --no-startup-window`
https://superuser.com/questions/237608/how-to-hide-chrome-warning-after-crash   
chrome://flags/  
https://github.com/GoogleChrome/puppeteer/issues/2070  
https://stackoverflow.com/questions/49169990/disable-infobars-argument-unable-to-hide-the-infobar-with-the-message-chrome-is


### Spotify
`https://open.spotify.com/track/7wKzj1b8YKPuZELfVDz708`  
`https://open.spotify.com/embed/track/7wKzj1b8YKPuZELfVDz708`  
```html
<iframe src="https://open.spotify.com/embed/track/7wKzj1b8YKPuZELfVDz708" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
```
```js
document.getElementById("main").childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].click()
```
```js
document.getElementsByTagName('iframe')[0].contentWindow.document
```
https://glitch.com/@spotify