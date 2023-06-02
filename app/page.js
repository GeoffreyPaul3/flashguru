import Hero from "./components/Hero";
import Instagram from "./components/Instagram";
import Slider from "./components/Slider";
import { SliderData } from "./components/SliderData";


export default function Home() {
  return (
    <div>
    <Hero heading="FlashGuru Photography" 
      message="I capture moments in nature and keep them alive."
    />
    <Slider slides={SliderData}/>
    <Instagram />
    </div>
  );
}
