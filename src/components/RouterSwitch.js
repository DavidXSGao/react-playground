import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home";
import Icons from "./Icons";
import ToastNotifications from "./ToastNotifications";
import SampleModal from "./SampleModal";
import SampleTooltips from "./SampleTooltips";
import CountAnimation from "./CountAnimation";
import IdleTimerContainer from "./IdleTimerContainer";
import ColorPicker from "./ColorPicker";
import CreditCard from "./CreditCard";
import DatePickerContainer from "./DatePickerContainer";
import VideoPlayer from "./VideoPlayer";
import Books from "./InfiniteScroll/Books";

function RouterSwitch() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/icons" exact component={Icons} />
      <Route path="/toast" exact component={ToastNotifications} />
      <Route path="/modal" exact component={SampleModal} />
      <Route path="/tooltips" exact component={SampleTooltips} />
      <Route path="/animation" exact component={CountAnimation} />
      <Route path="/idle" exact component={IdleTimerContainer} />
      <Route path="/colors" exact component={ColorPicker} />
      <Route path="/creditCard" exact component={CreditCard} />
      <Route path="/datePicker" exact component={DatePickerContainer} />
      <Route path="/video" exact component={VideoPlayer} />
      <Route path="/infiniteScroll" exact component={Books} />
      <Redirect to={"/"} />
    </Switch>
  );
}

export default RouterSwitch;
