import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Customize Your Project",
      description:
        "Choose floors, stairs, or both. Select your size, materials, and preferred finish.",
    },
    {
      id: 2,
      title: "Get Instant Pricing",
      description:
        "See your estimated cost in real-time as you configure your project details.",
    },
    {
      id: 3,
      title: "Professional Installation",
      description:
        "Our experienced team handles everything from old flooring removal to final installation.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-gray-900">
          How It Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              {/* Number Circle */}
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <span className="text-xl font-medium text-gray-700">
                  {step.id}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl  mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
