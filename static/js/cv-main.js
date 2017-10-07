var color_x = '';
function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length === 1) parts[i] = '0' + parts[i];
    }
    color_x = '#' + parts.join('');
}

$(document).ready(function () {
    // event for color option
   $(".color").click(function () {
       $(".color.active").removeClass("active");
       $(this).addClass("active");
       var color = $(this).css("background-color");
       hexc(color);
       // $("#cv-body#group-header").css("background-color", color_x);
       // alert(color);
   }).mouseover(function () {
       $(".fa-check:before").css("content", "\f00c");
   });

   // event to change font family in cv-document-root cv-body
    $("#font-selector").change(function () {
       $("#cv-body").css("font-family", $(this).val());
    });

    // event to change font-size in cv-document-root cv-body
    $(".fontsize").click(function () {
        $(".fontsize.active").removeClass("active");
        $(this).addClass("active");
        $("#cv-description-objective").css("font-size", $(this).css("font-size"));
        $("#cv-profile-phone-wrapper").css("font-size", $(this).css("font-size"));
        $("#cv-profile-email-wrapper").css("font-size", $(this).css("font-size"));
        $("#cv-profile-address-wrapper").css("font-size", $(this).css("font-size"));
        $(".cv-education-time").css("font-size", $(this).css("font-size"));
        $(".cv-education-details").css("font-size", $(this).css("font-size"));
        $(".cv-activity-time").css("font-size", $(this).css("font-size"));
        $(".cv-activity-details").css("font-size", $(this).css("font-size"));
        $(".cv-additional-information-details").css("font-size", $(this).css("font-size"));
        $(".cv-experience-time").css("font-size", $(this).css("font-size"));
        $(".cv-experience-details").css("font-size", $(this).css("font-size"));
        $("#certification-table").css("font-size", $(this).css("font-size"));
        $("#award-table").css("font-size", $(this).css("font-size"));
        $("#interest-table").css("font-size", $(this).css("font-size"));
        $("#skill-rate-table").css("font-size", $(this).css("font-size"));
    });

    // event to change distance the lines

});
