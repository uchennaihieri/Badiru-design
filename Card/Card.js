import React from 'react';
import "./card.css";
import Loading from "../Loading/Loading";
import { Link } from 'react-router-dom';

const Card = ({cardItem}) => {
    if(!cardItem) { return <Loading /> }

    const filteredProjects = cardItem.map(item => {
        return (
            <div key={item.id} className="center card" >
                <img src={item.images[0]} alt={item.name} />
                <h2>
                    {/* maximum characters 20 words */}
                    {item.name}
                </h2>
                <Link to={`/products/${item.slug}`}>
                    <button className="center features">features</button>
                </Link>
            </div>
        )
    });
    
    return (
        <div className='services-container'>
            <div className="center services">
                {filteredProjects}
            </div>
        </div>
    )
}

export default Card
