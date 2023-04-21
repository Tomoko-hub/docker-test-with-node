# Docker Open sesami
-docker build -t [FILENAME] . //Build
-docker images //image repository
-docker run -d -p 5000:5000 [FILENAME] //dockerのポート5000とローカルのポート5000をつなげている
-docker ps //check container id
-docker logs [CONTAINER ID] //shキー
-docker exec -it [CONTAINER ID] sh //ルートユーザとしてDockerにログイン
-docker stop [CONTAINER ID or NAME]

-https://youtu.be/naaZIS7evIA