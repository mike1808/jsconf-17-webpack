# Armenia JSConf 17 Webpack Production Config

## Output

```bash

> jsconf-17-webpack@1.0.0 build /home/michael/workspace_my/jsconf-17-webpack
> webpack --config config/webpack.config.js --env production

Hash: b2405c73813341b4f647
Version: webpack 3.10.0
Time: 6468ms
                                                   Asset       Size  Chunks             Chunk Names
                    counter-icon.25bc583f2fed797c31c4.js  405 bytes       5  [emitted]  counter-icon
               logo.2c1a70ce3b206bd62d6879e9a6df9616.svg    1.32 kB          [emitted]  
fontawesome-webfont.677433a0892aaed7b7d2628c313c9775.svg    6 bytes          [emitted]  
                                 fontawesome-webfont.ttf     166 kB          [emitted]  
                                fontawesome-webfont.woff      98 kB          [emitted]  
                               fontawesome-webfont.woff2    77.2 kB          [emitted]  
                 bg.51b4c95613a415ab6f5c9244b9cdcbfd.jpg     192 kB          [emitted]  
                async-common-app.9c411f7cc115d7c6585f.js  190 bytes       0  [emitted]  async-common-app
                            logo.202ec99b224261938599.js  664 bytes       1  [emitted]  logo
                         counter.b6955471c29f92b3cf53.js    2.24 kB       2  [emitted]  counter
                          vendor.5edba6bf4ffad8be3e69.js     173 kB       3  [emitted]  vendor
                             app.de3abaffafa27afcdb13.js    4.28 kB       4  [emitted]  app
                                 fontawesome-webfont.eot     166 kB          [emitted]  
                        manifest.025f4225b819553b8adb.js    1.68 kB       6  [emitted]  manifest
                                                 app.css    5.88 kB       4  [emitted]  app
            async-common-app.9c411f7cc115d7c6585f.js.map  346 bytes       0  [emitted]  async-common-app
                        logo.202ec99b224261938599.js.map     1.5 kB       1  [emitted]  logo
                     counter.b6955471c29f92b3cf53.js.map    3.14 kB       2  [emitted]  counter
                      vendor.5edba6bf4ffad8be3e69.js.map     593 kB       3  [emitted]  vendor
                         app.de3abaffafa27afcdb13.js.map    6.77 kB       4  [emitted]  app
                                             app.css.map   84 bytes       4  [emitted]  app
                counter-icon.25bc583f2fed797c31c4.js.map  949 bytes       5  [emitted]  counter-icon
                    manifest.025f4225b819553b8adb.js.map    8.17 kB       6  [emitted]  manifest
                                              index.html  563 bytes          [emitted]  
[04Qr] ./App/App.css 93 bytes {4} [built]
[R9Rm] ./Counter/Counter.css 195 bytes {2} [built]
[UIfB] ./CounterIcon/index.js + 1 modules 459 bytes {5} [built]
[ZeO0] ./Logo/Logo.css 172 bytes {1} [built]
[Zj6M] ./Counter/index.js + 1 modules 3.57 kB {2} [built]
[cAlD] ./Logo/index.js + 1 modules 586 bytes {1} [built]
[cqSv] ./withLoadable.js + 2 modules 1.05 kB {4} [built]
[iOUn] ./app.jsx + 2 modules 8.44 kB {4} [built]
[mRXm] ./FancyButton/index.js + 1 modules 823 bytes {4} [built]
[p3L1] ./reusableModule.js 74 bytes {0} [built]
[u7Py] ./FancyButton/FancyButton.css 225 bytes {4} [built]
    + 229 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
    [mN3x] ../node_modules/html-webpack-plugin/lib/loader.js!./index.html 659 bytes {0} [built]
        + 3 hidden modules
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--2-oneOf-1-1!../node_modules/postcss-loader/lib/index.js??ref--2-oneOf-1-2!FancyButton/FancyButton.css:
    [wi9E] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"purify-[name]__[local]___[hash:base64:5]"}!../node_modules/postcss-loader/lib?{"plugins":[null]}!./FancyButton/FancyButton.css 8.72 kB {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--2-oneOf-1-1!../node_modules/postcss-loader/lib/index.js??ref--2-oneOf-1-2!Counter/Counter.css:
    [VOpu] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"purify-[name]__[local]___[hash:base64:5]"}!../node_modules/postcss-loader/lib?{"plugins":[null]}!./Counter/Counter.css 1.08 kB {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--2-oneOf-1-1!../node_modules/postcss-loader/lib/index.js??ref--2-oneOf-1-2!Logo/Logo.css:
                                        Asset     Size  Chunks             Chunk Names
    logo.2c1a70ce3b206bd62d6879e9a6df9616.svg  1.32 kB          [emitted]  
    [FJhk] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"purify-[name]__[local]___[hash:base64:5]"}!../node_modules/postcss-loader/lib?{"plugins":[null]}!./Logo/Logo.css 1.76 kB {0} [built]
    [gnyc] ./Logo/logo.svg 87 bytes {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--2-oneOf-0-1!../node_modules/font-awesome/css/font-awesome.css:
                                                       Asset     Size  Chunks             Chunk Names
                                     fontawesome-webfont.eot   166 kB          [emitted]  
    fontawesome-webfont.677433a0892aaed7b7d2628c313c9775.svg  6 bytes          [emitted]  
                                     fontawesome-webfont.ttf   166 kB          [emitted]  
                                    fontawesome-webfont.woff    98 kB          [emitted]  
                                   fontawesome-webfont.woff2  77.2 kB          [emitted]  
       8 modules
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--2-oneOf-1-1!../node_modules/postcss-loader/lib/index.js??ref--2-oneOf-1-2!App/App.css:
                                      Asset    Size  Chunks             Chunk Names
    bg.51b4c95613a415ab6f5c9244b9cdcbfd.jpg  192 kB          [emitted]  
    [qqHL] ./App/bg.jpg 85 bytes {0} [built]
    [yA3C] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"purify-[name]__[local]___[hash:base64:5]"}!../node_modules/postcss-loader/lib?{}!./App/App.css 1.7 kB {0} [built]
        + 1 hidden module
```
