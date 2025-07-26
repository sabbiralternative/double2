import History from "./History";
import Navbar from "./Navbar";
import NotUsing from "./NotUsing";
import RollingContainer from "./RollingContainer";
import TotalBetHistory from "./TotalBetHistory";

const Home = () => {
  return (
    <div className="sc-aXZVg dgckRQ">
      <div>
        <div className="Toastify" />
        <div className="sc-jwZKMi dhvkRf">
          <Navbar />
          <div className="sc-gJCZQp fJyRCg">
            <div className="sc-eZYNyq gVERgB">
              <History />
              <RollingContainer />
            </div>
            <div className="sc-jlGgGc bIFfBX">
              <div className="sc-gplwa-d gSzEKK">
                <button className="sc-dChVcU sc-rPWID cWBRZA denyrY" disabled>
                  <span>Place Bet</span>
                  <span>Win 2x</span>
                </button>
                <button className="sc-dChVcU sc-izQBue cWBRZA cwstHk" disabled>
                  <span>Place Bet</span>
                  <span>Win 14x</span>
                </button>
                <button className="sc-dChVcU sc-jBeBSR cWBRZA hfxtbS" disabled>
                  <span>Place Bet</span>
                  <span>Win 2x</span>
                </button>
              </div>
              <TotalBetHistory />
            </div>
          </div>
          <NotUsing />
        </div>
        <div className="sc-fqkvVR bLacGO exited modal-wrapper">
          <div />
        </div>
      </div>
    </div>
  );
};

export default Home;
