webpackJsonp([1],{"9n10":function(t,e){},BM6T:function(t,e){},BdaT:function(t,e){},Ibp8:function(t,e){},M6Sr:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n=i("7QTg"),a=i.n(n),r=i("v5o6"),c=i.n(r),o=(i("j1ja"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"CityDetail"}},[e("router-view")],1)],1)},staticRenderFns:[]});var l=i("VU/8")({name:"App"},o,!1,function(t){i("YECf")},null,null).exports,d=i("/ocq"),h=i("Dd8w"),u=i.n(h),m=i("NYxO"),v={name:"HomeHeader",computed:u()({},Object(m.c)(["city"]))},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\r\n            "+this._s(this.city)+"\r\n            "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("span",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-middle"},[e("span",{staticClass:"iconfont search-icon"},[this._v("")]),this._v(" "),e("div",{staticClass:"kw"},[this._v("输入城市/景点/游玩主题")]),this._v(" "),e("input",{staticClass:"header-input",attrs:{type:"text"}})])}]};var p=i("VU/8")(v,f,!1,function(t){i("abTb")},"data-v-0b6d5396",null).exports,_={name:"HomeSwiper",props:{swiperList:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},loop:!0}}},computed:{swiperShow:function(){return this.swiperList.length}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sw-wrapper"},[this.swiperShow?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var y=i("VU/8")(_,C,!1,function(t){i("Ibp8")},"data-v-2de942c4",null).exports,g={name:"HomeIcon",props:{iconList:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon-wrapper"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon-box"},[i("div",{staticClass:"icon-img-box"},[i("img",{staticClass:"icon-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"icon-description"},[t._v(t._s(e.description))])])}),0)}),1)],1)},staticRenderFns:[]};var b=i("VU/8")(g,w,!1,function(t){i("UcvU")},"data-v-504387d3",null).exports,k={name:"HomeRecommend",props:{recommendList:Array}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend-wrapper"},[t._m(0),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"list-item",attrs:{tag:"li",to:"/detail/"+e.id}},[i("div",{staticClass:"item-img"},[i("img",{attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-img-tag"},[t._v(t._s(e.tag))]),t._v(" "),i("div",{staticClass:"item-info"},[i("div",{staticClass:"inner-box"},[i("div",{staticClass:"info-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"info-comment"},[i("span",{staticClass:"iconfont icon-star"},[t._v("")]),t._v(" "),i("span",{staticClass:"iconfont icon-star"},[t._v("")]),t._v(" "),i("span",{staticClass:"iconfont icon-star"},[t._v("")]),t._v(" "),i("span",{staticClass:"iconfont icon-star"},[t._v("")]),t._v(" "),i("span",{staticClass:"iconfont icon-star"},[t._v("")]),t._v(" "),i("span",{staticClass:"comment-num"},[t._v(t._s(e.commentNum)+"条评论")])]),t._v(" "),i("div",{staticClass:"info-price"},[i("span",{staticClass:"price"},[t._v("￥"),i("em",[t._v(t._s(e.price))])]),t._v("起\n            "),i("span",{staticClass:"district"},[t._v(t._s(e.district))])])])])])}),1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recommend-title"},[e("span",{staticClass:"iconfont icon-heart"},[this._v("")]),this._v("猜你喜欢\n  ")])}]};var x=i("VU/8")(k,L,!1,function(t){i("bmg7")},"data-v-2cb0d939",null).exports,I={name:"HomeWeekend",props:{weekendList:Array}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend-wrapper"},[i("div",{staticClass:"recommend-title"},[t._v("\n    周末去哪儿\n  ")]),t._v(" "),i("ul",t._l(t.weekendList,function(e,s){return i("li",{key:s,staticClass:"list-item"},[i("div",{staticClass:"item-img"},[i("img",{attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("div",{staticClass:"inner-box"},[i("div",{staticClass:"info-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"info-comment"},[t._v(t._s(e.comment))])])])])}),0)])},staticRenderFns:[]};var E=i("VU/8")(I,S,!1,function(t){i("klL+")},"data-v-634eea0e",null).exports,U=i("mtWM"),$=i.n(U),H={name:"Home",components:{"home-header":p,"home-swiper":y,"home-icon":b,"home-recommend":x,"home-weekend":E},computed:u()({},Object(m.c)({curCity:"city"})),data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},methods:{getHomeInfo:function(){$.a.get("/api/index.json?city="+this.curCity).then(this.getHomeInfoSuccess)},getHomeInfoSuccess:function(t){if(t.data.ret&&t.data.data){var e=t.data.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.curCity,this.getHomeInfo()},activated:function(){this.lastCity!==this.curCity&&(this.lastCity=this.curCity,this.getHomeInfo())}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{"swiper-list":t.swiperList}}),t._v(" "),i("home-icon",{attrs:{"icon-list":t.iconList}}),t._v(" "),i("home-recommend",{attrs:{"recommend-list":t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{"weekend-list":t.weekendList}})],1)},staticRenderFns:[]};var R=i("VU/8")(H,N,!1,function(t){i("qzxd")},null,null).exports,F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/"}},[e("span",{staticClass:"iconfont city-hd-back-icon"},[this._v("")])]),this._v("\n  城市选择\n")],1)},staticRenderFns:[]};var T=i("VU/8")({name:"CityHeader"},F,!1,function(t){i("d744")},"data-v-ab9a844e",null).exports,V=i("GQaK"),B={name:"CityList",props:{hotCities:Array,cities:Object},data:function(){return{letter:""}},methods:u()({handleLetterClick:function(t){this.letter=t.target.innerText},handleCityClick:function(t){this.$store.commit("changeCityName",t),this.$router.push("/")}},Object(m.b)({changeCityName:"changeCityName"})),computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t},computedCities:function(){for(var t,e=[],i=this.hotCities.length,s=0;s<i;s++){var n={};t=this.hotCities[s],n.name=t.name,n.id=t.id,1===t.order?n.borderType="":2===t.order||1===t.order?n.borderType="border-left":t.order%3==1?n.borderType="border-top":n.borderType="border-topleft",e.push(n)}return e}},mounted:function(){this.scroll=new V.a(this.$refs.listWrapper,{click:!0})},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"listWrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"hot-cities"},[i("div",{staticClass:"hot-cts-title"},[t._v("热门城市")]),t._v(" "),i("ul",{staticClass:"clearfix"},t._l(t.computedCities,function(e){return i("li",{key:e.id,class:e.borderType,on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0)]),t._v(" "),i("div",{staticClass:"alphabet-menu"},[i("div",{staticClass:"alphabet-menu-title"},[t._v("字母排序")]),t._v(" "),i("ul",{staticClass:"clearfix"},t._l(t.letters,function(e,s){return i("li",{key:s,on:{click:t.handleLetterClick}},[t._v(t._s(e))])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"alphabet-list"},[i("div",{staticClass:"alphabet-list-title"},[t._v(t._s(s))]),t._v(" "),i("ul",{staticClass:"clearfix"},t._l(e,function(e){return i("li",{key:e.id,on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name)+"\n        ")])}),0)])}),t._v(" "),i("div")],2)])},staticRenderFns:[]};var O={name:"City",components:{"city-header":T,"city-list":i("VU/8")(B,G,!1,function(t){i("sMNK")},"data-v-2becf0ee",null).exports},data:function(){return{hotCities:[],cities:{}}},methods:{getCityInfo:function(){$.a.get("/api/city.json").then(this.getCityInfoSuccess)},getCityInfoSuccess:function(t){var e=t.data.data;this.hotCities=e.hotCities,this.cities=e.cities}},mounted:function(){this.getCityInfo()}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("city-header"),this._v(" "),e("city-list",{attrs:{"hot-cities":this.hotCities,cities:this.cities}})],1)},staticRenderFns:[]};var D=i("VU/8")(O,A,!1,function(t){i("ftZw")},"data-v-4f29d132",null).exports,j={name:"CommonGallery",props:{imgsList:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",type:"fraction"},observer:!0,observeParents:!0}}},methods:{handleGalleryClick:function(){this.$emit("closeGallery")}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallery-container",on:{click:this.handleGalleryClick}},[e("div",{staticClass:"img-wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgsList,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallery-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var q={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var W={name:"DetailBanner",components:{"common-gallery":i("VU/8")(j,M,!1,function(t){i("YSXh")},"data-v-85ac7b36",null).exports,"common-fade":i("VU/8")({name:"Fade"},q,!1,function(t){i("BM6T")},"data-v-0006f085",null).exports},props:{sightName:String,bannerImage:String,galleryImages:Array},data:function(){return{isGalleryShow:!1}},methods:{handleBannerClick:function(){this.isGalleryShow=!0},handleGalleryClose:function(){this.isGalleryShow=!1}}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-image",attrs:{src:t.bannerImage}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont picture-icon"},[t._v("")]),t._v("\r\n        "+t._s(this.galleryImages.length)+"\r\n      ")]),t._v(" "),i("div",{staticClass:"banner-title"},[t._v(t._s(this.sightName))])])]),t._v(" "),i("common-fade",[i("common-gallery",{directives:[{name:"show",rawName:"v-show",value:t.isGalleryShow,expression:"isGalleryShow"}],attrs:{"imgs-list":t.galleryImages},on:{closeGallery:t.handleGalleryClose}})],1)],1)},staticRenderFns:[]};var z=i("VU/8")(W,Y,!1,function(t){i("x9tN")},"data-v-9973616c",null).exports,X={name:"DetailHeader",data:function(){return{showHeaderBack:!0,opacityStyle:{opacity:0}}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>50){var e=t/130;e=e>1?1:e,this.opacityStyle={opacity:e},this.showHeaderBack=!1}else this.showHeaderBack=!0}}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showHeaderBack,expression:"showHeaderBack"}],staticClass:"header-back",attrs:{tag:"div",to:"/"}},[e("span",{staticClass:"iconfont icon-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showHeaderBack,expression:"!showHeaderBack"}],staticClass:"header",style:this.opacityStyle},[e("router-link",{staticClass:"header-left",attrs:{to:"/"}},[e("span",{staticClass:"iconfont icon-back"},[this._v("")])]),this._v("\n    成都欢乐谷\n  ")],1)],1)},staticRenderFns:[]};var P=i("VU/8")(X,K,!1,function(t){i("qXUE")},"data-v-5317c24e",null).exports,Q={name:"DetailList",props:{list:Array}},Z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"list-item"},[i("div",{staticClass:"list-item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var J={name:"CityDetail",components:{"detail-banner":z,"detail-header":P,"detail-list":i("VU/8")(Q,Z,!1,function(t){i("R93e")},"data-v-ff6bab68",null).exports},data:function(){return{sightName:"",bannerImage:"",galleryImages:[],categoryList:[]}},methods:{getDetailInfo:function(){$.a.get("api/detail.json",{params:{id:this.$route.params.id}}).then(this.getDetailInfoSuccess)},getDetailInfoSuccess:function(t){if(t.data.ret&&t.data.data){var e=t.data.data;this.sightName=e.sightName,this.bannerImage=e.bannerImage,this.galleryImages=e.galleryImages,this.categoryList=e.categoryList}}},mounted:function(){this.getDetailInfo()}},tt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{"sight-name":this.sightName,"banner-image":this.bannerImage,"gallery-images":this.galleryImages}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content-box"},[e("detail-list",{attrs:{"category-list":this.categoryList}})],1)],1)},staticRenderFns:[]};var et=i("VU/8")(J,tt,!1,function(t){i("BdaT")},"data-v-72f23024",null).exports;s.a.use(d.a);var it=new d.a({routes:[{path:"/",name:"Home",component:R},{path:"/city",name:"City",component:D},{path:"/detail/:id",name:"Detail",component:et}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),st="广东";try{localStorage.city&&(st=localStorage.city)}catch(t){}var nt={city:st},at={changeCityName:function(t,e){t.city=e,localStorage.city=e}};s.a.use(m.a);var rt=new m.a.Store({state:nt,mutations:at});i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.a.config.productionTip=!1,c.a.attach(document.body),s.a.use(a.a),new s.a({el:"#app",router:it,store:rt,components:{App:l},template:"<App/>"})},R93e:function(t,e){},TzC8:function(t,e){},UcvU:function(t,e){},YECf:function(t,e){},YSXh:function(t,e){},abTb:function(t,e){},bmg7:function(t,e){},d744:function(t,e){},ftZw:function(t,e){},"klL+":function(t,e){},qXUE:function(t,e){},qzxd:function(t,e){},sMNK:function(t,e){},v2ns:function(t,e){},x9tN:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5e45bed488c43535c741.js.map