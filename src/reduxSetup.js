/**reducer fn for Redux store
 * 
 * State:
 * - [{id, src, topText, bottomText},...]
 */
function memeReducer(state=[], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload ];

    case 'REMOVE':
      return state.filter( meme => (
        meme.id !== action.payload
      ));

    default:
      return state;
  }
}


export default memeReducer;