/**
 * Created by Administrator on 2016/3/21.
 */
define(['jquery','backbone','model/motks'],function($,Backbone,Motks){
    var Motk = Backbone.Collection.extend({
        model:Motks,
        initialize:function(opt){
            var self=this;
            var allData;
            var jqxhr= $.getJSON('data/data.json').success(function(data){
                $.each(data,function(i,item){
                    allData = new Motks({id:item.id,title:item.title});
                    self.add(allData);
                });
                opt.cb(self)
            })
        }
    });
    return Motk;
})