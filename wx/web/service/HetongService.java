package wx.web.service;

import wx.web.bean.Hetong;
import ${bean.package_dao}.${bean.name_dao};
import hk.advanpro.spring.web.support.RestfulPageResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static hk.advanpro.spring.utils.ThreadLocalUtils.fillCreator;
import static hk.advanpro.spring.utils.ThreadLocalUtils.fillModifier;

@Service
@Transactional
public class HetongService {
    @Autowired
    private ${bean.name_dao} hetongMapper;

    
//添加区↓

    /**
     * 合同:添加一条记录
     * @param hetong Hetong实例
     */
    public void save(Hetong hetong){
        hetongMapper.save(hetong);
    }

//添加区↑
//删除区↓

    /**
     * 合同:删除一条记录
     * @param hetong_zj Hetong关联表主键的值
     */
    public void delete(@Param(&#34;hetong_zj&#34;) String hetong_zj){
        hetongMapper.delete(hetong_zj);
    }

//删除区↑
//更新区↓

    /**
     * 合同:修改一条记录
     * @param hetong Hetong关联表的实例
     */
    public void updateBase(Hetong hetong){
        fillModifier(hetong);
        hetongMapper.updateBase(hetong);
    }

    /**
     * 合同:修改状态
     * @param hetong Hetong关联表的实例
     */
    public void updateStatus(Hetong hetong){
        fillModifier(hetong);
        hetongMapper.updateBase(hetong);
    }

//更新区↑ 
//查询区↓

    /**
     * 合同：获取一条记录(根据ID)
     *
     * @param hetong_zj Hetong关联表主键的值
     * @return Hetong实例
     */
    public Hetong get(@Param(&#34;hetong_zj&#34;) String hetong_zj){
         return hetongMapper.get( hetong_zj);
    }

    /**
     * 合同：获取列表
     * @param condition 条件-字符串
     * @return List Hetong集合
     */
    public List findByCondition(@Param(&#34;condition&#34;) String condition){
        return hetongMapper.findByCondition(condition);
    }

    /**
     * 合同： 获取总数
     * @param condition 条件-字符串
     * @return long
     */
    public long getCountByCondition(@Param(&#34;condition&#34;) String condition){
        return hetongMapper.getCountByCondition(condition);
    }

//查询区↑


}
