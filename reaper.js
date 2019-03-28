(function () {
    var x = function () {
        var a = document.body.querySelectorAll('*');
        if (a.length < 1) {
            document.write();
            return;
        }
        var b = Math.floor(Math.random() * a.length);
        if (a[b].children.length < 1) {
            a[b].parentNode.removeChild(a[b]);
        }
        setTimeout(x, 100);
    }
    x();
})();
