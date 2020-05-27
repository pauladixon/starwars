import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipPage.css';

const StarshipPage = (props) => {
  
  const starship = props.getStarship(props.match.params.idx);
  
  console.log(starship)
  return (
    <div className='starship-page'>
      {starship ?
        <section className='starship'>
        <div className='line'>Name: {starship.name}</div>
        <div className='line'>Model: {starship.model}</div>
        <Link to='/'>←</Link>
      </section>
        :
        <h3>Loading...</h3>
      }
    </div>
  );
};

export default StarshipPage;