# 使用Nodejs20镜像环境，并命名为 builder阶段
FROM node:20 As builder
# 将builder阶段工作目录设置为 /app
WORKDIR /app
# 将项目所有文件复制到/app目录
COPY . .
# 允许传入构建环境【stage测试环境， product 线上环境】
ARG BUILD_SCRIPT=stage
# 安装项目依赖以及执行前端脚本【npm run xxx这个取决于你项目打包命令是怎样的，我的会打包生成build文件夹[线上环境是build_online文件夹]】
RUN npm install && npm run $BUILD_SCRIPT
# 分环境统一输出目录
RUN if [ "$BUILD_SCRIPT" = "product" ]; then \
      cp -r /app/build_online /app/dist; \
    else \
      cp -r /app/build /app/dist; \
    fi

# 使用nginx最新版镜像环境
FROM nginx:latest
# 将builder阶段的/app/dist目录下的生成文件 复制到 nginx镜像的默认静态资源目录
COPY --from=builder /app/dist /usr/share/nginx/html
# 声明容器对外暴露80端口（nginx默认端口）
EXPOSE 80
# 启动nginx映射服务
CMD ["nginx", "-g", "daemon off;"]