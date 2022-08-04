import '../global.css'
import Slider from './components/Slider'

const config = [
  {
    image: '../src/assets/Imgs/img1.jpg'
  },
  {
    image: '../src/assets/Imgs/img2.jpg'
  },
  {
    image: '../src/assets/Imgs/img3.jpg'
  },
  {
    image: '../src/assets/Imgs/img4.jpg'
  },
  {
    image: '../src/assets/Imgs/img5.jpg'
  },
  {
    image: '../src/assets/Imgs/img6.jpg'
  },
  {
    image: '../src/assets/Imgs/img7.jpg'
  },
  {
    image: '../src/assets/Imgs/img8.jpg'
  },
  {
    image: '../src/assets/Imgs/img9.jpg'
  },
  {
    image: '../src/assets/Imgs/img10.jpg'
  },
  {
    image: '../src/assets/Imgs/img11.jpg'
  },
  {
    image: '../src/assets/Imgs/img12.jpg'
  },
  {
    image: '../src/assets/Imgs/img13.jpg'
  },
  {
    image: '../src/assets/Imgs/img14.jpg'
  }
]

function App() {
  return (
    <>
      <Slider config={config} />
    </>
  )
}

export default App
