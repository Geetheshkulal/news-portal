const template = document.createElement('template');
template.innerHTML = 
  <div className="card">
    <div className="card-header">
      <img src="https://via.placeholder.com/400x200" alt="news-image" id="news-img" />
    </div>
    <div className="card-content">
      <h3 id="news-title">this is the title</h3>
      <h6 className="news-source" id="news-source">end gadget 26/08/2023</h6>
      <p className="news-desc" id="news-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, totam. Sequi, ipsum. Ea dolorem doloribus cumque, magni harum velit, ullam, nemo corrupti consequuntur mollitia voluptates porro id. Impedit, voluptatibus cumque!</p>
    </div>
  </div>
;

class NewsCardTemplate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  cloneNode(deep) {
    return document.importNode(this.shadowRoot, deep);
  }
}

export default NewsCardTemplate;
