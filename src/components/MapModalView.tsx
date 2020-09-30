import React from 'react'
import { Room } from '../room'
import MapView from './MapView'

interface Props {
    roomData: { [roomId: string]: Room };
    currentRoomId: string
}

export default function MapModalView (props: Props) {
  return (
    <div>
      <h1>Map</h1>
      <p>Click on a room to move there!</p>
      <MapView roomData={props.roomData} currentRoomId={props.currentRoomId} />
    </div>
  )
}
