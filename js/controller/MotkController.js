/**
 * Created by 杨威 on 2016/3/18.
 */
define(
    ['jquery',
    'underscore',
    'backbone',
    'controller/MobileController',
    'view/BaseMobileView',
    'ui',
    'text!../template/Motk/index.html',
    ],function($,_,Backbone,MobileController,BaseMobileView,ui,index){
         return MobileController.extend({

             //初始化视图
             initialize:function(){
                 var views={
                     indexView:index
                 };
                 /**
                  * 视图页渲染
                  * @param：key当前索引视图
                  * @param: tpl当前索引视图模板
                  */
                 $.each(views, $.proxy(function(key,tpl){
                     this[key] = new BaseMobileView({
                         $container:$('body'),
                         appendable:true,
                         controller:this,
                         textTemplate:tpl
                     });
                 },this));
             },
             //开始渲染
             index:function(){
                 this.indexView.render({});
                 this.indexView.$el.on('click',this.doms.btns,function(){
                     alert('CLikc');
                 })
             }
         })
    }
)