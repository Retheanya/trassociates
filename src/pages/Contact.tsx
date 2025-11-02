import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MessageSquare, MapPin, Loader2 } from 'lucide-react';
import archInterior1 from '@/assets/arch-interior-1.jpg';
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
          src={archInterior1}
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
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      {/* <section className="py-20 bg-content-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-4">
              LOCATIONS
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-arch-black">
              Meet Us in your City.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'EVO GRAND HALL',
                address: 'Lítačka 35/29,\n06589 Nové Město,\nCzech Republic',
                image: archInterior1
              },
              {
                title: 'INNERE STADT',
                address: 'Josefstädter Street,\n11 1030 Vienna,\nAustria',
                image: archInterior1
              },
              {
                title: 'MONOPRIX',
                address: '47 Rue de Babylone,\n75007 Paris,\nFrance',
                image: archInterior1
              }
            ].map((location, index) => (
              <div 
                key={location.title}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 150 + 600}ms` }}
              >
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={location.image}
                    alt={location.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-arch-black/20 group-hover:bg-arch-black/40 arch-transition" />
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-light tracking-wide text-arch-black mb-4">
                    {location.title}
                  </h4>
                  <div className="flex items-start justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-arch-accent mt-1 flex-shrink-0" />
                    <address className="text-sm font-light text-arch-medium not-italic leading-relaxed">
                      {location.address.split('\n').map((line, i) => (
                        <span key={i} className="block">{line}</span>
                      ))}
                    </address>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Contact;