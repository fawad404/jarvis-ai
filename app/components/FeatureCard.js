const FeatureCard = ({ title, subtitle, description, icon }) => {
    return (
      <div className="bg-light border border-accent rounded-xl shadow-lg p-6 max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center space-x-4 mb-4">
          {/* Icon */}
          <div className="bg-highlight text-light rounded-full p-4">
            {icon}
          </div>
          {/* Title and Subtitle */}
          <div>
            <h3 className="text-secondary text-xl font-bold">{title}</h3>
            <p className="text-primary text-sm">{subtitle}</p>
          </div>
        </div>
        {/* Description */}
        <p className="text-secondary text-sm mb-6">
          {description}
        </p>
        {/* Action Button */}
        <button className="bg-accent text-light py-2 px-4 rounded-lg hover:bg-highlight focus:outline-none transition-transform transform hover:scale-105">
          Learn More
        </button>
      </div>
    );
  };
  
  export default FeatureCard;
  