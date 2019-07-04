var httpsRegex = /^https:\/\/[?_:0-9a-zA-z.]+$/;
var httpRegex = /^http:\/\/[?_:0-9a-zA-z.]+$/;
var portRegex = /^[?_:0-9a-zA-z.]+:{1}[0-9]+$/;
var obj = {
    protocol: 'http:',
    host: 'localhost',
    port: '80'
}

function formatServerHostUrl(host) {

    if (httpsRegex.test(host)) {
        obj.protocol = 'https:';
        var urlAndPort = private_formatPort(host.substring(8), '443')
        obj.host = urlAndPort.host;
        obj.port = urlAndPort.port;

    } else if (httpRegex.test(host)) {
        var urlAndPort = private_formatPort(host.substring(7), '80')
        obj.host = urlAndPort.host;
        obj.port = urlAndPort.port;

    } else {
        var urlAndPort = private_formatPort(host, '80')
        obj.host = urlAndPort.host;
        obj.port = urlAndPort.port;
    }
    return obj;
}

function private_formatPort(url, defaultPort) {
    var urlAndPort = {}
    if (portRegex.test(url)) {
        var strs = url.split(":");
        urlAndPort.host = strs[0];
        urlAndPort.port = strs[1];
    } else {
        urlAndPort.host = url;
        urlAndPort.port = defaultPort;
    }
    return urlAndPort;
}

exports.formatServerHostUrl = formatServerHostUrl;