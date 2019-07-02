import React from 'react'
import { connect } from 'react-redux'

 function SongDetail({song}) {
    if (!song) {
        return <div></div>
    }
    return (
        <div>
            <h3>Details for :</h3>
            <p>
                Title: {song.title}
                <br/>
                Duration: {song.duration}
            </p>
        </div>
    )
}
const mapStatetoPros = (state) => {
    return{song: state.selectedSong}
}
export default connect(mapStatetoPros)(SongDetail);