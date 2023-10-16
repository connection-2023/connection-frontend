(self.webpackChunkproject_connection=self.webpackChunkproject_connection||[]).push([[481],{"./node_modules/@storybook/nextjs/dist sync recursive":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./src/components/InstructorCard/InstructorCard.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return InstructorCard_stories},"기본":function(){return 기본}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Carousel=__webpack_require__("./src/components/Carousel/Carousel.tsx"),__jsx=react.createElement,ImagesViewer=function ImagesViewer(_ref){var imgURL=_ref.imgURL,focus=_ref.focus;return __jsx("figure",{className:"h-full w-full"},__jsx(Carousel.Z,{imgURL:imgURL,move:focus,arrow:focus,showCurrentElement:focus}))};ImagesViewer.displayName="ImagesViewer";var InstructorCard_ImagesViewer=ImagesViewer,Review=__webpack_require__("./src/components/Review/Review.tsx"),Like=__webpack_require__("./src/components/Like/Like.tsx"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),InstructorCard_jsx=react.createElement,InstructorCard=function InstructorCard(_ref){var name=_ref.name,address=_ref.address,genres=_ref.genres,imgURL=_ref.imgURL,average=_ref.average,teamAffiliation=_ref.teamAffiliation,href=_ref.href,_useState=(0,react.useState)(!1),focus=_useState[0],setFocus=_useState[1];return InstructorCard_jsx("div",{onMouseOver:function onFocus(){setFocus(!0)},onMouseLeave:function offFocus(){setFocus(!1)},className:"relative ml-4 mt-4 h-60 w-[19.5rem] overflow-hidden rounded-md shadow-[1px_1px_4px_1px_rgba(0,0,0,0.25)]"},InstructorCard_jsx("figcaption",{className:"pointer-events-none absolute z-10 flex h-10 w-full items-center justify-center ".concat(focus?"bg-black":"bg-white")},InstructorCard_jsx("h1",{className:"text-lg font-bold ".concat(focus&&"text-zinc-50")},name)),InstructorCard_jsx("div",{className:"pointer-events-auto absolute right-1 top-1 z-10"},InstructorCard_jsx(Like.Z,null)),InstructorCard_jsx(link_default(),{href:href},InstructorCard_jsx(InstructorCard_ImagesViewer,{imgURL:imgURL,focus:focus})),!focus&&InstructorCard_jsx(react.Fragment,null,InstructorCard_jsx("div",{className:"display: absolute bottom-[4.2rem] flex w-full justify-center"},imgURL.map((function(img,index){return InstructorCard_jsx("span",{key:img+index,className:"mr-1.5 inline-block h-1.5 w-1.5 rounded-full ".concat(0===index?"bg-white":"bg-neutral-500")})}))),InstructorCard_jsx("figcaption",{className:"pointer-events-none absolute bottom-0 z-10 flex h-16 w-full flex-col items-center justify-evenly bg-white/[.75] "},InstructorCard_jsx(Review.Z,{average:average}),InstructorCard_jsx("div",{className:"flex justify-center gap-1 whitespace-nowrap"},InstructorCard_jsx("h2",{className:"w-24 overflow-hidden text-center"},address),InstructorCard_jsx("h2",{className:"w-24 overflow-hidden text-center"},teamAffiliation),genres.length>1?InstructorCard_jsx("h2",{className:"w-24 overflow-hidden text-center"},genres[0]," 외",genres.length-1):InstructorCard_jsx("h2",{className:"w-24 overflow-hidden text-center"},genres[0])))))};InstructorCard.displayName="InstructorCard";var _기본$parameters,_기본$parameters2,InstructorCard_InstructorCard=InstructorCard,InstructorCard_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var InstructorCard_stories={title:"Components/InstructorCard",component:InstructorCard_InstructorCard,tags:["autodocs"],argTypes:{imgURL:{description:"표시할 이미지들의 URL들이 담긴 배열"},name:{description:"강사 이름"},address:{description:"강의 지역"},teamAffiliation:{description:"강사 소속"},genres:{description:"댄스 장르"},average:{description:"강사 평점"},href:{description:"해당 카드 이동경로"}},args:{imgURL:["https://img.freepik.com/free-photo/pretty-woman-practising-hip-hop-dance_107420-85008.jpg?size=626&ext=jpg","https://img.freepik.com/free-photo/girl-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light_155003-9249.jpg?size=626&ext=jpg","https://img.freepik.com/free-photo/dance-time-stylish-men-and-woman-dancing-hip-hop-in-bright-clothes-on-green-background-at-dance-hall-in-neon-light_155003-16406.jpg?size=626&ext=jpg","https://img.freepik.com/free-photo/two-beautiful-slender-girls-doing-dancing-and-gymnastics-in-the-dance-hall_1157-13817.jpg?size=626&ext=jpg","https://img.freepik.com/free-photo/boy-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light_155003-9262.jpg?size=626&ext=jpg"],name:"이바다",address:"서울 마포구",teamAffiliation:"원밀리언즈",genres:["방송댄스","힙합","탱고"],average:3,href:"/"}},기본={render:function render(args){return InstructorCard_stories_jsx(InstructorCard_InstructorCard,args)}};기본.parameters=_objectSpread(_objectSpread({},기본.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_기본$parameters=기본.parameters)||void 0===_기본$parameters?void 0:_기본$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: args => <InstructorCard {...args} />\n}"},null===(_기본$parameters2=기본.parameters)||void 0===_기본$parameters2||null===(_기본$parameters2=_기본$parameters2.docs)||void 0===_기본$parameters2?void 0:_기본$parameters2.source)})})},"./src/components/Carousel/Carousel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_connection_frontend_connection_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),_public_icons_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/icons/svg.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;__webpack_exports__.Z=function Carousel(_ref){var imgURL=_ref.imgURL,move=_ref.move,_ref$arrow=_ref.arrow,arrow=void 0===_ref$arrow||_ref$arrow,_ref$priority=_ref.priority,priority=void 0===_ref$priority?1:_ref$priority,_ref$showCurrentEleme=_ref.showCurrentElement,showCurrentElement=void 0===_ref$showCurrentEleme||_ref$showCurrentEleme,_ref$gap=_ref.gap,gap=void 0===_ref$gap?0:_ref$gap,children=_ref.children,_ref$showCurrentEleme2=_ref.showCurrentElementBackGround,showCurrentElementBackGround=void 0===_ref$showCurrentEleme2||_ref$showCurrentEleme2,_ref$carouselMoveInte=_ref.carouselMoveIntervalTime,carouselMoveIntervalTime=void 0===_ref$carouselMoveInte?2e3:_ref$carouselMoveInte,_ref$arrowPushMoveWai=_ref.arrowPushMoveWaitTime,arrowPushMoveWaitTime=void 0===_ref$arrowPushMoveWai?2e3:_ref$arrowPushMoveWai,_ref$movePause=_ref.movePause,movePause=void 0!==_ref$movePause&&_ref$movePause,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),extendForCarousel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(elementArr){var newElementArr=[].concat((0,_home_runner_work_connection_frontend_connection_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(elementArr),[elementArr[0]]);return newElementArr.shift(),[newElementArr.at(-1)].concat((0,_home_runner_work_connection_frontend_connection_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(newElementArr),(0,_home_runner_work_connection_frontend_connection_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(newElementArr.slice(0,priority-1)))}),[priority]),carouselElements=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return extendForCarousel(children?(0,_home_runner_work_connection_frontend_connection_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(childrenArray):(0,_home_runner_work_connection_frontend_connection_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(imgURL||[]))}),[childrenArray,imgURL]),carouselLength=carouselElements.length,originalElements=children?childrenArray:(0,_home_runner_work_connection_frontend_connection_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(imgURL||[]),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),currentIndex=_useState[0],setCurrentIndex=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(priority>1?priority:1),loadedElementCount=_useState2[0],setLoadedElementCount=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),isAnimating=_useState3[0],setIsAnimating=_useState3[1],intervalIdRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),timeoutIdRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);move&&loadedElementCount<carouselLength&&setLoadedElementCount(carouselLength);var updateImageIndex=function updateImageIndex(){setCurrentIndex((function(prev){return prev===carouselLength-priority?(setIsAnimating(!1),0):0===prev?(setIsAnimating(!0),prev+1):prev+1}))};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return movePause&&intervalIdRef.current?clearInterval(intervalIdRef.current):move?(setIsAnimating(!0),1===priority&&(timeoutIdRef.current=setTimeout((function(){return updateImageIndex()}),100)),intervalIdRef.current=setInterval(updateImageIndex,carouselMoveIntervalTime)):(setIsAnimating(!1),setCurrentIndex(0),setTimeout((function(){return setIsAnimating(!0)}),100),intervalIdRef.current&&clearInterval(intervalIdRef.current)),function(){intervalIdRef.current&&clearInterval(intervalIdRef.current),timeoutIdRef.current&&clearTimeout(timeoutIdRef.current)}}),[move,loadedElementCount,movePause]);var changeImage=function changeImage(event,direction){intervalIdRef.current&&clearInterval(intervalIdRef.current),timeoutIdRef.current&&clearTimeout(timeoutIdRef.current),event.stopPropagation(),event.nativeEvent.preventDefault(),setIsAnimating(!1),setCurrentIndex((function(prev){return"FORWARD"===direction?prev>=carouselLength-priority?0:prev+1:prev<=0?carouselLength-priority:prev-1})),timeoutIdRef.current=setTimeout((function(){setIsAnimating(!0),intervalIdRef.current=setInterval(updateImageIndex,carouselMoveIntervalTime)}),arrowPushMoveWaitTime)};return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"flex h-full ".concat(isAnimating&&"transition-transform duration-[1600ms] ease-out"),style:{transform:"translateX(calc(-".concat(100*currentIndex,"% - ").concat(gap*currentIndex,"rem)")}},carouselElements.slice(0,loadedElementCount).map((function(element,index){return __jsx("picture",{key:index,className:"relative h-full w-full flex-shrink-0 ",style:{marginRight:"".concat(gap,"rem")}},children?element:"string"==typeof element&&__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{src:element,alt:"Connection 댄스 춤 이미지",fill:!0,sizes:"(max-width: 720px) 60vw, (max-width: 1440px) 30vw",priority:index<priority,style:{objectFit:"cover"}}))}))),showCurrentElement&&__jsx("div",{className:"absolute bottom-0 flex h-[10%] w-full items-center justify-center ".concat(showCurrentElementBackGround&&"bg-black/[.5]"," ")},originalElements.map((function(_,index){return __jsx("span",{key:index,className:"mr-1.5 inline-block h-1.5 w-1.5 rounded-full ".concat(0===index||currentIndex<originalElements.length&&index<=currentIndex?"bg-white":"bg-neutral-500")})}))),arrow&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_public_icons_svg__WEBPACK_IMPORTED_MODULE_2__.Eh,{onClick:function onClick(e){return changeImage(e,"BACKWARD")},className:"absolute left-3 top-1/2 -translate-y-1/2 -scale-x-100 transform cursor-pointer"}),__jsx(_public_icons_svg__WEBPACK_IMPORTED_MODULE_2__.Eh,{onClick:function onClick(e){return changeImage(e,"FORWARD")},className:"absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"})))}},"./src/components/Like/Like.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_icons_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./public/icons/svg.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Like=function Like(){return __jsx(_public_icons_svg__WEBPACK_IMPORTED_MODULE_1__.qK,{className:"cursor-pointer hover:fill-main-color hover:stroke-main-color"})};Like.displayName="Like",__webpack_exports__.Z=Like},"./src/components/Review/Review.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),nanoid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/nanoid/index.browser.js"),_public_icons_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./public/icons/svg.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Star=function Star(_ref){var fill=_ref.fill,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className;return __jsx(_public_icons_svg__WEBPACK_IMPORTED_MODULE_1__.dW,{width:15,height:14,className:"fill-".concat(fill," ").concat(className)})};Star.displayName="Star";var Review=function Review(_ref2){var average=_ref2.average,count=_ref2.count,starArray=function calculateStarArray(average){return Array.from({length:5},(function(_,i){return i<Math.floor(average)?1:i===Math.floor(average)?+(average%1).toFixed(2):0}))}(average),key=(0,nanoid__WEBPACK_IMPORTED_MODULE_2__.x0)();return __jsx("div",{className:"flex items-center"},__jsx("div",{className:"flex gap-1"},starArray.map((function(star,i){return 1===star?__jsx(Star,{key:key+i,fill:"sub-color1"}):star>0?__jsx("div",{key:key+i,className:"relative h-[14px] w-[15px] overflow-hidden"},__jsx(Star,{fill:"[#D8D8D8]",className:"absolute"}),__jsx("div",{className:"absolute overflow-hidden",style:{width:"".concat(15*star,"px")}},__jsx(Star,{fill:"sub-color1"}))):__jsx(Star,{key:key+i,fill:"[#D8D8D8]"})}))),count&&__jsx("span",{className:"ml-[9px] text-sm text-inherit"},"후기 ",count))};Review.displayName="Review",__webpack_exports__.Z=Review}}]);