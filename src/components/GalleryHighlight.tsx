import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import eventCrowd from "@/assets/event-crowd.jpg";
import runwayAfricanPrint from "@/assets/runway-african-print.jpg";
import winnersGroup from "@/assets/winners-group.jpg";
import teensPresentation from "@/assets/teens-presentation.jpg";

const highlightImages = [
  { src: eventCrowd, alt: "Tech Skills Challenge event" },
  { src: runwayAfricanPrint, alt: "Fashion runway showcase" },
  { src: winnersGroup, alt: "Program winners and graduates" },
  { src: teensPresentation, alt: "Teens in Tech presentation" },
];

export function GalleryHighlight() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="section-label mb-4 block">Gallery</span>
            <h2 className="font-display text-3xl font-bold text-foreground">
              See Our Work in Action
            </h2>
          </div>
          <Link
            to="/impact"
            className="inline-flex items-center text-primary font-medium hover:underline group"
          >
            View All Photos
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlightImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden group ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
