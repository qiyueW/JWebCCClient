'use strict';

const http = require('http');
const https = require('https');
const querystring = require('querystring');

var JSESSIONID = null;

function post(protocol, host, port, url, data, f_result) {
    return request(protocol, host, port, 'post', url, null, data, f_result);

}

function postByJson(protocol, host, port, url, data, f_result) {
    return request(protocol, host, port, 'post', url, 'application/json', data, f_result);
}

function get(protocol, host, port, url, data, f_result) {
    return request(protocol, host, port, 'get', url, null, data, f_result);
}

function getByJson(protocol, host, port, url, data, f_result) {
    return request(protocol, host, port, 'get', url, 'application/json', data, f_result);
}

function post_async(protocol, host, port, url, data, f_result) {
    return request_async(protocol, host, port, 'post', url, null, data, f_result);

}

function postByJson_async(protocol, host, port, url, data, f_result) {
    return request_async(protocol, host, port, 'post', url, 'application/json', data, f_result);
}

function get_async(protocol, host, port, url, data, f_result) {
    return request_async(protocol, host, port, 'get', url, null, data, f_result);
}

function getByJson_async(protocol, host, port, url, data, f_result) {
    return request_async(protocol, host, port, 'get', url, 'application/json', data, f_result);
}

exports.post = post;
exports.postByJson = postByJson;
exports.get = get;
exports.getByJson = getByJson;
exports.request = request;
exports.post_async = post_async;
exports.postByJson_async = postByJson_async;
exports.get_async = get_async;
exports.getByJson_async = getByJson_async;
exports.request_async = request_async;

var jsonTypeRegex = /^[?_:0-9a-zA-z./ ]+json[?_:0-9a-zA-z./ ]+$/i

function request(protocol, host, port, postOrGet, url, contentType, data, f_result) {
    if (typeof data == 'object') { //如果data是对象
        if (jsonTypeRegex.test(contentType)) {
            data = JSON.stringify(data);
        } else {
            data = querystring.stringify(data);
        }
    }

    if (protocol == 'https:') {
        return f_https_Request(protocol, host, port, postOrGet, url, contentType, data, f_result);
    }
    return f_http_Request(protocol, host, port, postOrGet, url, contentType, data, f_result);
}

function request_async(protocol, host, port, postOrGet, url, contentType, data, f_result) {
    if (typeof data == 'object') { //如果data是对象
        if (jsonTypeRegex.test(contentType)) {
            data = JSON.stringify(data);
        } else {
            data = querystring.stringify(data);
        }
    }

    if (protocol == 'https:') {
        return f_https_Request_async(protocol, host, port, postOrGet, url, contentType, data, f_result);
    }
    return f_http_Request_async(protocol, host, port, postOrGet, url, contentType, data, f_result);
}


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
function f_http_Request(protocol, host, port, postOrGet, url, contentType, data, f_result) {
    return httpResponse(http, protocol, host, port, postOrGet, url, contentType, data, f_result);
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
function f_https_Request(protocol, host, port, postOrGet, url, contentType, data, f_result) {
    return httpResponse(https, protocol, host, port, postOrGet, url, contentType, data, f_result);
}


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
function f_http_Request_async(protocol, host, port, postOrGet, url, contentType, data, f_result) {
    return httpResponse_async(http, protocol, host, port, postOrGet, url, contentType, data, f_result);
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
function f_https_Request_async(protocol, host, port, postOrGet, url, contentType, data, f_result) {
    return httpResponse_async(https, protocol, host, port, postOrGet, url, contentType, data, f_result);
}


function httpResponse(httpOrHttps, protocol, host, port, postOrGet, url, contentType, data, f_result) {
    const options = {
        protocol: protocol,
        hostname: host,
        port: port,
        path: url,
        timeout: 2000,
        method: postOrGet ? postOrGet : 'get',
        headers: {
            'Content-Type': contentType ? contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
            Cookie: JSESSIONID ? JSESSIONID : ''
        }
    }
    var text = ''
    const req = httpOrHttps.request(options, (res) => {
        console.log(`response status: ${res.statusCode}`);
        console.log(`response header: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8')

        res.on('data', (chunk) => {
            text = text + chunk
        })
        res.on('end', () => {
            if (!JSESSIONID) {
                JSESSIONID = res.headers['set-cookie']
            }
            console.log(text)
            if (f_result) {
                f_result(text, 1)
            }
        })
    })
    req.on('error', err => {
        if (f_result) {
            f_result(text, -1)
        }
    });
    req.write(data)
    req.end();
    return text;
}

//f_https_Request
function httpResponse_async(httpOrHttps, protocol, host, port, postOrGet, url, contentType, data, f_result) {
    return new Promise(function(resolve, reject) {
        const options = {
            protocol: protocol,
            hostname: host,
            port: port,
            path: url,
            timeout: 2000,
            method: postOrGet ? postOrGet : 'get',
            headers: {
                'Content-Type': contentType ? contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
                Cookie: JSESSIONID ? JSESSIONID : ''
            }
        }
        var text = '';
        const req = httpOrHttps.request(options, (res) => {
            // console.log(`response status: ${res}`);
            // console.log(`response header: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8')
            res.on('data', (chunk) => {
                text = text + chunk
            })
            res.on('end', () => {
                if (!JSESSIONID) {
                    JSESSIONID = res.headers['set-cookie']
                }
                if (f_result) {
                    f_result(text, 1)
                }
                resolve(text);
            })
        })
        req.on('error', err => {
            if (f_result) {
                f_result(text, -1)
                reject(text)
            } else {
                reject(err)
            }
        });
        req.write(data)
        req.end();
    })
}