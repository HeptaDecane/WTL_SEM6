<%@ page import="java.security.MessageDigest" %>
<%@ page import="java.nio.charset.StandardCharsets" %>
<%@ page import="java.util.Base64" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.Statement" %>
<%@ page import="java.sql.ResultSet" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    final String dbUsername = "31165";
    final String dbPassword = "31165@mysql";
    final String url = "jdbc:mysql://localhost:3306/exam_cell";
    Connection connection = null;
    Statement statement = null;
    String query="";
    ResultSet resultSet = null;
    try {
        Class.forName("com.mysql.jdbc.Driver");
        connection = DriverManager.getConnection(url,dbUsername,dbPassword);
        statement = connection.createStatement();
    }catch (Exception e){
        e.printStackTrace();
    }
%>
<%
    String username = request.getParameter("username");
    String password = request.getParameter("password");

    MessageDigest sha256 = MessageDigest.getInstance("SHA-256");
    byte[] hash = sha256.digest(password.getBytes(StandardCharsets.UTF_8));
    String encoded = Base64.getEncoder().encodeToString(hash);

    boolean found=false;
    query = String.format("select type from user where username='%s' and password='%s'",username,encoded);
    try{
        resultSet = statement.executeQuery(query);
        if(resultSet.next()) {
            query = resultSet.getString("type");
            if(query.equals("student")){
%>
                <%@include file="student_home.html" %>
<%
            }
            else if(query.equals("staff")){
%>
                <%@include file="staff_home.html" %>
<%
            }
            else{
                out.print("Welcome Admin");
            }
        }
        else{
            out.println("Invalid password try again");
        }
    } catch (Exception e){
        e.printStackTrace();
    }
%>