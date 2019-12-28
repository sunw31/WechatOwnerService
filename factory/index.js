/**
 * 工厂类入口类
 * 
 * add by wuxw 2019-12-28
 * 
 */

//登录工厂类
const loginFactory = require("LoginFactory.js");
const userFactory = require("UserFactory.js");
const fileFactory = require("FileFactory.js");


module.exports = {
  login: loginFactory,
  user: userFactory,
  file: fileFactory

}