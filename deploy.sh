#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
# npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 pages https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:appbest/docs.git master:gh-pages

cd -


# #!/usr/bin/env sh

# # 确保脚本抛出遇到的错误
# set -e

# # 生成静态文件
# # npm run docs:build
# npx vitepress build

# # 进入生成的文件夹
# cd .vitepress/dist

# git init
# git remote add git@https://gitee.com/qve/docs.git
# git add -A
# git commit -m 'deploy'

# # 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@https://gitee.com/qve/docs.git master:web

# cd -
