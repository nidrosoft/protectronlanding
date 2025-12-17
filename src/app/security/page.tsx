"use client";

import { motion } from "motion/react";
import { Shield, Lock, Globe, Server, Key, Eye, Users, Clock, CheckCircle2, AlertTriangle, FileText, Mail } from "lucide-react";
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
                        Enterprise Security
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Security at Protectron
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Your compliance data is sensitive. We treat it that way.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const CommitmentSection = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Our Security Commitment
                    </h2>
                    <p className="mt-6 text-lg text-tertiary">
                        Protectron is built from the ground up with security as a foundational requirement, not an afterthought. We understand that compliance data—including information about your AI systems, audit trails, and evidence—requires the highest levels of protection.
                    </p>
                    <p className="mt-4 text-lg text-tertiary">
                        We employ industry-leading security practices, maintain rigorous compliance certifications, and continuously invest in our security posture to earn and maintain your trust.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const InfrastructureSection = () => {
    const dataLocations = [
        { component: "Application Servers", location: "Frankfurt, Germany (eu-central-1)", provider: "AWS" },
        { component: "Database", location: "Frankfurt, Germany", provider: "AWS RDS" },
        { component: "File Storage", location: "Frankfurt, Germany", provider: "AWS S3" },
        { component: "CDN Edge", location: "EU Points of Presence", provider: "CloudFront" },
        { component: "Backups", location: "Frankfurt + Ireland", provider: "AWS" },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Infrastructure Security
                    </h2>
                    
                    <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 dark:border-brand-800 dark:bg-brand-900/20 p-6">
                        <div className="flex items-center gap-3">
                            <Globe className="h-6 w-6 text-brand-600" />
                            <h3 className="text-lg font-semibold text-primary">EU Data Residency</h3>
                        </div>
                        <p className="mt-3 text-tertiary">
                            All customer data is stored and processed exclusively within the European Union. <strong>Your data never leaves the EU.</strong> This isn't just a policy—it's architecturally enforced.
                        </p>
                    </div>

                    <div className="mt-8 overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Component</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Location</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Provider</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {dataLocations.map((item) => (
                                    <tr key={item.component}>
                                        <td className="px-4 py-3 text-sm font-medium text-primary">{item.component}</td>
                                        <td className="px-4 py-3 text-sm text-tertiary">{item.location}</td>
                                        <td className="px-4 py-3 text-sm text-brand-600">{item.provider}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="mt-12 text-lg font-semibold text-primary">Cloud Security</h3>
                    <p className="mt-4 text-tertiary">
                        Protectron is hosted on Amazon Web Services (AWS), leveraging their world-class security infrastructure:
                    </p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-secondary p-4">
                            <h4 className="font-semibold text-primary">Physical Security</h4>
                            <p className="mt-2 text-sm text-tertiary">24/7 security guards, biometric access controls, and comprehensive surveillance</p>
                        </div>
                        <div className="rounded-xl border border-primary bg-secondary p-4">
                            <h4 className="font-semibold text-primary">Network Security</h4>
                            <p className="mt-2 text-sm text-tertiary">Multi-layer DDoS protection, web application firewalls, and network isolation</p>
                        </div>
                        <div className="rounded-xl border border-primary bg-secondary p-4">
                            <h4 className="font-semibold text-primary">Compliance</h4>
                            <p className="mt-2 text-sm text-tertiary">AWS maintains SOC 2, ISO 27001, and numerous other certifications</p>
                        </div>
                        <div className="rounded-xl border border-primary bg-secondary p-4">
                            <h4 className="font-semibold text-primary">Availability</h4>
                            <p className="mt-2 text-sm text-tertiary">Multi-AZ deployment for high availability and disaster recovery</p>
                        </div>
                    </div>

                    <h3 className="mt-12 text-lg font-semibold text-primary">Network Architecture</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`┌─────────────────────────────────────────────────────────────────┐
│                         Internet                                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    CloudFront CDN + WAF                         │
│                    DDoS Protection Layer                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Application Load Balancer                    │
│                    TLS Termination (TLS 1.3)                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         VPC (Private)                           │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐       │
│  │  App Servers  │  │   Database    │  │  File Storage │       │
│  │  (Private)    │  │   (Private)   │  │   (Private)   │       │
│  └───────────────┘  └───────────────┘  └───────────────┘       │
└─────────────────────────────────────────────────────────────────┘`}</code>
                    </pre>
                    <p className="mt-4 text-sm text-tertiary">All internal services communicate over private networks. Database and storage services are not accessible from the public internet.</p>
                </motion.div>
            </div>
        </section>
    );
};

