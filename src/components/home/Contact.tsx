import {
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";

export default function Contact() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Get In Touch"
          subtitle="Ready to transform your property? Contact us today for a free quote."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex gap-4">
              <Phone className="text-[#F97316]" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+234 903 648 6524</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-[#F97316]" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>smigenindustries@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-[#F97316]" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-[#F97316]" />
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p>Mon - Sat | 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <iframe
            className="h-[400px] w-full rounded-2xl"
            loading="lazy"
            src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
          />
        </div>
      </Container>
    </section>
  );
}