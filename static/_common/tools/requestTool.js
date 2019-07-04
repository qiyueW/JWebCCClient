const http = require('http');
const https = require('https');



// var request = {
//     post: function(protocol, host, port, url, data) {
//         return this.request(protocol, host, port, 'post', url, null, data);
//     },
//     postByJson: function(protocol, host, port, url, data) {
//         return this.request(protocol, host, port, 'post', url, 'application/json', data);
//     },
//     get: function(protocol, host, port, url, data) {
//         return this.request(protocol, host, port, 'get', url, null, data);
//     },
//     getByJson: function(protocol, host, port, url, data) {
//         return this.request(protocol, host, port, 'get', url, 'application/json', data);
//     },
//     request: function(protocol, host, port, postOrGet, url, contentType, data) {
//         if (protocol == 'https') {
//             return f_https_Request(protocol, host, port, postOrGet, url, contentType, data);
//         }
//         return f_http_Request(protocol, host, port, postOrGet, url, contentType, data);
//     }
// }

function post(protocol, host, port, url, data) {
    return this.request(protocol, host, port, 'post', url, null, data);
}

function postByJson(protocol, host, port, url, data) {
    return this.request(protocol, host, port, 'post', url, 'application/json', data);
}

function get(protocol, host, port, url, data) {
    return this.request(protocol, host, port, 'get', url, null, data);
}

function getByJson(protocol, host, port, url, data) {
    return this.request(protocol, host, port, 'get', url, 'application/json', data);
}

function request(protocol, host, port, postOrGet, url, contentType, data) {
    if (protocol == 'https:') {
        return f_https_Request(protocol, host, port, postOrGet, url, contentType, data);
    }
    return f_http_Request(protocol, host, port, postOrGet, url, contentType, data);
}

exports.post = post;
exports.postByJson = postByJson;
exports.get = get;
exports.getByJson = getByJson;
exports.request = request;
/**
 * http请求
 * @param {String} protocol 协议，默认是http:
 * @param {String} host 域名
 * @param {int} port 端口
 * @param {String} postOrGet 请求方式 post或get,默认是get
 * @param {String} url 请求路径
 * @param {String} contentType 内容类型，默认是'application/x-www-form-urlencoded; charset=UTF-8'
 * @param {String} data 带给服务器的参数
 */
function f_http_Request(protocol, host, port, postOrGet, url, contentType, data) {
    const options = {
        protocol: protocol,
        hostname: host,
        port: port,
        path: url,
        method: postOrGet ? postOrGet : 'get',
        headers: {
            'Content-Type': contentType ? contentType : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    };
    const req = http.request(options, (res) => {
        console.log(`response status: ${res.statusCode}`);
        console.log(`response header: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`response body: ${chunk}`);
        });
        res.on('end', () => {
            console.log('over!');
        });
    });
    req.on('error', err => {
        console.log(err);
    });
    req.write(data)
    req.end();
}


/**
 * https请求
 * @param {String} protocol 协议，默认是http:
 * @param {String} host 域名
 * @param {int} port 端口
 * @param {String} postOrGet 请求方式 post或get,默认是get
 * @param {String} url 请求路径
 * @param {String} contentType 内容类型，默认是'application/x-www-form-urlencoded; charset=UTF-8'
 * @param {String} data 带给服务器的参数
 */
function f_https_Request(protocol, host, port, postOrGet, url, contentType, data) {
    const options = {
        protocol: protocol,
        hostname: host,
        port: port,
        path: url,
        method: postOrGet ? postOrGet : 'get',
        headers: {
            'Content-Type': contentType ? contentType : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    };
    const req = https.request(options, (res) => {
        console.log(`response status: ${res.statusCode}`);
        console.log(`response header: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`response body: ${chunk}`);
        });
        res.on('end', () => {
            console.log('over!');
        });
    });
    req.on('error', err => {
        console.log(err);
    });
    req.write(data)
    req.end();
}