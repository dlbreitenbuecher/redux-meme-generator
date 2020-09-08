import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewMemeForm from './NewMemeForm';
import Meme from './Meme'
import { v4 as uuidv4 } from 'uuid';
/**Main component for app. Renders form and all memes
 * 
 * 
 * Props:
 * - None
 * 
 * State:
 * - store
 * 
 * App -> MemeGenerator -> {NewMemeForm, Meme}
 */

function MemeGenerator() {
  const dispatch = useDispatch();

  function createMeme(formData) {
    const formDataWithID = {...formData, id: uuidv4()}
    dispatch({ 
      type: 'ADD',
      payload: formDataWithID
    })
  }

  function removeMeme(id){
    dispatch({
      type: 'REMOVE',
      payload: id
    })
  }

  const renderedMemes = useSelector(store => store).map( memeDetail =>
    <Meme memeDetails={ memeDetail } removeMeme = {removeMeme} key={memeDetail.id}/>
  )

  return (
    <main>
      <NewMemeForm createMeme={createMeme}/>
      {renderedMemes}
    </main>
  )
} 

export default MemeGenerator;