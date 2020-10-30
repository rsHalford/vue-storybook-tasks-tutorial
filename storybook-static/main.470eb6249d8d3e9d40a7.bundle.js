(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(module,__webpack_exports__,__webpack_require__){"use strict";var components_Taskvue_type_script_lang_js_={name:"task",props:{task:{type:Object,required:!0,default:function _default(){return{id:"",state:"",title:""}}}},computed:{taskClass:function taskClass(){return"list-item ".concat(this.task.state)},isChecked:function isChecked(){return"TASK_ARCHIVED"===this.task.state}}},componentNormalizer=__webpack_require__(74),component=Object(componentNormalizer.a)(components_Taskvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{class:_vm.taskClass},[_c("label",{staticClass:"checkbox"},[_c("input",{attrs:{type:"checkbox",disabled:!0,name:"checked"},domProps:{checked:_vm.isChecked}}),_vm._v(" "),_c("span",{staticClass:"checkbox-custom",on:{click:function($event){return _vm.$emit("archiveTask",_vm.task.id)}}})]),_vm._v(" "),_c("div",{staticClass:"title"},[_c("input",{attrs:{type:"text",readonly:!0,placeholder:"Input title"},domProps:{value:this.task.title}})]),_vm._v(" "),_c("div",{staticClass:"actions"},[_vm.isChecked?_vm._e():_c("a",{on:{click:function($event){return _vm.$emit("pinTask",_vm.task.id)}}},[_c("span",{staticClass:"icon-star"})])])])}),[],!1,null,null,null);__webpack_exports__.a=component.exports},232:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultTasksData",(function(){return defaultTasksData})),__webpack_require__.d(__webpack_exports__,"withPinnedTasksData",(function(){return withPinnedTasksData})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithPinnedTasks",(function(){return WithPinnedTasks})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));__webpack_require__(20),__webpack_require__(22),__webpack_require__(19);var _home_richard_Projects_Vue_taskbox_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(126),_PureTaskList__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(89),_Task_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(42);__webpack_exports__.default={title:"TaskList",excludeStories:/.*Data$/,decorators:[function paddedList(){return{template:'<div style="padding: 3rem;"><story/></div>'}}]};var defaultTasksData=[Object.assign({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.taskData,{id:"1",title:"Task 1"}),Object.assign({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.taskData,{id:"2",title:"Task 2"}),Object.assign({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.taskData,{id:"3",title:"Task 3"}),Object.assign({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.taskData,{id:"4",title:"Task 4"}),Object.assign({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.taskData,{id:"5",title:"Task 5"}),Object.assign({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.taskData,{id:"6",title:"Task 6"})],withPinnedTasksData=[].concat(Object(_home_richard_Projects_Vue_taskbox_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.a)(defaultTasksData.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]),Default=function Default(){return{components:{PureTaskList:_PureTaskList__WEBPACK_IMPORTED_MODULE_4__.a},template:'<pure-task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>',props:{tasks:{default:function _default(){return defaultTasksData}}},methods:_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actionsData}},WithPinnedTasks=function WithPinnedTasks(){return{components:{PureTaskList:_PureTaskList__WEBPACK_IMPORTED_MODULE_4__.a},template:'<pure-task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>',props:{tasks:{default:function _default(){return withPinnedTasksData}}},methods:_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actionsData}},Loading=function Loading(){return{components:{PureTaskList:_PureTaskList__WEBPACK_IMPORTED_MODULE_4__.a},template:'<pure-task-list loading @archiveTask="onArchiveTask" @pinTask="onPinTask"/>',methods:_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actionsData}},Empty=function Empty(){return{components:{PureTaskList:_PureTaskList__WEBPACK_IMPORTED_MODULE_4__.a},template:'<pure-task-list @archiveTask="onArchiveTask" @pinTask="onPinTask"/>',methods:_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actionsData}}},380:function(module,exports,__webpack_require__){__webpack_require__(381),__webpack_require__(729),__webpack_require__(730),__webpack_require__(923),__webpack_require__(935),__webpack_require__(938),__webpack_require__(946),module.exports=__webpack_require__(952)},42:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"actionsData",(function(){return actionsData})),__webpack_require__.d(__webpack_exports__,"taskData",(function(){return taskData})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Archived",(function(){return Archived}));__webpack_require__(19);var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73),_Task__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(104);__webpack_exports__.default={title:"Task",excludeStories:/.*Data$/};var actionsData={onPinTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("onPinTask"),onArchiveTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("onArchiveTask")},taskData={id:"1",title:"Test Task",state:"Task_INBOX",updated_at:new Date(2019,0,1,9,0)},taskTemplate='<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>',Default=function Default(){return{components:{Task:_Task__WEBPACK_IMPORTED_MODULE_2__.a},template:taskTemplate,props:{task:{default:function _default(){return taskData}}},methods:actionsData}},Pinned=function Pinned(){return{components:{Task:_Task__WEBPACK_IMPORTED_MODULE_2__.a},template:taskTemplate,props:{task:{default:function _default(){return Object.assign({},taskData,{state:"TASK_PINNED"})}}},methods:actionsData}},Archived=function Archived(){return{components:{Task:_Task__WEBPACK_IMPORTED_MODULE_2__.a},template:taskTemplate,props:{task:{default:function _default(){return Object.assign({},taskData,{state:"TASK_ARCHIVED"})}}},methods:actionsData}}},514:function(module,exports){},730:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(323)},89:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(20),__webpack_require__(64);var toConsumableArray=__webpack_require__(126),Task=__webpack_require__(104),components_PureTaskListvue_type_script_lang_js_={name:"pure-task-list",props:{loading:{type:Boolean,default:!1},tasks:{type:Array,default:function _default(){return[]}}},components:{Task:Task.a},computed:{noTasks:function noTasks(){return 0===this.tasks.length},showTasks:function showTasks(){return!this.loading&&!this.noTasks},tasksInOrder:function tasksInOrder(){return[].concat(Object(toConsumableArray.a)(this.tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(toConsumableArray.a)(this.tasks.filter((function(t){return"TASK_PINNED"!==t.state}))))}}},componentNormalizer=__webpack_require__(74),component=Object(componentNormalizer.a)(components_PureTaskListvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_vm.loading?_c("div",_vm._l(5,(function(n,index){return _c("div",{key:index,staticClass:"loading-item"},[_c("span",{staticClass:"glow-checkbox"}),_vm._v(" "),_vm._m(0,!0)])})),0):_vm._e(),_vm._v(" "),_vm.noTasks&&!this.loading?_c("div",{staticClass:"list-items"},[_vm._m(1)]):_vm._e(),_vm._v(" "),_vm.showTasks?_c("div",{staticClass:"list-items"},_vm._l(_vm.tasksInOrder,(function(task,index){return _c("task",{key:index,attrs:{task:task},on:{archiveTask:function($event){return _vm.$emit("archiveTask",$event)},pinTask:function($event){return _vm.$emit("pinTask",$event)}}})})),1):_vm._e()])}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("span",{staticClass:"glow-text"},[_c("span",[this._v("Loading")]),this._v(" "),_c("span",[this._v("cool")]),this._v(" "),_c("span",[this._v("state")])])},function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"wrapper-message"},[_c("span",{staticClass:"icon-check"}),this._v(" "),_c("div",{staticClass:"title-message"},[this._v("You have no tasks")]),this._v(" "),_c("div",{staticClass:"subtitle-message"},[this._v("Sit back and relax")])])}],!1,null,null,null);__webpack_exports__.a=component.exports},946:function(module,exports,__webpack_require__){"use strict";__webpack_require__(16),__webpack_require__(64),__webpack_require__(37),__webpack_require__(378),__webpack_require__(379),__webpack_require__(36),__webpack_require__(39),__webpack_require__(16),__webpack_require__(64),__webpack_require__(37),__webpack_require__(378),__webpack_require__(379),__webpack_require__(36),__webpack_require__(39);var _clientApi=__webpack_require__(69),_clientLogger=__webpack_require__(40),_configFilename=__webpack_require__(947);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},947:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(948)},948:function(module,exports,__webpack_require__){var api=__webpack_require__(949),content=__webpack_require__(950);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},950:function(module,exports,__webpack_require__){(exports=__webpack_require__(951)(!1)).push([module.i,"@import url(https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,800);"]),exports.push([module.i,'html,\nbody {\n  margin: 0;\n  padding: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\ndd,\ndl,\ndt,\nli,\nol,\nul,\nfieldset,\nform,\nlabel,\nlegend,\nbutton,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 100%;\n  line-height: 1;\n  font-family: inherit;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nol,\nul {\n  list-style: none;\n}\nq:before,\nq:after,\nblockquote:before,\nblockquote:after {\n  content: "";\n}\nhtml {\n  font-size: 100%;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\na:focus {\n  outline: thin dotted;\n}\na:hover,\na:active {\n  outline: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection {\n  display: block;\n}\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n}\naudio:not([controls]) {\n  display: none;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n  -ms-interpolation-mode: bicubic;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  margin: 0;\n  vertical-align: baseline;\n  *vertical-align: middle;\n}\nbutton,\ninput {\n  line-height: normal;\n  *overflow: visible;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\nbutton,\ninput[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\ninput[type="search"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n@-webkit-keyframes glow {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes glow {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.force-wrap {\n  word-wrap: break-word;\n  word-break: break-all;\n  -ms-word-break: break-all;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n}\n.type-light {\n  font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 300;\n}\n.type-bold {\n  font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n}\n.type-italic {\n  font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n}\nhtml,\nbutton,\ninput,\ntextarea,\nselect {\n  outline: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody {\n  font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-style: 400;\n  color: #333;\n  font-size: 16px;\n  background-color: #26c6da;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-style: 400;\n  margin: 0;\n  padding: 0;\n}\nh1 {\n  font-size: 40px;\n  line-height: 48px;\n}\nh2 {\n  font-size: 28px;\n  line-height: 32px;\n}\nh3 {\n  font-size: 24px;\n  line-height: 28px;\n}\nh4 {\n  font-size: 20px;\n  line-height: 24px;\n}\nh5 {\n  font-size: 14px;\n  line-height: 20px;\n  color: #ccc;\n  text-transform: uppercase;\n}\nh6 {\n  color: #aaa;\n}\np {\n  font-size: 16px;\n  line-height: 24px;\n}\nsub,\nsup {\n  font-size: 0.8em;\n}\nsub {\n  bottom: -0.2em;\n}\nsup {\n  top: -0.2em;\n}\nb {\n  font-weight: bold;\n}\nem {\n  font-style: italic;\n}\ninput[type="text"],\ninput[type="email"],\ninput[type="password"],\ntextarea {\n  font-size: 14px;\n  line-height: 20px;\n  font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-style: 400;\n  padding: .75rem 0;\n  line-height: 1.5rem !important;\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: #333;\n  outine: none;\n}\ninput[type="text"] ::-moz-placeholder, input[type="email"] ::-moz-placeholder, input[type="password"] ::-moz-placeholder, textarea ::-moz-placeholder {\n  color: #778b91;\n}\ninput[type="text"] :-ms-input-placeholder, input[type="email"] :-ms-input-placeholder, input[type="password"] :-ms-input-placeholder, textarea :-ms-input-placeholder {\n  color: #778b91;\n}\ninput[type="text"] ::placeholder,\ninput[type="email"] ::placeholder,\ninput[type="password"] ::placeholder,\ntextarea ::placeholder {\n  color: #778b91;\n}\ninput[type="text"][disabled],\ninput[type="email"][disabled],\ninput[type="password"][disabled],\ntextarea[disabled] {\n  opacity: .5;\n}\ninput:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 1000px white inset;\n}\n.checkbox {\n  display: inline-block;\n  height: 3rem;\n  position: relative;\n  vertical-align: middle;\n  width: 44px;\n}\n.checkbox input[type="checkbox"] {\n  font-size: 1em;\n  visibility: hidden;\n}\n.checkbox input[type="checkbox"] + span:before {\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  width: 0.85em;\n  height: 0.85em;\n  transform: translate3d(-50%, -50%, 0);\n  background: transparent;\n  box-shadow: #2cc5d2 0 0 0 1px inset;\n  content: \'\';\n  display: block;\n}\n.checkbox input[type="checkbox"]:checked + span:before {\n  font-size: 16px;\n  line-height: 24px;\n  box-shadow: none;\n  color: #2cc5d2;\n  margin-top: -1px;\n  font-family: \'percolate\';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: "\\e65e";\n}\n.input-symbol {\n  display: inline-block;\n  position: relative;\n}\n.input-symbol.error [class^="icon-"],\n.input-symbol.error [class*=" icon-"] {\n  color: #ff4400;\n}\n.input-symbol [class^="icon-"],\n.input-symbol [class*=" icon-"] {\n  left: 1em;\n}\n.input-symbol input {\n  padding-left: 3em;\n}\n.input-symbol input {\n  width: 100%;\n}\n.input-symbol input:focus + [class^="icon-"],\n.input-symbol input:focus + [class*=" icon-"] {\n  color: #2cc5d2;\n}\n.input-symbol [class^="icon-"],\n.input-symbol [class*=" icon-"] {\n  transition: all 300ms ease-in;\n  transform: translate3d(0, -50%, 0);\n  background: transparent;\n  color: #aaa;\n  font-size: 1em;\n  height: 1em;\n  position: absolute;\n  top: 50%;\n  width: 1em;\n}\n@font-face {\n  font-family: "percolate";\n  src: url("/icon/percolate.eot?-5w3um4");\n  src: url("/icon/percolate.eot?#iefix5w3um4") format("embedded-opentype"), url("/icon/percolate.woff?5w3um4") format("woff"), url("/icon/percolate.ttf?5w3um4") format("truetype"), url("/icon/percolate.svg?5w3um4") format("svg");\n  font-weight: normal;\n  font-style: normal;\n}\n[class^="icon-"],\n[class*=" icon-"] {\n  font-family: "percolate";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-graphql:before {\n  content: "\\e90a";\n}\n.icon-redux:before {\n  content: "\\e908";\n}\n.icon-grid:before {\n  content: "\\e909";\n}\n.icon-redirect:before {\n  content: "\\e907";\n}\n.icon-grow:before {\n  content: "\\e903";\n}\n.icon-lightning:before {\n  content: "\\e904";\n}\n.icon-request-change:before {\n  content: "\\e905";\n}\n.icon-transfer:before {\n  content: "\\e906";\n}\n.icon-calendar:before {\n  content: "\\e902";\n}\n.icon-sidebar:before {\n  content: "\\e900";\n}\n.icon-tablet:before {\n  content: "\\e901";\n}\n.icon-atmosphere:before {\n  content: "\\e671";\n}\n.icon-browser:before {\n  content: "\\e672";\n}\n.icon-database:before {\n  content: "\\e673";\n}\n.icon-expand-alt:before {\n  content: "\\e674";\n}\n.icon-mobile:before {\n  content: "\\e675";\n}\n.icon-watch:before {\n  content: "\\e676";\n}\n.icon-home:before {\n  content: "\\e600";\n}\n.icon-user-alt:before {\n  content: "\\e601";\n}\n.icon-user:before {\n  content: "\\e602";\n}\n.icon-user-add:before {\n  content: "\\e603";\n}\n.icon-users:before {\n  content: "\\e604";\n}\n.icon-profile:before {\n  content: "\\e605";\n}\n.icon-bookmark:before {\n  content: "\\e606";\n}\n.icon-bookmark-hollow:before {\n  content: "\\e607";\n}\n.icon-star:before {\n  content: "\\e608";\n}\n.icon-star-hollow:before {\n  content: "\\e609";\n}\n.icon-circle:before {\n  content: "\\e60a";\n}\n.icon-circle-hollow:before {\n  content: "\\e60b";\n}\n.icon-heart:before {\n  content: "\\e60c";\n}\n.icon-heart-hollow:before {\n  content: "\\e60d";\n}\n.icon-face-happy:before {\n  content: "\\e60e";\n}\n.icon-face-sad:before {\n  content: "\\e60f";\n}\n.icon-face-neutral:before {\n  content: "\\e610";\n}\n.icon-lock:before {\n  content: "\\e611";\n}\n.icon-unlock:before {\n  content: "\\e612";\n}\n.icon-key:before {\n  content: "\\e613";\n}\n.icon-arrow-left-alt:before {\n  content: "\\e614";\n}\n.icon-arrow-right-alt:before {\n  content: "\\e615";\n}\n.icon-sync:before {\n  content: "\\e616";\n}\n.icon-reply:before {\n  content: "\\e617";\n}\n.icon-expand:before {\n  content: "\\e618";\n}\n.icon-arrow-left:before {\n  content: "\\e619";\n}\n.icon-arrow-up:before {\n  content: "\\e61a";\n}\n.icon-arrow-down:before {\n  content: "\\e61b";\n}\n.icon-arrow-right:before {\n  content: "\\e61c";\n}\n.icon-chevron-down:before {\n  content: "\\e61d";\n}\n.icon-back:before {\n  content: "\\e61e";\n}\n.icon-download:before {\n  content: "\\e61f";\n}\n.icon-upload:before {\n  content: "\\e620";\n}\n.icon-proceed:before {\n  content: "\\e621";\n}\n.icon-info:before {\n  content: "\\e622";\n}\n.icon-question:before {\n  content: "\\e623";\n}\n.icon-alert:before {\n  content: "\\e624";\n}\n.icon-edit:before {\n  content: "\\e625";\n}\n.icon-paintbrush:before {\n  content: "\\e626";\n}\n.icon-close:before {\n  content: "\\e627";\n}\n.icon-trash:before {\n  content: "\\e628";\n}\n.icon-cross:before {\n  content: "\\e629";\n}\n.icon-delete:before {\n  content: "\\e62a";\n}\n.icon-power:before {\n  content: "\\e62b";\n}\n.icon-add:before {\n  content: "\\e62c";\n}\n.icon-plus:before {\n  content: "\\e62d";\n}\n.icon-document:before {\n  content: "\\e62e";\n}\n.icon-graph-line:before {\n  content: "\\e62f";\n}\n.icon-doc-chart:before {\n  content: "\\e630";\n}\n.icon-doc-list:before {\n  content: "\\e631";\n}\n.icon-category:before {\n  content: "\\e632";\n}\n.icon-copy:before {\n  content: "\\e633";\n}\n.icon-book:before {\n  content: "\\e634";\n}\n.icon-certificate:before {\n  content: "\\e636";\n}\n.icon-print:before {\n  content: "\\e637";\n}\n.icon-list-unordered:before {\n  content: "\\e638";\n}\n.icon-graph-bar:before {\n  content: "\\e639";\n}\n.icon-menu:before {\n  content: "\\e63a";\n}\n.icon-filter:before {\n  content: "\\e63b";\n}\n.icon-ellipsis:before {\n  content: "\\e63c";\n}\n.icon-cog:before {\n  content: "\\e63d";\n}\n.icon-wrench:before {\n  content: "\\e63e";\n}\n.icon-nut:before {\n  content: "\\e63f";\n}\n.icon-camera:before {\n  content: "\\e640";\n}\n.icon-eye:before {\n  content: "\\e641";\n}\n.icon-photo:before {\n  content: "\\e642";\n}\n.icon-video:before {\n  content: "\\e643";\n}\n.icon-speaker:before {\n  content: "\\e644";\n}\n.icon-phone:before {\n  content: "\\e645";\n}\n.icon-flag:before {\n  content: "\\e646";\n}\n.icon-pin:before {\n  content: "\\e647";\n}\n.icon-compass:before {\n  content: "\\e648";\n}\n.icon-globe:before {\n  content: "\\e649";\n}\n.icon-location:before {\n  content: "\\e64a";\n}\n.icon-search:before {\n  content: "\\e64b";\n}\n.icon-timer:before {\n  content: "\\e64c";\n}\n.icon-time:before {\n  content: "\\e64d";\n}\n.icon-dashboard:before {\n  content: "\\e64e";\n}\n.icon-hourglass:before {\n  content: "\\e64f";\n}\n.icon-play:before {\n  content: "\\e650";\n}\n.icon-stop:before {\n  content: "\\e651";\n}\n.icon-email:before {\n  content: "\\e652";\n}\n.icon-comment:before {\n  content: "\\e653";\n}\n.icon-link:before {\n  content: "\\e654";\n}\n.icon-paperclip:before {\n  content: "\\e655";\n}\n.icon-box:before {\n  content: "\\e656";\n}\n.icon-structure:before {\n  content: "\\e657";\n}\n.icon-commit:before {\n  content: "\\e658";\n}\n.icon-cpu:before {\n  content: "\\e659";\n}\n.icon-memory:before {\n  content: "\\e65a";\n}\n.icon-outbox:before {\n  content: "\\e65b";\n}\n.icon-share:before {\n  content: "\\e65c";\n}\n.icon-button:before {\n  content: "\\e65d";\n}\n.icon-check:before {\n  content: "\\e65e";\n}\n.icon-form:before {\n  content: "\\e65f";\n}\n.icon-admin:before {\n  content: "\\e660";\n}\n.icon-paragraph:before {\n  content: "\\e661";\n}\n.icon-bell:before {\n  content: "\\e662";\n}\n.icon-rss:before {\n  content: "\\e663";\n}\n.icon-basket:before {\n  content: "\\e664";\n}\n.icon-credit:before {\n  content: "\\e665";\n}\n.icon-support:before {\n  content: "\\e666";\n}\n.icon-shield:before {\n  content: "\\e667";\n}\n.icon-beaker:before {\n  content: "\\e668";\n}\n.icon-google:before {\n  content: "\\e669";\n}\n.icon-gdrive:before {\n  content: "\\e66a";\n}\n.icon-youtube:before {\n  content: "\\e66b";\n}\n.icon-facebook:before {\n  content: "\\e66c";\n}\n.icon-thumbs-up:before {\n  content: "\\e66d";\n}\n.icon-twitter:before {\n  content: "\\e66e";\n}\n.icon-github:before {\n  content: "\\e66f";\n}\n.icon-meteor:before {\n  content: "\\e670";\n}\na {\n  transition: all 200ms ease-in;\n  color: #5db9ff;\n  cursor: pointer;\n  text-decoration: none;\n}\na:hover {\n  color: #239da8;\n}\na:active {\n  color: #555;\n}\na:focus {\n  outline: none;\n}\n.list-heading {\n  letter-spacing: .3em;\n  text-indent: .3em;\n  text-transform: uppercase;\n  font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n  font-size: 11px;\n  padding-left: 15px;\n  line-height: 40px;\n  background: #f8f8f8;\n  color: #aaa;\n}\n.list-heading .icon-sync {\n  opacity: 1;\n  -webkit-animation: spin 2s infinite linear;\n          animation: spin 2s infinite linear;\n  display: inline-block;\n  margin-right: 4px;\n}\n.list-item {\n  font-size: 14px;\n  line-height: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  height: 3rem;\n  width: 100%;\n  background: white;\n  transition: all ease-out 150ms;\n}\n.list-item .title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1 1;\n}\n.list-item input[type="text"] {\n  background: transparent;\n  width: 100%;\n}\n.list-item input[type="text"]:focus {\n  cursor: text;\n}\n.list-item .actions {\n  transition: all 200ms ease-in;\n  padding-right: 20px;\n}\n.list-item .actions a {\n  display: inline-block;\n  vertical-align: top;\n  text-align: center;\n  color: #eee;\n}\n.list-item .actions a:hover {\n  color: #2cc5d2;\n}\n.list-item .actions a:active {\n  color: #555;\n}\n.list-item .actions [class^="icon-"] {\n  font-size: 16px;\n  line-height: 24px;\n  line-height: 3rem;\n  text-align: center;\n}\n.list-item.TASK_PINNED .icon-star {\n  color: #2cc5d2;\n}\n.list-item.TASK_ARCHIVED input[type="text"] {\n  color: #aaa;\n}\n.list-item:hover {\n  background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);\n}\n.list-item:hover .checkbox {\n  cursor: pointer;\n}\n.list-item + .list-item {\n  border-top: 1px solid #f0f9fb;\n}\n.list-item.checked input[type="text"] {\n  color: #ccc;\n  text-decoration: line-through;\n}\n.list-item.checked .delete-item {\n  display: inline-block;\n}\n.loading-item {\n  height: 3rem;\n  width: 100%;\n  background: white;\n  display: flex;\n  align-items: center;\n  line-height: 1rem;\n  padding-left: 16px;\n}\n.loading-item .glow-checkbox,\n.loading-item .glow-text span {\n  -webkit-animation: glow 1.5s ease-in-out infinite;\n          animation: glow 1.5s ease-in-out infinite;\n  background: #eee;\n  color: transparent;\n  cursor: progress;\n  display: inline-block;\n}\n.loading-item .glow-checkbox {\n  margin-right: 16px;\n  width: 12px;\n  height: 12px;\n}\n.loading-item + .loading-item {\n  border-top: 1px solid #f0f9fb;\n}\n.list-items {\n  position: relative;\n  background: white;\n  min-height: 288px;\n}\n.list-items .select-placeholder {\n  border: none;\n  width: 48px;\n}\n.wrapper-message {\n  position: absolute;\n  top: 45%;\n  right: 0;\n  bottom: auto;\n  left: 0;\n  width: auto;\n  height: auto;\n  transform: translate3d(0, -50%, 0);\n  text-align: center;\n}\n.wrapper-message [class^="icon-"],\n.wrapper-message [class*=" icon-"] {\n  font-size: 48px;\n  line-height: 56px;\n  color: #2cc5d2;\n  display: block;\n}\n.wrapper-message .title-message {\n  font-size: 16px;\n  line-height: 24px;\n  font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n  color: #555;\n}\n.wrapper-message .subtitle-message {\n  font-size: 14px;\n  line-height: 20px;\n  color: #666;\n}\n.page.lists-show {\n  min-height: 100vh;\n  background: white;\n}\n.page.lists-show nav {\n  background: #d3edf4;\n  padding: 1.5rem 1.25rem;\n  text-align: center;\n}\n@media screen and (min-width: 40em) {\n  .page.lists-show nav {\n    text-align: left;\n  }\n}\n.page.lists-show nav .title-page {\n  font-size: 20px;\n  line-height: 24px;\n  line-height: 2rem;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.page.lists-show nav .title-page .title-wrapper {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n  color: #1c3f53;\n  display: inline-block;\n  vertical-align: top;\n  max-width: 100%;\n}\n',""]),module.exports=exports},952:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(323).configure)([__webpack_require__(953)],module,!1)}).call(this,__webpack_require__(97)(module))},953:function(module,exports,__webpack_require__){var map={"./PureInboxScreen.stories.js":955,"./PureTaskList.stories.js":232,"./Task.stories.js":42};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=953},955:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"store",(function(){return store})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return PureInboxScreen_stories_Default})),__webpack_require__.d(__webpack_exports__,"error",(function(){return PureInboxScreen_stories_error}));var vue_esm=__webpack_require__(156),vuex_esm=__webpack_require__(103),components_TaskListvue_type_script_lang_js_=(__webpack_require__(19),{name:"task-list",components:{PureTaskList:__webpack_require__(89).a},methods:Object.assign({},Object(vuex_esm.b)(["archiveTask","pinTask"])),computed:Object.assign({},Object(vuex_esm.c)(["tasks"]))}),componentNormalizer=__webpack_require__(74),TaskList=Object(componentNormalizer.a)(components_TaskListvue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",[_c("pure-task-list",{attrs:{tasks:this.tasks},on:{archiveTask:this.archiveTask,pinTask:this.pinTask}})],1)}),[],!1,null,null,null).exports,components_PureInboxScreenvue_type_script_lang_js_={name:"pure-inbox-screen",props:{error:{type:Boolean,default:!1}},components:{TaskList:TaskList}},PureInboxScreen=Object(componentNormalizer.a)(components_PureInboxScreenvue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",[this.error?_c("div",{staticClass:"page lists-show"},[this._m(0)]):_c("div",{staticClass:"page lists-show"},[this._m(1),this._v(" "),_c("task-list")],1)])}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"wrapper-message"},[_c("span",{staticClass:"icon-face-sad"}),this._v(" "),_c("div",{staticClass:"title-message"},[this._v("Oh no!")]),this._v(" "),_c("div",{staticClass:"subtitle-message"},[this._v("Something went wrong")])])},function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("nav",[_c("h1",{staticClass:"title-page"},[_c("span",{staticClass:"title-wrapper"},[this._v("Taskbox")])])])}],!1,null,null,null).exports,dist=__webpack_require__(73),PureTaskList_stories=__webpack_require__(232);vue_esm.default.use(vuex_esm.a);var store=new vuex_esm.a.Store({state:{tasks:PureTaskList_stories.defaultTasksData},actions:{pinTask:function pinTask(context,id){Object(dist.action)("pinTask")(id)},archiveTask:function archiveTask(context,id){Object(dist.action)("archiveTask")(id)}}}),PureInboxScreen_stories_Default=(__webpack_exports__.default={title:"PureInboxScreen",excludeStories:/.*store$/},function Default(){return{components:{PureInboxScreen:PureInboxScreen},template:"<pure-inbox-screen/>",store:store}}),PureInboxScreen_stories_error=function error(){return{components:{PureInboxScreen:PureInboxScreen},template:'<pure-inbox-screen :error="true"/>'}}}},[[380,1,2]]]);
//# sourceMappingURL=main.470eb6249d8d3e9d40a7.bundle.js.map