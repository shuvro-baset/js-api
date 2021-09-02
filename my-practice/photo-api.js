const photoDiv = document.getElementById('photoDivContainer');

const fetchPhotoData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => console.log(data))
}
fetchPhotoData()

const showPhoto = (data) => {
    data.forEach(photo =>{
        
    })
}