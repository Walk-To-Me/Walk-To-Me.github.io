npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push
cd ../
rm -rf public