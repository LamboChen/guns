package com.stylefeng.guns.modular.system.model;

import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author test_chen
 * @since 2018-08-26
 */
@TableName("tb1_house")
public class Tb1House extends Model<Tb1House> {

    private static final long serialVersionUID = 1L;

    private String id;
    @TableField("house_user")
    private String houseUser;
    @TableField("house_address")
    private String houseAddress;
    @TableField("house_date")
    private Date houseDate;
    @TableField("house_desc")
    private String houseDesc;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getHouseUser() {
        return houseUser;
    }

    public void setHouseUser(String houseUser) {
        this.houseUser = houseUser;
    }

    public String getHouseAddress() {
        return houseAddress;
    }

    public void setHouseAddress(String houseAddress) {
        this.houseAddress = houseAddress;
    }

    public Date getHouseDate() {
        return houseDate;
    }

    public void setHouseDate(Date houseDate) {
        this.houseDate = houseDate;
    }

    public String getHouseDesc() {
        return houseDesc;
    }

    public void setHouseDesc(String houseDesc) {
        this.houseDesc = houseDesc;
    }

    @Override
    protected Serializable pkVal() {
        return null;
    }

    @Override
    public String toString() {
        return "Tb1House{" +
        "id=" + id +
        ", houseUser=" + houseUser +
        ", houseAddress=" + houseAddress +
        ", houseDate=" + houseDate +
        ", houseDesc=" + houseDesc +
        "}";
    }
}
