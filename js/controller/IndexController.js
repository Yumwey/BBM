
/**
 * The index controller for displaying on the index home page.
 */
define(
    [
        'jquery',
        'underscore',
        'backbone',
        'controller/MobileController',
        'view/BaseMobileView',
        'ui',
        'text!../template/IndexTemplate.html',
        'model/motk'
    ],
    function($, _, Backbone, MobileController, BaseMobileView, ui, indexTpl,Motk) {

        return MobileController.extend({
            initialize: function() {
                this.indexView = new BaseMobileView({
                    $container: $('body'),
                    appendable: true,
                    controller: this,
                    textTemplate:indexTpl
                });

                _.bindAll(this,'init');
                new Motk({cb:this.init});
            },

            datas:{
                indexData:null
            },
            init: function(params){
                this.index(params);
            },
            index: function(renderData) {
                console.log(renderData.length);
                this.indexView.render({data:renderData.toJSON()});
                this.indexView.$el.on('scroll',function(event){
                    var offTop= $(event.target).scrollTop();
                    if(offTop>=49){
                        $('.am-header-default').addClass('fix');
                    }else{
                        $('.am-header-default').removeClass('fix');
                    }
                });
            },
        });
    }
);