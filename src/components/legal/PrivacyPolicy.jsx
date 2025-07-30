import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const PrivacyPolicySection = () => {
  const lastUpdated = "October 26, 2023";

  const policySections = [
    {
      title: "Information Collection",
      content:
        "We collect information that you provide voluntarily when creating accounts, using our services, submitting inquiries, or interacting with our platforms. This includes personal identification information (name, email, phone, address), business details, payment information, communication history, and marketing preferences.",
    },
    {
      title: "How We Use Information",
      content:
        "We use collected information for business purposes, including providing and improving our services, processing transactions, sending technical updates and support messages, responding to requests, and communicating about services and opportunities.",
    },
    {
      title: "Information Sharing",
      content:
        "We may share your information with service providers, when required by law, to protect the rights and safety of Quasarlabs and others, or in connection with business transactions like mergers.",
    },
    {
      title: "Data Security",
      content:
        "We implement robust security measures to protect your information from unauthorized access, alteration, or destruction. However, no internet transmission or electronic storage method is completely secure.",
    },
    {
      title: "Cookies and Tracking",
      content:
        "We use cookies and similar technologies to track website activity and store preferences. You can set your browser to refuse cookies, but some features may not function properly without them.",
    },
    {
      title: "Your Rights",
      content:
        "You have the right to access, update, delete, or correct your information. You may also object to processing, request data portability, and withdraw consent where applicable.",
    },
    {
      title: "Data Retention",
      content:
        "We retain personal information as long as we have a legitimate business need. When no longer needed, we will delete, anonymize, or securely store and isolate it from further processing.",
    },
    {
      title: "International Transfers",
      content:
        "Your information may be transferred to and processed in locations outside your jurisdiction where data protection laws may differ.",
    },
    {
      title: "Children's Privacy",
      content:
        "Our services are not intended for individuals under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.",
    },
    {
      title: "Policy Updates",
      content:
        "We may update this Privacy Policy periodically. We will notify you of changes by posting the updated policy on this page and updating the 'Last updated' date.",
    },
  ];

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="mb-8 text-gray-500">
                  Last updated: {lastUpdated}
                </p>
                <div className="space-y-8">
                  {policySections.map((section, index) => (
                    <div key={index}>
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
            </div>

            {/* Sidebar with Contact Info */}
            <aside className="lg:w-1/3">
              <motion.div
                className="sticky top-24 bg-indigo-600 text-white rounded-lg p-8 shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <p className="mb-6 opacity-90">
                  If you have questions about this Privacy Policy, please
                  contact us:
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

export default PrivacyPolicySection;
