import dignitariesEvent from "@/assets/dignitaries-event.jpg";
import teensInTechSpeaker from "@/assets/teens-in-tech-speaker.jpg";
import communityMembers from "@/assets/community-members.jpg";
import teensPresentation from "@/assets/teens-presentation.jpg";
import fashionModelOrange from "@/assets/fashion-model-orange.jpg";
import runwayAfricanPrint from "@/assets/runway-african-print.jpg";
import eventCrowd from "@/assets/event-crowd.jpg";
import winnersGroup from "@/assets/winners-group.jpg";
import culturalPerformance from "@/assets/cultural-performance.jpg";
import traditionalShowcase from "@/assets/traditional-showcase.jpg";

const galleryImages = [
  { src: eventCrowd, alt: "Tech Skills Challenge event with large audience", category: "Events" },
  { src: winnersGroup, alt: "Tech Skills Challenge winners and runners-up", category: "Graduation" },
  { src: runwayAfricanPrint, alt: "Fashion runway with African print designs", category: "Fashion" },
  { src: fashionModelOrange, alt: "Model showcasing handmade fashion design", category: "Fashion" },
  { src: teensPresentation, alt: "Teens in Tech participants presenting", category: "Programs" },
  { src: teensInTechSpeaker, alt: "Speaker at Teens in Tech event", category: "Events" },
  { src: communityMembers, alt: "Community members at RIT Foundation event", category: "Community" },
  { src: dignitariesEvent, alt: "Dignitaries attending RIT Foundation event", category: "Events" },
  { src: culturalPerformance, alt: "Cultural performance at graduation ceremony", category: "Culture" },
  { src: traditionalShowcase, alt: "Traditional dress showcase on stage", category: "Culture" },
];

export function PhotoGallery() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">Gallery</span>
          <h2 className="font-display text-3xl font-bold text-foreground">
            Moments from Our Programs
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Photos from Teens in Tech events, fashion showcases, graduation ceremonies, and community engagements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              } ${index === 1 ? "col-span-2" : ""}`}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs uppercase tracking-wider text-primary font-medium">
                      {image.category}
                    </span>
                    <p className="text-sm text-secondary-foreground mt-1 line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
