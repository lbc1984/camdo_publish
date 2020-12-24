var urlAutoCompleteDuocPham;
var urlGetGiaBan;
var urlGetHangTon;
var urlAutoCompleteTenLieuDuocPham;
var urlAutoCompleteKhachHang;
var urlAutoCompleteKhachHang_DoiTac;
var urlAutoCompleteGiaNhapNgayTruoc;
var urlAutoCompleteDanhMucLieuThuoc;

var AutoComplete = function () {
    /**
     * Hàm autoComplete
     * @param {string} controlSanPham - Control tên sản phẩm
     * @param {string} controlMaSanPham - Control mã sản phẩm
     * @param { string} controlFocus - Control nhận focus khi đã thành công
     */
    this.Search = function (controlSanPham, controlMaSanPham, controlFocus) {
        var urlPost = "/Customer/AutoComplete";

        $("#" + controlSanPham).autocomplete({
            minLength: 1,
            autoFocus: true,
            source: function (request, response) {
                $.post(urlPost, { Prefix: request.term }, function (data) {
                    response($.map(data, function (item) {
                        return item;
                    }));
                });
            },
            select: function (event, ui) {
                $("")
            }
        });
    };

    return this;
};