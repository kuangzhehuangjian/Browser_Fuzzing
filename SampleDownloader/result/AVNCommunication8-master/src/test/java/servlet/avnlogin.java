package servlet;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class avnlogin extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {
	        response.setContentType("text/html;charset=UTF-8");
	        	        
	        String username = request.getParameter("username");
	        String userpassword = request.getParameter("userpassword");
	       	        
	        if(username.contentEquals(userpassword))
	        {
	        	System.out.println("Login Unit Test Passed for valid user");
	            RequestDispatcher rs = request.getRequestDispatcher("/avnhomepage.jsp");
	            rs.forward(request, response);
	        }
	        else
	        {
	        	 System.out.println("Login Unit Test Passed for invalid user");
	        	 RequestDispatcher rs = request.getRequestDispatcher("/error.jsp");
	             rs.forward(request, response);
	        }
	    }  
}
