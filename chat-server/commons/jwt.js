const jwtSecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
const loginCtr = require("../controller/login");
//파라미터 순서(토큰에 넣을 데이터, secret_key, option, callback_function)
function generateToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, jwtSecret),
      {
        //토큰은 만들어지고나서 7일동안 유효
        expiresIn: "7d",
      },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      };
  });
}
exports.generateToken = generateToken;
//Account.methods.generateToken = function() {
const registerToken = function () {
  //jwt에 담을 내용
  const payload = {
    _id: this._id,
    profile: this.profile,
  };
  return generateToken(payload, "account");
};

module.exports = { registerToken };
// //token 유효성검사
// const verifyToken = token => {
//     try {
//         const decoded = jwt.verify(token, 'PASSWORD')
//         return decoded;
//     } catch (err) {
//         //TokenExpiredError 기간만료
//         if(err.name === 'TokenExpiredError'){
//             console.log('TokenExpiredError', err)
//         }
//         //JsonWebTokenError 서명이 유효하지 않거나 수정된 경우
//         if(err.name === 'JsonWebTokenError'){
//             console.log('JsonWebTokenError', err)
//         }
//         //NotBeforeError jwt 형식이 아닌경우
//         if(err.name === 'NotBeforeError'){
//             console.log('NotBeforeError', err)
//         }
//         console.log('verifyToken err', err)
//         return false
//     }
// }

// //access token
// //유효시간 2시간
// //매 요청마다 로그인 수행 -> 쿠키에 있는 걸로
// const registerToken = id => {
//     try{
//         return jwt.sign({
//             id
//         }, 'PASSWORD', {
//             expiresIn: '2h'
//         })
//     } catch (err) {
//         console.log('registerToken err', err)
//     }
// }

// //refresh token
// //유효기간 2주
// const registerRefreshToken = id => {
//     try{
//         return jwt.sign({
//             id
//         }, 'PASSWORD', {
//             expiresIn: '14h'
//         })
// } catch (err) {
//     //로그남기기
//     return 'registerRefreshToken err'
// }
// }

// module.exports = {verifyToken , registerToken, registerRefreshToken}

//token reset
// function _JWT(secret){
//     if(!(this instanceof _JWT)){
//         return new _JWT(secret);
//     }

//     this.secret = secret;
// }
// //token register
// _JWT.prototype.register = function(__payload){
//     return new Promise((resolve, reject) => {
//         jwt.sign(
//             __payload,
//             this.secret,
//             {
//                 expiresIn: process.env.JWT_EXPIRE,
//                 issuer: process.env.JWT_ISSUER,
//                 subject: process.env.JWT_SUBJECT,
//             },
//             console.log('expiresIn->', expiresIn),
//             console.log('issuer->', issuer),
//             console.log('subject->', subject),

//             (err, token) => {
//                 if (err) reject(err);
//                 resolve(token);
//             }
//         );
//     })
// }

// //token descript
// _JWT.prototype.verify = function(token){
//     return new Promise((resolve, reject) => {
//         jwt.verify(token, this.secret, (ree, decoded) => {
//             if(err) reject(err);
//             resolve(decoded)
//         })
//     })
// }
