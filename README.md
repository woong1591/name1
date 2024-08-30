# Ticket List Table

1. API 정보 알아보기.

- url, method
- req, res 필요 목록
  - 아마 request의 header에 인증 관련 TOKEN 필요할 듯.

2. [entity](./src/types/entity)안에 API req res body에 맞는 interface 만들기
3. [api-dict](./src/utils/api-dict.ts)안에 생성한 Req Res 타입 넣기
  - 기존에 해놓은 것 참고
4. next.config.js의 `destination`을 실제 API 주소로 변경

```
Cross Orgin Resoruce Sharing

브라우저에서 ( 크롬 ) api 통신간 url이 다를 경우 막아버림.

니 컴퓨터 IP에서 네이버 API 요청한다 = CORS. 브라우저가 응 이거 안돼. 하고 막음

원래는.. 서버에서 Response Header에다가 Allow Origin = 니 IP를 해줘야 가능
우회하기 위해 Next.js Proxy

님 브라우저 클라이언트 < === > NextJS Proxy Server  <===> 네이버 API
```

5. UserTable 참고해서 TicketTable을 만들어서 구현해보면 됨.
  `useEffect`별로면 @tanstack-query를 알아보시길.
