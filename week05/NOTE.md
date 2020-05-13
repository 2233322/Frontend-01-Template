# 第五周总结

## OSI TCP/IP 分层模型
  * OSI
    * application layer 应用层
    * presentaion layer 表示层
    * session layer 会话层
    * transport layer 传输层
    * network layer 网络层
    * data link layer 数据链路层
    * physical layer 物理层

  * TCP/IP
    * application layer /HTTP  ->osi后3层
    * transport layer /TCP/UDP  ->osi第4层
    * internet layer /IP ->osi第3层
    * link layer /MAC   -> osi第2层

## http (HyperText Transfer Protocol)
> HTTP是一个在计算机两点之间传输文字、图片、音频、视频等超文本数据的约定和规范

### http请求报文
```
GET http://localhost:3000 HTTP/1.1   请求行（请求方法、目标、协议版本号）
Host: 127.0.0.1                      header   唯一一个http/1.1必须出现的请求头
Connection: keep-alive               header
Content-Length: 6
                                     空行CRLF
entity                                  body
```

### http响应报文
```
HTTP/1.1 200 OK                       状态行
Date: Wed, 13 May 2020 08:14:00 GMT
Content-Length: 6

entity
```

#### 状态码
  * 1XX: 提示信息，处于协议处理中间状态还需要后续操作
  * 2XX：成功，报文收到被正确处理
  * 3XX: 重定向，资源位置发生变动，需要客户端重新发送
    * 301 Moved permanently 永久重定向
    * 302 Found 临时重定向
    * 304 Not Modified 缓存重定向
  * 4XX：客户端错误，请求报文有误服务器无法处理
    * 400 Bad Request
    * 403 Forbidden 服务端禁止访问
    * 404 Not Found 未找到资源
    * 408 Request Timeout 请求超时
  * 5XX：服务器错误
    * 500 Internal Server Error
    * 501 Not Implemented TODO
    * 503 Service Unavailable 服务器当前很忙，暂时
无法响应服务

