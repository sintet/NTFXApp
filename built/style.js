!function(n){function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=193)}({0:function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(1)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, "* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: sans-serif; }\\n\\ndiv {\\n  position: relative; }\\n\\nbutton {\\n  border: none;\\n  border-radius: 3px; }\\n\\n.app_movie_decription {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  color: #8c8c8d;\\n  width: 100%;\\n  padding: 30px 0; }\\n  .app_movie_decription div {\\n    min-width: 350px; }\\n  .app_movie_decription p {\\n    padding: 10px 0; }\\n\\n.app_movie_decription_poster {\\n  width: 30%; }\\n  .app_movie_decription_poster img {\\n    width: 100%; }\\n\\n.app_movie_decription_text {\\n  width: 60%; }\\n  .app_movie_decription_text h2 {\\n    color: #f55263;\\n    font-size: 3em; }\\n\\n.app_movie_decription_info {\\n  font-size: 1em;\\n  color: #dfe0e2;\\n  display: flex; }\\n  .app_movie_decription_info p {\\n    width: max-content;\\n    margin-right: 100px; }\\n  .app_movie_decription_info p:last-child {\\n    border: 1px #dfe0e2 solid;\\n    padding: 10px;\\n    border-radius: 4px; }\\n\\n#app_content_container_header {\\n  background-color: #f5f5f5;\\n  color: #3c3c3c; }\\n\\n#app_content_container_header_sort {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between; }\\n  #app_content_container_header_sort div {\\n    margin-left: 20px; }\\n\\n.activSort {\\n  color: #f55263; }\\n\\n.sortOption {\\n  font-weight: 600;\\n  cursor: pointer; }\\n\\n#app_content_container .positionedContent {\\n  padding: 15px 0; }\\n\\n.app_movieItem_list {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around; }\\n\\n.app_movieItem_list li {\\n  list-style: none;\\n  padding: 0 10px; }\\n\\n.app_mov_preview {\\n  margin: 20px 0 30px; }\\n\\n.app_mov_preview_image {\\n  width: 180px;\\n  height: 270px; }\\n  .app_mov_preview_image img {\\n    width: 100%;\\n    height: inherit; }\\n\\n.app_mov_preview_decription {\\n  width: 180px;\\n  display: flex;\\n  justify-content: space-between;\\n  color: #3c3c3c;\\n  padding: 12px 0; }\\n\\n.app_mov_preview_decription_year div {\\n  border: 1px #3c3c3c solid;\\n  border-radius: 2px;\\n  padding: 3px 7px;\\n  font-size: 10px; }\\n\\n.app_mov_preview_decription_title h4 {\\n  font-size: 18px; }\\n\\n.app_mov_preview_decription_title p {\\n  font-size: 14px; }\\n\\n#app_header_container {\\n  position: relative;\\n  overflow: hidden;\\n  background-color: #000;\\n  padding: 15px 0; }\\n  #app_header_container .positionedContent {\\n    z-index: 2; }\\n  #app_header_container h1 {\\n    color: #f55263;\\n    font-size: 2.2em; }\\n\\n#app_header_container:before {\\n  display: block;\\n  position: absolute;\\n  height: 100%;\\n  content: \' \';\\n  width: 100%;\\n  z-index: 1;\\n  background-image: url(" + __webpack_require__(2) + ");\\n  opacity: 0.25;\\n  background-repeat: no-repeat;\\n  background-position: 50% 0;\\n  background-size: cover; }\\n\\n#app_header_search {\\n  padding: 15px 0;\\n  position: relative;\\n  margin: 15px auto; }\\n  #app_header_search h2 {\\n    font-size: 2.5em;\\n    color: #dfe0e2; }\\n\\n#app_header_search_inputArea {\\n  display: flex;\\n  background-color: #000;\\n  color: #dfe0e2;\\n  align-items: center;\\n  justify-content: space-between;\\n  border-bottom: #f55263 2px solid;\\n  margin: 20px auto;\\n  height: 50px; }\\n  #app_header_search_inputArea input, #app_header_search_inputArea button {\\n    background-color: transparent;\\n    border: none;\\n    height: 100%;\\n    color: #8c8c8d;\\n    padding: 0  20px;\\n    font-size: 20px;\\n    width: 94%; }\\n  #app_header_search_inputArea button {\\n    font-size: 30px;\\n    margin-right: 15px;\\n    width: 5%; }\\n\\n#app_header_search_footer, #app_header_search_footer_filter {\\n  margin: 30px 0 20px;\\n  display: flex;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  color: #dfe0e2; }\\n\\n#app_header_search_footer_filter {\\n  font-size: 1em;\\n  font-weight: 600;\\n  width: 35%; }\\n  #app_header_search_footer_filter button {\\n    padding: 10px 0;\\n    width: 30%;\\n    font-weight: 600;\\n    min-width: 90px; }\\n\\n#app_header {\\n  background-color: #000; }\\n\\n.positionedContent {\\n  position: relative;\\n  width: 85%;\\n  margin: 0 auto;\\n  display: block; }\\n\\n.flex {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between; }\\n\\n.buttonActive, .buttonPassive {\\n  background-color: #f55263;\\n  color: #dfe0e2;\\n  transition: 0.4s; }\\n\\n.buttonPassive {\\n  background-color: #3c3c3c; }\\n\\n.largButton {\\n  font-size: 1.5em;\\n  padding: 10px 50px; }\\n", ""]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./styles/style.scss\n// module id = 0\n// module chunks = 1\n\n//# sourceURL=webpack:///./styles/style.scss?../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js')},1:function(module,exports){eval('/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn "@media " + item[2] + "{" + content + "}";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join("");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === "string")\n\t\t\tmodules = [[null, modules, ""]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === "number")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = "(" + item[2] + ") and (" + mediaQuery + ")";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || \'\';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === \'function\') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn \'/*# sourceURL=\' + cssMapping.sourceRoot + source + \' */\'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n\t}\n\n\treturn [content].join(\'\\n\');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = \'sourceMappingURL=data:application/json;charset=utf-8;base64,\' + base64;\n\n\treturn \'/*# \' + data + \' */\';\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ../node_modules/css-loader/lib/css-base.js\n// module id = 1\n// module chunks = 1\n\n//# sourceURL=webpack:///../node_modules/css-loader/lib/css-base.js?')},193:function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./styles/style.scss\n// module id = 193\n// module chunks = 1\n\n//# sourceURL=webpack:///./styles/style.scss?")},2:function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "images/header_background.jpg?86f199d0c6f5cedd14c121164fa5fafc";\n\n//////////////////\n// WEBPACK FOOTER\n// ./images/header_background.jpg\n// module id = 2\n// module chunks = 1\n\n//# sourceURL=webpack:///./images/header_background.jpg?')}});