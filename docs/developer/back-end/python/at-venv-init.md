---
title: Django 在 Window 系统上初始化的步骤
---

# Django 在 Window 系统上初始化的步骤

2022-01-25，为学习 python web 创立专栏并开始构建自己的个人网站。

## 启用虚拟环境

项目刚开始就遇到一个难题：在 window10 上面跟随 [DjangoProject](https://docs.djangoproject.com/zh-hans/4.0/topics/install/#installing-official-release) 创建项目时希望能够使用 `venv` 虚拟环境和系统进行隔离，在浏览 [PythonDocs TutorialVenv](https://docs.python.org/3/tutorial/venv.html) 之后，跟着步骤进行，然后.....

![run tutorial-env](/developer/python-at-venv-init-1.png)

通过各种搜索获取到的解决方案都无效之后，我想到了这个：直接进入 Scripts 文件夹运行 activate.bat 文件再回到项目根目录。

这个是可行的，但这两者之间有什么区别？

![run tutorial-env](/developer/python-at-venv-init-2.gif)

## 框架安装

接下来就是安装并尝试运行项目了，我这里安装的是 Django 正式发布版本，如果想要尝试其他的版本可以查看官方文档。

```shell
pip install Django
```

执行了 pip 安装命令后稍等一段时间，之后运行版本号查看命令，当版本号出现就证明框架已经安装成功

```shell
python -m django --version
```

## 项目创建

Django 安装完毕之后，通常会自带有一个 django-admin 的基本命令，然后可以通过它去生成应用，应用命名随意，例如 app、test 什么的

```shell
django-admin startproject app
```

![folder](/developer/python-at-venv-init-3.png)
执行完创建的目录和文件，它们的用途描述如下(直接照搬官方文档)：

最外层的 app/ 根目录只是你项目的容器， 根目录名称对 Django 没有影响，你可以将它重命名为任何你喜欢的名称。

<strong>app/</strong>: 里面一层的 app/ 目录包含你的项目，它是一个纯 Python 包。它的名字就是当你引用它内部任何东西时需要用到的 Python 包名(比如 app.urls)。  
<strong>manage.py</strong>：manage.py: 一个让你用各种方式管理 Django 项目的命令行工具。  
<strong>\_\_init\_\_.py</strong>：一个空文件，告诉 Python 这个目录应该被认为是一个 Python 包。  
<strong>settings.py</strong>：Django 项目的配置文件。  
<strong>urls.py</strong>：Django 项目的 URL 声明，就像你网站的“目录”。

举个栗子：想要访问 https://example.com/welcome，就需要在 urls.py 里加入 welcome 声明
<strong>asgi.py</strong>：作为你的项目的运行在 ASGI 兼容的 Web 服务器上的入口。
<strong>wsgi.py</strong>：作为你的项目的运行在 WSGI 兼容的 Web 服务器上的入口。

## 运行项目

运行项目需要切换到项目根目录，然后运行，当看到下方截图信息则说明项目运行成功，可以通过 http://127.0.0.1:8000/ 进行访问：

```shell
python manage.py runserver
```

![run server](/developer/python-at-venv-init-4.png)
