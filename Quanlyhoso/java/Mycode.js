$(document).ready(function () {
    const api = '/api.aspx';

    $('.btn-monhoc').click(function () {
        var data_gui_di = {
            action:'DANH_SACH_MON_HOC'
        }
        $.post(api, data_gui_di, function (data) {
            var json = JSON.parse(data);
            var noidung = "";
            if (json.ok == 1) { 
                noidung += `<table class="table table-hover"> `;
                noidung +=
                        `
        <thead>
            <tr>
                <th>STT</th>
                <th>Mã môn học</th>
                <th>Tên môn học</th>
                <th>Số tín chỉ </th>
            </tr>
        </thead> <tbody>`
                var stt = 0;
                for (var item of json.data) {
                    noidung += `
                <td>${++stt}</td>
                <td>${item.MA_MON_HOC}</td>
                <td>${item.TEN_MON_HOC}</td>
                <td>${item.TIN_CHI}</td>
            </tr >

            `
                    }
                    noidung += " </tbody> </table>";
                } else {
                    noidung = "Không có dữ liệu nhé !!";
                }
              $('.noi-dung-1').html(noidung);


            
        })
    });


});