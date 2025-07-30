import PageTitle from "../components/PageTitle";
import TeamSection from "../components/team/TeamSection";
import pageInfo from "../components/utils/pageInfo";

export default function TeamPage() {
  const teamInfo = pageInfo.team;
  return (
    <div>
      <PageTitle
        title={teamInfo.title}
        backgroundImage={teamInfo.bgImage}
        breadcrumbs={teamInfo.breadcrumbs}
      />
      <TeamSection />
    </div>
  );
}
