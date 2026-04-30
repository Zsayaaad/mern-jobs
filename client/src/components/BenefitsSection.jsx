const BENEFITS = [
  {
    title: "TRACK",
    description:
      "Zero-friction application tracking. Every application, every stage, every interaction logged in a high-speed database designed for volume.",
    icon: "location_searching",
    footerLabel: "Real-time logging",
    footerIcon: "bolt",
  },
  {
    title: "ANALYZE",
    description:
      "Turn your search into data. Conversion rates, response timelines, and salary benchmarks visualized through a brutalist analytics dashboard.",
    icon: "leaderboard",
    footerLabel: "Deep metrics",
    footerIcon: "data_exploration",
  },
  {
    title: "MANAGE",
    description:
      "Organize your pipeline with surgical precision. Drag-and-drop interfaces that feel like a high-performance OS, not a spreadsheet.",
    icon: "grid_view",
    footerLabel: "Workflow control",
    footerIcon: "settings_input_component",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-xl">
      <div className="flex items-center gap-md mb-xl">
        <div className="h-1 bg-black grow"></div>
        <h2 className="font-h2 text-h2 uppercase shrink-0">
          CORE CAPABILITIES
        </h2>
        <div className="h-1 bg-black grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {BENEFITS.map((benefit) => (
          <article className="benefit-card group" key={benefit.title}>
            <div className="benefit-card-icon">
              <span
                className="material-symbols-outlined text-4xl"
                data-icon={benefit.icon}
              >
                {benefit.icon}
              </span>
            </div>

            <h3 className="font-h3 text-h3 mb-md uppercase font-black">
              {benefit.title}
            </h3>

            <p className="font-body text-body mb-lg">{benefit.description}</p>

            <div className="benefit-card-footer">
              {benefit.footerLabel}
              <span className="material-symbols-outlined">
                {benefit.footerIcon}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
