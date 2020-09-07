import React, { useState } from 'react';


/**Renders form to add a meme to Redux store 
 * 
 * Props: 
 * - createMeme: parent fn
 * 
 * State:
 * - formData
*/
function NewMemeForm({ createMeme }) {
  const initialFormData = {
    id: '',
    src: '',
    topText: '',
    bottomText: ''
  }
  
  const [formData, setFormData] = useState(initialFormData);

  // function handleChange(evt) {
  //   const { name, value } = evt.target;
  //   setFormData( formData => ({
  //     ...formData,
  //     [name]: value,
  //   }));
  // }

  function handleSubmit(evt) {
    evt.preventDefault();
    createMeme(formData);
    setFormData(initialFormData);
  }

  return (

    <form onSubmit={handleSubmit}>

      {/* <label htmlFor='src'>Image URL:</label>
      <input name='src' value={formData.src} onChange={handleChange} /> */}
{/* 
      <label htmlFor='topText'>Top Text:</label>
      <input name='topText' value={formData.topText} onChange={handleChange} /> */}
{/* 
      <label htmlFor='bottomText'>Bottom Text::</label>
      <input name='bottomText' value={formData.bottomText} onChange={handleChange} />

      <button>Submit</button> */}
    </form>

  );
}

export default NewMemeForm;