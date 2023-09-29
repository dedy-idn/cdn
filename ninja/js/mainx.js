const jo = {};
! function() {
    function e(e, t) {
        return -1 < (" " + e[$] + " ").indexOf(" " + t + " ")
    }

    function t(t, a) {
        var n;
        e(t, a) || ("" != (n = t[$]) && (a = " " + a), t[$] = n + a)
    }

    function a(e, t) {
        e[$] = e[$][T](new A("(?:^|\\s)" + t + "(?!\\S)"), "")[ae]()
    }

    function n(e, t, n) {
        a(e, t), p(function() {
            a(e, "d-block")
        }, n || 300)
    }

    function o(e, t) {
        for (var a = 0; a < e[E]; a++)
            if (e[a] === t) return !0;
        return !1
    }

    function r(e, t) {
        return !!(e = new A("[?&]" + e + "=([^&#=]*)")).test(t) && t[V](e)[1]
    }

    function i(e) {
        try {
            return j.parse(e)
        } catch (e) {
            return !1
        }
    }

    function l(e, t) {
        var a = new w;
        a[ne](H, e), a[ce](De, "text/html"), a[oe](null), a[B + O](ye, function() {
            var e = a[ue][V](/<title>(.*?)<\/title>/);
            t[x] = e[1][T](qe + Le, "")
        })
    }

    function s() {
        (Ze && Ze[G] || tt && tt[G] ? a : t)(Ke, "header-animate")
    }

    function c(e, t) {
        function a(a) {
            e.contains(a[Z]) || (t(), n())
        }
        var n = function() {
            m[M + O](Ae, a)
        };
        m[B + O](Ae, a)
    }

    function u(n) {
        n != ct[K] && (t(lt, "loader"), ct[K] = n, st.src = n), e(lt, "d-none") && (a(lt, "d-none"), n = ut.value[V](/<script.*?src='(.*?)'/)[1], Defer.js(n, "comment-js", 500, function() {
            BLOG_CMT_createIframe($e + Te + "rpc_relay.html")
        }))
    }

    function d(e) {
        if (e && (m[M + O](we, d), m[M + O](ke, d), m[M + O](be, d)), Defer.dom(".custom-posts", 1, null, jo[Ce], null, {
                rootMargin: "200%"
            }), 0 < ft[E]) {
            for (var a = 0; a < ft[E]; ++a) {
                var n = ft[a],
                    o = n[x],
                    r = m[S]("textarea");
                r[x] = o[T](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"'), (o = m[S]("div"))[x] = r.value, 0 == a && t(o, "feature-image full-width"), n[ie][Q + X](o, n)
            }
            Defer.dom('[lazyload="true"]', 1, "loaded", At, null, {
                rootMargin: "200%"
            })
        }
        if (null !== pt) {
            if (null !== ht && null !== yt && (yt[x] = ht[x], yt[q + L]("data-no-item", ht[H + L]("data-no-item"))), null !== mt) {
                var i, l = pt[_](We + "," + Ye),
                    s = mt.childNodes,
                    c = s[E],
                    u = [];
                for (a = 0; a < l[E]; a++) {
                    var f = l[a].closest(Ye);
                    f && l[a] != f || u[z](l[a])
                }
                for (a = 0; c > a; a++) a == c - 1 ? pt[Y](s[0]) : (i = a == c - 1 ? u[E] - 1 : y.round(u[E] / c) * a, (i = 0 == a ? u[0] : u[i][he]) && i[ie][Q + X](s[0], i))
            }
            if (Je && Je != ve && Qe && null !== pt[J]) {
                var g = pt[_]("h2,h3,h4,h5,h6"),
                    p = m[S]("div"),
                    h = (e = pt[C](Xe), []);
                for (a = 0; a < g[E]; a++) {
                    var b = g[a],
                        A = b[me][T](/[^\w!?]/g, "_")[T](/__/g, "_"),
                        w = v(b[D][T]("H", ""));
                    b.id = A, h[z]({
                        level: w,
                        title: b[me],
                        id: A
                    })
                }
                null === e ? e = pt[J] : e[he] && (e = e[he]), 0 < h[E] && (p[x] = Qe(h)[ae](), e && e[ie][Q + X](p, e))
            }
        }
        Be || (Fe && (typeof adsbygoogle === Ie && (adsbygoogle = []), Defer.js($e + "pagead2.googlesyndication.com/pagead/js/" + Se + ".js?client=" + Fe, Se, 100)), Ge && Ge != ve && Defer.js($e + "www.googletagmanager.com/gtag/js?id=" + Ge, "analytics", 100, function() {
            function e() {
                dataLayer[z](arguments)
            }
            e("js", new Date), e("config", Ge)
        }), Ve && Ve())
    }
    var f, g = window,
        m = document,
        p = setTimeout,
        h = (clearTimeout, Date),
        y = Math,
        v = parseInt,
        b = (btoa, escape, unescape, encodeURIComponent),
        A = (decodeURIComponent, RegExp),
        w = XMLHttpRequest,
        k = (alert, localStorage),
        j = JSON,
        I = Image,
        x = (setInterval, clearInterval, "innerHTML"),
        D = "tagName",
        P = "getElementById",
        C = "querySelector",
        _ = "querySelectorAll",
        S = "createElement",
        $ = "className",
        T = "replace",
        R = "lastIndexOf",
        O = "EventListener",
        B = "add",
        M = "remove",
        E = "length",
        U = "slice",
        z = "push",
        L = "Attribute",
        q = "set",
        H = "get",
        G = "checked",
        N = "offsetWidth",
        F = "toFixed",
        W = "pageYOffset",
        Y = "appendChild",
        J = "firstChild",
        Q = "insert",
        X = "Before",
        V = "match",
        K = "href",
        Z = "target",
        ee = "location",
        te = "split",
        ae = "trim",
        ne = "open",
        oe = "send",
        re = "random",
        ie = "parentElement",
        le = "preventDefault",
        se = "substr",
        ce = "setRequestHeader",
        ue = "responseText",
        de = "title",
        fe = "ceil",
        ge = "floor",
        me = "textContent",
        pe = "Item",
        he = "nextSibling",
        ye = "load",
        ve = "false",
        be = "scroll",
        Ae = "click",
        we = "mousemove",
        ke = "touchstart",
        je = "change",
        Ie = "undefined",
        xe = "function",
        De = "Content-Type",
        Pe = "pagination",
        Ce = "loadCustomPosts",
        _e = "custom_posts",
        Se = "adsbygoogle",
        $e = "https://",
        Te = "www.blogger.com/",
        Re = "-rw",
        Oe = "devicePixelRatio",
        Be = typeof isPreview !== Ie && isPreview,
        Me = typeof siteUrl !== Ie ? siteUrl[se](0, siteUrl[E] - 1)[T](/(^\w+:|^)\/\//, "") : "",
        Ee = $e + Me,
        Ue = typeof currentUrl !== Ie ? currentUrl : "",
        ze = typeof blogId !== Ie ? blogId : "",
        Le = typeof blogTitle !== Ie ? blogTitle : "",
        qe = typeof titleSeparator !== Ie ? titleSeparator : " - ",
        He = typeof pageTitle !== Ie ? pageTitle : "Page",
        Ge = typeof analyticId !== Ie && analyticId,
        Ne = typeof caPubAdsense !== Ie && caPubAdsense[T](/^\D+/g, ""),
        Fe = !!Ne && "ca-pub-" + Ne,
        We = typeof innerAdsDelimiter !== Ie ? innerAdsDelimiter : "p,br,div",
        Ye = typeof ignoreAdsDelimiter !== Ie ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote",
        Je = typeof autoTOC !== Ie && autoTOC,
        Qe = typeof toc_temp === xe && toc_temp,
        Xe = typeof positionTOC !== Ie && positionTOC,
        Ve = typeof Callback === xe && Callback;
    (f = new I).onload = f.onerror = function() {
        ! function(e) {
            e || (Re = "")
        }(2 == f.height)
    }, f.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    var Ke = m[P]("header"),
        Ze = m[P]("search-toggle"),
        et = m[P]("search-header"),
        tt = m[P]("navbar-toggle"),
        at = m[P]("navbar"),
        nt = m[P]("top"),
        ot = m[P]("dark-toggler"),
        rt = m[C]("html"),
        it = m[P]("comment-button"),
        lt = m[P]("threaded-comment-form"),
        st = m[P]("comment-editor"),
        ct = m[P]("comment-editor-src"),
        ut = m[P]("comment-script"),
        dt = m[_](".comment-reply"),
        ft = m[_](".entry-text noscript"),
        gt = m[_](".contact-form-blogger"),
        mt = m[P]("ads-post"),
        pt = m[C](".post-body"),
        ht = m[C](".related-posts"),
        yt = m[C](".related-inline"),
        vt = r("page", Ue),
        bt = null !== k && 1 == k[H + pe]("lazy"),
        At = function(t) {
            var a, n, o, r, i, l, s, c;
            "IMG" == t[D] && ((c = t[H + L]("data-src"))[V](/(jalanninjaku|bp.blogspot|googleusercontent)/) ? (s = bt ? g[Oe] && 1 < g[Oe] ? g[Oe] : 1.5 : 1, a = (t[N] * s)[F](0), n = (t[ie][N] * s)[F](0), o = (t[ie][ie][N] * s)[F](0), r = (t.offsetHeight * s)[F](0), i = c[te]("/"), l = c[R]("=") + 1, s = "", s = e(t[ie], "ratio") ? "w" + a + "-h" + r + "-c" + Re : "s" + (s = 30 > a ? 30 > n ? o : n : a) + Re, c = c[V](/(img\/a|proxy\/)/) ? l ? c[U](0, l) + s : c + "=" + s : c[T](i[i[E] - 2], s), t[q + L]("data-src", c)) : c[V](/(img.youtube|i.ytimg)/) && (c = c[se](0, c[R]("/")) + "/mqdefault.jpg", t[q + L]("data-src", c)))
        };
    jo[Ce] = function(e) {
        var t = (y[re]() + 1).toString(36)[se](7),
            n = e[H + L]("data-label"),
            o = e[H + L]("data-title"),
            r = e[H + L]("data-items"),
            i = e[H + L]("data-shuffle"),
            l = e[H + L]("data-no-item"),
            s = e[H + L]("data-func"),
            c = e[H + L]("data-callback"),
            u = l ? v(r) + 1 : r,
            d = n || e[x],
            f = d[te](",");
        n = "", n = 1 < f[E] ? d ? "-/" + b(f[y[ge](y[re]() * f[E])]) + "/?" : "?" : d && d != ve ? "-/" + b(d[ae]()) + "/?" : "?", Defer.js(Ee + "/feeds/posts/summary/" + n + "alt=json&callback=jo." + _e + "_key_" + t + "&max-results=" + u), jo[_e + "_key_" + t] = function(n) {
            var u = v(n.feed.openSearch$totalResults.$t),
                d = n.feed.category;
            if (u > 0) {
                for (var f = {
                        title: o,
                        posts: [],
                        categories: d
                    }, m = n.feed.entry, p = 0, b = 0; b < m[E]; ++b) {
                    var A, w, k = m[b],
                        j = k.link[k.link[E] - 1][K];
                    if (p == r) break;
                    j != l && (p++, (A = {}).grup_id = t, A.url = j, A.title = k[de].$t, A.summary = k.summary.$t[ae](), A.img = k.media$thumbnail && k.media$thumbnail.url, A.author = k.author[0].name.$t, A.comment = k.thr$total && k.thr$total.$t, A.label = k.category, w = k.published.$t, k = (j = new h(w)).getDate(), w = j.getMonth() + 1, j = j.getFullYear(), A.date = j + "/" + w + "/" + k, f.posts[z](A))
                }
                typeof(n = g[s]) === xe && 0 < f.posts[E] && (i && (f.posts = function(e) {
                    for (var t = e.slice(), a = t[E] - 1; a > 0; a--) {
                        var n = y[ge](y[re]() * (a + 1)),
                            o = t[a];
                        t[a] = t[n], t[n] = o
                    }
                    return t
                }(f.posts)[U](0, i)), e[x] = n(f)[ae](), a(e, "visually-hidden"), Defer.dom(".lazy-" + t, 1, "loaded", At), !c || typeof(n = g[c]) === xe && n())
            }
        }
    }, Ze && Ze[B + O](je, function() {
        s(), this[G] && p(function() {
            m[P]("search-input").focus()
        }, 100), c(et, function() {
            Ze[G] = !1, s()
        })
    }), tt && tt[B + O](je, function() {
        s(), this[G] ? (function(e, a) {
            t(e, "d-block"), p(function() {
                t(e, "show")
            }, 100)
        }(at), c(at, function() {
            tt[G] = !1, s(), n(at, "show")
        })) : n(at, "show")
    }), ot && ot[B + O](Ae, function(n) {
        n[le](),
            function(n, o) {
                (e(n, o) ? a : t)(n, o)
            }(rt, "dark-mode"), null !== k && k[q + pe]("theme", e(rt, "dark-mode") ? "dark" : "light")
    }), g[B + O](be, function() {
        (1 <= this[W] && null !== Ke ? t : a)(Ke, "shadow-sm"), (1e3 <= this[W] && null !== nt ? a : t)(nt, "d-none")
    }, !1), st && st[B + O](ye, function(e) {
        a(lt, "loader")
    }), it && it[B + O](Ae, function(e) {
        e[le](), u(this[K]), "add-comment" != lt[ie].id && m[P]("add-comment")[Y](lt)
    });
    for (var wt = 0; wt < dt[E]; ++wt) dt[wt][B + O](Ae, function(e) {
        e[le](), e = this[H + L]("data-comment-id"), u(this[K]), lt[ie].id != "c" + e && m[P]("c" + e)[Y](lt)
    });
    for (wt = 0; wt < gt[E]; ++wt) gt[wt][B + O]("submit", function(e) {
        e[le]();
        var n = e[Z];
        t(n, "loading");
        var o = new FormData(n),
            r = "blogID=" + ze;
        o.forEach(function(e, t) {
            r += "&" + b(t) + "=" + b(e)
        }), e = $e + Te + "contact-form.do", (o = new w)[ne]("post", e), o[ce](De, "application/x-www-form-urlencoded"), o[oe](r), o.onreadystatechange = function() {
            var e;
            a(n, "loading"), 4 === this.readyState && 200 === this.status && "" != this.response && ((e = i(this[ue][ae]())) && "true" == e.details.emailSentStatus ? (n.reset(), a(n, "send-error"), t(n, "send-success")) : (a(n, "send-success"), t(n, "send-error")))
        }
    });
    vt && (m[de] = m[de][T](qe, qe + He + " " + vt + qe)), Defer.dom(".lazyload", 1, "loaded", At), Defer.dom("#post-pager", 1, null, function(e) {
        for (var a = e[_]("a"), n = 0; n < a[E]; ++n) {
            var o = a[n],
                r = o[K],
                i = m[S]("span");
            t(i, "d-block fw-bold item-title pt-2"), o[Y](i), l(r, i)
        }
    }, null, {
        rootMargin: "200%"
    }), Defer.dom("#pagination", 1, null, function(e) {
        function n(e, a, n) {
            var o = m[S]("li"),
                r = m[S]("span");
            return t(r, "btn btn-sm rounded-pill icon-center"), r[x] = n || e, r[q + L]("data-page", e), e == a ? t(r, "btn-primary") : (t(r, "btn-light hover-btn-primary"), r[B + O](Ae, function(e) {
                var t;
                e[le](), 1 == (p = r[H + L]("data-page")) ? (t = l ? Ee + "/search" + c + "?max-results=" + i + "&page=" + p : Ee, g[ee][K] = t) : (t = (p - 1) * i, Defer.js(Ee + "/feeds/posts/summary/" + s + "?start-index=" + t + "&alt=json&callback=jo." + Pe + "_date&max-results=1"))
            })), o[Y](r), o
        }
        var i, l, s, c, u, d, f, p;
        e[H + L]("data-pagination") != ve ? (i = e[H + L]("data-posts"), l = e[H + L]("data-label"), s = (l = b(l)) ? "-/" + l + "/" : "", c = l ? "/label/" + l : "", Defer.js(Ee + "/feeds/posts/summary/" + s + "?alt=json&callback=jo." + Pe + "_key&max-results=1"), u = r("max-results", Ue), d = r("page", Ue), f = u || i, p = d || 1, jo[Pe + "_key"] = function(r) {
            var l = r.feed,
                s = v(l.openSearch$totalResults.$t);
            if (s > i) {
                r = function(e, t, a, n) {
                    e = v(e), t = v(t), a = v(a), n = v(n);
                    var o, r, i = y[fe](e / a);
                    1 > t ? t = 1 : t > i && (t = i), r = n >= i ? (o = 1, i) : (e = y[ge](n / 2), a = y[fe](n / 2) - 1, e >= t ? (o = 1, n) : t + a >= i ? (o = i - n + 1, i) : (o = t - e, t + a));
                    for (var l = (t - 1) * a, s = (n = y.min(l + a - 1, e - 1), []), c = 0; r + 1 - o > c; c++) s[z](c);
                    return s = s.map(function(e) {
                        return o + e
                    }), {
                        totalItems: e,
                        currentPage: t,
                        pageSize: a,
                        totalPages: i,
                        startPage: o,
                        endPage: r,
                        startIndex: l,
                        endIndex: n,
                        pages: s
                    }
                }(s, p, f, 5);
                var c = m[S]("ul");
                l = r.totalPages, 1 != r.currentPage && (s = n(r.currentPage - 1, "", '<svg aria-hidden="true" class="icon"><use xlink:href="#i-arrow-l"/></svg>'), c[Y](s)), o(r.pages, 1) || (d = n(1, r.currentPage, "1 . ."), c[Y](d));
                for (var u = 0; u < r.pages[E]; u++) {
                    var d = n(r.pages[u], r.currentPage);
                    c[Y](d)
                }
                o(r.pages, l) || (d = n(l, r.currentPage, ". . " + l), c[Y](d)), r.currentPage != l && (l = n(r.currentPage + 1, "", '<svg aria-hidden="true" class="icon"><use xlink:href="#i-arrow-r"/></svg>'), c[Y](l)), e[x] = "", t(c, "pagination mb-0"), e[Y](c), a(e, "visually-hidden")
            }
        }, jo[Pe + "_date"] = function(e) {
            e = (e = (e = e.feed.entry[0]).published.$t[se](0, 19) + e.published.$t[se](23, 29))[T]("+", "%2B"), e = Ee + "/search" + c + "?updated-max=" + e + "&max-results=" + f + "&page=" + p, g[ee][K] = e
        }) : a(e, "visually-hidden")
    }, null, {
        rootMargin: "200%"
    }), bt ? d(!1) : (null !== k && k[q + pe]("lazy", 1), m[B + O](we, d), m[B + O](ke, d), m[B + O](be, d))
}();