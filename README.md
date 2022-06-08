# 채팅 기능

### Technology
- client : next.js
- server : node.js
- database : mariadb

### Flow
1. 닉네임 설정 후 로그인
    a. 사용자 식별
        i. ‘oo님 안녕하세요.’
        ii. 로그인 직후 쿠키에 JWT 토큰을 저장하고, DB(member table)에 유저 정보 저장
2. 채팅방 선택 (
    a.  Customer Service[고객지원방], Chatter[수다방]
3. 해당 방 입장
    a. socket.io 라이브러리를 이용한 송수신 연결
    b. 채팅방 별로 식별하고, 채팅내용을 DB에 반영
    c. 해당 방 별로 다른 인터페이스 화면을 구성(카톡형, 리스트형)
    d. ‘oo님이 들어오셨습니다/ oo님이 퇴장하셨습니다’
    e. 각 사용자별 채팅가능
4. 채팅방 나가기
    a. socket.io 송수신 해
5. 로그아웃
    a. 쿠키에서 유저 정보 삭제

* 추후에 만들 예정인 기능
1. 방 반들기
2. 특정 유저에게 귓속말하기
3. 프로필 이미지 등록/변경/삭제...

