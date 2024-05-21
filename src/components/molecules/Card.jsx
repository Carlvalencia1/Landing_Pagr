import React from 'react'
import './CardInformations.css'
import Images from '../atoms/Images'
import Paragraphs from "../atoms/Paragraphs.jsx";

export default function Card(props) {
  return (
    <>
        <div id='card_container'>
            <div id="paint">
                <Images val={props.val}></Images>
            </div>
            <div id="written">
                <Paragraphs val={props.text}></Paragraphs>
            </div>
        </div>
    </>
  )
}
