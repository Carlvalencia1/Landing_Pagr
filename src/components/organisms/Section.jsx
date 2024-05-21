import React from 'react'
import Container from '../molecules/Container'
import Top from '../molecules/Principal'
import './Section.css'
import '../../data/mysql'
import Card from '../molecules/Card'
import Bottom from '../molecules/Bottom'
import mysql from '../../data/mysql'

export default function Section() {
  return (
    <>
        <Top></Top>
        <div id="main_container">
        {
                mysql.heroSection.map(content => {
                  return (
                    <>
                    <Container val={content.image} text={content.text}></Container>
                    </>
                  )
                })
              }
            <div id="cards_container">
              {
                mysql.cards.map(content => {
                  return (
                    <>
                    <Card val={content.image} text={content.text}></Card>
                    </>
                  )
                })
              }
            </div>
        </div>
        <Bottom text={"Bottom"}></Bottom>
    </>
  )
}
    