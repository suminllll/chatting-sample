# 실시간 채팅 기능
![chat full video](https://user-images.githubusercontent.com/79704928/172582674-0d8e33ff-e2a0-4099-98b6-b33b3bf0d288.gif)

## Tech
- client : next.js
- server : express
- communication : socket.io
- database : mariadb

## Flow
1. 닉네임 설정 후 로그인</br>
  &nbsp;a. 사용자 식별</br>
     &nbsp;&nbsp;&nbsp;i. ‘oo님 안녕하세요.’</br>
     &nbsp;&nbsp;&nbsp;ii. 로그인 직후 쿠키에 JWT 토큰을 저장하고, DB(member table)에 유저 정보 저장</br>
     </br>
2. 채팅방 선택 </br>
 &nbsp;a.  Customer Service[고객지원방], Chatter[수다방]</br>
 &nbsp;&nbsp;&nbsp;i. 각 채팅방별 다른 UI
 
   </br>
3. 해당 방 입장</br>
 &nbsp;a. socket.io 라이브러리를 이용한 송수신 연결</br>
 &nbsp;b. 채팅방 별로 식별하고, 채팅내용을 DB에 반영</br>
 &nbsp;c. 해당 방 별로 다른 인터페이스 화면을 구성(카톡형, 리스트형)</br>
 &nbsp;d. ‘oo님이 들어오셨습니다/ oo님이 퇴장하셨습니다’</br>
 &nbsp;e. 각 사용자별 채팅가능</br>
 &nbsp;d. 귓속말 모드</br>
   &nbsp;&nbsp;&nbsp;i. 왼쪽의 플러스 버튼 클릭시 모달창이 뜨고, 귓속말 select에서 유저를 선택할 수 있다('나'는 유저에서 제외)</br>
   &nbsp;&nbsp;&nbsp;ii. 내용 입력 후 보내면 내가 보낸 창은 오른쪽에, 받는 채팅은 왼쪽에 출력</br>
  &nbsp; &nbsp;iii. {보내는사람}님에게 귓속말을 보냈습니다. {받는사람}님이 귓속말을 보냈습니다.</br>
  &nbsp; &nbsp;iiii. 귓속말 모드일때 placeholder로 현재 귓속말 모드이고, 종료 방법을 알려줌</br>
  &nbsp;&nbsp;iiiii. esc로 귓속말 모드를 종료할 수 있다</br>
 
    </br>
4. 채팅방 나가기</br>
 &nbsp;a. socket.io 송수신 해제</br>
    </br>
5. 로그아웃</br>
 &nbsp;a. 쿠키에서 유저 정보 삭제</br>
</br>
* 추후에 만들 예정인 기능</br>
1. 방 반들기</br>
2. 특정 유저에게 귓속말하기</br> [v]
3. 프로필 이미지 등록/변경/삭제...</br>
4. 채팅 아래에서 위로</br> [v]
5. 회원가입</br>
6. 로그인(아이디 패스워드)</br>

