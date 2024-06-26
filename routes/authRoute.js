const router = require("express").Router()
const {get_signup, get_login, post_signup, post_login, logout} = require("../controllers/authController")

router.get("/signup", get_signup)
//router.get("/signup", get_signup): Xử lý yêu cầu GET đến đường dẫn 
//"/signup" bằng cách gọi hàm get_signup từ authController.
router.get("/login", get_login)
router.post("/signup", post_signup)
router.post("/login", post_login)
router.get("/logout", logout)


module.exports = router
// Xuất router để có thể sử dụng nó trong file khác