module.exports = {
    lintOnSave:false ,
    devServer:{
        host:"localhost",  // 0.0.0.0
        port:8080,
        open:true,  // 自动打开浏览器  
        inline:true,
        proxy:{
            "/api":{
                target:"http://localhost:2000",
            },
            "/yun":{
                target:"http://47.104.209.44:3333/",  // 服务器地址  
                pathRewrite:{
                    "^/yun":""  // 需要将 /yun 重写为 / 
                }
            },
            "/vue":{
                target:"http://39.102.67.15:3000"   //  所有的接口 path 都有  vue  
            } ,
            "/public":{
                target:"http://39.102.67.15:3000" ,  //  所有的接口 path 都有  vue  
                pathRewrite:{
                    "^/public":""  // 需要将 /yun 重写为 / 
                }
            },
            "/maizuo":{
                target:"https://m.maizuo.com" ,  //  所有的接口 path 都有  vue  
                pathRewrite:{
                    "^/maizuo":""  // 需要将 /yun 重写为 / 
                }
            }
        }
    },
    publicPath:"",
    css:{
        loaderOptions:{
            css:{},
            postcss:{   // css 代码转化
                plugins:[  // 插件
                    require("postcss-px2rem-exclude")({
                        // 3. 淘宝适配  1rem = 10vw 
                        remUnit:37.5,   // 自动除以 100 
                        // remUnit:100     // 网易适配 
                    })
                ]
            }
        }
    }
}