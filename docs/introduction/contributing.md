# 如何参与

## 使用 Git 进行本地编译

1. 将主仓库 Fork 到自己的仓库中；
2. 将 Fork 后的仓库克隆（clone）到本地；
3. 在本地进行修改后提交（commit）这些更改；
4. 将这些更改推送（push）到你克隆的仓库；
5. 提交 Pull Request 至主仓库。

如果您无法理解上述操作，可以使用以下一系列操作。

1. 将仓库拷贝到自身账户
    1. 如果您没有 Github 的账户，请[注册](https://github.com/signup)一个。
    2. 根据自己的平台，下载并安装 Git，参考[链接](https://git-scm.com/download)。
    3. 装好之后，配置本地用户。在命令行中输入以下代码：
    ```
    git config -global user.name "你自己的用户名"
    git config -global user.email "自己的邮箱@example.com"
    ```
    4. 在[本仓库](https://github.com/lxlonlyn/CSP-Project-with-MkDocs/)的右上角有 ++"Fork"++ 选项，点击它。之后您会发现该项目已经拷贝到了您的库中。
    5. 在本地建好一个文件夹，用于存放拷贝下来的文件。进入该文件夹，输入以下指令：
    ```
    git clone https://github.com/您的github账号名称/CSP-Project-with-MkDocs.git
    ```
    6. 您现在应该能在该文件夹中看到整体项目了。
2. 在自身仓库中进行修改
    1. 在该文件夹中进行对应的修改。**在您的仓库里的修改不会影响到本项目页面的展示，请不用担心损坏问题。**
    2. 进行对应修改之后，在该文件夹中开启命令行，输入以下指令：
    ```
    git add .
    git commit -m "我做出了哪些贡献"
    git push origin master
    ```
    3. 登入 Github 网页端，应该可以看见您的仓库内已经出现了对应的变化。
3. 将自身仓库提交到本仓库
    1. 在您的仓库页面，点击导航栏中的 ++"Pull request"++，之后再点击右上角绿色的 ++"New pull request"++ 。
    2. 确认 Pull request 的方向，应该由您的仓库指向本仓库。确认无误后，点击绿色的 ++"Create pull request"++ 。
    3. 填写好对应评论，点击右下角绿色 ++"Create pull request"++ 即可。