const EncryptionSection = () => {
    const encryptionTypes = [
        { type: "Database", encryption: "AES-256-GCM", keyManagement: "AWS KMS" },
        { type: "File Storage", encryption: "AES-256-GCM", keyManagement: "AWS KMS" },
        { type: "Backups", encryption: "AES-256-GCM", keyManagement: "AWS KMS" },
        { type: "Logs", encryption: "AES-256-GCM", keyManagement: "AWS KMS" },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Data Encryption
                    </h2>
                    
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <div className="flex items-center gap-3">
                                <Lock className="h-6 w-6 text-brand-600" />
                                <h3 className="text-lg font-semibold text-primary">Encryption in Transit</h3>
                            </div>
                            <p className="mt-4 text-tertiary">All data transmitted to and from Protectron is encrypted using TLS 1.3 (with TLS 1.2 as minimum).</p>
                            <ul className="mt-4 space-y-2 text-sm text-tertiary">
                                <li>• <strong>API Traffic:</strong> TLS 1.3 with strong cipher suites</li>
                                <li>• <strong>SDK Communication:</strong> TLS 1.3 with certificate pinning available</li>
                                <li>• <strong>Dashboard:</strong> HTTPS enforced with HSTS</li>
                                <li>• <strong>Internal Services:</strong> mTLS between microservices</li>
                            </ul>
                            <div className="mt-4 rounded-lg bg-secondary p-3">
                                <p className="text-xs font-medium text-primary">Cipher Suites:</p>
                                <p className="mt-1 text-xs text-tertiary font-mono">TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_GCM_SHA256</p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <div className="flex items-center gap-3">
                                <Key className="h-6 w-6 text-brand-600" />
                                <h3 className="text-lg font-semibold text-primary">Encryption at Rest</h3>
                            </div>
                            <p className="mt-4 text-tertiary">All stored data is encrypted using AES-256-GCM.</p>
                            <div className="mt-4 overflow-hidden rounded-lg border border-primary">
                                <table className="w-full text-sm">
                                    <thead className="bg-secondary">
                                        <tr>
                                            <th className="px-3 py-2 text-left font-medium text-primary">Data Type</th>
                                            <th className="px-3 py-2 text-left font-medium text-primary">Key Mgmt</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-primary">
                                        {encryptionTypes.map((item) => (
                                            <tr key={item.type}>
                                                <td className="px-3 py-2 text-tertiary">{item.type}</td>
                                                <td className="px-3 py-2 text-brand-600">{item.keyManagement}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4 text-sm text-tertiary">
                                <strong>Enterprise:</strong> Customer-managed keys (CMK) available for additional control.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const AccessControlSection = () => {
    const roles = [
        { role: "Owner", permissions: "Full access, billing, team management" },
        { role: "Admin", permissions: "Full access except billing" },
        { role: "Editor", permissions: "Create, edit, delete content; no team management" },
        { role: "Viewer", permissions: "Read-only access" },
        { role: "API Only", permissions: "Programmatic access only" },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Access Control
                    </h2>
                    
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-lg font-semibold text-primary">Authentication</h3>
                            <div className="mt-4 space-y-4">
                                <div className="rounded-xl border border-primary bg-secondary p-4">
                                    <h4 className="font-medium text-primary">User Authentication</h4>
                                    <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                        <li>• Email/password with strong requirements</li>
                                        <li>• Multi-factor authentication (MFA)</li>
                                        <li>• SSO integration (SAML 2.0, OIDC)</li>
                                        <li>• Automatic session expiration</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl border border-primary bg-secondary p-4">
                                    <h4 className="font-medium text-primary">API Authentication</h4>
                                    <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                        <li>• API keys with configurable scopes</li>
                                        <li>• Key rotation support</li>
                                        <li>• Rate limiting per key</li>
                                        <li>• IP allowlisting (Enterprise)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">Role-Based Access Control</h3>
                            <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                                <table className="w-full text-sm">
                                    <thead className="bg-secondary">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold text-primary">Role</th>
                                            <th className="px-4 py-3 text-left font-semibold text-primary">Permissions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                        {roles.map((item) => (
                                            <tr key={item.role}>
                                                <td className="px-4 py-3 font-medium text-primary">{item.role}</td>
                                                <td className="px-4 py-3 text-tertiary">{item.permissions}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 rounded-xl border border-primary bg-secondary p-6">
                        <h3 className="text-lg font-semibold text-primary">SSO Integration (Enterprise)</h3>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <span className="rounded-full bg-primary px-3 py-1 text-sm text-tertiary">Okta</span>
                            <span className="rounded-full bg-primary px-3 py-1 text-sm text-tertiary">Azure AD</span>
                            <span className="rounded-full bg-primary px-3 py-1 text-sm text-tertiary">Google Workspace</span>
                            <span className="rounded-full bg-primary px-3 py-1 text-sm text-tertiary">OneLogin</span>
                            <span className="rounded-full bg-primary px-3 py-1 text-sm text-tertiary">SAML 2.0</span>
                            <span className="rounded-full bg-primary px-3 py-1 text-sm text-tertiary">OIDC</span>
                        </div>
                        <ul className="mt-4 space-y-1 text-sm text-tertiary">
                            <li>• Just-in-time provisioning</li>
                            <li>• SCIM for user lifecycle management</li>
                            <li>• Enforce SSO-only authentication</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ComplianceSection = () => {
    const certifications = [
        { name: "GDPR", status: "Compliant", details: "EU data residency, DPA available", icon: CheckCircle2, color: "text-success-500" },
        { name: "SOC 2 Type II", status: "In Progress", details: "Expected Q2 2025", icon: Clock, color: "text-warning-500" },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Compliance & Certifications
                    </h2>
                    
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        {certifications.map((cert) => (
                            <div key={cert.name} className="rounded-xl border border-primary bg-primary p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-primary">{cert.name}</h3>
                                    <cert.icon className={`h-6 w-6 ${cert.color}`} />
                                </div>
                                <p className="mt-2 text-sm font-medium text-brand-600">{cert.status}</p>
                                <p className="mt-1 text-sm text-tertiary">{cert.details}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-xl border border-primary bg-primary p-6">
                        <h3 className="text-lg font-semibold text-primary">GDPR Compliance</h3>
                        <p className="mt-2 text-tertiary">Protectron is fully compliant with the General Data Protection Regulation:</p>
                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                <span className="text-sm text-tertiary"><strong>DPA:</strong> Available for all customers</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                <span className="text-sm text-tertiary"><strong>Data Subject Rights:</strong> Tools to fulfill requests</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                <span className="text-sm text-tertiary"><strong>Privacy by Design:</strong> Built into architecture</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                <span className="text-sm text-tertiary"><strong>EU Data Residency:</strong> All data stored in EU</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const IncidentResponseSection = () => {
    const severities = [
        { level: "Critical", description: "Active data breach, service down", response: "< 1 hour" },
        { level: "High", description: "Security vulnerability, partial outage", response: "< 4 hours" },
        { level: "Medium", description: "Potential vulnerability, degraded service", response: "< 24 hours" },
        { level: "Low", description: "Minor issues, no immediate risk", response: "< 72 hours" },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Incident Response
                    </h2>
                    
                    <div className="mt-8 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Severity</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Description</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Response Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {severities.map((item) => (
                                    <tr key={item.level}>
                                        <td className="px-4 py-3 text-sm font-medium text-primary">{item.level}</td>
                                        <td className="px-4 py-3 text-sm text-tertiary">{item.description}</td>
                                        <td className="px-4 py-3 text-sm font-medium text-brand-600">{item.response}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-xl border border-primary bg-secondary p-6">
                        <h3 className="text-lg font-semibold text-primary">Breach Notification</h3>
                        <p className="mt-2 text-tertiary">In the event of a data breach:</p>
                        <ul className="mt-4 space-y-2 text-sm text-tertiary">
                            <li>• <strong>Regulators:</strong> Notified within 72 hours per GDPR requirements</li>
                            <li>• <strong>Customers:</strong> Notified without undue delay</li>
                            <li>• <strong>Communication:</strong> Clear information about impact and remediation</li>
                            <li>• <strong>Support:</strong> Dedicated resources for affected customers</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const AvailabilitySection = () => {
    const slas = [
        { plan: "Starter", sla: "99.5%" },
        { plan: "Growth", sla: "99.9%" },
        { plan: "Scale", sla: "99.9%" },
        { plan: "Enterprise", sla: "99.95%" },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Availability & Reliability
                    </h2>
                    
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="text-lg font-semibold text-primary">Uptime SLA</h3>
                            <div className="mt-4 space-y-3">
                                {slas.map((item) => (
                                    <div key={item.plan} className="flex items-center justify-between">
                                        <span className="text-tertiary">{item.plan}</span>
                                        <span className="font-semibold text-brand-600">{item.sla}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="text-lg font-semibold text-primary">Backup & Recovery</h3>
                            <ul className="mt-4 space-y-2 text-sm text-tertiary">
                                <li>• <strong>Database:</strong> Continuous replication, point-in-time recovery</li>
                                <li>• <strong>File Storage:</strong> Cross-region replication</li>
                                <li>• <strong>Backup Frequency:</strong> Continuous + daily snapshots</li>
                                <li>• <strong>Retention:</strong> 30 days for backups</li>
                                <li>• <strong>RTO:</strong> &lt; 4 hours</li>
                                <li>• <strong>RPO:</strong> &lt; 1 hour</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const FAQSection = () => {
    const faqs = [
        { q: "Where is my data stored?", a: "All data is stored in AWS EU (Frankfurt, Germany). Data never leaves the European Union." },
        { q: "Is my data encrypted?", a: "Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256-GCM)." },
        { q: "Can I use my own encryption keys?", a: "Yes, Enterprise customers can use customer-managed keys (CMK) through AWS KMS." },
        { q: "Do you have SOC 2?", a: "We have SOC 2 Type I and are currently pursuing Type II certification (expected Q2 2025)." },
        { q: "Can I get a DPA?", a: "Yes. Our DPA is available for all customers. Contact legal@protectron.ai or download from your dashboard." },
        { q: "Do you support SSO?", a: "Yes, Enterprise plans include SSO support for SAML 2.0 and OIDC providers." },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Frequently Asked Questions
                    </h2>
                    <div className="mt-8 space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="rounded-xl border border-primary bg-secondary p-4">
                                <p className="font-semibold text-primary">{faq.q}</p>
                                <p className="mt-2 text-sm text-tertiary">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Security Contact
                    </h2>
                    
                    <div className="mt-8 rounded-xl border border-primary bg-primary p-6">
                        <h3 className="text-lg font-semibold text-primary">Reporting Security Issues</h3>
                        <p className="mt-2 text-tertiary">If you discover a security vulnerability, please report it responsibly:</p>
                        <div className="mt-4 flex items-center gap-3">
                            <Mail className="h-5 w-5 text-brand-600" />
                            <a href="mailto:security@protectron.ai" className="text-brand-600 hover:underline">security@protectron.ai</a>
                        </div>
                        <div className="mt-4 rounded-lg bg-secondary p-4">
                            <p className="text-sm font-medium text-primary">Our Commitment:</p>
                            <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                <li>• Acknowledge receipt within 24 hours</li>
                                <li>• Provide status updates</li>
                                <li>• Credit researchers (with permission)</li>
                                <li>• No legal action against good-faith reporters</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 rounded-xl border border-primary bg-primary p-6">
                        <h3 className="text-lg font-semibold text-primary">Security Documentation</h3>
                        <p className="mt-2 text-tertiary">Available on request:</p>
                        <ul className="mt-4 space-y-2 text-sm text-tertiary">
                            <li>• SOC 2 Type I Report</li>
                            <li>• Penetration Test Executive Summary</li>
                            <li>• Security Questionnaire (SIG, CAIQ, custom)</li>
                            <li>• Data Processing Agreement (DPA)</li>
                            <li>• Business Associate Agreement (BAA) for healthcare</li>
                            <li>• Insurance Certificates</li>
                        </ul>
                        <Button href="mailto:security@protectron.ai" color="secondary" size="md" className="mt-4">
                            Request Documentation
                        </Button>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://trust.protectron.ai" className="rounded-xl border border-primary bg-primary px-4 py-3 text-sm font-medium text-primary hover:border-brand-300 transition-colors">
                            Trust Center →
                        </a>
                        <a href="https://status.protectron.ai" className="rounded-xl border border-primary bg-primary px-4 py-3 text-sm font-medium text-primary hover:border-brand-300 transition-colors">
                            Status Page →
                        </a>
                        <a href="mailto:security@protectron.ai" className="rounded-xl border border-primary bg-primary px-4 py-3 text-sm font-medium text-primary hover:border-brand-300 transition-colors">
                            Security Contact →
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-tertiary">
                        This security page is reviewed and updated quarterly. Last updated: December 2025.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default function SecurityPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <CommitmentSection />
            <InfrastructureSection />
            <EncryptionSection />
            <AccessControlSection />
            <ComplianceSection />
            <IncidentResponseSection />
            <AvailabilitySection />
            <FAQSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
