import React,{useState} from 'react';
import './App.css';
import Navigation from './comps/navigation/Navigation';
import Register from './comps/Register/Register'
import SignIn from './comps/SignIn/SignIn'
import ImageLinkForm from './comps/ImageLinkForm/ImageLinkForm';
import Rank from './comps/Rank/Rank';
import Logo from './comps/logo/Logo';
import FaceRec from './comps/FaceRec/FaceRec';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';



function App() {  
 
  


const app = new Clarifai.App({
  apiKey: '863af534057246748dd9e9585aa06736'
 });
  const [input, setInput] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signin');

  

  //signs users in and takes them to the home page 
const signInOut = (route) => {
  setRoute(route);
}

  
  
  //does the calculation to create the box around where faces are detected
  const calcFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width  = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol:clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  const displayFaceBox = (box) =>{
    setBox(box);
  }

  //Track user input
  const onInputChange = (event) => {
    setInput(event.target.value)
  }
  
  
  //detects the face in the image on submit
  const onSubmit = () => {
    setImgUrl(input);
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    .then(response => displayFaceBox(calcFaceLocation(response)))
    .catch(err => console.log(err));
  
  }
  return (
    <div className="App">
      <Particles className="particle"/>
      
      { 
        route === 'home'
        ?<div>
            <Navigation signInOut={signInOut}/>
            <Logo />
            <Rank/>
            <ImageLinkForm inputChange={onInputChange} detect={onSubmit}/>
            <FaceRec box={box} imgUrl={imgUrl}/>
        </div>  
        :(
          route === 'signin'?<SignIn signInOut={signInOut}/>
          : <Register signInOut={signInOut}/> 
        
          
        )
        
          
      }
      
    </div>
  );
}

export default App;
