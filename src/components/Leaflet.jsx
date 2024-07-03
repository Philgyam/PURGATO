import React from 'react'
import { MapContainer,TileLayer,Marker ,Popup} from 'react-leaflet'
import 'Leaflet/dist/leaflet.css'
import { Icon, popup } from 'leaflet'
import pointer from '../assets/images/pointer.png'

function Leaflet() {
    const customeIcon = new Icon({
        iconUrl:pointer,
        iconSize:[38,38]
    })

    const markers = [
        {

            geocode:[5.659347073284908, -0.1719914775769745],
            popup:'Hello Purgato here !'
        }
    ]


  return (
    
        <MapContainer center={[5.659347073284908, -0.1719914775769745]} className='h-[20rem] -[80%]'  zoom={13}>


            <TileLayer
             url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'

            />

            {
                markers.map((marker)=>(
                   <Marker position={marker.geocode} icon={customeIcon} >
                    <Popup>
                        <h2>Purgato is here!</h2>
                    </Popup>

                   </Marker>
                ))
            }

        </MapContainer>
        
        

  )
}

export default Leaflet