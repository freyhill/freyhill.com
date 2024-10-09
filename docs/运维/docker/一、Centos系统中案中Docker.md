在 CentOS 中安装 Docker 可以通过以下步骤完成：

### 1. 卸载旧版本
如果系统中已经安装了旧版本的 Docker，先卸载：
``` 
sudo yum remove docker docker-common docker-selinux docker-engine
```
### 2. 安装必要的工具

安装 yum-utils 包，这些包将帮助管理存储库：
```
sudo yum install -y yum-utils
```

### 3. 设置 Docker 仓库

添加 Docker 官方仓库：

``` 
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
``` 

上面这一步如果显示网络不可达则切换国内镜像

```
vi /etc/yum.repos.d/docker-ce.repo
``` 

docker-ce.repo内设置阿里云镜像

```
[docker-ce-stable]
name=Docker CE Stable - $basearch
baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7/$basearch/stable/
gpgcheck=1
gpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg
enabled=1
```
### 4. 安装 Docker

安装 Docker Engine：
```
sudo yum install -y docker-ce docker-ce-cli containerd.io
```
### 5. 验证 Docker 是否安装成功

使用以下命令检查 Docker 版本，确认安装成功：
```
docker --version
```
也可以运行一个测试容器来验证 Docker 是否正常工作：
```
sudo docker run hello-world
```
### 6. 启动 Docker 服务

启动 Docker 服务并设置为开机自启：
```
sudo systemctl start docker
sudo systemctl enable docker （开机启动docker）
```
### 7. 查看docker启动状态

```
systemctl status docker 
```
如果是以下提示active (running)则启动成功

```
docker.service - Docker Application Container Engine
Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; vendor preset: disabled)
Active: active (running) since 三 2024-08-07 15:44:22 CST; 2 days ago
Docs: https://docs.docker.com
Main PID: 7965 (dockerd)
 ```
###  8. 配置镜像加速器
```
sudo mkdir -p /etc/docker

sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://9i6emoxi.mirror.aliyuncs.com"]
}
EOF

# 重新启动docker服务

sudo systemctl daemon-reload
sudo systemctl restart docker
```
### 9. 关闭docker服务
systemctl stop docker
## 10. 重启docker服务
systemctl restart docker
