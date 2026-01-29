import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from "@/hooks/useScrollAnimation"


// Utility function (cn replacement)
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [containerRef, containerVisible] = useScrollAnimation(0.1);
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [contactInfoRef, contactInfoVisible] = useScrollAnimation(0.1);
  const [formRef, formVisible] = useScrollAnimation(0.1);

  // Initialize EmailJS (replace with your actual keys)
  useEffect(() => {
    emailjs.init("sxJuU2-20DiOg1Xt6"); 
  }, []);

  // Enhanced toast function with better UX
  const showToast = (type, title, message) => {
    if (type === 'success') {
      // Create a success toast
      const toast = document.createElement('div');
      toast.className = 'fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 animate-in slide-in-from-right duration-300';
      toast.innerHTML = `
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <div>
            <div class="font-semibold">${title}</div>
            <div class="text-sm">${message}</div>
          </div>
        </div>
      `;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 5000);
    } else {
      // Error toast
      const toast = document.createElement('div');
      toast.className = 'fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50 animate-in slide-in-from-right duration-300';
      toast.innerHTML = `
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
          <div>
            <div class="font-semibold">${title}</div>
            <div class="text-sm">${message}</div>
          </div>
        </div>
      `;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 5000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get form data
      const formData = new FormData(e.target);
      const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: formData.get('message'),
        to_name: 'Junaid', 
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_2z5z3lw',    
        'template_zsbh6it',   
        templateParams
      );

      console.log('Email sent successfully:', result);
      
      showToast('success', 'Message Sent!', 'Thank you for your message. I\'ll get back to you soon.');
      e.target.reset(); // Reset form after successful submission
      
    } catch (error) {
      console.error('Failed to send email:', error);
      showToast('error', 'Failed to Send', 'Something went wrong. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div 
        ref={containerRef}
        className={`relative bg-black/70 text-foreground text-center px-4 py-3 rounded-lg shadow-lg mx-auto max-w-4xl my-8 z-1 transition-all duration-1000 ${
          containerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <div 
            ref={headerRef}
            className={`transition-all duration-1000 delay-200 ${
              headerVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 text-center">
              Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-white mb-12 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out.
              I'm always open to discussing new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div 
              ref={contactInfoRef}
              className={`space-y-8 transition-all duration-1000 delay-400 ${
                contactInfoVisible 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform -translate-x-8'
              }`}
            >
              <h3 className="text-white text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="text-white space-y-6 justify-center">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "juni.xatti@gmail.com",
                    href: "mailto:juni.xatti@gmail.com",
                    delay: "delay-500"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+92 (342) 348-4425",
                    href: "tel:+923423484425",
                    delay: "delay-700"
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    content: "Islamabad, Pakistan",
                    href: null,
                    delay: "delay-900"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-4 transition-all duration-1000 transform hover:scale-105 ${
                      contactInfoVisible 
                        ? `opacity-100 translate-y-0 ${item.delay}` 
                        : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <div className="p-3 rounded-full bg-primary/10 transform transition-transform duration-300 hover:rotate-12">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-primary transition-colors duration-300"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <span className="text-white hover:text-primary transition-colors duration-300">
                          {item.content}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div 
                className={`text-white pt-8 transition-all duration-1000 delay-1100 ${
                  contactInfoVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-6'
                }`}
              >
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/junaid-mohi-ud-din/" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      className="hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1" 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              ref={formRef}
              className={`bg-card p-8 rounded-lg shadow-lg transition-all duration-1000 delay-600 ${
                formVisible 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform translate-x-8'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {[
                  {
                    id: "name",
                    label: "Your Name",
                    type: "text",
                    placeholder: "Junaid Satti...",
                    delay: "delay-700"
                  },
                  {
                    id: "email",
                    label: "Your Email",
                    type: "email",
                    placeholder: "john@gmail.com",
                    delay: "delay-900"
                  }
                ].map((field) => (
                  <div 
                    key={field.id}
                    className={`transition-all duration-1000 ${
                      formVisible 
                        ? `opacity-100 transform translate-y-0 ${field.delay}` 
                        : 'opacity-0 transform translate-y-4'
                    }`}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div 
                  className={`transition-all duration-1000 delay-1100 ${
                    formVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-4'
                  }`}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300 hover:border-primary/50"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <div 
                  className={`transition-all duration-1000 delay-1300 ${
                    formVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-4'
                  }`}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "cosmic-button w-full flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={16} className={isSubmitting ? "animate-pulse" : ""} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
