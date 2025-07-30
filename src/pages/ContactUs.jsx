import ContactSection from "../components/contact/ContactSection";
import FAQSection from "../components/Faq";
import PageTitle from "../components/PageTitle";
import pageInfo from "../components/utils/pageInfo";

export default function ContactUs() {
  const contactInfo = pageInfo.contactUs;

  return (
    <div>
      <PageTitle
        title={contactInfo.title}
        backgroundImage={contactInfo.bgImage}
        breadcrumbs={contactInfo.breadcrumbs}
      />
      <ContactSection />
      <FAQSection/>
    </div>
  );
}
