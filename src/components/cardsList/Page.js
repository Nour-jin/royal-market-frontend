import React from 'react'
import "./slider-animations.css";
import "react-animated-slider/build/horizontal.css";

const Page = ({item, index}) => {
    return (
     <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
      >
        
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
        </section>
        
            </div>    
    )
}

export default Page
