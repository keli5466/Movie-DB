!function () {
  var a = Handlebars.template,
      t = Handlebars.templates = Handlebars.templates || {};
  t["detail.hbs"] = a({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, t, l, e) {
      var n,
          s,
          i = "function",
          o = t.helperMissing,
          r = this.escapeExpression,
          p = this.lambda;
      return '<button class="goBack">Go Back</button>\n<div class="content-box">\n	<img class="bg-image" src="http://image.tmdb.org/t/p/original' + r((s = null != (s = t.backdrop_path || (null != a ? a.backdrop_path : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "backdrop_path",
        hash: {},
        data: e
      }) : s)) + '" />\n	<div class="box-content">\n			<iframe class="bg-image" width="100%" height="100%" src="http://www.youtube.com/embed/' + r(p(null != (n = null != (n = null != (n = null != a ? a.videos : a) ? n.results : n) ? n["0"] : n) ? n.key : n, a)) + '?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1" frameborder="0" allowfullscreen autoplay></iframe>\n			<img src="http://image.tmdb.org/t/p/original' + r((s = null != (s = t.poster_path || (null != a ? a.poster_path : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "poster_path",
        hash: {},
        data: e
      }) : s)) + '" />\n			<button class="mute">Mute</button>\n			<div class="box-info">\n					<p>' + r((s = null != (s = t.title || (null != a ? a.title : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "title",
        hash: {},
        data: e
      }) : s)) + '</p>\n					<p>User Rating <span class="rating">' + r((s = null != (s = t.vote_average || (null != a ? a.vote_average : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "vote_average",
        hash: {},
        data: e
      }) : s)) + '</span></p>\n<!--\n					<a href="https://www.youtube.com/embed/' + r(p(null != (n = null != (n = null != (n = null != a ? a.videos : a) ? n.results : n) ? n["0"] : n) ? n.key : n, a)) + '" target="_blank"> Play Trailer</a> -->\n			</div>\n	</div>\n</div>\n';
    },
    useData: !0
  }), t["gallery.hbs"] = a({
    1: function (a, t, l, e) {
      var n,
          s,
          i = "function",
          o = t.helperMissing,
          r = this.escapeExpression,
          p = this.lambda;
      return '		<div class="content-box" data-attribute=' + r((s = null != (s = t.id || (null != a ? a.id : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "id",
        hash: {},
        data: e
      }) : s)) + '>\n			<img class="bg-image" src="http://image.tmdb.org/t/p/original' + r((s = null != (s = t.backdrop_path || (null != a ? a.backdrop_path : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "backdrop_path",
        hash: {},
        data: e
      }) : s)) + '" />\n			<div class="box-content">\n					<img src="http://image.tmdb.org/t/p/original' + r((s = null != (s = t.poster_path || (null != a ? a.poster_path : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "poster_path",
        hash: {},
        data: e
      }) : s)) + '" />\n					<div class="box-info">\n							<p>' + r((s = null != (s = t.title || (null != a ? a.title : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "title",
        hash: {},
        data: e
      }) : s)) + '</p>\n							<p>User Rating <span class="rating">' + r((s = null != (s = t.vote_average || (null != a ? a.vote_average : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "vote_average",
        hash: {},
        data: e
      }) : s)) + '</span></p>\n							<button class="btn" data-key=' + r((s = null != (s = t.id || (null != a ? a.id : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "id",
        hash: {},
        data: e
      }) : s)) + '> Learn More</button>\n							<!-- <a href="https://www.youtube.com/embed/' + r(p(null != (n = null != (n = null != (n = null != a ? a.videos : a) ? n.results : n) ? n["0"] : n) ? n.key : n, a)) + '" target="_blank"> Play Trailer</a> -->\n					</div>\n			</div>\n		</div>\n';
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, t, l, e) {
      var n,
          s = t.helperMissing,
          i = "";
      return n = t.each.call(a, (t.limit || a && a.limit || s).call(a, null != a ? a.results : a, 5, {
        name: "limit",
        hash: {},
        data: e
      }), {
        name: "each",
        hash: {},
        fn: this.program(1, e),
        inverse: this.noop,
        data: e
      }), null != n && (i += n), i;
    },
    useData: !0
  });
}();
//# sourceMappingURL=templates.js.map
