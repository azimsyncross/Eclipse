import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Mail, Phone } from "lucide-react";

const TermsAndConditions = () => {
    const lastUpdated = "October 26, 2023";

  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using the services provided by Quasarlabs, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use our services. If you do not agree to abide by the above, please do not use our services.",
    },
    {
      title: "Service Description",
      content:
        "Quasarlabs provides digital marketing services including but not limited to: SEO, PPC Advertising, Social Media Marketing, Content Marketing, and Website Development.",
    },
    {
      title: "Client Responsibilities",
      content:
        "Clients are responsible for providing accurate information, timely payment of fees, providing feedback and approvals, maintaining confidentiality of account information, and ensuring compliance with applicable laws.",
    },
    {
      title: "Payment Terms",
      content:
        "Monthly services are billed in advance. Payment is due within 15 days of invoice date. Late payments may incur fees, and services may be suspended for non-payment. All fees are non-refundable unless otherwise specified.",
    },
    {
      title: "Intellectual Property",
      content:
        "Client retains ownership of their brand and content. Quasarlabs retains ownership of our methodologies and tools. Work products created specifically for clients become client property upon full payment.",
    },
    {
      title: "Confidentiality",
      content:
        "Both parties agree to maintain the confidentiality of business strategies, customer data, financial information, and any information marked as confidential.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Our total liability shall not exceed the amount paid for services in the preceding 12 months. We are not liable for indirect, incidental, or consequential damages and do not guarantee specific results.",
    },
    {
      title: "Termination",
      content:
        "Either party may terminate the agreement with 30 days written notice. Termination for material breach or non-payment can be immediate. Upon termination, final payment is due within 15 days.",
    },
    {
      title: "Dispute Resolution",
      content:
        "Parties will first attempt to resolve disputes through direct negotiation, then mediation. Final disputes will be resolved through binding arbitration under relevant state law.",
    },
    {
      title: "Governing Law",
      content:
        "These terms are governed by the laws of the State of Washington, United States. Any legal action must be brought in the courts of Washington.",
    },
    {
      title: "Changes to Terms",
      content:
        "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.",
    },
  ];

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md prose max-w-none">
               <p className="mb-8 text-gray-500">
                  Last updated: {lastUpdated}
                </p>
                {sections.map((section, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {index + 1}. {section.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <motion.div
                className="sticky top-24 bg-white border border-gray-200 rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Clarification?
                </h3>
                <p className="mb-6 text-gray-600">
                  If you have questions about any of these terms, please don't
                  hesitate to contact us. We're here to help.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a
                        href="mailto:hendersonbrooklynmaj509@hotmail.com"
                        className="opacity-90 hover:opacity-100 break-all"
                      >
                        hendersonbrooklynmaj509@hotmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a
                        href="tel:+12522633938"
                        className="opacity-90 hover:opacity-100"
                      >
                        +1 252-263-3938
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="opacity-90">
                        21st Avenue Southwest 3300, Olympia, Washington, 98512,
                        United States of America
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
