/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package Connection;

/**
 *
 * @author Jordan
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author Jordan
 */
public class MyConnection {

    static final String JDBC_DRIVER_CLASS = "com.mysql.jdbc.Driver";
    static final String JDBC_URL = "jdbc:mysql://localhost/aed";
    static final String JDBC_USER = "root";
    static final String JDBC_PASS = "root";

    private Connection con;

    public MyConnection() {
        con = null;

        try {
            Class.forName(JDBC_DRIVER_CLASS);
            con = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASS);

        } catch (ClassNotFoundException ex) {
            System.err.println("Error al cargar el driver");
        } catch (SQLException ex) {
            Logger.getLogger(MyConnection.class.getName()).log(Level.SEVERE, null, ex);
        }
    }


    public MyConnection(String user, String password) {
        con = null;

        try {
            Class.forName(JDBC_DRIVER_CLASS);
            con = DriverManager.getConnection(JDBC_URL, user, password);

        } catch (ClassNotFoundException ex) {
            System.err.println("Error al cargar el driver");
        } catch (SQLException ex) {
            Logger.getLogger(MyConnection.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public Connection getCon() {
        return con;
    }

    
}
