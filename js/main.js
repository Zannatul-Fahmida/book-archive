const searchBooks = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    //Clear search field data
    searchField.value = '';
    if (searchText == '') {
        alert('Please give a text to search');
    }
    else {
        const url = ` http://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayBooks(data.docs))
    }
}
const displayBooks = books => {
    const searchResult = document.getElementById('search-result');
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">${book.author_name[0]}</p>
              <p class="card-text">${book.first_publish_year}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}