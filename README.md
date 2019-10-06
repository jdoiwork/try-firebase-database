# Try Firebase Database
Firebase Database の練習

## Deploy

```bash
$ cd firebase
$ firebase deploy
```

## Serve
開発中のデバッグ用サーバーの立ち上げ方

```bash
$ cd firebase
$ firebase serve --only hosting
```

### クラウド環境で開発していて SSH Port Forwarding する場合
```bash
# サーバー上ではなく、ローカルPCのターミナルでやる
$ ssh -N -L 5000:localhost:5000 ユーザー名@IPアドレス
```

こうすると自分のPCのブラウザ上で http://localhost:5000 とするとクラウド上のWebサーバーにアクセスできる

# すぐ忘れる ワンライナー Web Server

## Python 3
```bash
$ python3 -m http.server
```


## Python 2

```bash
$ python -m SimpleHTTPServer
```

## Node

### serverのインストール
```bash
$ npm install -g http-server
```

### 実行
```bash
$ http-server
```
