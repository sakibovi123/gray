import React from "react";
import BannerConsultancy from "../Components/ProjectConsultancy/BannerConsultancy";
import ProjectConsultancyServices from "../Components/ProjectConsultancy/ProjectConsultancyServices";
import { KeyFeaturesCrm } from "../Components/CustomerRelationshipManagement/KeyFeaturesCrm";
import { KeyFeaturesConsultancy } from "../Components/ProjectConsultancy/KeyFeaturesConsultancy";

const ProjectConsultancy = () => {
  return(
    <div>
      <BannerConsultancy />
      <ProjectConsultancyServices />
      <KeyFeaturesConsultancy />
    </div>
  );
};

export default ProjectConsultancy;