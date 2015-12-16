(function(obj) {
    var g = document.head;
    var j = g.getElementsByTagName("link");
    var c = document.body.getElementsByTagName("script");
    var d = [], f = [];
    for (var e = 0; e < j.length; e++) {
        (function(m) {
            var l = j[m].href;
            h(l, function(i) {
                d.push({href: l,l: i.length,m: j[m].getAttribute(obj.b)})
            }, false)
        })(e)
    }
    for (var e = 0; e < c.length; e++) {
        (function(l) {
            var m = c[l].src;
            h(m, function(i) {
                f.push({src: m,l: i.length,m: c[l].getAttribute(obj.b)})
            }, false)
        })(e)
    }
    var a = setInterval(function() {
        var m = Date.parse(new Date());
        for (var l = 0; l < d.length; l++) {
            (function(n) {
                if (d[n].m != null) {
                    h(d[n].href, function(i) {
                        if (i.length != d[n].l) {
                            j[n].href = d[n].href + "?V=" + m;
                            d[n].l = i.length
                        }
                    }, false)
                }
            })(l)
        }
        for (var l = 0; l < f.length; l++) {
            (function(n) {
                if (f[n].m != null) {
                    h(f[n].src, function(i) {
                        if (i.length != f[n].l) {
                            window.location.reload()
                        }
                    }, false)
                }
            })(l)
        }
    }, obj.k);
    function h(m, i, l) {
        var n = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
        n.onreadystatechange = function() {
            if (n.readyState == 4 && n.status == 200) {
                i(n.responseText)
            }
        };
        n.open("GET", m, l);
        n.send(null)
    }
})({
	b:window.monitorKey || "listen",
	k:window.monitorSpeed || 1000
});
