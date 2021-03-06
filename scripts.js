function isLoading(loading, idElement) {
    if (loading) {
        $(idElement).wrap("<div class='loader'></div>");
    } else {
        $(idElement).unwrap();
    }
}

function makeQuote(numItem, item) {
    let active = "";
    if (!numItem) {
        active = "active";
    }
    $("#makeQoute").append(`
    <div class="carousel-item ${active} px-5">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-12 col-sm-4 d-flex justify-content-sm-end justify-content-center ">
        <img src="${item.pic_url}" class="rounded-circle carousel-img" alt="...">
      </div>
      <div class="col pr-5 mr-4 pt-5 pt-sm-0">
        <p class="font-italic"> &lsaquo;&lsaquo;${item.text}&rsaquo;&rsaquo;</p>
        <h6 class="font-weight-bold m-0 mb-1">Person Name</h6>
        <p class="font-italic m-0">weather presenter</p>
      </div>
    </div>
  </div>
    `);
}

function quote() {
    $.ajax({
        dataType: "json",
        beforeSend: isLoading(true, "#makeQoute"),
        contentType: "application/json",
        url: `https://smileschool-api.hbtn.info/quotes`,
        success: function (result) {
            $("#makeQoute").empty();
            isLoading(false, "#makeQoute");
            result.forEach((item, i) => {
                makeQuote(i, item);
            });
        },
    });
}

$(document).ready(function () {
    quote();
});
