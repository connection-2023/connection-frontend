(self.webpackChunkproject_connection=self.webpackChunkproject_connection||[]).push([[976],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/extends.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _extends}})},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@storybook/nextjs/dist sync recursive":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./src/components/Review/ReviewComment.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return ReviewComment_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),Profile=__webpack_require__("./src/components/Profile/Profile.tsx"),Review=__webpack_require__("./src/components/Review/Review.tsx"),__jsx=react.createElement,ReviewComment=function ReviewComment(_ref){var src=_ref.src,nickname=_ref.nickname,average=_ref.average,content=_ref.content,date=_ref.date,title=_ref.title;return __jsx("div",{className:"w-full border-b border-solid border-[#D8D8D8] text-sm"},__jsx("div",{className:"mb-3 grid w-full auto-cols-min grid-cols-3 grid-cols-[min-content_auto_auto] grid-rows-2 items-center"},__jsx("div",{className:"row-span-2 mr-1 flex"},__jsx(Profile.Z,{size:35,nickname:nickname,src:src,label:!1})),__jsx("p",null,nickname),__jsx("span",{className:"justify-self-end text-[#B6B6B6]"},date),__jsx(Review.Z,{average:average})),__jsx("p",{className:"mb-[0.38rem] text-[#B6B6B6]"},title),__jsx("p",{className:"mb-6"},content))};ReviewComment.displayName="ReviewComment";var _Default$parameters,_Default$parameters2,Review_ReviewComment=ReviewComment,ReviewComment_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ReviewComment_stories={title:"Components/ReviewComment",component:Review_ReviewComment,tags:["autodocs"],argTypes:{},args:{nickname:"nickname",average:4,content:"후기 350자 제한, 답글은 안다는걸로, 사진은 없는걸로",src:null,date:"2023.07.11",title:"가비쌤과 함께하는 왁킹 클래스"}},Default={render:function render(args){return ReviewComment_stories_jsx(Review_ReviewComment,args)}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: args => <ReviewComment {...args} />\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/Profile/Profile.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_connection_frontend_connection_frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),_public_icons_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/icons/svg.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,commonProps={className:"rounded-[2.125rem]"},Profile=function Profile(_ref){var src=_ref.src,nickname=_ref.nickname,size=_ref.size,_ref$label=_ref.label,label=void 0===_ref$label||_ref$label;return __jsx("div",{className:"color-inherit flex items-center"},src?__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_home_runner_work_connection_frontend_connection_frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({src:src,width:size,height:size,alt:"프로필 사진"},commonProps)):__jsx(_public_icons_svg__WEBPACK_IMPORTED_MODULE_2__.cH,(0,_home_runner_work_connection_frontend_connection_frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({width:size,height:size},commonProps)),label&&__jsx("span",{className:"ml-1.5"},nickname))};Profile.displayName="Profile",__webpack_exports__.Z=Profile},"./src/components/Review/Review.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_public_icons_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./public/icons/svg.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Star=function Star(_ref){var fill=_ref.fill,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className;return __jsx(_public_icons_svg__WEBPACK_IMPORTED_MODULE_1__.dW,{width:15,height:14,className:"fill-".concat(fill," ").concat(className)})};Star.displayName="Star";var Review=function Review(_ref2){var average=_ref2.average,count=_ref2.count,starArray=function calculateStarArray(average){return Array.from({length:5},(function(_,i){return i<Math.floor(average)?1:i===Math.floor(average)?+(average%1).toFixed(2):0}))}(average);return __jsx("div",{className:"flex items-center"},__jsx("div",{className:"flex gap-1"},starArray.map((function(star,i){return 1===star?__jsx(Star,{key:i,fill:"sub-color1"}):star>0?__jsx("div",{className:"relative h-[14px] w-[15px] overflow-hidden"},__jsx(Star,{fill:"[#D8D8D8]",className:"absolute"}),__jsx("div",{className:"absolute overflow-hidden",style:{width:"".concat(15*star,"px")}},__jsx(Star,{fill:"sub-color1"}))):__jsx(Star,{key:i,fill:"[#D8D8D8]"})}))),count&&__jsx("span",{className:"ml-[9px] text-sm text-inherit"},"후기 ",count))};Review.displayName="Review",__webpack_exports__.Z=Review}}]);