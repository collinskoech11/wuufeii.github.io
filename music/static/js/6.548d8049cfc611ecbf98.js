webpackJsonp([6],{"4/PA":function(t,n){},F8sm:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=s("4YfN"),e=s.n(i),o=s("kvay"),a=s("BRgg"),r=s("T452"),u=s("9rMa"),c=s("G3uJ"),g={computed:e()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},Object(u.c)(["topList"])),data:function(){return{songs:[],rank:!0}},created:function(){this._getMusicList()},methods:{_getMusicList:function(){var t=this;this.topList.id?Object(a.a)(this.topList.id).then(function(n){n.code===r.a&&(t.songs=t._normalizeSongs(n.songlist))}):this.$router.push("/rank")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var s=t.data;s.songid&&s.albummid&&n.push(Object(c.a)(s))}),n}},components:{MusicList:o.a}},h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{rank:this.rank,title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var d=s("C7Lr")(g,h,!1,function(t){s("4/PA")},"data-v-1bf780d9",null);n.default=d.exports}});
//# sourceMappingURL=6.548d8049cfc611ecbf98.js.map