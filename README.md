* 페이지별로 폴더 만듦
* 해당 디렉토리 들어가서 (chat-client / chat-server) 해당 start

chat-client 

|--chat (x)

|-- room

||---Chatter(수다방)

||---Customer(고객지원방)

|||---index.js(/room/Customer)

||

||---index.js(/room) 로그인 후 넘어가는 채팅방 선택하는 페이지

_app.js

_document.js 

-index.js : 제일 먼저 실행되는 메인페이지(로그인)


["start": npm run dev]



chat-server

|--controller

|--routes

app.js (공통적인 것들, 채팅관련 로직도 들어있음)



["start": npm run start || nodemon add.js(변경될 때마다 자동실행)]
