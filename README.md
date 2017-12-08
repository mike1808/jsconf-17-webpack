# Armenia JSConf 17 Webpack Production Config

## Output

```bash

> jsconf-17-webpack@1.0.0 build /home/michael/workspace_my/jsconf-17-webpack
> webpack --config config/webpack.config.js --env production

Hash: 308d608b890f2e87623c
Version: webpack 3.10.0
Time: 5426ms
                               Asset       Size  Chunks                    Chunk Names
    manifest.a1a47299913d6deb3af6.js    1.48 kB       2  [emitted]         manifest
                              bg.jpg     297 kB          [emitted]  [big]  
             fontawesome-webfont.svg     444 kB          [emitted]  [big]  
             fontawesome-webfont.ttf     166 kB          [emitted]         
            fontawesome-webfont.woff      98 kB          [emitted]         
           fontawesome-webfont.woff2    77.2 kB          [emitted]         
      vendor.e62c325562c57542c97d.js     169 kB       0  [emitted]         vendor
         app.e2a237fc75a8a797d0d1.js    7.77 kB       1  [emitted]         app
             fontawesome-webfont.eot     166 kB          [emitted]         
                             app.css    7.88 kB       1  [emitted]         app
                          vendor.css    1.23 kB       0  [emitted]         vendor
  vendor.e62c325562c57542c97d.js.map     578 kB       0  [emitted]         vendor
                      vendor.css.map   87 bytes       0  [emitted]         vendor
     app.e2a237fc75a8a797d0d1.js.map    9.55 kB       1  [emitted]         app
                         app.css.map   84 bytes       1  [emitted]         app
manifest.a1a47299913d6deb3af6.js.map    7.78 kB       2  [emitted]         manifest
                          index.html  605 bytes          [emitted]         
[04Qr] ./App/App.css 93 bytes {1} [built]
[ID5O] ./FancyButton/FancyButton.jsx 735 bytes {1} [built]
[R9Rm] ./Counter/Counter.css 195 bytes {1} [built]
[UIfB] ./CounterIcon/index.js 68 bytes {1} [built]
[ZeO0] ./Logo/Logo.css 172 bytes {1} [built]
[Zj6M] ./Counter/index.js 56 bytes {1} [built]
[cAlD] ./Logo/index.js 47 bytes {1} [built]
[hbbU] ./CounterIcon/CounterIcon.jsx 256 bytes {1} [built]
[iOUn] ./app.jsx 4.65 kB {1} [built]
[j63z] ./Logo/Logo.jsx 404 bytes {1} [built]
[mRXm] ./FancyButton/index.js 68 bytes {1} [built]
[pFpb] ./App/App.jsx 3.03 kB {1} [built]
[pOmE] ./Counter/Counter.jsx 3.29 kB {1} [built]
[u7Py] ./FancyButton/FancyButton.css 225 bytes {1} [built]
[wHmC] ./App/index.js 44 bytes {1} [built]
    + 228 hidden modules
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
