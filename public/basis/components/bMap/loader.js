
const loader = function(callback) {
    const bMapAk = 'kc7GZ5lAIQF2jwx4SMSGqID5zlLEnlWC';
    // var MAP_URL = C.conf.urls.bMapUrl;//组件依赖Core,为了描述这个组件只能在此直接调用
    var MAP_URL = `http://api.map.baidu.com/api?v=2.0&ak=${bMapAk}&callback=baidumapinit`;

    var baiduMap = window.baiduMap;
    if (baiduMap && baiduMap.status === 'loading') {
        return baiduMap.callbacks.push(callback);
    }

    if (baiduMap && baiduMap.status === 'loaded') {
        return callback();
    }

    window.baiduMap = {
        status: 'loading',
        callbacks: []
    };
    window.baidumapinit = function() {
        window.baiduMap.status = 'loaded';
        callback();
        window.baiduMap.callbacks.forEach(cb => cb());
        window.baiduMap.callbacks = [];
    };

    var createTag = function() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = MAP_URL;
        script.onerror = function() {

            Array.prototype
                .slice
                .call(document.querySelectorAll('baidu-map div'))
                .forEach(function(node) {
                    node.style.opacity = 1;
                });
            document.body.removeChild(script);
            setTimeout(createTag, 30000);
        };
        document.body.appendChild(script);
    };

    createTag();
};
export default loader;
