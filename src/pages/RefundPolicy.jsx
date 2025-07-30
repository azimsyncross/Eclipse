
import RefundPolicySection from "../components/legal/RefundPolicy";
import PageTitle from "../components/PageTitle";
import pageInfo from "../components/utils/pageInfo";


export default function RefundPolicy() {
  const refundInfo = pageInfo.refund;
  return (
    <>
      <PageTitle
        title={refundInfo.title}
        breadcrumbs={refundInfo.breadcrumbs}
        backgroundImage={refundInfo.bgImage}
      />
      <RefundPolicySection/>
      
    </>
  );
}
