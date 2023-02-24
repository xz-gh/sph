//当前这个文档：api进行统一管理
import requests from "./request";

//三级联动接口
///api/product/getBaseCategoryList

export const reqCategoryList = ()=>{
    //发请求,返回结果为promise对象
    return requests({url:'/product/getBaseCategoryList',method:'get'});

}