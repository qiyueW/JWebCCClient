package wx.web.bean;

import com.alibaba.fastjson.annotation.JSONField;
import java.util.Date;

public class Hetong extends AbstractEntity{

    /**
     * 主键 
     */
	@JSONField(name = &#34;hetong_zj&#34;)
    private  String hetong_zj ;

    /**
     * 父子合同父键 
     */
	@JSONField(name = &#34;hetong_fzj&#34;)
    private  String hetong_fzj ;

    /**
     * 合同名称 
     */
	@JSONField(name = &#34;hetong_mingcheng&#34;)
    private  String hetong_mingcheng ;

    /**
     * 编号 
     */
	@JSONField(name = &#34;hetong_bianhao&#34;)
    private  String hetong_bianhao ;

    /**
     * 开始日期 
     */
	@JSONField(name = &#34;hetong_kaishiriqi&#34;)
    private  Date hetong_kaishiriqi ;

    /**
     * 结束日期 
     */
	@JSONField(name = &#34;hetong_jieshuriqi&#34;)
    private  Date hetong_jieshuriqi ;

    /**
     * 签约人 
     */
	@JSONField(name = &#34;hetong_qianyueren&#34;)
    private  String hetong_qianyueren ;

    /**
     * 签约人主键 
     */
	@JSONField(name = &#34;hetong_qianyueren_zj&#34;)
    private  String hetong_qianyueren_zj ;

    /**
     * 手机号码 
     */
	@JSONField(name = &#34;hetong_shoujihaoma&#34;)
    private  String hetong_shoujihaoma ;

    /**
     * 性别 
     */
	@JSONField(name = &#34;hetong_xingbie&#34;)
    private  String hetong_xingbie ;

    /**
     * 月房租（月计） 
     */
	@JSONField(name = &#34;hetong_yuefangzu&#34;)
    private  Integer hetong_yuefangzu ;

    /**
     * 签约人照片1 
     */
	@JSONField(name = &#34;hetong_qianyuerenzhaopian1&#34;)
    private  String hetong_qianyuerenzhaopian1 ;

    /**
     * 签约人照片2 
     */
	@JSONField(name = &#34;hetong_qianyuerenzhaopian2&#34;)
    private  String hetong_qianyuerenzhaopian2 ;

    /**
     * 签约人照片3 
     */
	@JSONField(name = &#34;hetong_qianyuerenzhaopian3&#34;)
    private  String hetong_qianyuerenzhaopian3 ;

    /**
     * 合同备注 
     */
	@JSONField(name = &#34;hetong_beizhu&#34;)
    private  String hetong_beizhu ;

    /**
     * 合同内容 
     */
	@JSONField(name = &#34;hetong_neirong&#34;)
    private  String hetong_neirong ;

    /**
     * 制单时间 
     */
	@JSONField(name = &#34;hetong_zhidanshijia&#34;)
    private  Date hetong_zhidanshijia ;

    /**
     * 单据状态 
     */
	@JSONField(name = &#34;hetong_zt&#34;)
    private  Integer hetong_zt ;


    /**
     * 设置 主键
     *
     * @param hetong_zj String
     */
    public void setHetong_zj(String hetong_zj) {
        this.hetong_zj=hetong_zj;
    }

    /**
     * 取得 主键
     *
     * @return String
     */
    public String getHetong_zj() {
        return this.hetong_zj;
    }
    /**
     * 设置 父子合同父键
     *
     * @param hetong_fzj String
     */
    public void setHetong_fzj(String hetong_fzj) {
        this.hetong_fzj=hetong_fzj;
    }

    /**
     * 取得 父子合同父键
     *
     * @return String
     */
    public String getHetong_fzj() {
        return this.hetong_fzj;
    }
    /**
     * 设置 合同名称
     *
     * @param hetong_mingcheng String
     */
    public void setHetong_mingcheng(String hetong_mingcheng) {
        this.hetong_mingcheng=hetong_mingcheng;
    }

    /**
     * 取得 合同名称
     *
     * @return String
     */
    public String getHetong_mingcheng() {
        return this.hetong_mingcheng;
    }
    /**
     * 设置 编号
     *
     * @param hetong_bianhao String
     */
    public void setHetong_bianhao(String hetong_bianhao) {
        this.hetong_bianhao=hetong_bianhao;
    }

    /**
     * 取得 编号
     *
     * @return String
     */
    public String getHetong_bianhao() {
        return this.hetong_bianhao;
    }
    /**
     * 设置 开始日期
     *
     * @param hetong_kaishiriqi Date
     */
    public void setHetong_kaishiriqi(Date hetong_kaishiriqi) {
        this.hetong_kaishiriqi=hetong_kaishiriqi;
    }

    /**
     * 取得 开始日期
     *
     * @return Date
     */
    public Date getHetong_kaishiriqi() {
        return this.hetong_kaishiriqi;
    }
    /**
     * 设置 结束日期
     *
     * @param hetong_jieshuriqi Date
     */
    public void setHetong_jieshuriqi(Date hetong_jieshuriqi) {
        this.hetong_jieshuriqi=hetong_jieshuriqi;
    }

    /**
     * 取得 结束日期
     *
     * @return Date
     */
    public Date getHetong_jieshuriqi() {
        return this.hetong_jieshuriqi;
    }
    /**
     * 设置 签约人
     *
     * @param hetong_qianyueren String
     */
    public void setHetong_qianyueren(String hetong_qianyueren) {
        this.hetong_qianyueren=hetong_qianyueren;
    }

    /**
     * 取得 签约人
     *
     * @return String
     */
    public String getHetong_qianyueren() {
        return this.hetong_qianyueren;
    }
    /**
     * 设置 签约人主键
     *
     * @param hetong_qianyueren_zj String
     */
    public void setHetong_qianyueren_zj(String hetong_qianyueren_zj) {
        this.hetong_qianyueren_zj=hetong_qianyueren_zj;
    }

    /**
     * 取得 签约人主键
     *
     * @return String
     */
    public String getHetong_qianyueren_zj() {
        return this.hetong_qianyueren_zj;
    }
    /**
     * 设置 手机号码
     *
     * @param hetong_shoujihaoma String
     */
    public void setHetong_shoujihaoma(String hetong_shoujihaoma) {
        this.hetong_shoujihaoma=hetong_shoujihaoma;
    }

    /**
     * 取得 手机号码
     *
     * @return String
     */
    public String getHetong_shoujihaoma() {
        return this.hetong_shoujihaoma;
    }
    /**
     * 设置 性别
     *
     * @param hetong_xingbie String
     */
    public void setHetong_xingbie(String hetong_xingbie) {
        this.hetong_xingbie=hetong_xingbie;
    }

    /**
     * 取得 性别
     *
     * @return String
     */
    public String getHetong_xingbie() {
        return this.hetong_xingbie;
    }
    /**
     * 设置 月房租（月计）
     *
     * @param hetong_yuefangzu Integer
     */
    public void setHetong_yuefangzu(Integer hetong_yuefangzu) {
        this.hetong_yuefangzu=hetong_yuefangzu;
    }

    /**
     * 取得 月房租（月计）
     *
     * @return Integer
     */
    public Integer getHetong_yuefangzu() {
        return this.hetong_yuefangzu;
    }
    /**
     * 设置 签约人照片1
     *
     * @param hetong_qianyuerenzhaopian1 String
     */
    public void setHetong_qianyuerenzhaopian1(String hetong_qianyuerenzhaopian1) {
        this.hetong_qianyuerenzhaopian1=hetong_qianyuerenzhaopian1;
    }

    /**
     * 取得 签约人照片1
     *
     * @return String
     */
    public String getHetong_qianyuerenzhaopian1() {
        return this.hetong_qianyuerenzhaopian1;
    }
    /**
     * 设置 签约人照片2
     *
     * @param hetong_qianyuerenzhaopian2 String
     */
    public void setHetong_qianyuerenzhaopian2(String hetong_qianyuerenzhaopian2) {
        this.hetong_qianyuerenzhaopian2=hetong_qianyuerenzhaopian2;
    }

    /**
     * 取得 签约人照片2
     *
     * @return String
     */
    public String getHetong_qianyuerenzhaopian2() {
        return this.hetong_qianyuerenzhaopian2;
    }
    /**
     * 设置 签约人照片3
     *
     * @param hetong_qianyuerenzhaopian3 String
     */
    public void setHetong_qianyuerenzhaopian3(String hetong_qianyuerenzhaopian3) {
        this.hetong_qianyuerenzhaopian3=hetong_qianyuerenzhaopian3;
    }

    /**
     * 取得 签约人照片3
     *
     * @return String
     */
    public String getHetong_qianyuerenzhaopian3() {
        return this.hetong_qianyuerenzhaopian3;
    }
    /**
     * 设置 合同备注
     *
     * @param hetong_beizhu String
     */
    public void setHetong_beizhu(String hetong_beizhu) {
        this.hetong_beizhu=hetong_beizhu;
    }

    /**
     * 取得 合同备注
     *
     * @return String
     */
    public String getHetong_beizhu() {
        return this.hetong_beizhu;
    }
    /**
     * 设置 合同内容
     *
     * @param hetong_neirong String
     */
    public void setHetong_neirong(String hetong_neirong) {
        this.hetong_neirong=hetong_neirong;
    }

    /**
     * 取得 合同内容
     *
     * @return String
     */
    public String getHetong_neirong() {
        return this.hetong_neirong;
    }
    /**
     * 设置 制单时间
     *
     * @param hetong_zhidanshijia Date
     */
    public void setHetong_zhidanshijia(Date hetong_zhidanshijia) {
        this.hetong_zhidanshijia=hetong_zhidanshijia;
    }

    /**
     * 取得 制单时间
     *
     * @return Date
     */
    public Date getHetong_zhidanshijia() {
        return this.hetong_zhidanshijia;
    }
    /**
     * 设置 单据状态
     *
     * @param hetong_zt Integer
     */
    public void setHetong_zt(Integer hetong_zt) {
        this.hetong_zt=hetong_zt;
    }

    /**
     * 取得 单据状态
     *
     * @return Integer
     */
    public Integer getHetong_zt() {
        return this.hetong_zt;
    }
}