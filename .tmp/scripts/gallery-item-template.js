!function () {
  var a = Handlebars.template,
      l = Handlebars.templates = Handlebars.templates || {};
  l["gallery-item.hbs"] = a({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, l, e, n) {
      var t,
          s = "function",
          i = l.helperMissing,
          d = this.escapeExpression;
      return '\n<div class="content-box" data-attribute=' + d((t = null != (t = l.id || (null != a ? a.id : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "id",
        hash: {},
        data: n
      }) : t)) + " style=\"background-image: url('http://image.tmdb.org/t/p/original/" + d((t = null != (t = l.backdrop_path || (null != a ? a.backdrop_path : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "backdrop_path",
        hash: {},
        data: n
      }) : t)) + '\');">\n	<div class="box-content">\n			<span class="rating">' + d((t = null != (t = l.vote_average || (null != a ? a.vote_average : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "vote_average",
        hash: {},
        data: n
      }) : t)) + '</span>\n			<div class="box-info">\n					<h1>' + d((t = null != (t = l.title || (null != a ? a.title : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "title",
        hash: {},
        data: n
      }) : t)) + '</h1>\n\n					<div class="movie-info">\n						<span class="rank">0' + d((l.math || a && a.math || i).call(a, n && n.index, {
        name: "math",
        hash: {},
        data: n
      })) + '</span>\n						<div class="small-detail">\n							<p>release date : ' + d((t = null != (t = l.release_date || (null != a ? a.release_date : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "release_date",
        hash: {},
        data: n
      }) : t)) + "</p>\n							<p>popularity : " + d((t = null != (t = l.popularity || (null != a ? a.popularity : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "popularity",
        hash: {},
        data: n
      }) : t)) + '</p>\n							<a class="btn" data-key=' + d((t = null != (t = l.id || (null != a ? a.id : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "id",
        hash: {},
        data: n
      }) : t)) + "> Learn More</a>\n						</div>\n					</div>\n			</div>\n	</div>\n</div>\n";
    },
    useData: !0
  });
}();
//# sourceMappingURL=gallery-item-template.js.map
