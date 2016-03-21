
# backbone-mobile
 工程化构建高性能移动webAPP项目骨架。使用backbone、requirejs、amazeui等项目构建
 
 本项目解决的问题： 

1.   足够好的性能
2.   多人协同开发和统一的开发方式
3.   包管理和打包发布
4.   可维护性
5.   集成UI套件以及页面过渡动画
6.   资源按需加载和预加载

# 如何使用

首先我们说下目录项目的目录结构及其功能
<pre>
├─css
├─fonts
├─img
└─js
    ├─controller       控制相关代码
    ├─lib              依赖的第三方库
    │  ├─backbone
    │  │  └─plugins
    │  ├─jquery
    │  │  └─plugins
    │  ├─modernizr
    │  ├─require
    │  │  └─plugins
    │  ├─underscore
    │  └─vsf
    │      ├─log
    │      └─store
    ├─template      模板文件，默认使用的html
    │  ├─Layzload   每个控制器推荐对应一个目录
    │  ├─Pages
    │  └─Preload
    └─view          视图目录
</pre>

 下载本项目
 
     git clone https://github.com/Yumwey/BBM.git


 这个项目不算自己完成，只能算是整合网络上一些代码然后修改整理了并在实际项目中使用过。
 下面我罗列出项目中使用的代码来源
 
 
 1.  backbone http://backbone.org.au/
 2.  controller https://github.com/hoatle/mobile-webapp-template
 3.  jquery http://jquery.com/
 4.  unnderscode http://underscorejs.org/
 5.  requeire http://www.requirejs.org/ 
 6.  amazeui  http://amazeui.org

 疏漏之处请指正，谢谢！
 
 贡献代码或者问题意见联系 马化腾：1049818533
