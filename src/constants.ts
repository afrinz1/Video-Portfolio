export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  role: string;
  duration: string;
  format: string;
  software: string;
  overview: string;
  creativeDirection: {
    mood: string;
    pacing: string;
    colorSystem: string;
    musicSelection: string;
    description: string;
  };
  workflow: {
    timelineImage: string;
    layers: { label: string; description: string }[];
    technicalNotes: string;
  };
  outcome: string;
}

export const PROJECTS: Project[] = [

  {
  id: "PROMO - TEJASVI (College Fest)",
  title: "PROMO - TEJASVI (College Fest)",
  year: "2026",
  category: "Narrative Promo Film",
  thumbnail: "/case-studies/tejasvi/thumbnails/hero-thumbnail.png",
  videoUrl: "https://res.cloudinary.com/dz3sbdyps/video/upload/v1772295715/Promo-Tejasvi_ghy7qa.mp4",
  role: "Lead Editor",
  duration: "4:50",
  format: "16:9",
  software: "DaVinci Resolve",

  overview: "A 4-minute narrative-driven promo film for TEJASVI, built around a symbolic journey rather than a traditional hype montage. The story follows conflict, tension, and pursuit — unfolding through action sequences and character-driven moments — ultimately leading to a final reveal that anchors the entire film.",

  creativeDirection: {
    mood: "Intense, Cinematic, Youthful",
    pacing: "Story-led first act → escalating conflict → high-impact climax",
    colorSystem: "Moody shadows with high-contrast highlights, shifting into vibrant energy toward the finale",
    musicSelection: "Hybrid cinematic score layered with percussive impacts and dynamic build-ups",
    description: "The edit was structured like a short film. The opening establishes intrigue and character motivation. The middle section introduces physical conflict through fight sequences, cut with tight rhythm and reactive sound design. The final act shifts from chaos to clarity, where the narrative payoff recontextualizes everything that came before it."
  },

  workflow: {
    timelineImage: "/case-studies/tejasvi/thumbnails/timeline-image.png",
    layers: [
      { label: "V1", description: "Narrative Base Structure & Scene Assembly" },
      { label: "V2", description: "Fight Sequences & Action Coverage" },
      { label: "V3", description: "Speed Ramps & Impact Transitions" },
      { label: "V4", description: "Typography & Event Reveal" },
      { label: "A1", description: "Dialogue & Story Audio" },
      { label: "A2", description: "Cinematic Score & Beat Markers" },
      { label: "A3", description: "Fight Impacts, Whooshes & Environmental SFX" }
    ],
    technicalNotes: "Edited entirely in DaVinci Resolve. I structured the timeline in acts to maintain narrative clarity. Fight scenes were tightened using frame-accurate cuts, impact sound layering, and subtle speed manipulation to enhance intensity without breaking realism. Beat markers were used to control pacing shifts between story moments and high-energy sections."
  },

  outcome: "The film stood out from traditional college promos by blending storytelling and action. It generated strong engagement across campus and positioned the fest as a cinematic experience rather than just an event."
},

{
  id: "Car-edit",
  title: "Car Edit",
  year: "2026",
  category: "Automotive Film",
  thumbnail: "/case-studies/apex-performance/thumbnails/preview.png",
  videoUrl: "/case-studies/apex-performance/videos/preview.mp4",
  role: "Editor",
  duration: "45 sec",
  format: "16:9",
  software: "DaVinci Resolve",

  overview: "A high-intensity automotive edit focused on speed, precision, and visual impact. The objective was to translate mechanical power into rhythm — making every cut feel like acceleration and every transition feel engineered rather than added.",

  creativeDirection: {
    mood: "Sharp, Controlled, High-Intensity",
    pacing: "Fast cuts with deliberate pauses for emphasis",
    colorSystem: "Tones with deep contrast and crisp highlights",
    musicSelection: "Electronic performance track layered with engine textures and subtle impact design",
    description: "This edit is built around momentum. Each cut mirrors acceleration, with transitions timed to feel mechanical and precise. Typography is integrated into the rhythm rather than layered on top of it — it drives the pace forward. The goal was to create something fast and aggressive, but still controlled and intentional."
  },

  workflow: {
    timelineImage: "/case-studies/apex-performance/thumbnails/timeline.png",
    layers: [
      { label: "V1", description: "Primary Driving & Detail Footage" },
      { label: "V2", description: "Speed Ramps & Motion Transitions" },
      { label: "V3", description: "Typography & Graphic Hits" },
      { label: "V4", description: "Flash Frames" },
      { label: "A1", description: "Main Music Track" },
      { label: "A2", description: "Engine Audio & Mechanical Textures" },
      { label: "A3", description: "Impact Hits & Transitional Sound Design" }
    ],
    technicalNotes: "Edited entirely in DaVinci Resolve. Beat markers were used extensively to maintain precision between visuals and audio. Speed ramping and motion blur were applied selectively to enhance perceived velocity without overwhelming clarity. The grade focused on a metallic, performance-driven look while preserving highlight detail and depth."
  },

  outcome: "The final piece stands as a showcase of high-speed editorial control, combining kinetic typography, precise rhythm, and cinematic grading into a cohesive automotive visual."
},
{
  id: "maybach-delivery-film",
  title: "Maybach",
  year: "2026",
  category: "Luxury Brand Film",
  thumbnail: "/case-studies/echo-motion/thumbnails/thumbnail.png",
  videoUrl: "https://res.cloudinary.com/dz3sbdyps/video/upload/v1772296114/Preview_1_encnqf.mp4",
  role: "Editor",
  duration: "50 sec",
  format: "16:9",
  software: "DaVinci Resolve",

  overview: "A cinematic edit presentation of a Mercedes-Benz Maybach to its new owner. The focus was on elegance and anticipation — shaping a refined visual journey that builds toward the final reveal.",

  creativeDirection: {
    mood: "Luxurious, Minimal, Refined",
    pacing: "Slow, deliberate progression leading to the reveal",
    colorSystem: "Balanced contrast with smooth highlight roll-off and rich, controlled blacks",
    musicSelection: "Subtle ambient orchestral score with restrained dynamics",
    description: "The edit was structured around anticipation. The vehicle’s movement, interior details, and environment were paced carefully to create a premium, composed atmosphere. Typography was kept minimal and understated, allowing the moment of delivery to carry emotional weight. The final reveal is intentionally unhurried, reinforcing the exclusivity of the experience."
  },

  workflow: {
    timelineImage: "/case-studies/echo-motion/thumbnails/timeline.png",
    layers: [
      { label: "V1", description: "Primary Cinematic LOG Footage" },
      { label: "V2", description: "Detail Inserts & Close-Up Sequences" },
      { label: "V3", description: "Minimal Title & Branding Elements" },
      { label: "A1", description: "Ambient Music Track" },
      { label: "A2", description: "Engine, Door & Natural Foley" },
      { label: "A3", description: "Atmospheric Sound Design" }
    ],
    technicalNotes: "The footage was captured in LOG, allowing full control over dynamic range and color precision during grading. I used a node-based workflow in DaVinci Resolve to convert LOG to a refined cinematic look, carefully preserving highlight detail on chrome surfaces while maintaining smooth skin tones and deep, elegant blacks."
  },

  outcome: "The final Edit presents the delivery as a premium, milestone experience — aligning the visual language with the prestige of the Maybach brand."
}
];
