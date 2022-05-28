function fetchImages(searchQuery, page = 1) {
    const url = 'https://pixabay.com/api/';
    const myKey = '25760251-3970e02ca371c5f8341f48ac2';
    const filter = 'image_type=photo&orientation=horizontal&per_page=12';

    return fetch(
        `${url}?key=${myKey}&q=${searchQuery}&${filter}&page=${page}`
    ).then(response => response.json());
}

export default fetchImages;