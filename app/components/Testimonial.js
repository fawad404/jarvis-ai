import { HiStar } from "react-icons/hi";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "This AI Assistant has completely transformed how I manage my emails and schedule. It’s a lifesaver!",
    role: "Product Manager",
  },
  {
    name: "Jane Smith",
    feedback:
      "I can’t imagine going back to manual task management. The AI Assistant is intuitive and incredibly helpful.",
    role: "Freelancer",
  },
  {
    name: "Michael Johnson",
    feedback:
      "A must-have for anyone looking to stay on top of their daily tasks and meetings. Highly recommended!",
    role: "Entrepreneur",
  },
];

export default function Testimonial() {
  return (
    <div className="bg-primary text-secondary py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">What Our Users Say</h2>
        <p className="text-lg text-primary mb-12">
          Don’t just take our word for it. Here’s what our users have to say about the AI Assistant.
        </p>
        {/* Testimonials Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-light rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
            >
              {/* Star Icon */}
              <div className="flex items-center text-highlight mb-4">
                <HiStar className="h-6 w-6" />
                <HiStar className="h-6 w-6" />
                <HiStar className="h-6 w-6" />
                <HiStar className="h-6 w-6" />
                <HiStar className="h-6 w-6" />
              </div>
              {/* Feedback */}
              <p className="text-sm text-secondary italic mb-6">
                "{testimonial.feedback}"
              </p>
              {/* User Info */}
              <h3 className="text-lg font-bold text-accent">{testimonial.name}</h3>
              <p className="text-sm text-primary">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
