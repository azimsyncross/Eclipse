import { motion } from 'framer-motion';
import {  AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';


const RefundPolicySection = () => {
    const sections = [
        { title: "Monthly Service Plans", content: "First Month Guarantee: If you are not satisfied within the first 30 days, you may request a refund for the current month's fee. You may cancel anytime with 30 days written notice. We do not provide partial refunds for unused portions of a billing cycle." },
        { title: "Annual Service Plans", content: "60-Day Guarantee: If not satisfied within the first 60 days, you may request a prorated refund for the unused portion. No refunds are available after the initial 60-day period." },
        { title: "Setup Fees and One-Time Projects", content: "Setup fees are non-refundable once work has begun. For project-based work, refunds are considered only if we fail to deliver agreed-upon deliverables. No refunds for completed work." },
        { title: "Advertising Spend", content: "Advertising budget paid to platforms (e.g., Google, Facebook) is non-refundable. Management fees follow our standard service plan refund policy. Unused ad budget remains in your ad accounts." },
        { title: "Refund Exclusions", content: "Refunds will not be provided for failure to provide necessary access/approvals, changes in business priorities, dissatisfaction due to factors beyond our control, or violation of our terms." },
        { title: "Refund Request Process", content: "To request a refund, contact us in writing at reyescooperiaz843@hotmail.com. Include your account info and reason. Allow 5-10 business days for review. Approved refunds are processed within 10-15 business days to the original payment method." },
        { title: "Alternative Solutions", content: "Instead of a refund, we may offer service credits, additional services at no charge, or extended service periods." },
        { title: "Chargeback Policy", content: "Initiating a chargeback without contacting us may result in immediate service suspension, forfeiture of credits, and additional fees." }
    ];

    return (
        <>
            
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md mb-8">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <AlertTriangle className="h-5 w-5 text-yellow-500" aria-hidden="true" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-yellow-800">
                                                <span className="font-bold">Important:</span> Due to the specialized nature of our services, refunds are evaluated on a case-by-case basis and are subject to the conditions outlined below.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    {sections.map((section, index) => (
                                        <div key={index}>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                                {index + 1}. {section.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">{section.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3">
                            <motion.div
                                className="sticky top-24 bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-8"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Assistance?</h3>
                                <p className="mb-6 text-gray-600">
                                    Before requesting a refund, please contact us. Our team is dedicated to finding solutions and ensuring your satisfaction. Many issues can be resolved through clear communication.
                                </p>
                                <div className="space-y-2">
                                  <Link to="/contact" className="font-semibold text-indigo-700 hover:text-indigo-900">Contact Support →</Link>
                                </div>
                            </motion.div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RefundPolicySection;