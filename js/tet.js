function searchMovie(){
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
                    $('#movie-list').append(`<div class="col-md-2">
                    
                            <div class="col-16 pb-md-2">
                                <a href="" class="card bg-dark text-white shadow-sm border-0">
                                    <img class="card-img" style="opacity: .50;  ;
                                    height: 15vw;
                                    object-fit: cover" src="`+ data.Poster +`" alt="Card image">
                                    <span class="badge badge-dark font-weight-normal">`+ data.Title +`</span>
                                    <span class="badge badge-dark font-weight-normal">`+ data.Year +`</span>
                                    <div class="card-img-overlay d-flex flex-column align-items-start">
                                        <h4 class="card-title"></h4>
                                        <p class="card-text mt-auto"></p>
    
                                    </div>
                                </a>
                            </div>
                        
                    `)
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
}


function searchMovieYear(){
       
}



$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function(e){
    if(e.keyCode === 13){
        searchMovie();
    }
})