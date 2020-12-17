jQuery(document).ready(function($){

    const request = axios.get('http://csc225.mockable.io/consoles');
    request.then(function(response){
        const Productname = response.data;
        const ProductHtml = Productname.map(function(em){

            const { id, name: Productname  } = em;
    
            return `
    
                <div data-id="${id}" class="media my-4 hover-background-gray cursor-pointer">
                    <img src="https://cdn1.vectorstock.com/i/thumbs/97/00/game-console-neon-sign-vector-24509700.jpg" class="mr-3" alt="Photo of ${Productname}">
                    <div class="media-body">
                        <h5 class="mt-0">${Productname}</h5>
                   
                    </div>
                </div>
    
            `;
        }).join('');
    
        $('#Productname').html(ProductHtml);
        // console.log(response);
        // bindEvents();

    });
    // console.log('after the request');

    // function bindEvents(){
    //     jQuery('.media').on('click', function(){
    //         alert('I have been clicked');
    //     });
    // }

    jQuery('#Productname').on('click', '.media', function(){
        const id = $(this).attr('data-id');
        const ProductUrl = `http://csc225.mockable.io/consoles/${id}`;
        // $('#employee').html('Loading...');
        $('#Product').html('');
        $('#loading-animation').toggleClass('d-none');

        axios.get(ProductUrl).then(function(response){
            $('#loading-animation').toggleClass('d-none');
            const {id, name, price, country, releaseYear, image} = response.data;
            $('#Product').html(`
                <div class="card" style="width: 18rem;">
                <img src="${image}" class="card-img-top" alt="Photo of ${name}">
                <div class="card-body">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Product: ${name}</li>
                <li class="list-group-item">Price: ${price}</li>
                <li class="list-group-item">Country: ${country}</li>
                <li class="list-group-item">Release year: ${releaseYear}</li>
                
              </ul>
                
                       
                    </div>
             
                </div>
             
            `);
        }).catch(function(error){
            alert('error!!!');
        });
    });
    
    

    

    
});