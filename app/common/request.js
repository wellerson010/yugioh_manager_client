System.register(['angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1;
    var transformQueryString, CommonRequest;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            transformQueryString = function (queryString) {
                var params = new http_1.URLSearchParams();
                for (var i in queryString) {
                    params.set(i, queryString[i]);
                }
                ;
                return params;
            };
            exports_1("CommonRequest", CommonRequest = {
                delete: function (http, url, queryString) {
                    var params = transformQueryString(queryString);
                    var options = new http_1.RequestOptions({
                        search: params
                    });
                    return http.delete(url, options)
                        .map(CommonRequest.extractData)
                        .toPromise();
                },
                extractData: function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Erro na requisi��o: ' + res.status);
                    }
                    var body = res.json();
                    return body || {};
                },
                get: function (http, url, queryString) {
                    var options = new http_1.RequestOptions();
                    if (queryString) {
                        options.search = transformQueryString(queryString);
                    }
                    return http.get(url, options)
                        .map(CommonRequest.extractData)
                        .toPromise();
                },
                post: function (http, url, data) {
                    var dataString = JSON.stringify(data), headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    }), options = new http_1.RequestOptions({
                        headers: headers
                    });
                    return http.post(url, dataString, options)
                        .map(CommonRequest.extractData)
                        .toPromise();
                },
                postFormData: function (url, data) {
                    return new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                var json = JSON.parse(xhr.response);
                                (xhr.status < 200 || xhr.status >= 300) ? reject(json) : resolve(json);
                            }
                        };
                        xhr.open('post', url, true);
                        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                        xhr.send(data);
                    });
                }
            });
        }
    }
});
//# sourceMappingURL=request.js.map