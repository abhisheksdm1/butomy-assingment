"use client"
import React from 'react';
import store from './store'
import { Provider } from 'react-redux';


export default function ReduxProvider({children}) {
  return (
    <div>
        <Provider store={store}>{children}</Provider>      
    </div>
  )
}
