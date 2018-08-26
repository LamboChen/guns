/**
 * 初始化房屋管理详情对话框
 */
var Tb1HouseInfoDlg = {
    tb1HouseInfoData : {}
};

/**
 * 清除数据
 */
Tb1HouseInfoDlg.clearData = function() {
    this.tb1HouseInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
Tb1HouseInfoDlg.set = function(key, val) {
    this.tb1HouseInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
Tb1HouseInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
Tb1HouseInfoDlg.close = function() {
    parent.layer.close(window.parent.Tb1House.layerIndex);
}

/**
 * 收集数据
 */
Tb1HouseInfoDlg.collectData = function() {
    this
    .set('id')
    .set('houseUser')
    .set('houseAddress')
    .set('houseDate')
    .set('houseDesc');
}

/**
 * 提交添加
 */
Tb1HouseInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/tb1House/add", function(data){
        Feng.success("添加成功!");
        window.parent.Tb1House.table.refresh();
        Tb1HouseInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.tb1HouseInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
Tb1HouseInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/tb1House/update", function(data){
        Feng.success("修改成功!");
        window.parent.Tb1House.table.refresh();
        Tb1HouseInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.tb1HouseInfoData);
    ajax.start();
}

$(function() {

});
