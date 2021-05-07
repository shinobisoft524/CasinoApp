(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"/itx":function(t,e,r){"use strict";var n=r("o0o1"),a=r.n(n),o=r("vDqi"),i=r.n(o),s=r("L2JU"),c=r("ZXch"),u=r("/rcJ");function l(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h={name:"DataTable",props:{api:{type:String,required:!0},filters:{type:Object,required:!1,default:function(){return{}}},headers:{type:Array,required:!0},sortBy:{type:String,required:!1,default:"id"},sortDesc:{type:Boolean,required:!1,default:!0},searchEnabled:{type:Boolean,required:!1,default:!1},searchLabel:{type:String,required:!1,default:null},hideFooter:{type:Boolean,required:!1,default:!1}},data:function(){return{loading:!0,options:{},items:[],itemsTotal:0}},computed:p(p({},Object(s.c)({cacheGet:"cache/get"})),{},{cacheKey:function(){return"datatable."+this.$route.name},footerProps:function(){return{"items-per-page-options":[5,10,25,50],"items-per-page-text":this.$t("Rows per page")}},sortDirection:function(){return this.options.sortDesc?"desc":"asc"},slotHeaderMap:function(){return this.headers.reduce((function(t,e){return t["item."+e.value]=e,t}),{})}}),watch:{filters:function(t){this.fetchData()}},created:function(){this.options=this.cacheGet(this.cacheKey)||{page:1,itemsPerPage:10,sortBy:this.sortBy,sortDesc:this.sortDesc,search:null}},methods:p(p({},Object(s.b)({cachePut:"cache/put"})),{},{get:function(){return c.e.apply(void 0,arguments)},format:function(t,e){return"function"==typeof u[t]?u[t](e):e},updateDataTableOptions:function(t){var e=t.page,r=t.itemsPerPage,n=t.sortBy,a=t.sortDesc;this.options=p(p({},this.options),{},{page:e,itemsPerPage:r,sortBy:n[0],sortDesc:a[0]}),this.cacheOptions(),this.fetchData()},cacheOptions:function(){this.cachePut({key:this.cacheKey,value:this.options})},clear:function(){this.options.search=null,this.search()},search:function(){this.fetchData()},fetchData:function(){var t,e=this;return(t=a.a.mark((function t(){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,i.a.get(e.api,{params:p({page:e.options.page,items_per_page:e.options.itemsPerPage,sort_by:e.options.sortBy,sort_direction:e.sortDirection,search:e.options.search},e.filters)});case 3:r=t.sent,n=r.data,e.items=n.items,e.itemsTotal=n.count,e.loading=!1;case 8:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){l(o,n,a,i,s,"next",t)}function s(t){l(o,n,a,i,s,"throw",t)}i(void 0)}))})()}})};e.a=h},"84n/":function(t,e,r){"use strict";r.r(e);var n=r("ZMUr"),a=r("4FDZ"),o={middleware:["auth","verified","2fa_passed"],components:{FilterMenu:r("b205").a,DataTable:n.a,UserProfileModal:a.a},metaInfo:function(){return{title:this.$t("Leaderboard")}},data:function(){return{filters:{}}},computed:{headers:function(){return[{text:this.$t("Player"),value:"name"},{text:this.$t("Bets"),value:"bet_count",format:"integer",align:"right"},{text:this.$t("Wagered"),value:"bet_total",format:"decimal",align:"right"},{text:this.$t("Profit"),value:"profit_total",format:"decimal",align:"right"},{text:this.$t("Max profit"),value:"profit_max",format:"decimal",align:"right"}]}}},i=r("KHd+"),s=r("ZUTo"),c=r.n(s),u=r("ghKu"),l=r("sK+t"),d=r("mdmw"),p=r("Yq0q"),f=r("pSOK"),h=r("rdoz"),v=r("D9m0"),m=r("L6Q5"),b=r("cdmR"),g=r("Kn9U"),y=Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-toolbar",[r("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Leaderboard"))+"\n          ")]),t._v(" "),r("v-spacer"),t._v(" "),r("filter-menu",{on:{apply:function(e){t.filters=e}}})],1),t._v(" "),r("v-card-text",[r("data-table",{attrs:{api:"/api/leaderboard",filters:t.filters,headers:t.headers,"sort-by":"bet_total"},scopedSlots:t._u([{key:"item.name",fn:function(e){var n=e.item;return[r("v-avatar",{attrs:{size:"25"}},[r("v-img",{attrs:{src:n.avatar_url}})],1),t._v(" "),r("user-profile-modal",{attrs:{user:{id:n.id,name:n.name}}})]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=y.exports;c()(y,{VAvatar:u.a,VCard:l.a,VCardText:d.c,VCol:p.a,VContainer:f.a,VImg:h.a,VRow:v.a,VSpacer:m.a,VToolbar:b.a,VToolbarTitle:g.a})},D4ml:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Period"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.period,callback:function(e){t.period=e},expression:"period"}})},a=[]},HyWL:function(t,e,r){"use strict";var n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{roles:["user","bot","admin"],options:[{text:this.$t("User"),value:"user"},{text:this.$t("Bot"),value:"bot"},{text:this.$t("Admin"),value:"admin"}]}},methods:{change:function(){this.$emit("change",{roles:this.roles})}}};e.a=n},JuCL:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.searchEnabled?r("v-row",{attrs:{justify:"end"}},[r("v-col",{attrs:{cols:"12",md:"6",lg:"3"}},[r("v-form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[r("v-text-field",{attrs:{label:t.searchLabel||t.$t("Search"),"append-outer-icon":"mdi-magnify","single-line":"","hide-details":!0,clearable:""},on:{"click:clear":t.clear,"click:append-outer":t.search},model:{value:t.options.search,callback:function(e){t.$set(t.options,"search",e)},expression:"options.search"}})],1)],1)],1):t._e(),t._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,page:t.options.page,"sort-by":t.options.sortBy,"sort-desc":t.options.sortDesc,"items-per-page":t.options.itemsPerPage,"footer-props":t.footerProps,"server-items-length":t.itemsTotal,loading:t.loading,"must-sort":!0,"hide-default-footer":t.hideFooter,"no-data-text":t.$t("No data found"),"no-results-text":t.$t("No data found")},on:{"update:options":t.updateDataTableOptions},scopedSlots:t._u([{key:"loading",fn:function(){return t._l(Array(t.options.itemsPerPage).fill(0),(function(t,e){return r("div",{key:e,staticClass:"align-center my-7"},[r("v-skeleton-loader",{attrs:{type:"text"}})],1)}))},proxy:!0},t._l(t.slotHeaderMap,(function(e,r){return{key:r,fn:function(n){var a=n.item;return[t.$scopedSlots[r]?t._t(r,null,{item:a}):[t._v("\n        "+t._s(e.format?t.format(e.format,t.get(a,e.value)):t.get(a,e.value))+"\n      ")]]}}}))],null,!0)})],1)},a=[]},WFgj:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{"close-on-content-click":!1,left:"","offset-x":"","nudge-width":200},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:"",disabled:t.disabled}},n),[r("v-icon",[t._v("\n        mdi-filter-outline\n      ")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-card",[r("v-card-title",[t._v("\n      "+t._s(t.$t("Filter"))+"\n    ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pt-5"},t._l(t.components,(function(e){return r("filter-by-"+e,{key:e,tag:"component",on:{change:function(e){return t.change(e)}}})})),1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",text:"",disabled:t.disabled},on:{click:t.apply}},[t._v("\n        "+t._s(t.$t("Apply"))+"\n      ")])],1)],1)],1)},a=[]},g1YQ:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Role"),disabled:t.disabled,outlined:"",multiple:""},on:{change:t.change},model:{value:t.roles,callback:function(e){t.roles=e},expression:"roles"}})},a=[]},kDHF:function(t,e,r){"use strict";var n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{period:"month",options:[{text:this.$t("Week"),value:"week"},{text:this.$t("Month"),value:"month"},{text:this.$t("Year"),value:"year"}]}},methods:{change:function(){this.$emit("change",{period:this.period})}}};e.a=n},r6ul:function(t,e,r){"use strict";var n=r("YW/g"),a=r("HJ4Y"),o=r("SasW");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={components:{FilterByPeriod:n.a,FilterByComparisonPeriod:a.a,FilterByRole:o.a},props:{components:{type:Array,required:!1,default:function(){return["period"]}},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{menu:!1,filters:null}},methods:{change:function(t){this.filters=s(s({},this.filters),t)},apply:function(t){this.menu=!1,this.$emit("apply",this.filters)}}};e.a=u},slli:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Period"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.period,callback:function(e){t.period=e},expression:"period"}})},a=[]},wcJE:function(t,e,r){"use strict";var n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{period:null,options:[{text:this.$t("This week"),value:"week"},{text:this.$t("Previous week"),value:"prev_week"},{text:this.$t("This month"),value:"month"},{text:this.$t("Previous month"),value:"prev_month"},{text:this.$t("This year"),value:"year"},{text:this.$t("Previous year"),value:"prev_year"},{text:this.$t("All time"),value:null}]}},methods:{change:function(){this.$emit("change",{period:this.period})}}};e.a=n}}]);
//# sourceMappingURL=leaderboard.js.map