import React from "react";
import BannerManagement from "../Components/ProjectManagement/BannerManagement";
import GoalOrientedManagement from "../Components/ProjectManagement/GoalOrientedManagement";
import WhatDoYouGet from "../Components/BookingSystemsComponents/WhatDoYouGet";
import { WhatYouGetManagement } from "../Components/ProjectManagement/WhatYouGetManagement";

const ProjectManagement = () => {
  return(
    <div>
      <BannerManagement />
      <GoalOrientedManagement />
      <WhatYouGetManagement />
    </div>
  );
};

export default ProjectManagement;