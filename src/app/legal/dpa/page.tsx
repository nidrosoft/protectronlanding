"use client";

import { motion } from "motion/react";
import { FileText, Shield, Globe, Lock, Users, Clock, Mail } from "lucide-react";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";
import { Footer } from "@/components/shared/footer";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-primary pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent dark:from-brand-900/20" />
            <div className="relative mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400">
                        Legal
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Data Processing Agreement
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        GDPR-compliant data processing terms for Protectron services.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-4 text-sm text-tertiary">
                        <span>Version 2.0</span>
                        <span>•</span>
                        <span>Effective: January 1, 2025</span>
                        <span>•</span>
                        <span>Last Updated: December 2025</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const IntroSection = () => {
    return (
        <section className="bg-secondary py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-tertiary leading-relaxed">
                        This Data Processing Agreement ("<strong>DPA</strong>") forms part of the Agreement between Protectron B.V. ("<strong>Protectron</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>Processor</strong>") and the entity identified in the applicable Order Form or subscription agreement ("<strong>Customer</strong>", "<strong>you</strong>", or "<strong>Controller</strong>") for the provision of the Protectron platform and related services (the "<strong>Services</strong>").
                    </p>
                    <p className="mt-4 text-tertiary leading-relaxed">
                        This DPA reflects the parties' agreement with regard to the Processing of Personal Data in accordance with the requirements of Data Protection Laws, including the General Data Protection Regulation (EU) 2016/679 ("<strong>GDPR</strong>").
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const DefinitionsSection = () => {
    const definitions = [
        { term: "Data Protection Laws", definition: "All applicable laws and regulations relating to the processing of Personal Data, including (i) the GDPR; (ii) national implementing laws in EU Member States; (iii) the UK GDPR and UK Data Protection Act 2018; and (iv) any other applicable data protection legislation." },
        { term: "Data Subject", definition: "An identified or identifiable natural person whose Personal Data is Processed." },
        { term: "Personal Data", definition: "Any information relating to a Data Subject that is Processed by Protectron on behalf of Customer in connection with the Services." },
        { term: "Processing", definition: "Any operation performed on Personal Data, including collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, disclosure, dissemination, restriction, erasure, or destruction." },
        { term: "Security Incident", definition: "Any unauthorized access to, or acquisition, use, loss, destruction, or disclosure of Personal Data." },
        { term: "Sub-processor", definition: "Any third party engaged by Protectron to Process Personal Data on behalf of Customer." },
        { term: "Standard Contractual Clauses (SCCs)", definition: "The standard contractual clauses for the transfer of personal data to third countries adopted by the European Commission Decision (EU) 2021/914." },
    ];

    return (
        <section className="bg-primary py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        1. Definitions
                    </h2>
                    <div className="mt-8 space-y-4">
                        {definitions.map((item) => (
                            <div key={item.term} className="rounded-lg border border-primary bg-secondary p-4">
                                <p className="font-semibold text-primary">"{item.term}"</p>
                                <p className="mt-2 text-sm text-tertiary">{item.definition}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-tertiary">Terms not defined herein shall have the meaning set forth in the GDPR.</p>
                </motion.div>
            </div>
        </section>
    );
};

const ScopeSection = () => {
    const processingActivities = [
        "EU AI Act compliance management",
        "AI system risk classification",
        "Requirement tracking and documentation",
        "Audit trail logging and evidence management",
        "Document generation",
        "Compliance reporting",
    ];

    const dataSubjects = [
        "Customer's employees and contractors",
        "Customer's end users interacting with Customer's AI systems",
        "Individuals whose data appears in audit trails or compliance documentation",
    ];

    const dataTypes = [
        "Contact information (names, email addresses)",
        "Employment information (job titles, departments)",
        "AI interaction data (as logged by Customer's SDK integration)",
        "User identifiers (which may be hashed)",
        "Any other Personal Data Customer chooses to input into the Services",
    ];

    return (
        <section className="bg-secondary py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        2. Scope and Roles
                    </h2>
                    
                    <div className="mt-8 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-primary">2.1 Customer as Controller</h3>
                            <p className="mt-2 text-tertiary">Customer is the Controller of Personal Data. Customer determines the purposes and means of Processing Personal Data and is responsible for compliance with Data Protection Laws as they apply to Controllers.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">2.2 Protectron as Processor</h3>
                            <p className="mt-2 text-tertiary">Protectron is the Processor of Personal Data. Protectron Processes Personal Data only on behalf of and in accordance with Customer's documented instructions.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">2.3 Nature of Processing</h3>
                            <p className="mt-2 text-tertiary">Protectron Processes Personal Data to provide the Services, which include:</p>
                            <ul className="mt-3 space-y-2">
                                {processingActivities.map((activity) => (
                                    <li key={activity} className="flex items-start gap-2 text-tertiary">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                                        {activity}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">2.4 Categories of Data Subjects</h3>
                            <ul className="mt-3 space-y-2">
                                {dataSubjects.map((subject) => (
                                    <li key={subject} className="flex items-start gap-2 text-tertiary">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                                        {subject}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">2.5 Types of Personal Data</h3>
                            <ul className="mt-3 space-y-2">
                                {dataTypes.map((type) => (
                                    <li key={type} className="flex items-start gap-2 text-tertiary">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                                        {type}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">2.6 Duration</h3>
                            <p className="mt-2 text-tertiary">Protectron will Process Personal Data for the duration of the Agreement, plus any retention period specified herein or required by law.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const CustomerResponsibilitiesSection = () => {
    return (
        <section className="bg-primary py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        3. Customer Responsibilities
                    </h2>
                    
                    <div className="mt-8 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-primary">3.1 Lawful Basis</h3>
                            <p className="mt-2 text-tertiary">Customer represents and warrants that:</p>
                            <ul className="mt-3 space-y-2 text-tertiary">
                                <li>(a) Customer has a lawful basis for Processing Personal Data;</li>
                                <li>(b) Customer has provided appropriate notices to Data Subjects;</li>
                                <li>(c) Customer has obtained any necessary consents;</li>
                                <li>(d) Customer's use of the Services complies with Data Protection Laws.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">3.2 Instructions</h3>
                            <p className="mt-2 text-tertiary">Customer shall provide documented instructions for Processing. The Agreement, including this DPA, constitutes Customer's complete instructions at the time of signing. Customer may provide additional instructions consistent with the Agreement.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">3.3 Data Accuracy</h3>
                            <p className="mt-2 text-tertiary">Customer is responsible for ensuring the accuracy of Personal Data submitted to the Services.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">3.4 Security Configuration</h3>
                            <p className="mt-2 text-tertiary">Customer is responsible for:</p>
                            <ul className="mt-3 space-y-2 text-tertiary">
                                <li>(a) Maintaining the security of Customer's account credentials;</li>
                                <li>(b) Configuring appropriate access controls within the Services;</li>
                                <li>(c) Enabling available security features (e.g., MFA, SSO);</li>
                                <li>(d) Configuring PII redaction settings in the SDK if desired.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ProtectronObligationsSection = () => {
    return (
        <section className="bg-secondary py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        4. Protectron's Obligations
                    </h2>
                    
                    <div className="mt-8 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-primary">4.1 Processing Instructions</h3>
                            <p className="mt-2 text-tertiary">Protectron shall:</p>
                            <ul className="mt-3 space-y-2 text-tertiary">
                                <li>(a) Process Personal Data only on documented instructions from Customer, unless required by law;</li>
                                <li>(b) Inform Customer if, in Protectron's opinion, an instruction infringes Data Protection Laws;</li>
                                <li>(c) Immediately inform Customer if legally compelled to Process Personal Data contrary to instructions.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">4.2 Confidentiality</h3>
                            <p className="mt-2 text-tertiary">Protectron shall ensure that persons authorized to Process Personal Data:</p>
                            <ul className="mt-3 space-y-2 text-tertiary">
                                <li>(a) Have committed to confidentiality or are under statutory obligation of confidentiality;</li>
                                <li>(b) Process Personal Data only on Customer's instructions.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">4.3 Security Measures</h3>
                            <p className="mt-2 text-tertiary">Protectron shall implement and maintain appropriate technical and organizational measures to protect Personal Data, as described in <strong>Annex II</strong> (Security Measures).</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">4.4 Sub-processing</h3>
                            <p className="mt-2 text-tertiary">Protectron shall:</p>
                            <ul className="mt-3 space-y-2 text-tertiary">
                                <li>(a) Not engage a Sub-processor without Customer's prior authorization;</li>
                                <li>(b) Customer hereby provides general authorization for Sub-processors listed in <strong>Annex III</strong>;</li>
                                <li>(c) Notify Customer of any intended changes to Sub-processors at least 30 days in advance;</li>
                                <li>(d) Impose data protection obligations on Sub-processors equivalent to those in this DPA;</li>
                                <li>(e) Remain liable for Sub-processors' compliance with this DPA.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">4.5 Data Subject Rights</h3>
                            <p className="mt-2 text-tertiary">Protectron shall:</p>
                            <ul className="mt-3 space-y-2 text-tertiary">
                                <li>(a) Assist Customer in responding to Data Subject requests (access, rectification, erasure, portability, restriction, objection);</li>
                                <li>(b) Provide tools within the Services to help Customer fulfill such requests;</li>
                                <li>(c) Promptly notify Customer if Protectron receives a request directly from a Data Subject.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">4.6 Data Protection Impact Assessments</h3>
                            <p className="mt-2 text-tertiary">Protectron shall provide reasonable assistance to Customer with data protection impact assessments and prior consultations with supervisory authorities, to the extent required under Data Protection Laws.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">4.7 Security Incident Response</h3>
                            <p className="mt-2 text-tertiary">In the event of a Security Incident:</p>
                            <ul className="mt-3 space-y-2 text-tertiary">
                                <li>(a) Protectron shall notify Customer without undue delay, and in any event within 72 hours of becoming aware;</li>
                                <li>(b) Notification shall include available details about the incident, affected data, and remediation steps;</li>
                                <li>(c) Protectron shall cooperate with Customer's investigation and mitigation efforts;</li>
                                <li>(d) Protectron shall document Security Incidents and maintain records for Customer review.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">4.8 Audit Rights</h3>
                            <p className="mt-2 text-tertiary">Protectron shall:</p>
                            <ul className="mt-3 space-y-2 text-tertiary">
                                <li>(a) Make available information necessary to demonstrate compliance with this DPA;</li>
                                <li>(b) Allow for and contribute to audits conducted by Customer or an independent auditor;</li>
                                <li>(c) Audits shall be conducted with reasonable notice, during business hours, and subject to confidentiality;</li>
                                <li>(d) Protectron may satisfy audit obligations by providing relevant certifications or audit reports (e.g., SOC 2).</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">4.9 Deletion and Return</h3>
                            <p className="mt-2 text-tertiary">Upon termination of the Agreement:</p>
                            <ul className="mt-3 space-y-2 text-tertiary">
                                <li>(a) Customer may export Personal Data using the Services' export functionality;</li>
                                <li>(b) Protectron shall delete Personal Data within 90 days of termination, unless retention is required by law;</li>
                                <li>(c) Protectron shall certify deletion upon Customer's request.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const InternationalTransfersSection = () => {
    return (
        <section className="bg-primary py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        5. International Data Transfers
                    </h2>
                    
                    <div className="mt-8 space-y-6">
                        <div className="rounded-xl border border-brand-200 bg-brand-50 dark:border-brand-800 dark:bg-brand-900/20 p-6">
                            <div className="flex items-center gap-3">
                                <Globe className="h-6 w-6 text-brand-600" />
                                <h3 className="text-lg font-semibold text-primary">5.1 EU Data Residency</h3>
                            </div>
                            <p className="mt-3 text-tertiary">Protectron stores and processes all Personal Data within the European Economic Area (EEA). Customer data is stored in <strong>AWS EU (Frankfurt, Germany)</strong>.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">5.2 Restricted Transfers</h3>
                            <p className="mt-2 text-tertiary">If Processing involves transfer of Personal Data outside the EEA, Protectron shall ensure appropriate safeguards are in place:</p>
                            <ul className="mt-3 space-y-2 text-tertiary">
                                <li>(a) Transfer to countries with an adequacy decision;</li>
                                <li>(b) Standard Contractual Clauses (Module Two: Controller to Processor); or</li>
                                <li>(c) Other valid transfer mechanisms under Data Protection Laws.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">5.3 Standard Contractual Clauses</h3>
                            <p className="mt-2 text-tertiary">Where SCCs apply:</p>
                            <ul className="mt-3 space-y-2 text-tertiary">
                                <li>(a) The parties agree to be bound by the SCCs incorporated by reference in <strong>Annex IV</strong>;</li>
                                <li>(b) For transfers from the EEA, Protectron is the "data importer" and Customer is the "data exporter";</li>
                                <li>(c) The technical and organizational measures in <strong>Annex II</strong> apply.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">5.4 UK Transfers</h3>
                            <p className="mt-2 text-tertiary">For transfers subject to UK data protection law:</p>
                            <ul className="mt-3 space-y-2 text-tertiary">
                                <li>(a) The UK Addendum to the EU SCCs shall apply;</li>
                                <li>(b) References to the GDPR include the UK GDPR.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SecurityMeasuresSection = () => {
    const measures = [
        {
            title: "Physical Security",
            items: [
                "Data center access restricted to authorized personnel",
                "24/7 security monitoring and surveillance",
                "Environmental controls (fire suppression, climate control)",
                "Provided by AWS with SOC 2 and ISO 27001 certification",
            ],
        },
        {
            title: "Access Control",
            items: [
                "Role-based access control (RBAC)",
                "Multi-factor authentication (MFA) available",
                "SSO integration for Enterprise customers",
                "Automatic session expiration",
                "Password complexity requirements",
            ],
        },
        {
            title: "Data Encryption",
            items: [
                "TLS 1.3 (minimum TLS 1.2) for data in transit",
                "AES-256-GCM encryption for data at rest",
                "AWS KMS key management",
                "Customer-managed keys available (Enterprise)",
            ],
        },
        {
            title: "Network Security",
            items: [
                "Virtual Private Cloud (VPC) isolation",
                "Web Application Firewall (WAF)",
                "DDoS protection",
                "Intrusion detection and prevention",
            ],
        },
    ];

    return (
        <section className="bg-secondary py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Annex II: Security Measures
                    </h2>
                    <p className="mt-4 text-tertiary">Protectron implements the following technical and organizational measures:</p>
                    
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        {measures.map((measure) => (
                            <div key={measure.title} className="rounded-xl border border-primary bg-primary p-6">
                                <h3 className="font-semibold text-primary">{measure.title}</h3>
                                <ul className="mt-4 space-y-2">
                                    {measure.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SubProcessorsSection = () => {
    const subProcessors = [
        { name: "Amazon Web Services (AWS)", purpose: "Cloud infrastructure, hosting, storage", location: "EU (Frankfurt, Germany)", safeguards: "DPA, SOC 2, ISO 27001" },
        { name: "Stripe, Inc.", purpose: "Payment processing", location: "USA", safeguards: "DPA, SCCs, PCI DSS" },
        { name: "OpenAI, LLC", purpose: "AI-powered document generation", location: "USA", safeguards: "DPA, SCCs, SOC 2" },
        { name: "Resend, Inc.", purpose: "Transactional email delivery", location: "USA", safeguards: "DPA, SCCs" },
        { name: "Vercel, Inc.", purpose: "Application hosting", location: "EU/USA", safeguards: "DPA, SCCs" },
    ];

    return (
        <section className="bg-primary py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Annex III: Sub-Processors
                    </h2>
                    <p className="mt-4 text-tertiary">Customer authorizes Protectron to use the following Sub-processors:</p>
                    
                    <div className="mt-8 overflow-x-auto">
                        <table className="w-full min-w-[600px]">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Sub-processor</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Purpose</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Location</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Safeguards</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {subProcessors.map((sp) => (
                                    <tr key={sp.name}>
                                        <td className="px-4 py-3 text-sm font-medium text-primary">{sp.name}</td>
                                        <td className="px-4 py-3 text-sm text-tertiary">{sp.purpose}</td>
                                        <td className="px-4 py-3 text-sm text-tertiary">{sp.location}</td>
                                        <td className="px-4 py-3 text-sm text-brand-600">{sp.safeguards}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="mt-6 text-sm text-tertiary">
                        <strong>Updates:</strong> Protectron will update this list and notify Customer at least 30 days before engaging a new Sub-processor. Customer may object to a new Sub-processor by contacting privacy@protectron.ai.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    return (
        <section className="bg-secondary py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Contact Information
                    </h2>
                    <p className="mt-4 text-tertiary">
                        This DPA is incorporated into and forms part of the Agreement between Customer and Protectron. By using the Services, Customer agrees to this DPA.
                    </p>
                    <p className="mt-4 text-tertiary">
                        For a countersigned copy of this DPA, please contact <a href="mailto:legal@protectron.ai" className="text-brand-600 hover:underline">legal@protectron.ai</a>.
                    </p>
                    
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        <a href="mailto:dpo@protectron.ai" className="flex items-center gap-3 rounded-xl border border-primary bg-primary p-4 transition-colors hover:border-brand-300">
                            <Shield className="h-5 w-5 text-brand-600" />
                            <div>
                                <p className="text-sm font-medium text-primary">Data Protection Officer</p>
                                <p className="text-sm text-brand-600">dpo@protectron.ai</p>
                            </div>
                        </a>
                        <a href="mailto:legal@protectron.ai" className="flex items-center gap-3 rounded-xl border border-primary bg-primary p-4 transition-colors hover:border-brand-300">
                            <FileText className="h-5 w-5 text-brand-600" />
                            <div>
                                <p className="text-sm font-medium text-primary">Legal Inquiries</p>
                                <p className="text-sm text-brand-600">legal@protectron.ai</p>
                            </div>
                        </a>
                        <a href="mailto:privacy@protectron.ai" className="flex items-center gap-3 rounded-xl border border-primary bg-primary p-4 transition-colors hover:border-brand-300">
                            <Lock className="h-5 w-5 text-brand-600" />
                            <div>
                                <p className="text-sm font-medium text-primary">Privacy Inquiries</p>
                                <p className="text-sm text-brand-600">privacy@protectron.ai</p>
                            </div>
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-tertiary italic">
                        This DPA is provided for informational purposes. For the legally binding version, please request a signed copy from legal@protectron.ai.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default function DPAPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <IntroSection />
            <DefinitionsSection />
            <ScopeSection />
            <CustomerResponsibilitiesSection />
            <ProtectronObligationsSection />
            <InternationalTransfersSection />
            <SecurityMeasuresSection />
            <SubProcessorsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
