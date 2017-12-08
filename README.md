# Armenia JSConf 17 Webpack Production Config

## Output

```bash

> jsconf-17-webpack@1.0.0 build /home/michael/workspace_my/jsconf-17-webpack
> webpack --config config/webpack.config.js --env production

Hash: 94d4cac093cfe472bbf6
Version: webpack 3.10.0
Time: 6169ms
                                       Asset       Size  Chunks                    Chunk Names
        counter-icon.ec8e9c7c434e82134a68.js  456 bytes       5  [emitted]         counter-icon
                                      bg.jpg     297 kB          [emitted]  [big]  
                     fontawesome-webfont.svg     444 kB          [emitted]  [big]  
                     fontawesome-webfont.ttf     166 kB          [emitted]         
                    fontawesome-webfont.woff      98 kB          [emitted]         
                   fontawesome-webfont.woff2    77.2 kB          [emitted]         
    async-common-app.9c411f7cc115d7c6585f.js  175 bytes       0  [emitted]         async-common-app
                logo.7cafc6e8c4df3618e2e4.js  704 bytes       1  [emitted]         logo
             counter.c49c1d1edb8e91f784cc.js    2.28 kB       2  [emitted]         counter
              vendor.5edba6bf4ffad8be3e69.js     173 kB       3  [emitted]         vendor
                 app.235436f2a6f1d698bbe8.js    5.76 kB       4  [emitted]         app
                     fontawesome-webfont.eot     166 kB          [emitted]         
            manifest.df52712ad164e85b5f33.js    1.66 kB       6  [emitted]         manifest
                                     app.css    9.07 kB       4  [emitted]         app
async-common-app.9c411f7cc115d7c6585f.js.map  345 bytes       0  [emitted]         async-common-app
            logo.7cafc6e8c4df3618e2e4.js.map    1.63 kB       1  [emitted]         logo
         counter.c49c1d1edb8e91f784cc.js.map    3.37 kB       2  [emitted]         counter
          vendor.5edba6bf4ffad8be3e69.js.map     593 kB       3  [emitted]         vendor
             app.235436f2a6f1d698bbe8.js.map    7.33 kB       4  [emitted]         app
                                 app.css.map   84 bytes       4  [emitted]         app
    counter-icon.ec8e9c7c434e82134a68.js.map    1.04 kB       5  [emitted]         counter-icon
        manifest.df52712ad164e85b5f33.js.map    8.17 kB       6  [emitted]         manifest
                                  index.html  563 bytes          [emitted]         
[+VC3] ./Loading/Loading.jsx 756 bytes {4} [built]
[04Qr] ./App/App.css 93 bytes {4} [built]
[7MY+] ./Loading/index.js 56 bytes {4} [built]
[ID5O] ./FancyButton/FancyButton.jsx 735 bytes {4} [built]
[R9Rm] ./Counter/Counter.css 195 bytes {2} [built]
[Zj6M] ./Counter/index.js 56 bytes {2} [built]
[cAlD] ./Logo/index.js 47 bytes {1} [built]
[cqSv] ./withLoadable.js 223 bytes {4} [built]
[iOUn] ./app.jsx 4.65 kB {4} [built]
[j63z] ./Logo/Logo.jsx 524 bytes {1} [built]
[mRXm] ./FancyButton/index.js 68 bytes {4} [built]
[p3L1] ./reusableModule.js 74 bytes {0} [built]
[pFpb] ./App/App.jsx 3.23 kB {4} [built]
[pOmE] ./Counter/Counter.jsx 3.49 kB {2} [built]
[wHmC] ./App/index.js 44 bytes {4} [built]
    + 233 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
    [mN3x] ../node_modules/html-webpack-plugin/lib/loader.js!./index.html 659 bytes {0} [built]
        + 3 hidden modules
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--3-oneOf-1-1!../node_modules/postcss-loader/lib/index.js??ref--3-oneOf-1-2!FancyButton/FancyButton.css:
    [wi9E] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"purify-[name]__[local]___[hash:base64:5]"}!../node_modules/postcss-loader/lib?{"plugins":[null]}!./FancyButton/FancyButton.css 8.72 kB {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--3-oneOf-1-1!../node_modules/postcss-loader/lib/index.js??ref--3-oneOf-1-2!Counter/Counter.css:
    [VOpu] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"purify-[name]__[local]___[hash:base64:5]"}!../node_modules/postcss-loader/lib?{"plugins":[null]}!./Counter/Counter.css 1.08 kB {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--3-oneOf-1-1!../node_modules/postcss-loader/lib/index.js??ref--3-oneOf-1-2!Logo/Logo.css:
    [FJhk] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"purify-[name]__[local]___[hash:base64:5]"}!../node_modules/postcss-loader/lib?{"plugins":[null]}!./Logo/Logo.css 1.76 kB {0} [built]
    [gnyc] ./Logo/logo.svg 3.33 kB {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--3-oneOf-1-1!../node_modules/postcss-loader/lib/index.js??ref--3-oneOf-1-2!App/App.css:
     Asset    Size  Chunks                    Chunk Names
    bg.jpg  297 kB          [emitted]  [big]  
    [qqHL] ./App/bg.jpg 52 bytes {0} [built]
    [yA3C] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"purify-[name]__[local]___[hash:base64:5]"}!../node_modules/postcss-loader/lib?{}!./App/App.css 1.7 kB {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--3-oneOf-0-1!../node_modules/font-awesome/css/font-awesome.css:
                        Asset     Size  Chunks                    Chunk Names
      fontawesome-webfont.eot   166 kB          [emitted]         
      fontawesome-webfont.svg   444 kB          [emitted]  [big]  
      fontawesome-webfont.ttf   166 kB          [emitted]         
     fontawesome-webfont.woff    98 kB          [emitted]         
    fontawesome-webfont.woff2  77.2 kB          [emitted]         
       8 modules
```
