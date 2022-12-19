export default class NewService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages(searchQuery = this.searchQuery) {
    let newData = null;
    this.searchQuery = searchQuery;
    try {
      const response = await fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=40&key=31977117-a9df314137c0f222799b85ecf`
      );
      newData = await response.json();
      this.incrementPage();
    } catch (error) {
      console.error(error);
    }
    return newData;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}