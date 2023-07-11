#!/usr/bin/env sh

# abort on errors

set -e

# build
npm run build

# navigate into the build directory
cd dist


# if yiu deploying to a custom domain
# echo 'www.example.com' > CNAME


git init
git checkout -b master
git add -A
git commit -m "deploy'

# if you deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master


# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:registroViteExpress.git master:gh-pages