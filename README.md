# Armenia JSConf 17 Webpack Production Config

## Output

```bash

> jsconf-17-webpack@1.0.0 build /home/michael/workspace_my/jsconf-17-webpack
> webpack --config config/webpack.config.js --env production

Hash: 11f6f2668b77c832135d
Version: webpack 3.10.0
Time: 6005ms
                                   Asset       Size  Chunks                    Chunk Names
    counter-icon.b80e6341186a53146633.js  403 bytes       3  [emitted]         counter-icon
                                  bg.jpg     297 kB          [emitted]  [big]  
                 fontawesome-webfont.svg     444 kB          [emitted]  [big]  
                 fontawesome-webfont.ttf     166 kB          [emitted]         
                fontawesome-webfont.woff      98 kB          [emitted]         
               fontawesome-webfont.woff2    77.2 kB          [emitted]         
         counter.b00f200a7f40895ec992.js    2.26 kB       0  [emitted]         counter
          vendor.33a918afa1f4746982bd.js     173 kB       1  [emitted]         vendor
             app.e27fd7094aed83a26087.js    6.19 kB       2  [emitted]         app
                 fontawesome-webfont.eot     166 kB          [emitted]         
        manifest.ce0ab1ce0ae334022983.js    1.58 kB       4  [emitted]         manifest
                                 app.css    9.07 kB       2  [emitted]         app
     counter.b00f200a7f40895ec992.js.map    3.22 kB       0  [emitted]         counter
      vendor.33a918afa1f4746982bd.js.map     593 kB       1  [emitted]         vendor
         app.e27fd7094aed83a26087.js.map    8.38 kB       2  [emitted]         app
                             app.css.map   84 bytes       2  [emitted]         app
counter-icon.b80e6341186a53146633.js.map  858 bytes       3  [emitted]         counter-icon
    manifest.ce0ab1ce0ae334022983.js.map    8.01 kB       4  [emitted]         manifest
                              index.html  563 bytes          [emitted]         
[+VC3] ./Loading/Loading.jsx 756 bytes {2} [built]
[04Qr] ./App/App.css 93 bytes {2} [built]
[7MY+] ./Loading/index.js 56 bytes {2} [built]
[ID5O] ./FancyButton/FancyButton.jsx 735 bytes {2} [built]
[UIfB] ./CounterIcon/index.js 68 bytes {3} [built]
[Zj6M] ./Counter/index.js 56 bytes {0} [built]
[cAlD] ./Logo/index.js 47 bytes {2} [built]
[cqSv] ./withLoadable.js 223 bytes {2} [built]
[iOUn] ./app.jsx 4.65 kB {2} [built]
[j63z] ./Logo/Logo.jsx 404 bytes {2} [built]
[mRXm] ./FancyButton/index.js 68 bytes {2} [built]
[pFpb] ./App/App.jsx 3.15 kB {2} [built]
[pOmE] ./Counter/Counter.jsx 3.42 kB {0} [built]
[u7Py] ./FancyButton/FancyButton.css 225 bytes {2} [built]
[wHmC] ./App/index.js 44 bytes {2} [built]
    + 232 hidden modules
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
