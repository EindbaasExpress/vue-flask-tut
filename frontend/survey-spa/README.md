# survey-spa

> A Vue.js project based on tutorial:
https://stackabuse.com/single-page-apps-with-vue-js-and-flask-setting-up-vue-js/


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Dev Setup:
- Say `Y` to eslint in Vue configuration, select airbnb.
- install `eslint` extension, (airbnb-version should be taken from eslintrc.js)
- install `prettier` extension
- install `eslint-plugin-import` via npm
- edit user settings in VSCode to match settings in airbnb vue eslint prebuild hook
> (Code > Preferences > Settings > User Settings):
```
"prettier.singleQuote": true,
    "prettier.trailingComma": "all",
    "javascript.preferences.quoteStyle": "single",
    "eslint.validate": [
        {
          "language": "vue",
          "autoFix": true
        },
        {
          "language": "html",
          "autoFix": true
        },
        {
          "language": "javascript",
          "autoFix": true
        }
      ]
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
