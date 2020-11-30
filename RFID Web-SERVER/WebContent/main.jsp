<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en" dir="ltr">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>메인 페이지</title>
<style media="screen">
      * {padding: 0; margin: 0;}
      html, body {height: 100%;}
      #wrapper {z-index: -1; background-image: url('image/back.jpg'); background-repeat: repeat; width: 100%; height: 100%; top:0; left:0; bottom: 0; right: 0;}
      #out {height: 98%;}
      #in {display: inline-table; position: absolute; top: 30%; width: 90%;}
      #btn_group {display: table-cell; text-align: center; vertical-align: middle;}
      #btn_group a {color: white; text-decoration: none; font-weight: bold; font-size: 30px;}
      .btn {text-decoration: none; padding: 25px 80px; display: inline-block; position: relative; border-radius: 40px; text-shadow: 0 5px 0 rgba(0,0,0,0.15); box-shadow: 2px 8px 10px 0 rgba(0, 0, 0, 0.2); background: #ff5d39;}
      .btn.shop {margin: 0 10%;}
      .btn:active {background-color: #dd5840;}
    </style>
</head>
<body>

 <div id="wrapper">
      <div id="out">
        <div id="in">
          <div id="btn_group">
            <a href="store.html" class="btn shop"><img src="image/shop_white.png" width="100px"><br>SHOP</a>
            <a href="cart.jsp" class="btn cart"><img src="image/cart_white.png" width="100px"><br>CART</a>
          </div>
        </div>
      </div>
    </div>
</body>
</html>