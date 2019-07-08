CREATE TABLE IF NOT EXISTS `Hetong`(
    `hetong_zj` CHAR(24) NOT NULL  COMMENT '主键'
    ,`hetong_fzj` CHAR(24) NOT NULL COMMENT '父子合同父键'
    ,`hetong_mingcheng` VARCHAR(200) NOT NULL COMMENT '合同名称'
    ,`hetong_bianhao` VARCHAR(20) NOT NULL COMMENT '编号'
    ,`hetong_kaishiriqi` DATE NOT NULL COMMENT '开始日期'
    ,`hetong_jieshuriqi` DATE NOT NULL COMMENT '结束日期'
    ,`hetong_qianyueren` VARCHAR(200) NOT NULL COMMENT '签约人'
    ,`hetong_qianyueren_zj` CHAR(24) NOT NULL COMMENT '签约人主键'
    ,`hetong_shoujihaoma` CHAR(50) NULL COMMENT '手机号码'
    ,`hetong_xingbie` CHAR(1) NOT NULL COMMENT '性别'
    ,`hetong_yuefangzu` INT NULL COMMENT '月房租（月计）'
    ,`hetong_qianyuerenzhaopian1` VARCHAR(200) NULL COMMENT '签约人照片1'
    ,`hetong_qianyuerenzhaopian2` VARCHAR(200) NULL COMMENT '签约人照片2'
    ,`hetong_qianyuerenzhaopian3` VARCHAR(200) NULL COMMENT '签约人照片3'
    ,`hetong_beizhu` VARCHAR(200) NULL COMMENT '合同备注'
    ,`hetong_neirong` TEXT NULL COMMENT '合同内容'
    ,`hetong_zhidanshijia` DATETIME NOT NULL COMMENT '制单时间'
    ,`hetong_zt` INT NOT NULL COMMENT '单据状态'

    ,PRIMARY KEY (`hetong_zj`)
   ,KEY `hetong_fzj` (`hetong_fzj`)
   ,UNIQUE INDEX `hetong_bianhao` (`hetong_bianhao`)
   ,KEY `hetong_qianyueren` (`hetong_qianyueren`)
   ,KEY `hetong_qianyueren_zj` (`hetong_qianyueren_zj`)
   ,KEY `hetong_zt` (`hetong_zt`)
)
COMMENT='合同'
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;