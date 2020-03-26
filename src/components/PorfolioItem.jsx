import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = props => {
    console.log(props, ' is props in PortfolioItem')

    const linkToCode = () => {
        window.open(props.codeURL);
    }

    return (
        <div className='portfolioItem-box'>
            <h1>{props.name}</h1>
            {/* <img src={props.imageURL} alt='screenshot of project'></img> */}
            <p>{props.description}</p>
            <button onClick={linkToCode}>see my code</button>
            <button>see deployed project</button>
        </div>
    )
}

export default PortfolioItem