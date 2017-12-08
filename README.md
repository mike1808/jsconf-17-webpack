# Armenia JSConf 17 Webpack Production Config

## Output

```bash

> jsconf-17-webpack@1.0.0 build /home/michael/workspace_my/jsconf-17-webpack
> webpack --config config/webpack.config.js --env production

Hash: e3c94c1a3af02d233243
Version: webpack 3.10.0
Time: 5331ms
                    Asset       Size  Chunks                    Chunk Names
            app.bundle.js    72.2 kB       0  [emitted]         app
                   bg.jpg     297 kB          [emitted]  [big]  
fontawesome-webfont.woff2    77.2 kB          [emitted]         
 fontawesome-webfont.woff      98 kB          [emitted]         
  fontawesome-webfont.ttf     166 kB          [emitted]         
  fontawesome-webfont.svg     444 kB          [emitted]  [big]  
  fontawesome-webfont.eot     166 kB          [emitted]         
         vendor.bundle.js     101 kB       1  [emitted]         vendor
                  app.css    9.07 kB       0  [emitted]         app
        app.bundle.js.map     335 kB       0  [emitted]         app
              app.css.map   84 bytes       0  [emitted]         app
     vendor.bundle.js.map     256 kB       1  [emitted]         vendor
               index.html  455 bytes          [emitted]         
  [99] ./FancyButton/index.js 68 bytes {0} [built]
 [101] ./app.jsx 4.65 kB {0} [built]
 [225] ./App/index.js 44 bytes {0} [built]
 [226] ./App/App.jsx 3.03 kB {0} [built]
 [227] ./Logo/index.js 47 bytes {0} [built]
 [228] ./Logo/Logo.jsx 404 bytes {0} [built]
 [229] ./Logo/Logo.css 172 bytes {0} [built]
 [230] ./FancyButton/FancyButton.jsx 735 bytes {0} [built]
 [235] ./FancyButton/FancyButton.css 225 bytes {0} [built]
 [236] ./Counter/index.js 56 bytes {0} [built]
 [237] ./Counter/Counter.jsx 3.29 kB {0} [built]
 [238] ./CounterIcon/index.js 68 bytes {0} [built]
 [241] ./Counter/Counter.css 195 bytes {0} [built]
 [242] ./App/App.css 93 bytes {0} [built]
 [243] multi react react-dom prop-types 52 bytes {1} [built]
    + 229 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
       [0] ../node_modules/html-webpack-plugin/lib/loader.js!./index.html 659 bytes {0} [built]
        + 3 hidden modules
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--3-oneOf-1-1!../node_modules/postcss-loader/lib/index.js??ref--3-oneOf-1-2!FancyButton/FancyButton.css:
       [0] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"purify-[name]__[local]___[hash:base64:5]"}!../node_modules/postcss-loader/lib?{"plugins":[null]}!./FancyButton/FancyButton.css 8.72 kB {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--3-oneOf-1-1!../node_modules/postcss-loader/lib/index.js??ref--3-oneOf-1-2!Counter/Counter.css:
       [0] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"purify-[name]__[local]___[hash:base64:5]"}!../node_modules/postcss-loader/lib?{"plugins":[null]}!./Counter/Counter.css 1.08 kB {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--3-oneOf-1-1!../node_modules/postcss-loader/lib/index.js??ref--3-oneOf-1-2!Logo/Logo.css:
       [0] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"purify-[name]__[local]___[hash:base64:5]"}!../node_modules/postcss-loader/lib?{"plugins":[null]}!./Logo/Logo.css 1.76 kB {0} [built]
       [2] ./Logo/logo.svg 3.33 kB {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--3-oneOf-1-1!../node_modules/postcss-loader/lib/index.js??ref--3-oneOf-1-2!App/App.css:
     Asset    Size  Chunks                    Chunk Names
    bg.jpg  297 kB          [emitted]  [big]  
       [0] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"purify-[name]__[local]___[hash:base64:5]"}!../node_modules/postcss-loader/lib?{}!./App/App.css 1.7 kB {0} [built]
       [2] ./App/bg.jpg 52 bytes {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin ../node_modules/extract-text-webpack-plugin/dist ../node_modules/css-loader/index.js??ref--3-oneOf-0-1!../node_modules/font-awesome/css/font-awesome.css:
                        Asset     Size  Chunks                    Chunk Names
      fontawesome-webfont.eot   166 kB          [emitted]         
    fontawesome-webfont.woff2  77.2 kB          [emitted]         
     fontawesome-webfont.woff    98 kB          [emitted]         
      fontawesome-webfont.ttf   166 kB          [emitted]         
      fontawesome-webfont.svg   444 kB          [emitted]  [big]  
       8 modules
```
