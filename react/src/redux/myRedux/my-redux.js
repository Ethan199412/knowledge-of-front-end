const deepCopy = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

const createStore = (() => {
    let store = null
    let state = {}
    const listeners = []

    let currentReducer = (state, action) => {
        return state
    }

    const getState = () => {
        return JSON.parse(JSON.stringify(state))
    }

    const dispatch = (action) => {
        const preState = JSON.parse(JSON.stringify(state))
        state = currentReducer(deepCopy(state), action)

        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i]
            listener(preState, deepCopy(state))
        }
    }

    const subscribe = (fn) => {
        listeners.push(fn)

        const unSubscibe = () => {
            const index = listeners.indexOf(fn)
            listeners.splice(index, 1)
        }
        return unSubscibe
    }

    const replaceReducer = (reducer) => {
        currentReducer = reducer
    }

    const init = (defaultState) => {
        state = defaultState || {}
        //runAllListeners()
    }

    const runAllListeners = () => {
        console.log('[p0.4] listeners', listeners)
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i]
            listener(preState, deepCopy(state))
        }
    }

    // 这个函数是 createStore
    return (reducer, defaultState) => {
        if (!store) {
            store = {
                getState,
                dispatch,
                subscribe,
                replaceReducer
            }
        }
        replaceReducer(reducer)
        init(defaultState)

        console.log('[p0.3] state', store.getState())
        return store
    }
})()

const defaultState = {
    name: 'Ethan',
    age: 30
}

function reducer(state, action) {
    console.log('[p0.2] action', action)
    const { data, type } = action
    const newState = {}
    switch (type) {
        case 'changeName':
            newState.name = state.name + data
            break
        case 'changeAge':
            newState.age = state.age + data
            break
    }

    return { ...state, ...newState };
}

const store = createStore(reducer, defaultState)

export default store