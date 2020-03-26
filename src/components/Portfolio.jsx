import React from 'react';
import portfolioData from '../data/PortfolioData';
import PortfolioItem from './PorfolioItem';
import './Components.css'

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <h2>Portfolio</h2>
            <div className='portfolio'>
                    {portfolioData.map(portfolioItem => (
                            <div className='portfolioItem-container'>
                                <PortfolioItem 
                                    key={portfolioItem.id} 
                                    name={portfolioItem.name} 
                                    imageURL={portfolioItem.imageURL}
                                    description={portfolioItem.description}
                                    codeURL={portfolioItem.codeURL}
                                />
                            </div>
                    )
                    )}
            </div>
        </div>
    )
}

export default Portfolio