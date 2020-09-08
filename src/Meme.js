import React from 'react';
import './Meme.css'

function Meme({ removeMeme, memeDetails }){

  function handleClick(){
    removeMeme(memeDetails.id)
  }

  return(
    <div className= 'Meme'>
      <div className = 'Meme-container'>
        <img src={memeDetails.src} alt={memeDetails.src}></img>
        <p className='topText'>{memeDetails.topText}</p>
        <p className='bottomText'>{memeDetails.bottomText}</p>
      </div>
      <button onClick={handleClick}>Remove Meme</button>
    </div>
  )
}

export default Meme