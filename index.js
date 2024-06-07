let loginopacity = 'no';

document.querySelector('.js-header-login').addEventListener('click',()=>{
    if(loginopacity === 'no'){
        let html = `
        <div class="login-side">
            <div class="buyer-tooltip">Buyer</div>
            <div class="seller-tooltip">Seller</div>
        </div>  
        `;
         document.querySelector('.js-loginopacity').innerHTML=html;
         loginopacity = 'yes';
    }else{
        let html = ` `;
        document.querySelector('.js-loginopacity').innerHTML=html;
        loginopacity = 'no';
    } 
});

