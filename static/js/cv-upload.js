$(document).ready(function () {
   $("#cv-profile-avatar").click(function () {
       swal({
          title: "Thay đổi ảnh đại diện ở đây?",
          html:
              '<input type="button" value="choose file" onclick="openFile(event)">' +
              '<input type="button" value="choose file" onclick="openFile(event)">'
       });
   });
});

function openFile(event) {
    var input = event.target();
    var reader = new FileReader();
    reader.onload = function () {
        var dataUrl = reader.result;
        var output = document.getElementById("cv-profile-avatar");
        output.src = dataUrl;
    };
    reader.readAsDataURL(input.files[0]);
}
