import React,{useState} from "react";

const ImgTest = ({  el, i }) => {


  return (
    <>
      <div className="col col-sm-6 cardViwersBord">
        <h1 className={`titleCardS titleCardS${i}`} >{el.scetion}</h1>
        <div className={`imgShadowCard imgShadowCard${i}`} style={{ "backgroundImage": `url(${el.img})` }} />  
        <div className="textCard">
          <div className={`titleCard titleCard${i}`}>
          <div>
            <h3 >{el.title}</h3>
            <p>{el.par}</p>
            </div>
            <a href="#" style={{ "color": "#06c" }}>More infos <i class="fas fa-chevron-right"></i></a>
            <br/>
            <a href="#" style={{"color":"#06c"}}>Buy Now <i class="fas fa-chevron-right"></i></a>
           </div>
          <img className={`imgCardIndex${i}`} width="100%" src={el.img} alt={el.title} />
        </div>
      </div>
    </>
  );
};

export default ImgTest;
