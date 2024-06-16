using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using SuatAn;

namespace Quanlyhoso
{
    public partial class api : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string action = Request["action"];
            switch (action)
            {

                case "DANG_NHAP":
                case "DANH_SACH_MON_HOC":
                    xu_ly(action);
                    break;
            }
        }

        void xu_ly(string action)
        {
            SqlServer db = new SqlServer();
            SqlCommand cm = db.GetCmd("SP_HO_SO", action); //tạo cm với "SP_Company" và @action từ method GetCmd của db
            switch (action)
            {
               
                case "DANG_NHAP":
                    cm.Parameters.Add("@ten_tai_khoan", SqlDbType.NVarChar, 50).Value = Request["TEN_TAI_KHOAN"];
                    cm.Parameters.Add("@matkhau", SqlDbType.NVarChar, 50).Value = Request["MAT_KHAU"];
                    break;
                case "DANH_SACH_MON_HOC":
                    break;
            }
            string json = (string)db.Scalar(cm); //thuc thi SqlCommand cm này để thu về json
            Response.Write(json); //trả json về trình duyệt
        }
    }
}