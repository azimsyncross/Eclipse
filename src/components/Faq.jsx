import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a comprehensive range of digital marketing services including Social Media Advertising, Google Ads Management, YouTube Advertising, App Store Optimization (ASO), Search Engine Optimization (SEO), and TikTok Advertising. Our team specializes in creating customized strategies for each platform to maximize your ROI."
    },
    {
      question: "How long does it take to see results from your campaigns?",
      answer: "Results vary depending on the service and your specific goals. For paid advertising (Google Ads, Social Media Ads), you can typically see initial results within 2-4 weeks. SEO and ASO are longer-term strategies that usually show significant results within 3-6 months. We provide regular reports to track progress throughout the campaign."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with businesses of all sizes, from startups to enterprise-level companies. Our flexible budget ranges from under $1,000 to over $50,000 allow us to create effective campaigns regardless of your company size. We tailor our strategies to fit your specific needs and budget constraints."
    },
    {
      question: "How do you measure the success of your campaigns?",
      answer: "We use comprehensive analytics and tracking tools to measure campaign performance. Key metrics include ROI, conversion rates, click-through rates, engagement rates, organic traffic growth, and keyword rankings. We provide detailed monthly reports with actionable insights and recommendations for optimization."
    },
    {
      question: "Can you help with both organic and paid marketing strategies?",
      answer: "Absolutely! We believe in a holistic approach to digital marketing. We can help you with organic strategies like SEO and content marketing, as well as paid advertising across multiple platforms. Our integrated approach ensures your organic and paid efforts work together to maximize your overall marketing effectiveness."
    },
    {
      question: "What makes your agency different from others?",
      answer: "Our agency combines data-driven strategies with creative excellence. We stay up-to-date with the latest platform changes and algorithm updates, ensuring your campaigns remain effective. Our team has extensive experience across all major platforms, and we provide personalized service with dedicated account management for every client."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg px-4 py-16 my-16 max-w-5xl mx-auto ">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              <span className={`text-indigo-600 transform transition-transform duration-200 ${
                openFAQ === index ? 'rotate-180' : ''
              }`}>
                ↓
              </span>
            </button>
            {openFAQ === index && (
              <div className="px-6 py-4 bg-white border-t border-gray-200">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;