import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Layout,
  Database,
  Search,
  ArrowLeftRight,
  Wrench,
  Cloud,
  ShieldAlert,
  Users,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Services() {
  const servicesList = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites designed to strengthen your brand, improve user experience, and convert visitors into customers. From corporate websites to eCommerce platforms, every solution is optimized for speed, SEO, and scalability.',
      tags: ['React', 'Next.js', 'WordPress', 'Laravel']
    },
    {
      icon: Layout,
      title: 'Custom Web Applications',
      description: 'Tailor-made business applications, customer portals, SaaS platforms, and internal management systems built to streamline operations and support future growth.',
      tags: ['React', 'Laravel', 'Node.js', 'PostgreSQL']
    },
    {
      icon: Database,
      title: 'ERP Solutions',
      description: 'Custom ERP systems that centralize inventory, finance, HR, procurement, manufacturing, and business operations into one secure and scalable platform.',
      tags: ['Inventory', 'Supply Chain', 'Finance', 'Reporting']
    },
    {
      icon: Cpu,
      title: 'AI Automation & Business Workflows',
      description: 'Automate repetitive tasks, streamline business processes, and improve decision-making with AI-powered workflows, intelligent integrations, and custom automation solutions.',
      tags: ['AI Workflows', 'Chatbots', 'Process Automation', 'API Integration']
    },
    {
      icon: Search,
      title: 'Technical SEO & Performance',
      description: "Improve your website's visibility, loading speed, and search performance through technical SEO, Core Web Vitals optimization, structured data, and website audits.",
      tags: ['Technical SEO', 'Core Web Vitals', 'Schema', 'Performance Optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Securely migrate applications, modernize infrastructure, and deploy scalable cloud environments that support business continuity and future expansion.',
      tags: ['Cloud Migration', 'Infrastructure', 'Backup', 'Disaster Recovery']
    },
    {
      icon: Wrench,
      title: 'Support & Maintenance',
      description: 'Keep your digital platforms secure, up to date, and performing at their best with proactive monitoring, security updates, performance optimization, and continuous improvements.',
      tags: ['Monitoring', 'Security Updates', 'Performance', 'Ongoing Support']
    },
    {
      icon: ShieldAlert,
      title: 'Security & Compliance',
      description: 'Protect your applications and business data with secure development practices, access control, vulnerability management, and enterprise-grade security measures.',
      tags: ['Security Audits', 'Access Control', 'Data Protection', 'Cloud Security']
    },
    {
      icon: ArrowLeftRight,
      title: 'CRM & Business Integrations',
      description: 'Connect your CRM, ERP, accounting software, payment gateways, and third-party applications to create efficient, automated workflows across your business.',
      tags: ['SuiteCRM', 'APIs', 'Payment Systems', 'Business Integrations']
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Core Capabilities"
          title="End-to-End Digital Solutions Built for Business Growth"
          subtitle="From high-performance websites and custom software to ERP systems, AI automation, and cloud infrastructure, we help businesses design, develop, and scale digital solutions that improve efficiency, customer experience, and long-term growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                className="group relative flex flex-col p-[2px] bg-white rounded-2xl border border-slate-200 hover:border-transparent transition-all duration-300 overflow-hidden cursor-pointer hover-magic-glow"
              >
                <div className="absolute inset-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none magic-border-bg z-0"></div>
                <div className="relative z-10 bg-white rounded-[14px] p-5 sm:p-6 w-full h-full flex flex-col">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-[14px] bg-slate-900 text-white flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                    {service.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
