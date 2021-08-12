import React from 'react'
import { Provider } from 'react-redux'

import Player from './components/Player.js'
import trackModel from './model/TrackModel.js'
import playerInterface from './interface.js'
import store from './redux/store.js'

export default function(){
    return(
        <Provider store={store}>
            <Player/>
        </Provider>
    )
}
export const TrackModel = trackModel
export const PlayerInterface = playerInterface