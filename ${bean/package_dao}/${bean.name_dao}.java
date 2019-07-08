package ${bean.package_dao};

import wx.web.bean.Hetong;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

@Mapper
public interface ${bean.name_dao} {

//添加区↓

    /**
     * 合同:添加一条记录
     * @param hetong Hetong实例
     */
    void save(Hetong hetong);

//添加区↑
//删除区↓

    /**
     * 合同:删除一条记录
     * @param hetong_zj Hetong关联表主键的值
     */
    void delete(@Param(&#34;hetong_zj&#34;) String hetong_zj);

//删除区↑
//更新区↓

    /**
     * 合同:修改一条记录
     * @param hetong Hetong关联表的实例
     */
    void updateBase(Hetong hetong);

    /**
     * 合同:修改状态
     * @param hetong Hetong关联表的实例
     */
    void updateStatus(Hetong hetong);

//更新区↑
//查询区↓

    /**
     * 合同：获取一条记录(根据ID)
     *
     * @param hetong_zj Hetong关联表主键的值
     * @return Hetong实例
     */
    Hetong get(@Param(&#34;hetong_zj&#34;) String hetong_zj);

    /**
     * 合同：获取列表
     * @param condition 条件-字符串
     * @return List Hetong集合
     */
    List findByCondition(@Param(&#34;condition&#34;) String condition);

    /**
     * 合同： 获取总数
     * @param condition 条件-字符串
     * @return long
     */
    long getCountByCondition(@Param(&#34;condition&#34;) String condition);

//查询区↑


}