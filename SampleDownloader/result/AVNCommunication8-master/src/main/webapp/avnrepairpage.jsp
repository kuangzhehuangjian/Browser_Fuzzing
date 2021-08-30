<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Repair Page</title>
<style>
body{
background-color: #f9f8f7;
}
table {
	
    border-collapse: collapse;
    border-spacing: 0;
	width: 75%;
    border: 2px solid #ddd;
}
th, td {
    border: none;
    text-align: center;
    padding: 12px;
}
.button {
    background-color: #FFA500;
	button-align: center;
	border-radius:7px;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 14px 2px;
    cursor: pointer;
}
#home
{
text-align: right;
}
tr:nth-child(even){background-color: #f2f2f2}
</style>
</head>
<body>

<div id="home">
<a href="avnhomepage.jsp">Home</a>&nbsp;&nbsp;
<a href="avnlogin.jsp">Logout</a>
</div>
<h2 align="center">Repair Ticket Page</h2>
<input type="button" class="button" value="Create Repair Ticket">

<div style="overflow-x:auto;">
  <table>
    <tr>
      <th>Ticket ID</th>
      <th>Products</th>
      <th>Problem Description</th>
      <th>Contact</th>
      <th>Date</th>
      <th>Status</th>
    </tr>
       
  </table>
</div>

</body>
</html>