#!/usr/bin/env sh

# abort on errors


# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:mrdeerly/vue-timeago3.git master:gh-pages

cd -