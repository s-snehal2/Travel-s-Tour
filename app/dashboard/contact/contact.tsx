import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

function Contact() {
  return (
    <div>
      <div className="text-lg font-bold text-center">Get in Touch</div>
      <div className="px-4">
        <p className="text-muted-foreground">
          Have questions, suggestions, or feedback? We’d love to hear from you!
          Whether you're facing a technical issue, want to recommend a recipe,
          or simply want to connect, our team is here to help.
        </p>

        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-destructive" />
            <p className="text-muted-foreground">
              Email: <strong>support@recipesapp.com</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-destructive" />
            <p className="text-muted-foreground">
              Phone: <strong>+91 98765 43210</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-destructive" />
            <p className="text-muted-foreground">
              Chat Support: Available in the app from 9:00 AM – 8:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-semibold">Send a Message</h2>

          <form className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-md"
            />

            <Input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded-md"
            />

            <Input
              type="textarea"
              placeholder="Your Message..."
              className="border p-3 rounded-md "
            />

            <Button
              type="submit"
              variant="destructive"
              className=" text-primary py-2 px-6 rounded-md "
            >
              Send
            </Button>
          </form>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-4">
          We usually respond within 24 – 48 hours.
        </p>
      </div>
    </div>
  );
}

export default Contact;
