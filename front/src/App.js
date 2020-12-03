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
  const [choice4, setChoice4] = useState("choice4");

  // final answer for each question
  const [answer1, setAnswer1] = useState()
  const [answer2, setAnswer2] = useState()
  const [answer3, setAnswer3] = useState()
  const [answer4, setAnswer4] = useState()


  //songs
  const songs = [
    //Self Titled
    { Title: "Location", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/39XR4EXFz5Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Magnolia", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/oCveByMXd_0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Lookin", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/lQd-oFbTylc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "wokeuplikethis*", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/REmZhFKmOmo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Let it Go", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/2t5gC28Z_PI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Half & Half", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/jxMfGNzwhVo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "New Choppa", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/_JZqoGz0b6o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Other Shit", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/VS3DSfygfdw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "NO. 9", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/u1u07VAcBAw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "dothatshit!", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/geqZRB2-XlI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Lame Niggaz", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/dwaUzTCMI-A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Yah Mean", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/DRrj1Y5oazA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Flex", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/aNuDJ_JZHmQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Kelly K", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/oQ8BJAF0GX4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Had 2", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/71o7oddTy8L._SX355_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/2wl3dTeZ8t4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    //Die Lit
    { Title: "Long Time - Intro", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/tkPoOvVnbRk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "R.I.P.", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/GRoa6w-wnT4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Lean 4 Real", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/WOkP4zK5KDM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Old Money", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/azM_eraSTLg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Love Hurts", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/8pC-A0KMztk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Shoota", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/j3EwWAMWM6Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Right Now", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/9bp0Dzjaeg8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Poke It Out", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/oakC_u5vbdU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Home (KOD)", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/-2pjiKmhlAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Fell In Luv", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/HRbgGQ7rHi0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Foriegn", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/NXECgOJ-h4s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Pull Up", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/Ejrp9f5bJS4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Mileage", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/5ep6XUPtbHM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Flatbed Freestyle", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/szFh0BdHFkc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "No Time", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/dje-yOp6gNA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Middle Of The Summer", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/wTKKB0WGbIE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Choppa Won't Miss", TimeOfDay: "Dark", DesiredMood: "Euphoric", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/PRVxQXZXBNs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "R.I.P. Fredo", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/-E070GjPA9U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Top", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/5cJWBRl2uzA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    //Singles
    { Title: "Broke Boi", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://upload.wikimedia.org/wikipedia/en/0/07/Playboi_Carti_-_%40_Meh.png", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/nMDOSLEVdBw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "@ Meh", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/31ANCrmzrtL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/3XOETXVL424" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    // Soundcloud
    { Title: "Dont Tell Nobody", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images.genius.com/867b62e060a762029bef659f96e439b6.500x500x1.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/0ccKSQYSATw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "bootychaaain - milshake remix", TimeOfDay: "Dark", DesiredMood: "Wild", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images.genius.com/867b62e060a762029bef659f96e439b6.500x500x1.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/OZvYx6j3lzs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "The Omen", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images.genius.com/867b62e060a762029bef659f96e439b6.500x500x1.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/OFGl3TQvB_0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Count It Up", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://i1.sndcdn.com/artworks-000245970253-tgubtl-t500x500.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/IQIRQrXAhpA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Money Coutner", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://i1.sndcdn.com/artworks-000245970253-tgubtl-t500x500.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/IJ1ZSiw9e3k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Fetti", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://i1.sndcdn.com/artworks-000121629086-iwej2a-t500x500.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/A5IvyeAeEOM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "chill freestyle", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://i1.sndcdn.com/artworks-000329461704-fzqfol-t500x500.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/YDvpwy1WR8k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "smash pt2", TimeOfDay: "Light", DesiredMood: "Euphoric", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images.genius.com/53466c1ced000592ced169187307e597.1000x1000x1.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/6c3CZ97IeoQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "smash", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images.genius.com/53466c1ced000592ced169187307e597.1000x1000x1.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/NkamlD-shrQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "By Myself / No Help", TimeOfDay: "Light", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://images.genius.com/53466c1ced000592ced169187307e597.1000x1000x1.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/xWCzMx4jURI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "#PRAY #4 #ME", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images.genius.com/53466c1ced000592ced169187307e597.1000x1000x1.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/gUmvl68O8Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Talk (ICYTWAT Remix)", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Car", OfficialRelease: "Yes", Pic: "https://i1.sndcdn.com/artworks-000488602269-hhj963-t500x500.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/DokszoiLh1Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "Heavy", TimeOfDay: "Light", DesiredMood: "Wild", WhereAreYouListening: "Party", OfficialRelease: "Yes", Pic: "https://images.genius.com/53466c1ced000592ced169187307e597.1000x1000x1.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/yxhHQLKnLy0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: "YUNGXANHOE", TimeOfDay: "Dark", DesiredMood: "Relaxed", WhereAreYouListening: "Bedroom", OfficialRelease: "Yes", Pic: "https://images.genius.com/53466c1ced000592ced169187307e597.1000x1000x1.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/jHCHrrKsll0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
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
    } else if (counter === 3) {
      setQuestion((prev) => "Does it need to be an Official Release?")
      setChoice1("Yes");
      setChoice2("No");
      document.getElementById("button3").style.opacity = 0;
    } else {
      setQuestion((prev) => "complete")
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

        console.log(finalSongs);
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
    finalSongs = [];
    console.log(finalSongs);
  }

  return (
    <div className="App">
      {//included are the props that I am passing down so that the quiz component can interact with its parent
      }
      <Quiz question={question} counter={incrementer}
        nextQuestion={nextQuestion} choice1={choice1}
        choice2={choice2} choice3={choice3} choice4={choice4} finalAnswer={finalAnswer}
        reset={reseter} />
      <Final finalSong={finalSong} />
    </div>
  );
}

export default App;
