const jwt = require("jsonwebtoken");
const sha1 = require("sha1");


module.exports.generateToken = function (uid) {
  const oneHour = 1000 * 60 * 60;
  return jwt.sign({ uid, ext: Date.now() + oneHour }, "privateKey", { algorithm: "HS256" });
}

module.exports.decodeToken = async function (token) {
  const decodedToken = await jwt.decode(token, { complete: true });

  return decodedToken["payload"];
}

// export async function verifyToken(token: string): Promise<boolean> {
//   try {
//     await jwt.verify(token, privateKey);
//   } catch (err) {
//     console.error("Invalid token!!!", err);
//     return false;
//   }

//   return true;
// }