import Link from 'next/link'
import { useReducer, useEffect, useState } from 'react';
import { useRouter } from 'next/router'


const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}


const Store = ({ item }) => {
    const [state, dispatch] = useReducer(reducer, initialState);



    useEffect(() => {

        console.log("store initialized")
        dispatch({ type: "increment" })

        return () => {
            console.log('leaving store')
            dispatch({ type: "decrement" })
        }

    }, []);
    return (
        <>
            Count: {state.count}
    
        </>
    )
}

export default Store;

//the begining of a new store state
