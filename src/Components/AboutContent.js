import React from 'react'
import '../App.css';
import Card from './Card';
import ImageSlider from './ImageSlider';
import Service from './Service';
import { SliderData } from './SliderData';
const AboutContent = () => {
  return (
    <>
    <ImageSlider slides={SliderData} />
    <Service/>
    <Card/>
    </>
  )
}

export default AboutContent
