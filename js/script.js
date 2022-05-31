$('#search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data:{
            'apikey': 'a8b50f2d',
            's': $('#search-input').val()
        },
        success: function(result){
            if(result.Response == "True"){
                console.log(result);
                let movies = result.Search;
                $('#movie-list').empty(); 
                $.each(movies, function(i, data){
                    $('#movie-list').append(`<div class="col-md-4">
                    <div class="card mb-3">
                        <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">`+ data.Title +`</h5>
                            <p class="card-text">Type : `+ data.Type +`</p>
                            <p class="card-text"><b>Year : `+ data.Year +`</b></p>
                            <a href="#" class="btn btn-primary">`+ data.imdbID +`</a>
                        </div>
                        </div>
                    </div>`)
                });
            }else{
                console.log(result.Error);
                $('#movie-list').empty(); 

                $('#movie-list').html(`
                    <div class="col">
                        <h1 class=text-center>` + result.Error + `</h1>
                    </div>
                `)
            }
        }
    });

});

