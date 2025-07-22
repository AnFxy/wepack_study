# 使用Nodejs20镜像环境，并命名为 builder阶段
FROM node:20 As builder
# 将builder阶段工作目录设置为 /app
WORKDIR /app
# 将项目所有文件复制到/app目录
COPY . .
# 安装项目依赖以及执行前端脚本，会打包生成build文件夹
RUN npm install && npm run stage

# 使用nginx最新版镜像环境
FROM nginx:latest
# 将builder阶段的/app/build目录下的生成文件 复制到 nginx的默认静态资源目录
COPY --from=builder /app/build /usr/share/nginx/html
# 声明容器对外暴露80端口（nginx默认端口）
EXPOSE 80
# 启动nginx映射服务
CMD ["nginx", "-g", "daemon off;"]