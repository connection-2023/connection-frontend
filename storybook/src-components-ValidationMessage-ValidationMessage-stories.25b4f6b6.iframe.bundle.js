"use strict";(self.webpackChunkproject_connection=self.webpackChunkproject_connection||[]).push([[739],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/ValidationMessage/ValidationMessage.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return ValidationMessage_stories},"기본":function(){return 기본}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),svg=__webpack_require__("./public/icons/svg.ts"),__jsx=react.createElement,Modal_Modal=function Modal(_ref){var children=_ref.children,isOpened=_ref.isOpened,handleClosed=_ref.handleClosed,overlayRef=(0,react.useRef)(null),handleKeyUp=function handleKeyUp(e){"Escape"===e.key&&handleClosed()};return(0,react.useEffect)((function(){return window.addEventListener("keyup",handleKeyUp),function(){return window.removeEventListener("keyup",handleKeyUp)}}),[]),isOpened?__jsx("div",{ref:overlayRef,className:"fixed bottom-0 left-0 right-0 top-0 z-modal mx-auto bg-black/60 backdrop-blur-sm",onClick:function onClick(e){overlayRef.current===e.target&&handleClosed()}},__jsx("div",{className:"absolute left-1/2 top-1/2 h-auto w-auto -translate-x-1/2 -translate-y-1/2 rounded-md bg-white shadow-float"},__jsx("button",{onClick:handleClosed,className:"absolute right-2 top-2"},__jsx(svg.b2,{width:"24",height:"24",className:"stroke-gray-500 stroke-2"})),children)):null},ProgressBar_jsx=react.createElement,ProgressBar=function ProgressBar(){return ProgressBar_jsx("div",{className:"absolute bottom-0 left-0 h-1 w-full bg-gray-300"},ProgressBar_jsx("div",{className:"h-full w-full shrink bg-sub-color1"}))};ProgressBar.displayName="ProgressBar";var ValidationMessage_ProgressBar=ProgressBar,ValidationMessage_jsx=react.createElement,ValidationMessage=function ValidationMessage(_ref){var timeID,invalidData=_ref.invalidData,closeModal=_ref.closeModal;(0,react.useEffect)((function(){return timeID=setTimeout((function(){return closeModal()}),1e4),function(){clearTimeout(timeID)}}),[closeModal]);return ValidationMessage_jsx(Modal_Modal,{isOpened:!!invalidData,handleClosed:closeModal},ValidationMessage_jsx("div",{className:"relative flex h-36 w-full max-w-[31rem] flex-col justify-evenly overflow-hidden rounded-md border border-solid border-black bg-white px-6 shadow-float"},ValidationMessage_jsx("div",{className:"flex flex-col items-center gap-2"},ValidationMessage_jsx("p",{className:"text-sm font-semibold text-main-color"},"모두 작성하면 다음페이지로 넘어갈 수 있어요."),ValidationMessage_jsx(ReminderText,null,(0,toConsumableArray.Z)(new Set(null==invalidData?void 0:invalidData.map((function(_ref2){return _ref2.message})))).join(", "))),ValidationMessage_jsx(ReminderButton,{reminderButtonHandler:function reminderButtonHandler(){if(null!==invalidData){var element=document.getElementById(invalidData[0].key);element&&element.scrollIntoView({behavior:"smooth"}),clearTimeout(timeID),closeModal()}}}),ValidationMessage_jsx(ValidationMessage_ProgressBar,null)))};ValidationMessage.displayName="ValidationMessage";var ReminderButton=function ReminderButton(_ref3){var reminderButtonHandler=_ref3.reminderButtonHandler;return ValidationMessage_jsx("div",{className:"flex justify-center"},ValidationMessage_jsx("button",{onClick:reminderButtonHandler,className:"h-9 w-36 rounded-md bg-main-color font-semibold text-white"},"작성하러 가기"))};ReminderButton.displayName="ReminderButton";var ReminderText=function ReminderText(_ref4){var children=_ref4.children;return ValidationMessage_jsx("p",{className:"inline-flex w-full justify-center whitespace-nowrap px-1 text-lg"},ValidationMessage_jsx("span",{className:"truncate font-semibold"},children),"을/를 설정해주세요!")};ReminderText.displayName="ReminderText";var _기본$parameters,_기본$parameters2,ValidationMessage_ValidationMessage=ValidationMessage,ValidationMessage_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ValidationMessage_stories={title:"Components/ValidationMessage",component:ValidationMessage_ValidationMessage,tags:["autodocs"],argTypes:{invalidData:{description:"유효성 통과 못한 데이터 이름 배열"}},args:{invalidData:[{key:"photo",type:"image",message:"사진",ref:null},{key:"title",type:"text",message:"제목",ref:null},{key:"genre",type:"text",message:"장르",ref:null},{key:"peopleCount",type:"number",message:"인원수 ",ref:null}]}},기본={render:function render(args){return ValidationMessage_stories_jsx(ValidationMessage_ValidationMessage,args)}};기본.parameters=_objectSpread(_objectSpread({},기본.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_기본$parameters=기본.parameters)||void 0===_기본$parameters?void 0:_기본$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: args => <ValidationMessage {...args} />\n}"},null===(_기본$parameters2=기본.parameters)||void 0===_기본$parameters2||null===(_기본$parameters2=_기본$parameters2.docs)||void 0===_기본$parameters2?void 0:_기본$parameters2.source)})})}}]);