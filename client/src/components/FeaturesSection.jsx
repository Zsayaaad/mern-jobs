const FEATURES = [
  {
    title: "Secure data",
    icon: "encrypted",
  },
  {
    title: "Live Sync",
    icon: "cloud_sync",
  },
  {
    title: "Open API",
    icon: "api",
  },
  {
    title: "Alerts",
    icon: "mail",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
      {FEATURES.map((feat) => (
        <div className="p-md border-2 border-black bg-white flex flex-col gap-sm">
          <span
            className="material-symbols-outlined text-primary"
            data-icon={feat.icon}
          >
            {feat.icon}
          </span>
          <h4 className="font-h3 text-body font-black uppercase">
            {feat.title}
          </h4>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
