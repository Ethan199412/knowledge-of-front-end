import { createStore } from 'redux';

const defaultState = {
    name: 'Ethan',
    value: 30
}

function reducer(state = defaultState, action) {
    console.log('[p0.2] action', action)
    const { data, type } = action
    switch (type) {
        case 'changeName':
            state.name += data
            break
        case 'changeValue':
            state.value += data
            break
    }

    return JSON.parse(JSON.stringify(state));
}



export const store = createStore(reducer);