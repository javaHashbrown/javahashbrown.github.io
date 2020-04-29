---
title: 'nginx基本配置'
date: '2020-01-15'



---

### 三个主要字段

http，server，location

### location配置

优先级

=

^~

~

~*

/

### 反向代理配置

proxy_pass

### gzip配置

```shell
gzip on;
gzip_min_length 1k; 
gzip_buffers   4 16k;
gzip_http_version 1.1; # 为什是1.1
gzip_comp_level 2;  # 为什么选择2
gzip_types    
		text/plain 
		text/javascript
		application/javascript 
		text/css 
		application/json
		application/xml;
    	gzip_vary on;

gzip_proxied any;
```





### 案例





