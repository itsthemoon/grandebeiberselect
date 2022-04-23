import React, { useState } from 'react';
import './App.css';
//import components
import Final from './components/Final';

function App() {
  //final song
  const [finalSong, setFinalSong] = useState("")
  let answer1 = "DARK"
  let answer2 = "EUPHORIC"
  let answer3 = "CAR"

  //songs
  const songs = [
    //Ariana Grande

    //Yours Truly
    { Title: "Honeymoon Avenue", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/_tJM74eZy04" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Baby I", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/bJuWlMFToNo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Right There", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/fhcpubAVdmc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Tattooed Heart", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/H6DeIBK0yuc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Lovin' It", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/at6iPtxAnc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Piano", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/hd1D61037c8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Daydreamin'", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/eLQMGYHVJ_I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "The Way", TimeOfDay: "DARK", DesiredMood: "WILD", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/_sV0S8qWSy0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "You'll Never Know", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/VyhQZLZpCEQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Almost Is Never Enough", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/b87dBaL4qI0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Popular Song", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/nmcdLOjGVzw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Better Left Unsaid", TimeOfDay: "DARK", DesiredMood: "WILD", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/qmqKIt7CTJk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },

    //My Everything
    { Title: "Intro", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/hK2y1lfnB4s" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Problem", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "PARTY", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/iS1g8G_njx8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "One Last Time", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "PARTY", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/BPgEgaPk62M" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Why Try", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "BEDROOM", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/G7BEVZ3uRCA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Break Free", TimeOfDay: "DARK", DesiredMood: "WILD", WhereAreYouListening: "PARTY", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/L8eRzOYhLuw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Best Mistake", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/6H6dRxGT_ww" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Be My Baby", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/mbxaGzjCXP8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Break Your Heart Right Back", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "PARTY", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/80Q30ebnXpU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Love Me Harder", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "PARTY", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/g5qU7p7yOY8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Just A Little Bit Of Your Heart", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/OVOhs_TSwsQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Hands On Me", TimeOfDay: "DARK", DesiredMood: "WILD", WhereAreYouListening: "PARTY", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/Squi8kxchFA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "My Everything", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/HxWSDUC-KTU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Bang Bang", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "CAR", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/0HDdjwpPM3Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Only 1", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/qukswgSkkzc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "You Don't Know Me", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://images-na.ssl-images-amazon.com/images/I/61nmSDwpCJL.jpg", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/3--NXYO71go" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },

    //Dangerous Woman
    { Title: "Moonlight", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/JC7826DhCjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Dangerous Woman", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/9WbCfHutDSE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Be Alright", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/eBAHqRnSgRw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Into You", TimeOfDay: "DARK", DesiredMood: "WILD", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/1ekZEVeXwek" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Side To Side", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/SXiSVQZLje8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Let Me Love You", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/5WL672bjJgM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Greedy", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/3SFGpMqxWhM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Leave Me Lonely", TimeOfDay: "DARK", DesiredMood: "WILD", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/-kYVljnA6rI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Everyday", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/LELFIuhSPCI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Sometimes", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/-5CrzNLx_DM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "I Don't Care", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/Ao87MtSwxsQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Bad Decisions", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/RlRgnsyR00Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Touch It", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/hNRjI_biB18" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Knew Better / Forever Boy", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/ofLyuMIrOnI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Thinking Bout You", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/RFm4n7xrYxU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Step On Up", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/NZyjklCmask" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Jason's Song (Gave It Away)", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/WMvOo5t_TGY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },

    //Sweetener
    { Title: "blazed", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/h5Ne3YcZCVI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "the light is coming", TimeOfDay: "DARK", DesiredMood: "WILD", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/OQitfe8u7i4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "R.E.M", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/AVPEP_KSldA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "God is a woman", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/kHLHSlExFis" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "sweetener", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/6vay5SgNPpk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "successful", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/_IvArrFhcp0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "everytime", TimeOfDay: "DARK", DesiredMood: "WILD", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/MYvjW3zdCws" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "breathin", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/1BYr1br2Ee4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "no tears left to cry", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/ffxKSjUwKdU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "borderline", TimeOfDay: "DARK", DesiredMood: "WILD", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/F9-SYDu6ZI4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "better off", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/-mNEr0OGusU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "goodnight n go", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/sXJ2hajo6rw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "pete davidson", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/ba8CifMRZ2Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "get well soon", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/hXU4P6j3TNY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },

    //thank u, next 
    { Title: "imagine", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/oRcXOnLkM7A" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "needy", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/Km__cJEJ3JI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "NASA", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/-_aGvdfLTKY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "bloodline", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/uKqRAC-JNOM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "fake smile", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/XTZigwkcJhw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "bad idea", TimeOfDay: "DARK", DesiredMood: "WILD", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/m7XHduHsBvk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "make up", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/DOJremEQw88" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "ghostin", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/Z1pmpDRrQhU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "in my head", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/6GcpNvYFMGE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "7 rings", TimeOfDay: "DARK", DesiredMood: "WILD", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/QYh6mYIJG2Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "thank u, next", TimeOfDay: "LIGHT", DesiredMood: "WILD", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/gl1aHhXnN1k" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "break up with ur girlfriend, i'm bored", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/d/dd/Thank_U%2C_Next_album_cover.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/LH4Y1ZUUx2g" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },

    //Positions
    { Title: "shut up", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/9MogWz-LHXI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "34+35", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/B6_iQvaIjXw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "motive", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/Lj4-SIa9bbk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "just like magic", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/zMEzD2G2IKA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "off the table", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/dvndP8di-Uw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "six thirty", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/u7GAXfrajHc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "safety net", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/LBBZeJhteRE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "my hair", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/Sujm6756pZU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "nasty", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/A3BuLzTvo0o" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "west side", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/iyOSupKevog" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "love language", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/MY8K95oaexQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "positions", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/tcYodQoapMg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "obvious", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/9Sldg-8dVGU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "pov", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/nQJEp-k-ogs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "someone like u - interlude", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/-pvTDf1Eq6M" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "test drive", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/1zNYZd94ui8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "worst behavior", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/rFA11HZu-RU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },

    //Justin Beiber

    //My World
    { Title: "One Time", TimeOfDay: "DARK", DesiredMood: "EUPHORIC", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/a/ab/Justin_Bieber_-_My_World.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/CHVhwcOg6y8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Favorite Girl", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/a/ab/Justin_Bieber_-_My_World.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/2u2Z07ujyD8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Down To Earth", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/a/ab/Justin_Bieber_-_My_World.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/oi9Li3GfpgM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Bigger", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/a/ab/Justin_Bieber_-_My_World.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/4Ck9k8AQt84" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "One Less Lonely Girl", TimeOfDay: "LIGHT", DesiredMood: "RELAXED", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/a/ab/Justin_Bieber_-_My_World.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/LXUSaVw3Mvk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "First Dance", TimeOfDay: "DARK", DesiredMood: "RELAXED", WhereAreYouListening: "BEDROOM", Pic: "https://upload.wikimedia.org/wikipedia/en/a/ab/Justin_Bieber_-_My_World.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/wpoCGXS9qpA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Love Me", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "CAR", Pic: "https://upload.wikimedia.org/wikipedia/en/a/ab/Justin_Bieber_-_My_World.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/qdDVtFvJwUc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },


    //My World 2.0
    { Title: "Baby", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/a/ab/Justin_Bieber_-_My_World.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/qdDVtFvJwUc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },
    { Title: "Baby", TimeOfDay: "LIGHT", DesiredMood: "EUPHORIC", WhereAreYouListening: "PARTY", Pic: "https://upload.wikimedia.org/wikipedia/en/a/ab/Justin_Bieber_-_My_World.png", Link: <div className="container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/qdDVtFvJwUc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> },

  ];

  //working list of songs that is updated depending on what the user clicks during the quiz
  let finalSongs = [];



  //algorithm that determines what song we listen to 
  const songChoice = () => {
    var i;
    for (i = 0; i < songs.length; i++) {
      if (songs[i].TimeOfDay === answer1 && songs[i].DesiredMood === answer2 && songs[i].WhereAreYouListening === answer3) {
        finalSongs.push(songs[i]);
      }
    }
    setFinalSong(finalSongs[Math.floor(Math.random() * finalSongs.length)])
  }


  //records each choice, then handles moving to the next page 
  function setQuizValues() {
    var ele = document.getElementsByName('quiz1');
    var eleArr = Array.prototype.slice.call(ele)
    eleArr = eleArr.concat(Array.prototype.slice.call(document.getElementsByName('quiz2')), 
    Array.prototype.slice.call(document.getElementsByName('quiz3')))
    var count = 0
    for(const element of eleArr) {
      if(element.checked) {
        count += 1
      }
    }
    if (count !== 3) {
      alert('Fill in every option')
      return
    }
    count = 1
    for(const element of eleArr) {
        if(element.checked) {
          if (count === 1) {
            answer1 = element.value;
          } else if (count === 2) {
            answer2 = element.value;
          } else if (count === 3) {
            answer3 = element.value;
          }
          count += 1
        }
    }
    songChoice()
    document.getElementById("quiz").style.visibility = "collapse";
    document.getElementById("rstBtn").style.visibility = "visible";
    document.getElementById("finalTitle").style.visibility = "visible";
    document.getElementById("finalpic").style.visibility = "visible";
    document.getElementById("quiz").style.marginTop = "-10%";

}



  //resets everything
  const reseter = () => {
    setFinalSong("");
    document.getElementById("quiz").style.visibility = "hidden";
    document.getElementById("rstBtn").style.visibility = "collapse";
    document.getElementById("finalTitle").style.visibility = "collapse";
    document.getElementById("finalpic").style.visibility = "collapse";
    finalSongs = [];
    window.location.href=window.location.href;
  }

  //this makes sure that the page doesn't refresh when the form is submitted
  const doNotReFresh = (e) => {
    e.preventDefault();
  }

  //handles moving from home page to question page
  const offHomePage = () => {
    document.getElementById("title").style.visibility = "hidden";
    document.getElementById("title").style.marginBottom = "-40vw";

    document.getElementById("titlePageBtn").style.visibility = "hidden";
    document.getElementById("quiz").style.visibility = "visible";

  }

  return (
    <div className="App">
      <button className="rstButton" id="rstBtn" onClick={reseter}>RESET</button>
      <h1 id="title">DISCOVER ARIANA GRANDE AND JUSTIN BEIBER</h1>
      <button id="titlePageBtn" onClick={offHomePage}>Next</button>
      <form id="quiz" onSubmit={doNotReFresh}>
        <label className="labels">
        <p>IS IT LIGHT OR DARK OUTSIDE?</p>
          LIGHT
          <input type="radio" value="LIGHT" name="quiz1" /> <br />
          DARK 
          <input type="radio" value="DARK" name="quiz1" />
        </label> <br />
        <label className="labels"> 
        <p>WHAT IS YOUR DESIRED MOOD?</p>
          RELAXED
          <input type="radio" value="RELAXED" name="quiz2" /> <br />
          EUPHORIC
          <input type="radio" value="EUPHORIC" name="quiz2" /> <br />
          WILD
          <input type="radio" value="WILD" name="quiz2" /> <br />
        </label> 
        <label className="labels"> 
        <p>WHERE ARE YOU LISTENING?</p>
          BEDROOM
          <input type="radio" value="BEDROOM" name="quiz3" /> <br />
          CAR
          <input type="radio" value="CAR" name="quiz3" /> <br />
          PARTY
          <input type="radio" value="PARTY" name="quiz3" /> <br />
        </label>
        <button id="submitButton" onClick={setQuizValues}>Submit</button>
      </form>

      <Final finalSong={finalSong} />
    </div>
  );
}

export default App;
