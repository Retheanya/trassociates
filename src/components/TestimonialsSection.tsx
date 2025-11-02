import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'Project Manager',
    company: 'Greenfield Developers',
    location: 'Chennai',
    rating: 5,
    quote: 'TR Associates provided exceptional structural design services for our residential complex. Their attention to detail and professional approach exceeded our expectations. The project was completed on time and within budget.',
    project: 'Residential Complex Project'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Director',
    company: 'Metro Construction Co.',
    location: 'Coimbatore',
    rating: 5,
    quote: 'Working with TR Associates has been a game-changer for our commercial projects. Their expertise in RCC design and steel detailing helped us achieve superior structural integrity while optimizing costs.',
    project: 'Commercial Complex Design'
  },
  {
    id: 3,
    name: 'Arvind Menon',
    position: 'CEO',
    company: 'Heritage Builders',
    location: 'Chennai',
    rating: 5,
    quote: 'The team at TR Associates is highly professional and knowledgeable. Their soil testing and structural stability assessments gave us confidence in our project foundation. Highly recommended!',
    project: 'Industrial Facility'
  },
  {
    id: 4,
    name: 'Deepak Patel',
    position: 'Founder',
    company: 'Sustainable Structures',
    location: 'Coimbatore',
    rating: 5,
    quote: 'TR Associates\' property valuation and building plan services are top-notch. They understand client requirements thoroughly and deliver solutions that are both practical and innovative.',
    project: 'Mixed-Use Development'
  },
  {
    id: 5,
    name: 'Meera Reddy',
    position: 'Architect',
    company: 'Design Studio',
    location: 'Chennai',
    rating: 5,
    quote: 'As an architect, I value reliable consulting partners. TR Associates consistently delivers quality structural consulting services that complement our designs perfectly. A trusted partner indeed.',
    project: 'Architectural Consultancy'
  },
  {
    id: 6,
    name: 'Suresh Iyer',
    position: 'Project Owner',
    company: 'Premier Infrastructure',
    location: 'Coimbatore',
    rating: 5,
    quote: 'From land surveying to final certification, TR Associates handled every aspect professionally. Their registered consultant status gives us peace of mind. Excellent service throughout!',
    project: 'Infrastructure Development'
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonialItem = testimonials[(currentIndex + 1) % testimonials.length];
  const prevTestimonialItem = testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-content-light to-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-4">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-wide text-arch-black mb-4">
            What Our Clients Say
          </h2>
          <div className="arch-line mx-auto" />
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-8 -left-4 md:-left-8 z-10">
              <div className="bg-content-light rounded-full p-4 shadow-lg">
                <Quote className="w-8 h-8 text-arch-accent rotate-180" />
              </div>
            </div>

            {/* Main Testimonial Card */}
            <div className="relative bg-white shadow-2xl p-8 md:p-12 lg:p-16 animate-fade-in-up">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-arch-accent text-arch-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-arch-black mb-8 italic">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-arch-black/10">
                <div>
                  <h4 className="text-lg font-light tracking-wide text-arch-black mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-sm font-light text-arch-medium mb-1">
                    {currentTestimonial.position}, {currentTestimonial.company}
                  </p>
                  <p className="text-xs font-light tracking-wide text-arch-light">
                    {currentTestimonial.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-light tracking-widest uppercase text-arch-accent mb-1">
                    PROJECT
                  </p>
                  <p className="text-sm font-light text-arch-medium">
                    {currentTestimonial.project}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <Button
            variant="arch-minimal"
            onClick={prevTestimonial}
            className="p-2 hover:bg-content-light rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-arch-accent w-8'
                    : 'bg-arch-black/20 hover:bg-arch-black/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="arch-minimal"
            onClick={nextTestimonial}
            className="p-2 hover:bg-content-light rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Previous Card */}
          <div
            className="group cursor-pointer opacity-60 hover:opacity-100 arch-transition animate-fade-in"
            onClick={() => goToTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length)}
          >
            <div className="bg-white/50 backdrop-blur-sm p-6 border border-arch-black/10 hover:border-arch-accent/30 arch-transition">
              <div className="flex gap-1 mb-3">
                {[...Array(prevTestimonialItem.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-arch-accent/60 text-arch-accent/60"
                  />
                ))}
              </div>
              <p className="text-sm font-light text-arch-medium mb-4 line-clamp-3">
                "{prevTestimonialItem.quote}"
              </p>
              <div className="arch-line mb-3 group-hover:w-12 arch-transition" />
              <p className="text-xs font-light tracking-wide text-arch-black">
                {prevTestimonialItem.name}
              </p>
            </div>
          </div>

          {/* Current Card (Center - Highlighted) */}
          <div className="group cursor-pointer animate-fade-in">
            <div className="bg-white shadow-lg p-6 border-2 border-arch-accent/30 hover:border-arch-accent arch-transition">
              <div className="flex gap-1 mb-3">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-arch-accent text-arch-accent"
                  />
                ))}
              </div>
              <p className="text-sm font-light text-arch-medium mb-4 line-clamp-3">
                "{currentTestimonial.quote}"
              </p>
              <div className="arch-line mb-3 group-hover:w-12 arch-transition" />
              <p className="text-xs font-light tracking-wide text-arch-black">
                {currentTestimonial.name}
              </p>
            </div>
          </div>

          {/* Next Card */}
          <div
            className="group cursor-pointer opacity-60 hover:opacity-100 arch-transition animate-fade-in"
            onClick={() => goToTestimonial((currentIndex + 1) % testimonials.length)}
          >
            <div className="bg-white/50 backdrop-blur-sm p-6 border border-arch-black/10 hover:border-arch-accent/30 arch-transition">
              <div className="flex gap-1 mb-3">
                {[...Array(nextTestimonialItem.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-arch-accent/60 text-arch-accent/60"
                  />
                ))}
              </div>
              <p className="text-sm font-light text-arch-medium mb-4 line-clamp-3">
                "{nextTestimonialItem.quote}"
              </p>
              <div className="arch-line mb-3 group-hover:w-12 arch-transition" />
              <p className="text-xs font-light tracking-wide text-arch-black">
                {nextTestimonialItem.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

