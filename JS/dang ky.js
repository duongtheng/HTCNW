$(document).ready(function() {
    var i = 1;
    $("#myBtn").click(function() {
        $("#myModal").modal();
    });
    //KTMa
    function KTMa() {
        var re = /^[0-9]{10}$/;
        if ($("#txtMa").val() == "") {
            $("#tbMa").html("Bắt buộc nhập!");
            return false;
        }
        if (!re.test($("#txtMa").val())) {
            $("#tbMa").html("Phải nhập đủ và đúng định dạng!");
            return false;
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#txtMa").blur(KTMa);
    //KTTen
    function KTTen() {
        var re = /[A-Z]/;
        if ($("#txtTen").val() == "") {
            $("#tbTen").html("Bắt buộc nhập!");
            return false;
        }
        if (!re.test($("#txtTen").val())) {
            $("#tbTen").html("Tên phải nhập chữ hoa!");
            return false;
        }
        $("#tbTen").html("*");
        return true;
    }
    $("#txtTen").blur(KTTen);
    //KTNgay
    function KTNgay() {
        var day = new Date($("#txtNgay").val());
        var today = new Date();
        if ($("#txtNgay").val() == "") {
            $("#tbNgay").html("Bắt buộc nhập!");
            return false;
        }
        today.setDate(today.getDate() + 7);
        if (day < today) {
            $("#tbNgay").html("Phải sau ngày hiện hành 7 ngày !");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    }
    $("#txtNgay").blur(KTNgay);
    //KTEmail
    function KTEmail() {
        var re = /^[a-zA-Z0-9]+\@iuh.edu\.vn$/;
        if ($("#txtEmail").val() == "") {
            $("#tbEmail").html("*Bắt buộc nhập!");
            return false;
        }
        if (!re.test($("#txtEmail").val())) {
            $("#tbEmail").html("Phải nhập đúng định dạng xx..x@iuh.edu.vn !");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(KTEmail);
    //KTSDT
    function KTSDT() {
        var re = /^[0-9]{4}\-[0-9]{3}\-[0-9]{3}/;
        if ($("#txtSDT").val() == "") {
            $("#tbSDT").html("*Bắt buộc nhập!");
            return false;
        }
        if (!re.test($("#txtSDT").val())) {
            $("#tbSDT").html("Phải nhập đúng định dạng 0000-000-000 !");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(KTSDT);
    //KTChung
    $("#saveBtn").click(function() {
        if (!KTEmail() || !KTMa() || !KTNgay() || !KTSDT() || !KTTen()) {
            $("#thongbao").html("Phải nhập đúng và đầy đủ thông tin!");
            return false;
        }
        var ma = $("#txtMa").val();
        var hoten = $("#txtTen").val();
        var ngay = $("#txtNgay").val();
        var email = $("#txtEmail").val();
        var sdt = $("#txtSDT").val();
        var them = "<tr><td>" + (i++) + "</td><td>" + ma + "</td><td>" + hoten + "</td><td>" + ngay + "</td><td>" + email + "</td><td>" + sdt + "</td></tr>"
        $("table tbody").append(them);
        $("#myModal").modal("hide");
    });
});