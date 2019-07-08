const fs=require('fs');
const strTool=require('./stringTool')

/**
 * 写文件
 * 
 * @param {String} filepath 文件路径
 * @param {String} fileName 文件名
 * @param {String} fileContext 文件内容
 * @param {String} encode 编码（默认是utf8)
 * 
 * @returns boolean|undefined
 */
function writeFileSync(filepath,fileName,fileContext,encode){
    const data = new Uint8Array(Buffer.from(fileContext));
    return fs.writeFileSync(formatFilepath(filepath,fileName), data,{
        encoding:encode?encode:'utf8'
    });
}

exports.writeFileSync=writeFileSync
exports.formatFilepath=formatFilepath


/**
 * 格式化文件路径
 * @param {String} filepath1 文件路径
 * @param {String} filepath2 文件名
 * @returns boolean
 */
function formatFilepath(filepath1,filepath2){
    if(!filepath2){
        return filepath1;
    }
    if(!filepath1){
        return filepath2;
    }
    if(strTool.endWith(filepath1,'/')){
        return filepath1+filepath2;
    }else{
        return filepath1+'/'+filepath2;
    }
}


