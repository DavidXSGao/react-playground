import "./App.css";
import Icons from "./components/Icons";
import ToastNotifications from "./components/ToastNotifications";
import SampleModal from "./components/SampleModal";
import SampleTooltips from "./components/SampleTooltips";
import CountAnimation from "./components/CountAnimation";
// import IdleTimerContainer from "./components/IdleTimerContainer";
import ColorPicker from "./components/ColorPicker";
import CreditCard from "./components/CreditCard";
import DatePickerContainer from "./components/DatePickerContainer";
import VideoPlayer from "./components/VideoPlayer";
import Books from "./components/InfiniteScroll/Books";
function App() {
  return (
    <div className="App">
      <Icons />
      <br />
      <ToastNotifications />
      <br />
      <SampleModal />
      <br />
      <SampleTooltips />
      <br />
      <CountAnimation />
      <br />
      {/* <IdleTimerContainer />
      <br /> */}
      <ColorPicker />
      <br />
      <CreditCard />
      <br />
      <DatePickerContainer />
      <br />
      <VideoPlayer />
      <br />
      <Books />
      <br />
    </div>
  );
}

export default App;
