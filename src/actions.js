//Add Redux Thunks

//import io from 'socket.io-client'
//test socket connection
/*
export const connectToSocket = () = dispatch => {
  dispatch({type: "CONNECTING"})

  let socket = io('/message-socket')

  socket.on('connect', () =>
    dispatch({type:"CONNECTED", id:socket.id})
  )

  socket.on('message', (message, user) =>
      dispatch({type: "NEW_MESSAGE", message, user})
    )
}
*/


import fetch from 'isomorphic-fetch'

const parseResponse = response => response.json()

const logError = error => console.error(error)

const fetchThenDispatch = (dispatch, url, method, body) =>
    fetch(url, {method, body, headers: { 'Content-Type': 'application/json' }})
        .then(parseResponse)
        .then(dispatch)
        .catch(logError)

export const addColor = (title, color) => dispatch =>
    fetchThenDispatch(
        dispatch,
        '/api/colors',
        'POST',
        JSON.stringify({title, color})
    )

export const removeColor = id => dispatch =>
    fetchThenDispatch(
        dispatch,
        `/api/color/${id}`,
        'DELETE'
    )

export const rateColor = (id, rating) => dispatch =>
    fetchThenDispatch(
        dispatch,
        `/api/color/${id}`,
        'PUT',
        JSON.stringify({rating})
    )
