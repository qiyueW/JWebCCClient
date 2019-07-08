/**
 * 检查字符串，是否以endString结尾
 * @param {String} sources 字符串
 * @param {String} endString 结尾的字符串
 */
function endWith (sources,endString){
    var d=sources.length-endString.length;
    return (d>=0&&sources.lastIndexOf(endString)==d);
}

exports.endWith=endWith