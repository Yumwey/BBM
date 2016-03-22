/**
 * Created by Administrator on 2016/3/22.
 */
define(['jquery','underscore','backbone'],function($,_,Backbone){
    //´´½¨»ù´¡model
    var motks = Backbone.Model.extend({
        default:{
            id:"",
            title:'',
            clsname:'',
            desc:''
        },
        //get:function(id){
        //    var self=this;
        //    var temNews;
        //    var dataFetch = $.getJSON('data/' + id + '.json').success(function(data,status,xhr){
        //        self.set({id:data.id,title:data.title,clsname:data.clsname,desc:data.desc});
        //    })
        //}
    });
    return motks;
})