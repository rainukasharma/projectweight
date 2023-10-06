import React, { useState } from "react";
import NavigationDrawer from "./Components/NavigationDrawer";
import ZoneTracker from "./Pages/ZoneTracker";
import VehicleWeighting from "./Pages/VehicleWeighting";
import UserTracker from "./Pages/UserTracker";
import Report from "./Pages/Report";

function App() {
  const [selectedButton, setSelectedButton] = useState("ZoneTracker");

  return (
    <div className="flex flex-row">
      <NavigationDrawer selectedButton={selectedButton} />
      <div className="flex-grow">
        {selectedButton === "ZoneTracker" && <ZoneTracker />}
        {selectedButton === "VehicleWeighting" && <VehicleWeighting />}
        {selectedButton === "UserTracker" && <UserTracker />}
        {selectedButton === "Report" && <Report />}
      </div>
    </div>
  );
}

export default App;
