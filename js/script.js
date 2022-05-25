$('#search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data:{
            'apikey': 'a8b50f2d',
            's': $('#search-input').val()
        },
        success: function(data){
            if(data.Response == "True"){
                console.log(data);
                let d = data.search

                $.each(data, function(i, d){
                    $('#movie-list').append(`<div class="col-md-4">
                    <div class="card mb-3">
                        <img src="`+ data.Search.Poster +`" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">`+ data.totalResult +` <<< ini title</h5>
                            <p class="card-text">`+ data.totalResult +` Deskripsi</p>
                            <p class="card-text"><b>Harga : Rp. Harga</b></p>
                            <a href="#" class="btn btn-primary">Order Now</a>
                        </div>
                        </div>
                    </div>`)
                });
            }else{
                console.log(data.Error);

                $('#movie-list').html(`
                    <div class="col">
                        <h1 class=text-center>` + data.Error + `</h1>
                    </div>
                `)
            }
        }
    });

});

