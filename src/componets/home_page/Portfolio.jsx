import React, { useState } from 'react';
// import './Portfolio.css'; // Assuming you have a CSS file for styling

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Array to represent portfolio items
  const portfolioItems = [
    { id: 1, category: 'uiux', title: 'HappyMart – Your One-Stop Online Shop', description: ' Explore a diverse selection of products at HappyMart. Enjoy free shipping, exclusive promotions, and 24/7 customer support', imgSrc: 'img/Screenshot_2.png', link:'https://rahulvankar.github.io/HappyMart/' },
    { id: 6, category: 'branding', title: 'Add To Card', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.', imgSrc: 'img/Screenshot_4.png', link:'https://addtocard.vercel.app/'},
    { id: 3, category: 'web', title: 'BrunchFood: Delicious Recipes for Every Meal', description: 'Discover mouthwatering brunch recipes with easy-to-follow instructions, perfect for any time of the day', imgSrc: 'img/BrunchFood.png', link:'https://rahulvankar.github.io/BrunchFood/' },
    { id: 6, category: 'branding', title: 'Age Calculater', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.', imgSrc: 'img/Screenshot_6.png', link:'https://age-calculater-kappa.vercel.app/'},
    { id: 4, category: 'web', title: 'Bubble Game', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.', imgSrc: 'img/Screenshot_1.png', link:'https://bubble-game-wzc9.vercel.app/'},
    { id: 5, category: 'uiux', title: 'Quiz App', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.', imgSrc: 'img/Screenshot_3.png', link:'https://quiz-app-eight-omega-51.vercel.app/'},
    { id: 2, category: 'web', title: 'EMS Project', description: 'Create dynamic React apps with responsive designs that adapt across devices using modern front-end technologies', imgSrc: 'img/Screenshot_5.png', link:'https://ems-project-pi.vercel.app/' },
  ];

  // Function to handle filter button click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2 className="heading">My Projects</h2>
        <span>What I will do for you</span>
      </div>

      <div className="filter-buttons text-center">
        <button 
          className={`button  text-lg px-2 border border-gray-500 rounded-md m-2 ${activeFilter === 'all' ? 'mixitup-control-active' : ''}`} 
          onClick={() => handleFilterClick('all')}
        >
          All Work
        </button>
        <button 
          className={`button text-lg rounded-md m-2 px-2 border border-gray-500 ${activeFilter === 'web' ? 'mixitup-control-active' : ''}`} 
          onClick={() => handleFilterClick('web')}
        >
          React js Projects
        </button>
        <button 
          className={`button text-lg rounded-md m-2 px-2 border border-gray-500  ${activeFilter === 'uiux' ? 'mixitup-control-active' : ''}`} 
          onClick={() => handleFilterClick('uiux')}
        >
          Javascript Projects
        </button>
        <button 
          className={`button text-lg rounded-md m-2 px-2 border border-gray-500 ${activeFilter === 'branding' ? 'mixitup-control-active' : ''}`} 
          onClick={() => handleFilterClick('branding')}
        >
          Web Design Projects
          </button>
      </div>

      <div className="portfolio-gallery">
        {portfolioItems
          .filter(item => activeFilter === 'all' || item.category === activeFilter)
          .map(item => (
            <div key={item.id} className={`portfolio-box mix ${item.category}`}>
              <h3 className='text-center'>{item.title}</h3> 
              <div className='flex mt-2 gap-2'>
              {/* <div className="portfolio-content w-[50%]">
                <p>{item.description}</p>
                <a href={item.link} className="readMore" target='_blank'  rel="noopener noreferrer">Explore More</a>
              </div> */}
              <div className="portfolio-img w-[50%]">
              <a href={item.link} target='_blank'  rel="noopener noreferrer">
                <img src={item.imgSrc} alt={item.title} />
                </a>
              </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
