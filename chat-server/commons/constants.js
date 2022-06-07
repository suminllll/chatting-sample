let constant = {};

constant.NOT_FOUND_API_ERR_CODE = "NFA";
constant.NOT_FOUND_API_ERR_MESSAGE = "Not Found API";

constant.NOT_FOUND_DATA_ERR_CODE = "NFD";
constant.NOT_FOUND_DATA_ERR_MESSAGE = "Not Found DATA";

constant.NOT_LOGIN_USER_ERR_CODE = "not login user";
constant.NOT_LOGIN_USER_ERR_MESSAGE = "로그인이 필요해요";

constant.TOKEN_EXPIRED_ERR_CODE = "token expired";
constant.TOKEN_EXPIRED_ERR_MESSAGE =
  "유효기간이 만료 된 사용자에요. 다시 로그인 해주세요.";

constant.INVALID_MEMBER_ERR_CODE = "invalid member";
constant.INVALID_MEMBER_ERR_MESSAGE =
  "유효하지 않은 사용자에요. 다시 로그인 해주세요.";

constant.SERVER_ERR_CODE = "ERR";
constant.SERVER_ERR_MESSAGE = "SERVER ERROR";

constant.REQUIRED_REQUEST = "필수 요청 사항이에요";

constant.INVALID_DATA = "유효하지 않은 요청이에요"; // 정해진 요청값을 벗어난 경우
constant.INVALID_DATA_TYPE = "데이터 타입을 다시 확인해주세요";
constant.INVALID_ACCOUNT_ID = "ID를 다시 확인해주세요";

constant.INVALID_EMAIL = "이메일 형식을 다시 확인해주세요";
constant.INVALID_EMAIL_DUPLICATE = "이미 사용중인 이메일이에요";
constant.INVALID_MOBILE_DUPLICATE = "이미 OALIVE에 등록된 휴대폰 번호예요";

constant.INVALID_PASSWORD_LENGTH = "8글자 이상이어야 해요";
constant.INVALID_PASSWORD =
  "비밀번호는 영문, 숫자, 특수문자 조합으로 되어있어야 해요";

constant.INVALID_NICK_LENGTH = "닉네임은 10글자 이하여야 해요"; // 기획상 글자수 미정
constant.INVALID_NICK_NOT_BLANK = "닉네임에는 공백을 사용할 수 없어요";
constant.INVALID_NICK_START_WORD =
  "닉네임은 한글과 영어, 숫자로 시작할 수 있어요";
constant.INVALID_NICK_DUPLICATE = "이미 사용중인 닉네임이에요";

constant.INVALID_BIRTH_YOUTH = "만 14세 이상만 가입 가능해요";

constant.INVALID_TERMS_USE = "서비스 이용약관에 동의하지 않았어요";
constant.INVALID_TERMS_PRIVACY = "개인정보 처리방침에 동의하지 않았어요";
constant.INVALID_TERMS_YOUTH = "만 14세 이상 이용약관에 동의하지 않았어요";

constant.INVALID_TERMS_WITHDRAW = "모든 탈퇴약관에 동의하지 않았어요";

constant.ARTISTS_CANNOT_WITHDRAW_MESSAGE =
  "등록 또는 등록 요청 중인 공연의 실연/제작진으로 등록되어 있어요<br> 1:1 문의를 통해 탈퇴를 진행해주세요";

constant.MEMBER_STATUS_GENERAL = "general"; // 일반 회원
constant.MEMBER_STATUS_STOPPED = "stopped"; // 정지된 계정
constant.MEMBER_STATUS_WITHDRAW = "withdraw"; // 탈퇴한 계정
constant.MEMBER_STATUS_EMAILOUT = "emailout"; // 이메일 미인증 사유로 정지된 계정

constant.MEMBER_ACCOUNT_NOT_CONFIRMED = "이메일 인증이 완료되지 않았어요";
constant.MEMBER_STATUS_STOPPED_MESSAGE = "이용이 정지된 계정이에요";
constant.MEMBER_STATUS_STOPPED_MESSAGE_NOT_CONFIRMED =
  "이메일 미인증 사유로 이용 정지된 계정이에요";
constant.LOGIN_FAILED_STATUS_STOPPED_MESSAGE =
  "해당 이메일 주소는 정지되어 로그인할 수 없어요";
constant.LOGIN_FAILED_TYPE_KAKAO = "해당 이메일 주소는 카카오로 로그인해주세요";
constant.LOGIN_FAILED_NOT_FOUND = "이메일 또는 비밀번호가 잘못되었어요";
constant.MOBILE_CONFIRMED_COUNT_MESSAGE =
  "휴대폰 번호 인증은 하루에 5회만 할 수 있어요<br> 내일 다시 시도해주세요";

constant.OALIVE_CONTACT_EMAIL = "oalive@fillthefeel.com";
constant.OALIVE_SEND_EMAIL_HELP = process.env.EMAIL_SENDER;

// 필더필 사업장 관련
constant.FTF_COMPANY_ADDRESS =
  "서울특별시 중구 청계천로 40, 한국관광공사 (1207호, 필더필)";
constant.FTF_COMPANY_NUMBER = "534-81-00477";
constant.FTF_ORDER_BUSINESS_NUMBER = "제 2018-서울서대문-0858호";

