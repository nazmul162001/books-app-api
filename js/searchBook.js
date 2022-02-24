const searchBook = () => {
  // console.log('book');
  const getInputId = document.getElementById('input-field');
  const searchText = getInputId.value;
  // console.log(searchText);
// empty value 
  getInputId.value = '';
  // get fetch url 
  const url = `https://openlibrary.org/search.json?q=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data => displaySearchResult(data.docs));
}


const displaySearchResult = book => {
  console.log(book);
   const searchResult = document.getElementById('search-result');
   book.forEach(books => {
    //  console.log(books);
    const div = document.createElement('div');
    div.classList.add('col-lg-4', 'mb-5');
    div.innerHTML = `
      <div class="card" style="width: 18rem;">
          <img height="300px" src="https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Authors Name: ${books.author_name[0]}</h5>
                <p class="card-text">Published Date: ${books.publish_date[0]}</p>
                <p class="card-text">Published Place: ${books.publish_place[0]}</p>
                <p class="card-text">Subject: ${books.subject[0]}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
      </div>
    `;
    searchResult.appendChild(div);
   })
}
