
import PrivacyPolicySection from "../components/legal/PrivacyPolicy";
import PageTitle from "../components/PageTitle";
import pageInfo from "../components/utils/pageInfo";


export default function PrivacyPolicy() {
  const policyinfo = pageInfo.policy;
  return (
    <>
      <PageTitle
        title={policyinfo.title}
        breadcrumbs={policyinfo.breadcrumbs}
        backgroundImage={policyinfo.bgImage}
      />
      
      <PrivacyPolicySection/>
    </>
  );
}
