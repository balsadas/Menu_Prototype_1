document.querySelectorAll('.image-container .imgg').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src =image.getAttribute('id');
        
        var baha = image.getAttribute('price_food');
        if( baha != 0 && baha != null ){
            document.querySelector('.popup-image price').innerHTML = baha +`m`;
        }else{
            document.querySelector('.popup-image price').innerHTML = '';
        }
        
        document.querySelector('.popup-image p').innerHTML = image.getAttribute('name');
    }
});

document.querySelector('.popupOnclick span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}
document.querySelector('.PopUpHide').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}