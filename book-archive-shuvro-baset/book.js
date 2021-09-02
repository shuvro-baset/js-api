// define a variable called searchText
const searchText = document.getElementById('searchInput');
// define a variable called errorDiv
const errorDiv = document.getElementById('error-message');
// define a variable called booksDivContainer
const booksDivContainer = document.getElementById('bookDiv');
// define a variable called resultFoundText
const resultFoundText = document.getElementById('resultFound');
// spinner div 
const spinnerDiv = document.getElementById('spinner-div');
// onclick function when search button clicked
const loadBook = () => {
    // error handling when user clicked search button without any search text.
    if (searchText.value === "") {
        errorDiv.innerText = "Search field cannot be empty.";
        return;
    }
    // removing content
    errorDiv.innerText = " ";
    resultFoundText.innerText = " ";
    booksDivContainer.innerHTML=" ";
    // dynamic url
    const url = `https://openlibrary.org/search.json?q=${searchText.value}`;
    // empty search text
    searchText.value = '';
    // showing spinner
    spinnerDiv.classList.remove('d-none');
    // fetching api data
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            // showing total results found.
            if(data.numFound!==0){
                resultFoundText.innerText = `Total Books found: ${data.numFound}`
            }
            // hide spinner
            spinnerDiv.classList.add('d-none');
            // calling showBook function for showing the books result.
            showBook(data.docs.slice(0,15));
    });
};

// showBook function for showing the books in to the html page.
const showBook = (books) => {
    // error handling, when no books found
    if(books.length === 0) {
        errorDiv.innerText = 'No books found, Please enter valid book name.';
    }
    else{
        errorDiv.innerText = '';
    }
    // show all books using forEach method  
    books.forEach(book => {
        // create a new div
        const div = document.createElement('div');
        // dynamic image url source link
        let imgSrc = ''
        if(book.cover_i===undefined){
            imgSrc = 'image/img_not_found.png'
        }
        else{
            imgSrc = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        }
        // getting book Name
        let bookTitle = (book.title===undefined) ? 'book name not found' : book.title;
        // getting author name
        let authorName = (book.author_name===undefined) ? 'Author Not Found' : book.author_name[0];
        // getting publisher name
        let publisherName = (book.publisher===undefined) ? 'publisher name not found.' : book.publisher[0];
        // getting first Publish Year
        let firstPublishYear = (book.first_publish_year===undefined) ? 'published year not found.' : book.first_publish_year;
        div.classList.add('col-md-4')
        // making books card.
        div.innerHTML = `
                <div class="card shadow border rounded-5 my-2">
                    <div class="p-3 text-center">
                        <img src="${imgSrc}" class='img-fluid' alt="image not found">
                    </div>
                    <div class="card-body">
                        <div class="card-title">
                            <h6> ${bookTitle}</h6>
                            <h6> <b>Author Name:</b> ${authorName}</h6>
                            <h6> <b>Publisher Name:</b> ${publisherName}</h6>
                            <h6> <b>First Published Year:</b> ${firstPublishYear}</h6>
                        </div>
                    </div>
                </div>
        `;
        // append the book div into container div
        booksDivContainer.appendChild(div);
    });
}
