!function () {
  var a = Handlebars.template,
      t = Handlebars.templates = Handlebars.templates || {};
  t["tabs.hbs"] = a({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, t, e, l) {
      var n,
          s,
          p = "function",
          i = t.helperMissing,
          r = this.escapeExpression,
          o = this.lambda;
      return '<div class="content-box">\n	<img class="bg-image" src="http://image.tmdb.org/t/p/original' + r((s = null != (s = t.backdrop_path || (null != a ? a.backdrop_path : a)) ? s : i, typeof s === p ? s.call(a, {
        name: "backdrop_path",
        hash: {},
        data: l
      }) : s)) + '" />\n	<div class="box-content">\n			<img src="http://image.tmdb.org/t/p/original' + r((s = null != (s = t.poster_path || (null != a ? a.poster_path : a)) ? s : i, typeof s === p ? s.call(a, {
        name: "poster_path",
        hash: {},
        data: l
      }) : s)) + '" />\n			<div class="box-info">\n					<p>' + r((s = null != (s = t.title || (null != a ? a.title : a)) ? s : i, typeof s === p ? s.call(a, {
        name: "title",
        hash: {},
        data: l
      }) : s)) + '</p>\n					<p>User Rating <span class="rating">' + r((s = null != (s = t.vote_average || (null != a ? a.vote_average : a)) ? s : i, typeof s === p ? s.call(a, {
        name: "vote_average",
        hash: {},
        data: l
      }) : s)) + '</span></p>\n					<a href="https://www.youtube.com/embed/' + r(o(null != (n = null != (n = null != (n = null != a ? a.videos : a) ? n.results : n) ? n["0"] : n) ? n.key : n, a)) + '" target="_blank"> Play Trailer</a>\n			</div>\n	</div>\n</div>\n';
    },
    useData: !0
  });
}();
//# sourceMappingURL=templates.js.map
