"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Goldman Sachs",
      role: "Software Engineer Intern",
      duration: "Jun 2023 – Sep 2023",
      logo: "/goldman.png",
      description: [
        "Contributed to the Trade Analytics and Reporting Platform, enhancing backend microservices that process high-frequency financial transactions in real time.",
        "Developed RESTful APIs using Java, Spring Boot, and Kafka to optimize trade aggregation pipelines, reducing data processing latency by 25%.",
        "Integrated Redis caching and parallel processing for analytics dashboards, improving query response times by 40%.",
        "Collaborated with cross-functional teams to containerize services using Docker and deployed microservices on AWS ECS with CI/CD pipelines using Jenkins.",
        "Created observability dashboards in Grafana and Prometheus to monitor service uptime and system load, improving incident response time by 35%.",
      ],
    },
    {
      company: "Qualcomm",
      role: "Software Engineer Intern",
      duration: "Jan 2023 – May 2023",
      logo: "/qualcomm.png",
      description: [
        "Worked in the IoT Devices and Connectivity team, building distributed systems for real-time telemetry and device diagnostics.",
        "Designed and implemented Node.js/Express microservices to process millions of device health events daily and publish updates to AWS SNS/SQS.",
        "Improved performance by replacing synchronous HTTP polling with asynchronous WebSocket communication, reducing latency by 30%.",
        "Created React-based internal dashboard visualizing device status, logs, and metrics for over 100,000 connected devices.",
        "Implemented automated unit tests (Jest) and load testing (Locust) ensuring >98% uptime and reliability across microservices.",
      ],
    },
    {
      company: "Cognizant",
      role: "Software Engineer",
      duration: "Aug 2020 – Dec 2021",
      logo: "/cognizant.png",
      description: [
        "Developed and deployed enterprise-level web applications for a major retail client using React, Node.js, and AWS.",
        "Built scalable APIs and integrated third-party payment gateways (Stripe) and email automation (SendGrid).",
        "Migrated legacy .NET APIs to Node.js microservices, improving deployment flexibility and cutting infrastructure cost by 20%.",
        "Implemented CI/CD pipelines using GitHub Actions and AWS CodePipeline, streamlining deployment workflows.",
        "Mentored 3 junior developers on full-stack best practices and code reviews, fostering a culture of clean, modular design.",
      ],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h1>

      <div className="space-y-10 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-card p-8 rounded-2xl shadow-lg border border-border flex flex-col sm:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              width={90}
              height={90}
              className="object-contain rounded-lg"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold">{exp.company}</h2>
              <p className="text-text-muted mb-2">
                {exp.role} — <span className="italic">{exp.duration}</span>
              </p>
              <ul className="list-disc list-inside text-text-muted space-y-2">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
