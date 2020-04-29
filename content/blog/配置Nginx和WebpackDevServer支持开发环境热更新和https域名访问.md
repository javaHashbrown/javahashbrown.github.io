---
title: '配置Nginx和WebpackDevServer支持开发环境热更新和https域名访问'
date: 2020-01-07

---

开始之前，先推荐一个工具网站

> 用于测试配置文件中location匹配，感觉很方便
>
> Nginx location mastch tester： https://nginx.viraptor.info/

### 背景

node接入层+前端，新老业务共用域名

新业务通过地址前缀来区分请求



### 问题

经过配置生产环境下可以正常访问，但：

1. 开发模式下无法从webpack-dev-server获取静态资源
2. 无法实现dev-server热更新



### 原因

通过域名访问时，Nginx把新对应的业务请求转发给node

1. 因为开发模式下静态资源保存在webpack-dev-server里，其端口号与node监听端口不同，所以node无法找到静态资源，表现为资源请求失败
2. webpack-dev-server热更新是基于websocket实现的，但是：
   - 请求的域名不同，Nginx无法响应
   - Nginx不能响应websocket请求，也无法响应



### 解决方案

1. 开发模式下静态资源请求反向代理到webpack-dev-server
2. 开发模式下修改webpack配置，使其热更新websocket请求域名与业务域名相同
3. Nginx配置websocket响应规则，反向代理到webpack-dev-server



### 具体代码

```javascript
//webpack config 追加配置
// 静态资源发布配置
publicPath: DEV ? 'https://news.futunn.com/dev' : 'https://news.futunn.com',
// webpack-dev-server配置
devServer: {
	port,
	host,
  // Invalid Host/Origin Header
  disableHostCheck: true,
  // 修改web socket端口和域名，让nginx可以解析响应
  sockPort: 443,
  sockHost: 'news.futunn.com'
},
```



```shell
server
{
    listen 80;

    server_name news.futunn.com cdnnews.futunn.com;
    return  301 https://$host$request_uri;
}
server
{
    listen 443 ssl;
    server_name news.futunn.com cdnnews.futunn.com;
    #server_name news.futunn.com;
    index index.html index.htm index.php;
    root /Users/jiaqiwang/work/futunn_news/web;
	
	# ssl             on;
    ssl_certificate /Users/jiaqiwang/work/conf/https/futunn.com.crt;
    ssl_certificate_key /Users/jiaqiwang/work/conf/https/futunn.com.key;

    error_log /Users/jiaqiwang/work/conf/logs/error_news.futunn.com.log;
    access_log /Users/jiaqiwang/work/conf/logs/access_news.futunn.com.log combined;    


    if ($host ~* ^futunn\.com$)
    {
        rewrite ^/(.*)$ https://www.$host$request_uri  permanent;
        break;
    }



    location /
    {
        if (-f $request_filename)
        {
            expires 7200;
            break;
        }
        if (!-f $request_filename)
        {
            rewrite ^(.*)$ /index.php last;
            break;
        }
    }

    set $allowOrigin "";
    if ($host ~* ^cdnnews\.futunn\.com$) {
       set $allowOrigin "*";
    }
    add_header Access-Control-Allow-Origin $allowOrigin;

    location ~.*\.php$
    {

        if (!-f $request_filename)
        {
            rewrite ^(.*)$ /index.php last;
            break;
        }

        include fastcgi.conf;
        fastcgi_param  HTTPS on;
        fastcgi_pass  127.0.0.1:9000;
        fastcgi_index index.php;

        break;
    }
    
    location ~* \.(eot|ttf|woff)$ {
        add_header Access-Control-Allow-Origin *;
    }
    
    #生产环境，node站点静态资源请求转发到node
    location ^~ /node/assets {
        proxy_pass http://node_proxy;
    }

    #开发环境下静态资源反向代理到 Webpack devServer
    location ^~ /dev {
        proxy_pass http://webpack_dev_server;
    }
		
    location ~* \.(css|js)$ {
	    add_header Access-Control-Allow-Credentials  true;
        add_header Access-Control-Allow-Origin https://news.futunn.com;
    }

    
    ##websocket反向代理，支持dev-server热更新
    location /sockjs-node {
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host $host;
        proxy_pass http://webpack_dev_server;
        proxy_redirect off;
      	proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";  
    }

    
		#node服务
    location /node {
        proxy_store off;
        proxy_redirect off;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Remote-Host $remote_addr;
        proxy_set_header X-Nginx-Proxy true;
        proxy_pass http://node_proxy;
    }
}
upstream node_proxy {
    server 127.0.0.1:10110;
}
#webpack-dev-server服务器地址
upstream webpack_dev_server {
   server 127.0.0.1:10100;
}




```



### 总结

#### 其他方案：webpack-dev-server代理转发到Nginx



这样在本地开发时就可以实现https访问+webpack-dev-server热更新了

Done

