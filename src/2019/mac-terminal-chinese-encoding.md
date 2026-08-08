---
title: 'mac终端中文显示数字编码的设置问题'
date: '2019-10-16'
---

### 问题描述

新部署的服务器，查看git commit message不显示中文了，全是各种数字编码，而旧服务器显示一切正常，这显然是编码问题了。

### 原因

简单google了一下，发现是服务器字符集和本机字符集不匹配。

输入`locale`查看本机的配置，发现`LANG和LC_ALL`都为空

```shell
LANG=
LC_COLLATE="C"
LC_CTYPE="UTF-8"
LC_MESSAGES="C"
LC_MONETARY="C"
LC_NUMERIC="C"
LC_TIME="C"
LC_ALL=
```

而服务器上的`LANG和LC_ALL`都是`utf-8`

```shell
LANG="en_US.UTF-8"
LC_CTYPE="en_US.UTF-8"
LC_NUMERIC="en_US.UTF-8"
LC_TIME="en_US.UTF-8"
LC_COLLATE="en_US.UTF-8"
LC_MONETARY="en_US.UTF-8"
LC_MESSAGES="en_US.UTF-8"
LC_PAPER="en_US.UTF-8"
LC_NAME="en_US.UTF-8"
LC_ADDRESS="en_US.UTF-8"
LC_TELEPHONE="en_US.UTF-8"
LC_MEASUREMENT="en_US.UTF-8"
LC_IDENTIFICATION="en_US.UTF-8"
LC_ALL="en_US.UTF-8"
```

### 解决方案

本地用的zsh，所以在本地打开zsh配置文件`vi ~/.zshrc`，有一段注释的代码，输入下面的内容

```shell
# You may need to manually set your language environment
  export LANG="en_US.UTF-8"
  export LC_ALL="en_US.UTF-8"
```

接着重启终端，或者 `source ~/.zshrc`使设置生效就可以了，done