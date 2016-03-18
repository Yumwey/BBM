/**
 * Created by ���� on 2016/3/18.
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

             //��ʼ����ͼ
             initialize:function(){
                 var views={
                     indexView:index
                 };
                 /**
                  * ��ͼҳ��Ⱦ
                  * @param��key��ǰ������ͼ
                  * @param: tpl��ǰ������ͼģ��
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
             //��ʼ��Ⱦ
             index:function(){
                 this.indexView.render({});
                 this.indexView.$el.on('click',this.doms.btns,function(){
                     alert('CLikc');
                 })
             }
         })
    }
)