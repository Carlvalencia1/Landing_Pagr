import React from 'react'
import Paragraphs from '../atoms/Paragraphs'
import './Bottom.css'

export default function Bottom() {
  return (
    <>
    <div id="bottom">
        <div id="column">
            <Paragraphs val={"Más información"}></Paragraphs>
            <Paragraphs val={"Todo para autos"}></Paragraphs>
            <Paragraphs val={"Buscanos"}></Paragraphs>
            <Paragraphs val={"XXXXXX"}></Paragraphs>
            
        </div>
        <div id="column">
            <Paragraphs val={"Conocenos"}></Paragraphs>
            <Paragraphs val={"Para más autos"}></Paragraphs>
            <Paragraphs val={"@Porsche"}></Paragraphs>
            <Paragraphs val={"XXXXXX"}></Paragraphs>
        </div>
        <div id="column">
            <Paragraphs val={"Otras marcas"}></Paragraphs>
            <Paragraphs val={"Nuevas cosas"}></Paragraphs>
            <Paragraphs val={"Sorpresa"}></Paragraphs>
            <Paragraphs val={"Carlos Daniel Valencia Díaz"}></Paragraphs>
        </div>
        
    </div>
    </>
  )
}
