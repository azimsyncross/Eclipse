
import TermsAndConditions from "../components/legal/TermsSection";
import PageTitle from "../components/PageTitle";
import pageInfo from "../components/utils/pageInfo";


export default function Terms() {
  const termsinfo = pageInfo.terms;
  return (
    <>
      <PageTitle
        title={termsinfo.title}
        breadcrumbs={termsinfo.breadcrumbs}
        backgroundImage={termsinfo.bgImage}
      />
      <TermsAndConditions/>
      
      
    </>
  );
}
