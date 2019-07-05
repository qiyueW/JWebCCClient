const http = require('http');
const https = require('https');
const querystring = require('querystring');

var JSESSIONID=null;

function post(protocol, host, port, url, data,f_result) {
    return this.request(protocol, host, port, 'post', url, null, data,f_result);
}

function postByJson(protocol, host, port, url, data,f_result) {
    return this.request(protocol, host, port, 'post', url, 'application/json', data,f_result);
}

function get(protocol, host, port, url, data,f_result) {
    return this.request(protocol, host, port, 'get', url, null, data,f_result);
}

function getByJson(protocol, host, port, url, data,f_result) {
    return this.request(protocol, host, port, 'get', url, 'application/json', data,f_result);
}

var jsonTypeRegex = /^[?_:0-9a-zA-z./ ]+json[?_:0-9a-zA-z./ ]+$/i

function request(protocol, host, port, postOrGet, url, contentType, data,f_result) {
    if (typeof data == 'object') { //如果data是对象
        if (jsonTypeRegex.test(contentType)) {
            data = JSON.stringify(data);
        } else {
            data = querystring.stringify(data);
        }
    }

    if (protocol == 'https:') {
        return f_https_Request(protocol, host, port, postOrGet, url, contentType, data,f_result);
    }
    return f_http_Request(protocol, host, port, postOrGet, url, contentType, data,f_result);
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
function f_http_Request(protocol, host, port, postOrGet, url, contentType, data,f_result) {
    const options = {
        protocol: protocol,
        hostname: host,
        port: port,
        path: url,
        method: postOrGet ? postOrGet : 'get',
        headers: {
            'Content-Type': contentType ? contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
            Cookie:JSESSIONID?JSESSIONID:''
        }
    };
    const req = http.request(options, (res) => {
        // console.log(`response status: ${res.statusCode}`);
        // console.log(`response header: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8')
        var text=''
        res.on('data', (chunk) => {
            text=text+chunk
        })
        res.on('end', () => {
            if(!JSESSIONID){
             JSESSIONID=res.headers['set-cookie']
            }
            if(f_result){
                f_result(text,1)
            }
        })
    })
    req.on('error', err => {
        if(f_result){
            f_result(text,-1)
        }
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
function f_https_Request(protocol, host, port, postOrGet, url, contentType, data,f_result) {
    const options = {
        protocol: protocol,
        hostname: host,
        port: port,
        path: url,
        method: postOrGet ? postOrGet : 'get',
        headers: {
            'Content-Type': contentType ? contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
            Cookie:JSESSIONID?JSESSIONID:''
        }
    }
    const req = https.request(options, (res) => {
        // console.log(`response status: ${res.statusCode}`);
        // console.log(`response header: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8')
        var text=''
        res.on('data', (chunk) => {
            text=text+chunk
        })
        res.on('end', () => {
            if(!JSESSIONID){
             JSESSIONID=res.headers['set-cookie']
            }
            if(f_result){
                f_result(text,1)
            }
        })
    })
    req.on('error', err => {
        if(f_result){
            f_result(text,-1)
        }
    });
    req.write(data)
    req.end();

}