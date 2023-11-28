

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import './portal.css';
import png from './Icon/news.png'

const API_KEY = "856d756e046f491ba864b63555c39808";
const url = "https://newsapi.org/v2/everything?q=";

function NewsCardTemplate({ article }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={article.urlToImage} alt="news-image" id="news-img" />
      </div>
      <div className="card-content">
        <h3 id="news-title">{article.title}</h3>
        <h6 className="news-source" id="news-source">
          {`${article.source.name} - ${new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })}`}
        </h6>
        <p className="news-desc" id="news-desc">{article.description}</p>
      </div>
    </div>
  );
}

function Portal() {
  useEffect(() => {
    const searchButton = document.getElementById("search-button");
    const searchText = document.getElementById('search-text');

    searchButton.addEventListener('click', () => {
      const query = searchText.value;
      if (!query) return;
      fetchNews(query);

      curSelectedNav?.classList.remove('active');
      curSelectedNav = null;
    });

    // Initial fetch
    fetchNews("India");
  }, []);

  function reload() {
    window.location.reload();
  }

  async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
  }

  function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");

    // Clear previous content
    cardsContainer.innerHTML = "";

    // Iterate over articles and create card elements
    articles.forEach((article) => {
      if (!article.urlToImage) return;

      // Render the NewsCardTemplate component using ReactDOM.render
      const cardElement = document.createElement('div');
      ReactDOM.render(<NewsCardTemplate key={article.url} article={article} />, cardElement);
      
      // Append the resulting node
      cardsContainer.appendChild(cardElement.firstChild);
    });
  }

  let curSelectedNav = null;

  function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove('active');
    curSelectedNav = navItem;
    curSelectedNav.classList.add('active');
  }

  return (
    <div>
      <nav>
        <div className="main-nav container flex">
          <a href="#" className="company-logo" onClick={reload}><img src={png} alt="company logo" /></a>
          <div className="nav-links">
            <ul className="flex">
              <li className="hover-link nav-item" id="ipl" onClick={() => onNavItemClick('ipl')}>IPL</li>
              <li className="hover-link nav-item" id="finance" onClick={() => onNavItemClick('finance')}>finance</li>
              <li className="hover-link nav-item" id="politics" onClick={() => onNavItemClick('politics')}>politics</li>
            </ul>
          </div>
          <div className="search-bar flex">
            <input type="text" className="news-input" id="search-text" placeholder="search news" />
            <button className="search-button" id="search-button">search</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="cards-container container flex" id="cards-container" />
      </main>
    </div>
  );
}

export default Portal;





// import React, { useEffect, useState } from 'react';

// import './portal.css';
// // import NewsCardTemplate from './NewsCardTemplate';

// const API_KEY = "856d756e046f491ba864b63555c39808";
// const url = "https://newsapi.org/v2/everything?q=";

// function NewsCardTemplate() {
//   return (
//     <div className="card">
//       <div className="card-header">
//         <img src="https://via.placeholder.com/400x200" alt="news-image" id="news-img" />
//       </div>
//       <div className="card-content">
//         <h3 id="news-title">this is the title</h3>
//         <h6 className="news-source" id="news-source">end gadget 26/08/2023</h6>
//         <p className="news-desc" id="news-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, totam. Sequi, ipsum. Ea dolorem doloribus cumque, magni harum velit, ullam, nemo corrupti consequuntur mollitia voluptates porro id. Impedit, voluptatibus cumque!</p>
//       </div>
//     </div>
//   );
// }


// function Portal() {
//   useEffect(() => {
//     const searchButton = document.getElementById("search-button");
//     const searchText = document.getElementById('search-text');

//     searchButton.addEventListener('click', () => {
//       const query = searchText.value;
//       if (!query) return;
//       fetchNews(query);

//       curSelectedNav?.classList.remove('active');
//       curSelectedNav = null;
//     });

//     // Initial fetch
//     fetchNews("India");
//   }, []);

//   function reload() {
//     window.location.reload();
//   }

//   async function fetchNews(query) {
//     const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     const data = await res.json();
//     bindData(data.articles);
//   }

//   function bindData(articles) {
//     const cardsContainer = document.getElementById("cards-container");
//     // const newsCardTemplate = document.getElementById("template-news-card");

//     // cardsContainer.innerHTML = "";

//     articles.forEach((article) => {
//       if (!article.urlToImage) return;

//       // const newsCardTemplate = new NewsCardTemplate();
//       const cardClone = <NewsCardTemplate />;

//       fillDataInCard(cardClone, article);
//       cardsContainer.appendChild(cardClone);
//     });
//   }

//   function fillDataInCard(cardClone, article) {
//     // const newsImg = cardClone.querySelector('#news-img');
//     // const newsTitle = cardClone.querySelector('#news-title');
//     // const newsSource = cardClone.querySelector('#news-source');
//     // const newsDesc = cardClone.querySelector('#news-desc');

//     const newsImg = cardClone.props.children[0].props.children.props;
//     const newsTitle = cardClone.props.children[1].props.children.props;
//     const newsSource = cardClone.props.children[1].props.children.props;
//     const newsDesc = cardClone.props.children[1].props.children.props;


//     newsImg.src = article.urlToImage;
//     newsTitle.children = article.title;
//     newsDesc.children = article.description;

//     const date = new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/jakarta" });

//     newsSource.innerHTML = `${article.source.name} - ${date}`;

//     // cardClone.firstElementChild.addEventListener("click", () => {
//     //   window.open(article.url, "_blank");
//     cardClone.props.children[0].props.children.props.onClick = () => {
//       window.open(article.url, "_blank")
//     };
//   }

//   let curSelectedNav = null;

//   function onNavItemClick(id) {
//     fetchNews(id);
//     const navItem = document.getElementById(id);
//     curSelectedNav?.classList.remove('active');
//     curSelectedNav = navItem;
//     curSelectedNav.classList.add('active');
//   }

//   return (
//     <div>
//       {/* <h1>helloo</h1> */}
//       <nav>
// <div className="main-nav container flex">
//     <a href="#" className="company-logo" onclick="reload()"><img src="./assests/checked.png" alt="company logo"></img>
//     </a>
//     <div className="nav-links">
//         <ul className="flex">
//             <li className="hover-link nav-item" id="ipl" onClick="onNavItemClick('ipl')">IPL</li>
//             <li className="hover-link nav-item" id="finance" onClick="onNavItemClick('finance')">finance</li>
//             <li className="hover-link nav-item" id="politics" onClick="onNavItemClick('politics')">politics</li>
//         </ul>
//     </div>

//     <div className="search-bar flex">
//         <input type="text" className="news-input" id="search-text" placeholder="search news"></input>
//         <button className="search-button" id="search-button">search</button>
//     </div>
// </div>
//     </nav>


//     <main>
//         <div className="cards-container container flex" id="cards-container" >
            

//         </div>
//     </main>

//     <template id="template-news-card">
//         <div className="card">
//             <div className="card-header">
//                 <img src="https://via.placeholder.com/400x200" alt="news-image" id="news-img"></img>
//             </div>
//             <div className="card-content">
//                 <h3 id="news-title">this is the title</h3>
//                 <h6 class="news-source" id="news-source">end gadget 26/08/2023</h6>
//                 <p className="news-desc" id="news-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, totam. Sequi, ipsum. Ea dolorem doloribus cumque, magni harum velit, ullam, nemo corrupti consequuntur mollitia voluptates porro id. Impedit, voluptatibus cumque!</p>
//             </div>
//         </div>
//     </template>
    
//     </div>
//   );
// }


// export default Portal


// 
