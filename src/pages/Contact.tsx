import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MessageSquare, MapPin, Loader2, Clock } from 'lucide-react';
import contactImg from '@/assets/contact.jpg';
import trLogo from '@/assets/tr-logo.png';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const API_URL = import.meta.env.VITE_CONTACT_API_URL || 'https://api.example.com/contact';
      
      const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={contactImg}
          alt="Contact Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-arch-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-up">
            <p className="text-sm font-light tracking-widest uppercase mb-4">
              GET IN TOUCH
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-content-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-arch-black mb-6">
              Let's establish relations : )
            </h2>
            <p className="text-lg text-arch-medium max-w-2xl mx-auto">
              Now, as you were able to get a picture of who we are, it is up to you to contact us and
              lay the foundation for a new and successful business relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-light tracking-wide text-arch-black mb-8">
                Let's start new project.
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    name="name"
                    placeholder="Your Name"
                    className="arch-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input 
                    name="email"
                    placeholder="Your Email"
                    type="email"
                    className="arch-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input 
                  name="subject"
                  placeholder="Subject"
                  className="arch-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea 
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="arch-input"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button 
                  variant="arch" 
                  size="arch" 
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    'SEND MESSAGE'
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <MapPin className="h-5 w-5 text-arch-accent" />
                      <h4 className="text-lg font-light tracking-wide text-arch-black">ADDRESS</h4>
                    </div>
                    <div className="ml-9">
                      <address className="text-arch-medium font-light not-italic leading-relaxed">
                        No 404, West Side to Kalyan Jewellers,<br />
                        6th Street Extension,<br />
                        Gandhipuram, Coimbatore,<br />
                        Tamil Nadu - 641012
                      </address>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <Phone className="h-5 w-5 text-arch-accent" />
                      <h4 className="text-lg font-light tracking-wide text-arch-black">PHONE</h4>
                    </div>
                    <div className="space-y-2 ml-9">
                      <a href="tel:+919042514845" className="block text-arch-medium hover:text-arch-black arch-transition">
                        +91 - 9042514845
                      </a>
                      <a href="tel:+919486112301" className="block text-arch-medium hover:text-arch-black arch-transition">
                        +91 - 9486112301
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <Mail className="h-5 w-5 text-arch-accent" />
                      <h4 className="text-lg font-light tracking-wide text-arch-black">EMAIL</h4>
                    </div>
                    <div className="space-y-2 ml-9">
                      <a href="mailto:tn.trassociates@gmail.com" className="block text-arch-medium hover:text-arch-black arch-transition">
                        tn.trassociates@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Logo Section */}
                <div className="flex-shrink-0 md:ml-8 lg:ml-12">
                  <img 
                    src={trLogo} 
                    alt="TR Associates Logo" 
                    className="w-48 h-auto object-contain opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Branch Details Section */}
      <section className="py-20 bg-content-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Left: Map */}
            <div className="w-full h-[450px] rounded-sm overflow-hidden shadow-sm border border-gray-100 animate-fade-in-left">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3268840673395!2d76.9642646740907!3d11.0116817547614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590022f4625b%3A0xc3f587397e59b3!2s6th%20St%20Extension%2C%20Gandhipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711970000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="TR Associates Location"
              ></iframe>
            </div>

            {/* Right: Detailed Info */}
            <div className="space-y-10 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
              {/* Branch Address */}
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="h-5 w-5 text-arch-accent" />
                  <h4 className="text-lg font-light tracking-wide text-arch-black">Branch office address</h4>
                </div>
                <div className="ml-9">
                  <address className="text-arch-medium font-light not-italic leading-relaxed">
                    No 404, West Side to Kalyan Jewellers,<br />
                    6th Street Extension, Gandhipuram,<br />
                    Coimbatore, Tamil Nadu 641012
                  </address>
                </div>
              </div>

              {/* General Enquiries */}
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="h-5 w-5 text-arch-accent" />
                  <h4 className="text-lg font-light tracking-wide text-arch-black">General enquiries</h4>
                </div>
                <div className="ml-9">
                  <a href="mailto:tn.trassociates@gmail.com" className="text-arch-medium font-light hover:text-arch-black arch-transition">
                    tn.trassociates@gmail.com
                  </a>
                </div>
              </div>

              {/* Call Us */}
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="h-5 w-5 text-arch-accent" />
                  <h4 className="text-lg font-light tracking-wide text-arch-black">Call us</h4>
                </div>
                <div className="ml-9 space-y-1 text-arch-medium font-light">
                  <p>+91-9042514845</p>
                  <p>+91-9486112301</p>
                </div>
              </div>

              {/* Our Timing */}
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="h-5 w-5 text-arch-accent" />
                  <h4 className="text-lg font-light tracking-wide text-arch-black">Our timing</h4>
                </div>
                <div className="ml-9 space-y-1 text-arch-medium font-light">
                  <p>Mon - Fri : 09:30 AM - 06:30 PM</p>
                  <p>Sat : 09:30 AM - 01.00 PM</p>
                  <p>Sun : Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;