constant.OALOGO_BASEURL_SOURCE = `<img src="https://api.oalive.kr/files/image/20211029/f201408b2da5ef41275b1f98afbe7595" alt="logo">`;

constant.FEATAURE_LIKES_ENCORE_DUPLICATE = "이미 앙코르 요청이 완료되었어요";

constant.NOT_SHOWING_DATE_ERR_CODE = "not showing date";
constant.NOT_SHOWING_DATE_ERR_MESSAGE = "접근 가능한 시간이 아닙니다.";

constant.INVALID_REQUEST_REFUND_WOW =
  "환불 요청 WoW의 개수를 다시 확인해주세요";

// 회원 상태값
constant.MEMBER_STATUS_GENERAL = "general"; // 일반 회원
constant.MEMBER_STATUS_STOPPED = "stopped"; // 정지된 계정
constant.MEMBER_STATUS_WITHDRAW = "withdraw"; // 탈퇴한 계정
constant.MEMBER_STATUS_EMAILOUT = "emailout"; // 이메일 미인증 사유로 정지된 계정

// 오아 FAQ(오아로 첫 걸음) 카테고리별 요청 url
constant.FAQ_CATEGORY_INTRODUCE = "introduce"; // 오아라이브 소개
constant.FAQ_CATEGORY_ACCOUNT = "account"; // 회원가입/계정
constant.FAQ_CATEGORY_FEATURE_WATCH = "feature-watch"; // 작품 관람
constant.FAQ_CATEGORY_DISPUTE = "dispute"; // 분쟁
constant.FAQ_CATEGORY_INQUIRY = "inquiry"; // 문의

constant.FAQ_CATEGORY_INTRODUCE_LABEL = "오아라이브 소개";
constant.FAQ_CATEGORY_ACCOUNT_LABEL = "회원가입/계정";
constant.FAQ_CATEGORY_FEATURE_WATCH_LABEL = "작품 관람";
constant.FAQ_CATEGORY_DISPUTE_LABEL = "분쟁";
constant.FAQ_CATEGORY_INQUIRY_LABEL = "문의";

// 아티스트 FAQ 카테고리별 요청 url (회원가입/계정, 분쟁은 중복)
constant.FAQ_CATEGORY_ARTIST_FEATURE_REGISTER = "artist-feature-register"; // 아티스트/작품 등록
constant.FAQ_CATEGORY_FEATURE_PAYMENT = "feature-payment"; // 작품 판매/구매
constant.FAQ_CATEGORY_REVENUE = "revenue"; // 정산

constant.FAQ_CATEGORY_ARTIST_FEATURE_REGISTER_LABEL = "아티스트/작품 등록";
constant.FAQ_CATEGORY_FEATURE_PAYMENT_LABEL = "작품 판매/구매";
constant.FAQ_CATEGORY_REVENUE_LABEL = "정산";

// 유저 카테고리별 요청 url (회원가입/계정, 작품 관람, 분쟁은 중복)
constant.FAQ_CATEGORY_PAYMENT_REFUND = "payment-refund"; // 결제/환불
constant.FAQ_CATEGORY_ERROR = "error"; // 오류

constant.FAQ_CATEGORY_PAYMENT_REFUND_LABEL = "결제/환불";
constant.FAQ_CATEGORY_ERROR_LABEL = "오류";

constant.FAQ_CATEGORY_MAP = new Map();
constant.FAQ_CATEGORY_MAP.set(
  constant.FAQ_CATEGORY_INTRODUCE,
  constant.FAQ_CATEGORY_INTRODUCE_LABEL
);
constant.FAQ_CATEGORY_MAP.set(
  constant.FAQ_CATEGORY_ACCOUNT,
  constant.FAQ_CATEGORY_ACCOUNT_LABEL
);
constant.FAQ_CATEGORY_MAP.set(
  constant.FAQ_CATEGORY_FEATURE_WATCH,
  constant.FAQ_CATEGORY_FEATURE_WATCH_LABEL
);
constant.FAQ_CATEGORY_MAP.set(
  constant.FAQ_CATEGORY_DISPUTE,
  constant.FAQ_CATEGORY_DISPUTE_LABEL
);
constant.FAQ_CATEGORY_MAP.set(
  constant.FAQ_CATEGORY_INQUIRY,
  constant.FAQ_CATEGORY_INQUIRY_LABEL
);

constant.FAQ_CATEGORY_MAP.set(
  constant.FAQ_CATEGORY_ARTIST_FEATURE_REGISTER,
  constant.FAQ_CATEGORY_ARTIST_FEATURE_REGISTER_LABEL
);
constant.FAQ_CATEGORY_MAP.set(
  constant.FAQ_CATEGORY_FEATURE_PAYMENT,
  constant.FAQ_CATEGORY_FEATURE_PAYMENT_LABEL
);
constant.FAQ_CATEGORY_MAP.set(
  constant.FAQ_CATEGORY_REVENUE,
  constant.FAQ_CATEGORY_REVENUE_LABEL
);

constant.FAQ_CATEGORY_MAP.set(
  constant.FAQ_CATEGORY_PAYMENT_REFUND,
  constant.FAQ_CATEGORY_PAYMENT_REFUND_LABEL
);
constant.FAQ_CATEGORY_MAP.set(
  constant.FAQ_CATEGORY_ERROR,
  constant.FAQ_CATEGORY_ERROR_LABEL
);

module.exports = constant;
