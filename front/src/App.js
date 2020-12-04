import React, { useState } from 'react';
import './App.css';
//import components
import Quiz from './components/Quiz';
import Final from './components/Final';

function App() {
  //states
  const [question, setQuestion] = useState("Ready to start?");

  //what question we are on
  const [counter, setCounter] = useState(0);

  //buttons that display the available answers to choose from 
  const [choice1, setChoice1] = useState("choice1");
  const [choice2, setChoice2] = useState("choice2");
  const [choice3, setChoice3] = useState("choice3");

  // final answer for each question
  const [answer1, setAnswer1] = useState("Dark");
  const [answer2, setAnswer2] = useState("Euphoric");
  const [answer3, setAnswer3] = useState("Car");
  const [answer4, setAnswer4] = useState("No");


  //songs
  const songs = [
    //Self Titled
    { Title: "Location", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/39XR4EXFz5Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> },
    { Title: "Magnolia", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/oCveByMXd_0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Lookin", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/lQd-oFbTylc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "wokeuplikethis*", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/REmZhFKmOmo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Let it Go", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/2t5gC28Z_PI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Half & Half", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/jxMfGNzwhVo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "New Choppa", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/_JZqoGz0b6o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Other Shit", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/VS3DSfygfdw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "NO. 9", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/u1u07VAcBAw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "dothatshit!", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/geqZRB2-XlI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Lame Niggaz", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/dwaUzTCMI-A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Yah Mean", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/DRrj1Y5oazA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Flex", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/aNuDJ_JZHmQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Kelly K", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/oQ8BJAF0GX4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Had 2", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/2wl3dTeZ8t4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    //Die Lit
    { Title: "Long Time - Intro", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/tkPoOvVnbRk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "R.I.P.", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/GRoa6w-wnT4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Lean 4 Real", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/WOkP4zK5KDM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Old Money", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/azM_eraSTLg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Love Hurts", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/8pC-A0KMztk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Shoota", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/j3EwWAMWM6Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Right Now", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/9bp0Dzjaeg8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Poke It Out", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/oakC_u5vbdU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Home (KOD)", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/-2pjiKmhlAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Fell In Luv", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/HRbgGQ7rHi0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Foriegn", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/NXECgOJ-h4s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Pull Up", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/Ejrp9f5bJS4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Mileage", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/5ep6XUPtbHM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Flatbed Freestyle", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/szFh0BdHFkc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "No Time", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/dje-yOp6gNA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Middle Of The Summer", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/wTKKB0WGbIE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Choppa Won't Miss", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/PRVxQXZXBNs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "R.I.P. Fredo", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/-E070GjPA9U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Top", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/5cJWBRl2uzA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    //Singles
    { Title: "Broke Boi", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://townsquare.media/site/812/files/2017/03/Screen-Shot-2017-03-02-at-11.50.40-PM.png?w=1200&h=0&zc=1&s=0&a=t&q=89", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/3XOETXVL424" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "@ Meh", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/31ANCrmzrtL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/3XOETXVL424" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Hit a Lick", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images.genius.com/207c9085a25b044c98477c0cc97dd1fb.1000x1000x1.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/cLH5htkctGo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    //Classic Features
    { Title: "Almeda", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images.genius.com/d5e5cc33f2634999174c8a58d00d0bd2.300x300x1.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/6giKIu5jUvA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Earfquake", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/HmAsUQEFYGI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Pain 1993", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images.genius.com/f328f14cf71478924871a25cacd86645.1000x1000x1.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/Q5jnuOCJvK0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    // Soundcloud
    { Title: "Dont Tell Nobody", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images.genius.com/867b62e060a762029bef659f96e439b6.500x500x1.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/0ccKSQYSATw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "bootychaaain - milshake remix", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images.genius.com/867b62e060a762029bef659f96e439b6.500x500x1.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/OZvYx6j3lzs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "The Omen", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images.genius.com/867b62e060a762029bef659f96e439b6.500x500x1.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/OFGl3TQvB_0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Count It Up", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://i1.sndcdn.com/artworks-000245970253-tgubtl-t500x500.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/IQIRQrXAhpA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Money Coutner", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://i1.sndcdn.com/artworks-000245970253-tgubtl-t500x500.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/IJ1ZSiw9e3k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Fetti", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://i1.sndcdn.com/artworks-000121629086-iwej2a-t500x500.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/A5IvyeAeEOM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "chill freestyle", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://i1.sndcdn.com/artworks-000329461704-fzqfol-t500x500.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/YDvpwy1WR8k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "smash pt2", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images.genius.com/53466c1ced000592ced169187307e597.1000x1000x1.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/6c3CZ97IeoQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "smash", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images.genius.com/53466c1ced000592ced169187307e597.1000x1000x1.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/NkamlD-shrQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "By Myself / No Help", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images.genius.com/53466c1ced000592ced169187307e597.1000x1000x1.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/xWCzMx4jURI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "#PRAY #4 #ME", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images.genius.com/53466c1ced000592ced169187307e597.1000x1000x1.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/gUmvl68O8Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Talk (ICYTWAT Remix)", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://i1.sndcdn.com/artworks-000488602269-hhj963-t500x500.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/DokszoiLh1Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "Heavy", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images.genius.com/53466c1ced000592ced169187307e597.1000x1000x1.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/yxhHQLKnLy0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    { Title: "YUNGXANHOE", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images.genius.com/53466c1ced000592ced169187307e597.1000x1000x1.jpg", Link: <div className="container"><iframe class="responsive-iframe" src=" https://www.youtube.com/embed/jHCHrrKsll0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div > },
    // Leaks
    { Title: "We So Proud of Him", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000459586689-em5t8x-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/1eZwWcF1azV8PbRGVHr93T6ODBHLRKznA/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Throw It Up", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://images.genius.com/8617117f16ab9a230abe3370d467333d.1000x1000x1.jpg", Link: <a href="https://drive.google.com/file/d/1VafYkeCh2RDyxvlaCfYE4F1EPwreBgB9/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Fall in Love / Movin Different", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000344746929-6h1d9x-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/16f6g0SMFhLYEvm6_RVtURiiBykP5dDDd/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Hoes Fo Sho", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://i.ytimg.com/vi/bBtBYCu23Kw/sddefault.jpg", Link: <a href="https://drive.google.com/file/d/1p9GzDku1IGETcqp1_7q7zvyFDb_spoOh/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Bankroll", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://images-na.ssl-images-amazon.com/images/I/51gXxp5uUmL._AC_SY400_.jpg", Link: <a href="https://drive.google.com/file/d/1fXmUpwMuOAR3U2rghOlrwpYpzFhLGXey/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Shawty In Love", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://i.ytimg.com/vi/uqM_UaoIg04/maxresdefault.jpg", Link: <a href="https://drive.google.com/file/d/1-lQLWzk2SuAg3pumyIWtg76hBrobkCra/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Arm & Leg", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000522607917-evik5u-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/1n43Nunh9q6XwA2IEd5vkQT2J0Z84oPVQ/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "They Go Off", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000298943268-dd32lt-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/1rIU9YvXljbKikpajSB3ll4k5IZq_BHOL/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Cash Shit", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000610167139-3ivv5v-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/1XIbTNvPzmauHfVrMNPKn9K6HhpF8biHX/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Hang Up The Phone", TimeOfDay: "Light", DesiredMood: "Relaxing", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000480071061-ff1epf-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/14vGYqBMNvAr9aSj7t2m9R5kdkdtV83cM/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Houdini", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://images.genius.com/313fb217018774f7e73b2692a40db040.1000x1000x1.jpg", Link: <a href="https://drive.google.com/file/d/1woSXArelmjk0ERp5PwFMjWyZkH8uOJ0K/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Drip", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000402124110-oqvxfh-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/1chbrqGeXakk-U-fa08JFr6qQdtuG70in/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Big Bank", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://images.wave.fr/images//playboi-lil-uzi.jpg", Link: <a href="https://drive.google.com/file/d/1Nfj1liKdRjgqiZcLgJL7TuNQXAkf9vEa/view?usp=sharing">Click to Listen to Song</a> },
    { Title: "Kids", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000468809784-k3l1j9-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/1AFaTL59KymTKJ06wle2scuh_iSfgQ0Cm/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Dogfood", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i0.wp.com/storage.waploaded.com/images/[Waploaded]_Playboi_Carti_-_Dog_Food-1538902931.jpg", Link: <a href="https://drive.google.com/file/d/1YTky74t3XFMu1R9ujXVjf_-mioJlncjV/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Toke", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://images.genius.com/2047216dbe946f2c58541b823157e18d.1000x563x1.jpg", Link: <a href="https://drive.google.com/file/d/14hVWf4yUNgSJ9SnmoNO0AgYfs6rPEx7w/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Want To", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i.redd.it/gv3bzva4v4v41.jpg", Link: <a href="https://drive.google.com/file/d/18u2xRfa5WBpW-Uk-37knCN-9cGjC9TGH/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Supersonic", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://image.mymixtapez.com/albums/222551/cover/0/medium", Link: <a href="https://drive.google.com/file/d/1bGbncH_Xd7Hz0t68eBWNogeQHDmgQiYf/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Slick", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000676536151-lldixl-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/1UCDlNDGzzpXUX0KYTrmQLrOZCxGLKfor/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Go Up", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Playboi_Carti.jpg/220px-Playboi_Carti.jpg", Link: <a href="https://drive.google.com/file/d/1KF2BcQMD8ntGsF5XPQbwX8dTQk62Flma/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Racks", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://data.whicdn.com/images/316270770/original.jpg", Link: <a href="https://drive.google.com/file/d/1BIXRP3yJvaRBXbDqfeGXGRRc2dvLhFfF/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Woah", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://i.redd.it/7uz7v3rh7gs31.jpg", Link: <a href="https://drive.google.com/file/d/1U1fjHZ3eNGj-S9W6daqh5iSXqvJRRpyf/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Shawty In Love", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://i.ytimg.com/vi/uqM_UaoIg04/maxresdefault.jpg", Link: <a href="https://drive.google.com/file/d/1-lQLWzk2SuAg3pumyIWtg76hBrobkCra/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Can't Relate", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://www.nme.com/wp-content/uploads/2019/01/GettyImages-1011802900.jpg", Link: <a href="https://drive.google.com/file/d/1y-pfmkwX4SPM_l9Cu8_kH4I1k4fC3GtZ/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "No Feel", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://i.pinimg.com/originals/71/b1/f8/71b1f8dc137003f412a39004226d1faf.jpg", Link: <a href="https://drive.google.com/file/d/1HuzRivbW000q60kwZ91eTE6NOpbDv0Mf/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Whole Lotta Red", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://www.thelantern.com/files/2019/09/Carti-10-1-932x1024.jpg", Link: <a href="https://drive.google.com/file/d/1ae8XcZoOtiRXAkRGcm-_v-yJnM0-7RuN/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Neon", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://i.redd.it/5zg38anqipz41.jpg", Link: <a href="https://drive.google.com/file/d/1YuVf_dUGUzCanLdVc7On-U1GJICyrwv7/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Choppa", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/playboi-carti-cover-story_xlj3wg/photo-by-micaiah-carter-for-the-fader.jpg", Link: <a href="https://drive.google.com/file/d/1YAgalqcVOR5IZJNP9Jc5nkNUOVFUnG3T/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Skeletons", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://assets.audiomack.com/ogjordan/carolina-blue-275-275-1479609451.jpg", Link: <a href="https://drive.google.com/file/d/1Sf8Uoo-eL84xXe-MNUSMdDF4c1MPSThr/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Butterfly Doors", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://townsquare.media/site/812/files/2020/03/playboi-carti1.jpg?w=980&q=75", Link: <a href="https://drive.google.com/file/d/1KvWZqTvcq1NINeg9iWGIqA40leVt6QnB/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Cancun", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000549257130-0ca0a0-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/1mJMIzebYQGwIxn74V9JaKWyvz9XW1vZm/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Goku", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000599800968-jojkac-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/16B8BxwSwETggwNItx6ZRMvPE7NULlwES/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "One Day", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://coed.com/wp-content/uploads/2019/09/playboi-carti.jpg", Link: <a href="https://drive.google.com/file/d/1L61a8YWT1rGEFIu2EikXq_m6S_mCwgMl/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Back Up", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://images.genius.com/86661bf7f6be5f9e0551e1d24dc1a17e.500x500x1.jpg", Link: <a href="https://drive.google.com/file/d/1TJMZgSYwSsF-H8ZOcqwv7Mv7ACoV5QnP/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Buffy the Body", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://www.events.wvu.edu/files/9677f97d-5b05-442c-b383-d01a2ecab243/960x960?cb=1576097850", Link: <a href="https://drive.google.com/file/d/11Tf0-4sy1fjslzDpkxQbq8MwBCigMaOz/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Did It Again", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i.pinimg.com/originals/ee/be/72/eebe7294e48b7180f57b81c6a4d55872.jpg", Link: <a href="https://drive.google.com/file/d/1RNnB69y0JpwcWuVbrVzUr2Im0NdeEiT4/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Alma Mater", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://i.pinimg.com/originals/6c/e1/fc/6ce1fc55749baff52151bd6e67094016.jpg", Link: <a href="https://drive.google.com/file/d/1cgLXZfo-3Es5e48XFN39QnMWJ011glaL/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Tattoo", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://lastfm.freetls.fastly.net/i/u/770x0/9078cd45cc6684913bac93d424a335de.jpg", Link: <a href="https://drive.google.com/file/d/1knmexYH7B4GaOIb67X5syLg8hxXNG1TX/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Monday Thru Sunday", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://i.pinimg.com/564x/8e/2d/be/8e2dbe5aa05646c36b49123885ffada6.jpg", Link: <a href="https://drive.google.com/file/d/1ysYygLeHKVRQ8kzjPHZzd2JDCxlCyQzn/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Pitstop", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://i.pinimg.com/originals/5b/d7/7f/5bd77f3ef09daeac5e87ff25a6488bd1.jpg", Link: <a href="https://drive.google.com/file/d/1Xu_Y0bJ4QbQl1xuyIZuT2miktfgHbwEK/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Red on Red", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://www.centraltrack.com/wp-content/uploads/2017/07/D4A0967.jpg", Link: <a href="https://drive.google.com/file/d/1Nyc3_5HRdOCRVXDA9KU0DvUKxa7HuCOJ/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Don't Worry", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://wallpapercave.com/wp/wp5330369.jpg", Link: <a href="https://drive.google.com/file/d/1nSH9Nq39bhIS-e3sAXxwLPcfMPS3wIn2/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "R.I.P. Yams", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://wallpapercave.com/wp/wp5286218.jpg", Link: <a href="https://drive.google.com/file/d/1s6H9LrMSMiPFU1IQTRcaBJKAZKqkZlDs/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Dropped Out", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://i.pinimg.com/originals/81/d5/06/81d506e13446ede766fe38c37e43a2de.jpg", Link: <a href="https://drive.google.com/file/d/1i2DQQrA_iFwslkyzyVFP_-dK0gaUBx5K/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Back On Dat Act", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://i.pinimg.com/564x/fd/74/6c/fd746c20fa150c4c3323c1aa55234e00.jpg", Link: <a href="https://drive.google.com/file/d/1i1LzuijqUtS7W2kjKEA07zRuHGb2z4SP/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Molly", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i.pinimg.com/originals/e0/dd/9a/e0dd9a338c2c6e04d1339e74072fd8c7.jpg", Link: <a href="https://drive.google.com/file/d/1Q3HMvcKLIicdWKwqo_fTsBt1UDS9-hnE/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Leg Room", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://i.pinimg.com/originals/91/4e/cc/914ecc3833809d1bdef838fa25934700.jpg", Link: <a href="https://drive.google.com/file/d/1a05ueTR9TTt1xcydsqMGVc-JfRGsUdeM/view?usp=sharing">Click to Listen to Song</a> },
    { Title: "Hellcat", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i.pinimg.com/originals/8e/47/e3/8e47e3e28e8f4113ef7f357e049df25f.png", Link: <a href="https://drive.google.com/file/d/1sB6g25sYvVIvCPmYKLAIzKs1OhdDzHmM/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Die Like This", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i.redd.it/k0nwfbnq5t731.jpg", Link: <a href="https://drive.google.com/file/d/1l1EFtHgf57owPcTkZfTPqZbachNyIEdu/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Exotic", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://i.pinimg.com/originals/47/07/9f/47079f4c3d7a0bd067cae05b17f74419.jpg", Link: <a href="https://drive.google.com/file/d/1YuUpH67QC8NFhZCnAWA4wxREC4tmR1af/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Pissy Pamper (Kid Cudi)", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000549362775-7qhw64-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/1P1F1kgP9iHJZfuLMBdzbaQA0DvtEJ4J7/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Pop Bottles", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000509326236-e4yy0s-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/150pBkisFbN5Pt1kYkFxb6L-_ELq5543-/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Choppa Go", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://bandlabimages.azureedge.net/v1.0/users/a141485a-2524-42a4-b77f-738dd81231ca/640x640", Link: <a href="https://drive.google.com/file/d/1re2jjUz1h1QZHuYi7Frv5Xb_EuhNScp_/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Bouldercrest", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Party", OfficialRelease: "No", Pic: "https://i.pinimg.com/736x/24/f0/bf/24f0bf17fc26bf2bd25db5f21ba316a3.jpg", Link: <a href="https://drive.google.com/file/d/1gmV9wl1xpBhe1FXDX8feAvXlSEMx4mQO/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Run It Up", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://cdn.boilerroom.tv/wp-content/uploads/2015/11/DSCF7004-1000x667.jpg?3215d9", Link: <a href="https://drive.google.com/file/d/1a11m5p4YhSVysezfFmhVU6aA8odRw05W/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "No Lie", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://i1.sndcdn.com/artworks-000521280303-5trf27-t500x500.jpg", Link: <a href="https://drive.google.com/file/d/1JaKuUSjQy0HGcjeEvclzfdfaICl5nIai/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "A Lot On My Mind", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F12%2Fplayboi-carti-brick-magazine-cover-1.jpg?q=75&w=800&cbr=1&fit=max", Link: <a href="https://drive.google.com/file/d/1lqDHaKtN-bosx02QUx2fBMx6HPVI5MeA/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Not Comin'", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i.pinimg.com/564x/c1/98/1d/c1981d926f592339a1fa79b3b7474f07.jpg", Link: <a href="https://i.pinimg.com/564x/c1/98/1d/c1981d926f592339a1fa79b3b7474f07.jpg" target="_blank">Click to Listen to Song</a> },
    { Title: "Headshot", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i.imgur.com/H8G6YK6.jpg", Link: <a href="https://drive.google.com/file/d/18-RpvbcjweaGQNEusJdV-7J4Qh7SgOfW/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Backroom", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "No", Pic: "https://i.pinimg.com/originals/00/7b/d1/007bd1df90a3fbc39c813989ef778e8a.jpg", Link: <a href="https://drive.google.com/file/d/1x41nXko-hUtF1GPpuZc4j_sSwn46SQtl/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
    { Title: "Money Over All", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "No", Pic: "https://i.pinimg.com/originals/16/14/e3/1614e34c9cb824459be51d3eb84f3749.jpg", Link: <a href="https://drive.google.com/file/d/1DWHxm2v3i2yXC0z2S-HRPQYdoFV-CRw4/view?usp=sharing" target="_blank">Click to Listen to Song</a> },
  ];

  //working list of songs that is updated depending on what the user clicks during the quiz
  let finalSongs = [];

  //final song
  const [finalSong, setFinalSong] = useState("")


  //changes the question text for each question 
  const nextQuestion = () => {
    if (counter === 0) {
      setQuestion((prev) => "It is ___ outside?")
      setChoice1("Light");
      setChoice2("Dark");
      document.getElementById("button1").style.opacity = 1;
      document.getElementById("button2").style.opacity = 1;
      document.getElementById("button3").style.opacity = 0;
    } else if (counter === 1) {
      setQuestion((prev) => "Desired Mood?")
      setChoice1("Relaxed");
      setChoice2("Euphoric");
      setChoice3("Wild");
      document.getElementById("button3").style.opacity = 1;
    } else if (counter === 2) {
      setQuestion((prev) => "Where are You Listening?")
      setChoice1("Car");
      setChoice2("Bedroom");
      setChoice3("Party");
      console.log(finalSong);
    } else if (counter === 3) {
      setQuestion((prev) => "Does it need to be an Official Release?")
      setChoice1("Yes");
      setChoice2("No");
      document.getElementById("button3").style.opacity = 0;
    } else {
      setQuestion((prev) => "")
      document.getElementById("button1").style.opacity = 0;
      document.getElementById("button2").style.opacity = 0;
      document.getElementById("nxtBtn").style.opacity = 0;
      document.getElementById("rstBtn").style.opacity = 1;
      document.getElementById("finalTitle").style.visibility = "visible";
      //run a function that gives us the final answer
      songChoice();
    }
  }


  //algorithm that determines what song we listen to 
  const songChoice = () => {
    var i;
    var u;
    for (i = 0; i < songs.length; i++) {
      if (songs[i].TimeOfDay === answer1 && songs[i].DesiredMood === answer2 && songs[i].WhereAreYouListening === answer3) {
        finalSongs.push(songs[i]);
        for (u = 0; u < finalSongs.length; u++) {
          if (answer4 === "Yes" && finalSongs[u].OfficialRelease === "No") {
            finalSongs.splice(u, 1);
          }
        }
      }
    }
    setFinalSong(finalSongs[Math.floor(Math.random() * finalSongs.length)])
  }


  //obtains the final answer for each question
  const finalAnswer = (param) => {
    if (counter === 1) {
      setAnswer1(param);
      console.log(param);
    } else if (counter === 2) {
      setAnswer2(param);
      console.log(param);
    } else if (counter === 3) {
      setAnswer3(param);
      console.log(param);
    } else if (counter === 4) {
      setAnswer4(param);
      console.log(param);
    }
  }

  //counter keeps track of what question we are on
  const incrementer = () => {
    setCounter((prev) => prev + 1);
    console.log(counter);
    nextQuestion();
  }



  //resets everything
  const reseter = () => {
    setCounter(0);
    incrementer();
    setQuestion("It is ___ outside?")
    setChoice1("Light");
    setChoice2("Dark");
    setFinalSong("");
    document.getElementById("button1").style.opacity = 1;
    document.getElementById("button2").style.opacity = 1;
    document.getElementById("nxtBtn").style.opacity = 1;
    document.getElementById("rstBtn").style.opacity = 0;
    document.getElementById("finalTitle").style.visibility = "collapse";
    finalSongs = [];
    console.log(finalSongs);
    console.log(finalSong);
  }

  return (
    <div className="App">
      {//included are the props that I am passing down so that the quiz component can interact with its parent
      }
      <Quiz question={question} counter={incrementer}
        nextQuestion={nextQuestion} choice1={choice1}
        choice2={choice2} choice3={choice3} finalAnswer={finalAnswer}
        reset={reseter} />
      <Final finalSong={finalSong} />
    </div>
  );
}

export default App;
