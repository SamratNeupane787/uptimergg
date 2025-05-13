import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "🌐 Uptime Monitoring",
      description:
        " Monitor your websites, servers, or APIs from multiple global locations with checks every minute.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Instant Alerts",
      description:
        "Get real-time alerts via email, SMS, or integrations like Slack and Discord when downtime strikes.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Performance Metrics",
      description:
        "Track response times, latency, and status history with beautiful, exportable reports.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "AI-Powered Analysis",
      description:
        "Automatically detect patterns in outages and get smart insights into what’s causing failures.",
      icon: <IconCloud />,
    },
    {
      title: " Public Status Pages",
      description:
        "Share your service status transparently with customers using customizable public status pages",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Simple Integrations",
      description:
        "Connect with tools you already use—Slack, PagerDuty, Webhooks, and more—with just a few clicks.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Multi-Step Checks",
      description:
        "Simulate real user journeys like login flows or checkout processes with custom scripted checks.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div id="features">
      <div>
        <h1 className=" text-center  text-5xl font-semibold ">
          Our Features
        </h1>
      </div>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div>
    
      <div
        className={cn(
          "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800"
        )}
      >
        {index < 4 && (
          <div className="opacity-0  dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0  dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-red-600 dark:text-neutral-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-red-800 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <p className="text-sm text-white-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    </div>
  );
};
