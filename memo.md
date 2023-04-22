# Docker Open sesami

make folder and file
-npm init
-touch app.js(dockerとローカルマシンのルートになる)
-touch Dockerfile
-touch .dockerignore
-npm install --save express
-touch app.js Dockerfile .dockerignore
-make Dockerfile and .dockerignore

-run command (make sure open Docker Desktop)

-docker build -t [FILENAME] .   //Build
-docker images //image repository
-docker run -d -p 5000:5000 [FILENAME]   //dockerのポート5000とローカルのポート5000をつなげている
-docker ps //check container id
-docker logs [CONTAINER ID]   //docker containerとlocalhostが接続してるか確認
-docker exec -it [CONTAINER ID] sh   //ルートユーザとしてDockerにログイン
-docker stop [CONTAINER ID or NAME]

-https://youtu.be/naaZIS7evIA
