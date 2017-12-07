# Armenia JSConf 17 Webpack Production Config

## Output

```bash

> jsconf-17-webpack@1.0.0 build /home/michael/workspace_my/jsconf-17-webpack
> webpack --config config/webpack.config.js --env production

Hash: e7c961de69b5193cb980
Version: webpack 3.10.0
Time: 5594ms
                    Asset       Size  Chunks                    Chunk Names
  fontawesome-webfont.eot     166 kB          [emitted]         
fontawesome-webfont.woff2    77.2 kB          [emitted]         
 fontawesome-webfont.woff      98 kB          [emitted]         
  fontawesome-webfont.ttf     166 kB          [emitted]         
  fontawesome-webfont.svg     444 kB          [emitted]  [big]  
                   bg.jpg     297 kB          [emitted]  [big]  
                bundle.js     304 kB       0  [emitted]  [big]  app
            bundle.js.map     886 kB       0  [emitted]         app
               index.html  348 bytes          [emitted]         
 [129] ./FancyButton/index.js 68 bytes {0} [built]
 [130] ./app.jsx 186 bytes {0} [built]
 [342] ./App/index.js 44 bytes {0} [built]
 [343] ./App/App.jsx 3.23 kB {0} [built]
 [344] ./Logo/index.js 47 bytes {0} [built]
 [345] ./Logo/Logo.jsx 404 bytes {0} [built]
 [346] ./Logo/Logo.css 1.07 kB {0} [built]
 [350] ./FancyButton/FancyButton.jsx 735 bytes {0} [built]
 [358] ./Counter/index.js 56 bytes {0} [built]
 [359] ./Counter/Counter.jsx 3.49 kB {0} [built]
 [360] ./CounterIcon/index.js 68 bytes {0} [built]
 [370] ./Counter/Counter.css 1.08 kB {0} [built]
 [372] ./App/App.css 1.07 kB {0} [built]
 [373] ../node_modules/css-loader?{"modules":true,"minimize":true,"sourceMap":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./App/App.css 1.29 kB {0} [built]
 [374] ./App/bg.jpg 52 bytes {0} [built]
    + 360 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
       [0] ../node_modules/html-webpack-plugin/lib/loader.js!./index.html 659 bytes {0} [built]
        + 3 hidden modules
```
