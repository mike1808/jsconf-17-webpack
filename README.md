# Armenia JSConf 17 Webpack Production Config

## Output

```bash

> jsconf-17-webpack@1.0.0 build /home/michael/workspace_my/jsconf-17-webpack
> webpack --config config/webpack.config.js --env production

Hash: 50732b6efb8ec294e0d4
Version: webpack 3.10.0
Time: 2286ms
                    Asset       Size  Chunks                    Chunk Names
  fontawesome-webfont.eot     166 kB          [emitted]         
fontawesome-webfont.woff2    77.2 kB          [emitted]         
 fontawesome-webfont.woff      98 kB          [emitted]         
  fontawesome-webfont.ttf     166 kB          [emitted]         
  fontawesome-webfont.svg     444 kB          [emitted]  [big]  
                   bg.jpg     297 kB          [emitted]  [big]  
                bundle.js    1.16 MB       0  [emitted]  [big]  app
            bundle.js.map    1.47 MB       0  [emitted]         app
               index.html  348 bytes          [emitted]         
 [140] ./FancyButton/index.js 68 bytes {0} [built]
 [141] ./app.jsx 186 bytes {0} [built]
 [353] ./App/index.js 44 bytes {0} [built]
 [354] ./App/App.jsx 3.08 kB {0} [built]
 [355] ./Logo/index.js 47 bytes {0} [built]
 [356] ./Logo/Logo.jsx 404 bytes {0} [built]
 [357] ./Logo/Logo.css 1.07 kB {0} [built]
 [361] ./FancyButton/FancyButton.jsx 735 bytes {0} [built]
 [366] ./FancyButton/FancyButton.css 1.09 kB {0} [built]
 [368] ./Counter/index.js 56 bytes {0} [built]
 [369] ./Counter/Counter.jsx 3.49 kB {0} [built]
 [370] ./CounterIcon/index.js 68 bytes {0} [built]
 [380] ./Counter/Counter.css 1.08 kB {0} [built]
 [382] ./App/App.css 1.07 kB {0} [built]
 [383] ../node_modules/css-loader?{"modules":true,"sourceMap":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./App/App.css 1.46 kB {0} [built]
    + 370 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
       [0] ../node_modules/html-webpack-plugin/lib/loader.js!./index.html 659 bytes {0} [built]
        + 3 hidden modules
```
