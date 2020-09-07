import React from 'react';
import { useDispatch } from 'react-redux';
import NewMemeForm from './NewMemeForm';
/**Main component for app. Renders form and all memes
 * 
 * Props:
 * - None
 * 
 * State:
 * - store - if we useSelector
 * 
 * App -> MemeGenerator -> {NewMemeForm, Meme}
 */

function MemeGenerator(props) {
  const dispatch = useDispatch();

  function createMeme(formData) {
    dispatch({ 
      type: 'ADD',
      payload: formData
    })
  }

  function renderMemes() {

  }
  return (
    <main>
      <NewMemeForm createMeme={createMeme}/>
      {renderMemes()}
    </main>
  )
}

export default MemeGenerator;