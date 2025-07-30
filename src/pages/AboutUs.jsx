import AboutSection from "../components/AboutSection";
import CallToActionSection from "../components/CallToActionSection";
import CoreValuesSection from "../components/CoreValues";
import PageTitle from "../components/PageTitle";
import StatsSection from "../components/StateSection";
import StorySection from "../components/StorySection";
import TeamSection from "../components/team/TeamSection";
import pageInfo from "../components/utils/pageInfo";
import WhyUs from "../components/WhyUs";

export default function AboutUs() {
  const aboutinfo = pageInfo.aboutUs;
  return (
    <>
      <PageTitle
        title={aboutinfo.title}
        breadcrumbs={aboutinfo.breadcrumbs}
        backgroundImage={aboutinfo.bgImage}
      />
      <AboutSection />
      <StorySection/>
      <StatsSection/>
      <CoreValuesSection/>
      <TeamSection/>
      <WhyUs />
      <CallToActionSection />
      
    </>
  );
}
