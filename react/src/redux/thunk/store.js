import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const defaultState = {
    name: 'Ethan',
    value: 30
}

function reducer(state = defaultState, action) {
    console.log('[p0.2] action', action)
    const { data, type } = action
    const newState = {}
    switch (type) {
        case 'changeName':
            newState.name = state.name + data
            break
        case 'changeValue':
            newState.value = state.value + data
            break
    }

    return { ...state, ...newState };
}



export const store = createStore(reducer, applyMiddleware(thunk));