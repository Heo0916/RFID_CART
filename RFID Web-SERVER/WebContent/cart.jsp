<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<html lang="en" dir="ltr"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<META HTTP-EQUIV="refresh" CONTENT="5">
<title>장바구니</title>
<style media="screen">
      * {padding: 0; margin: 0;}
      html, body {height: 100%;}
      #wrapper {z-index: -1; background-image: url('image/back.jpg'); overflow: auto; background-repeat: repeat; width: 100%; height: 100%; top:0; left:0; bottom: 0; right: 0; }
      nav {text-align: center; display: block; margin-left: 78%; margin-top: 2%; border-radius: 10px; width: 100px; height: 20px; padding: 5px 5px;}
      #main {border-radius: 100px; font-size: 24px; font-weight: bold; letter-spacing: 4px; padding: 10px 38px; text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.14); box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2); text-decoration: none; color: white;  background: #e81216;}
      #main:active {background: #B70000;}
      #title {margin: 20px auto 0; text-align: center; font-size: 30px; font-weight: bold;}
      #tbl_out {margin:15px auto; text-align: center;}
      #tbl {width: 90%; background: rgba(255, 255, 255, 0.5); margin: 0 auto;}
      #tbl, #tbl th , #tbl td{border-width: 1px 0; border-collapse: collapse; text-align: center; padding:10px 4px;}
      #tbl th{background-color: #DCDCDC; font-size: 1.1em; color: #000; border-width:1px 0;}
      #tbl td{border-bottom: 1px solid silver; padding: 12px 4px;}
    </style>

   
</head>
<body>
	 <div id="wrapper">
      <nav>
        <a href="main.jsp" id="main">메&nbsp;인</a>
      </nav>
       <div id="title"><p>물품&nbsp;목록</p></div>
       <table id="tbl">
        <tbody><tr>
          <th>No</th>
          <th>상품명</th>
          <th>상품번호</th>
          <th>수량</th>
          <th>금액</th>
        </tr>
        <%
                            int sum =0;
         					int total =0;
                            Connection con = null;
                            try {
                                //드라이버 호출, 커넥션 연결
                                Class.forName("org.mariadb.jdbc.Driver");
                                con = DriverManager.getConnection("jdbc:mariadb://192.168.41.97:3308/rfid","root","1234");
                         
                                //ResultSet : 쿼리문에 대한 반환값
                                ResultSet rs = null;
                         
                                
                         
                              
                    
                                String query = "select * from CA01";
                                PreparedStatement pstm = con.prepareStatement(query);
                         
                                rs = pstm.executeQuery();
             					int a =1;
             					
          						  while(rs.next()){          							           		
    							%>
        
        <tr>
          <td><%= a++%></td>
          <td><%= rs.getString("item") %></td>
          <td><%= rs.getString("tag")%></td>
          <td><%= rs.getInt("amount")%></td>
          <td><%= rs.getInt("price") %></td>
        </tr>
       <%
                           int aa = rs.getInt("amount");
                           int bb = rs.getInt("price");
                           sum += aa;
                           total += bb;
                           }
          						  %>
        <tr>
          
          <td colspan="3">합&nbsp&nbsp&nbsp&nbsp계</td>
          <td><%= sum%></td>
          <td><%= total %></td>
        </tr>
        <%
                            } catch (Exception e) {

                            	e.printStackTrace();

                            	} finally {

                            	if (con != null) {

                                try {

                                    con.close();

                                } catch (Exception e) {

                                    e.printStackTrace();

                                }
                            	}
                            	}
                            	
                        %>
        
      </table>
    </div>
</body>
</html>