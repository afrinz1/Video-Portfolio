# Case Studies Media Structure

This directory contains all media assets for your portfolio case studies.

## Folder Organization

```
case-studies/
├── tejasvi/
│   ├── thumbnails/          # Hero and workflow thumbnails
│   ├── videos/              # Main video files
│   └── README.md            # Asset guidelines
│
├── apex-performance/
│   ├── thumbnails/          # Hero and workflow thumbnails
│   ├── videos/              # Main video files
│   └── README.md            # Asset guidelines
│
└── echo-motion/
    ├── thumbnails/          # Hero and workflow thumbnails
    ├── videos/              # Main video files
    └── README.md            # Asset guidelines
```

## File Naming Convention

**Thumbnails:**
- `hero-thumbnail.jpg` (1280x720) - Main case study thumbnail
- `timeline-image.jpg` (1600x900) - Workflow timeline visualization

**Videos:**
- `{project-name}.mp4` - Main video file
  - Example: `promo-tejasvi.mp4`, `apex-performance.mp4`, `echo-motion-system.mp4`

## Recommended Specifications

### Images
- **Format:** JPG or PNG
- **Hero Thumbnail:** 1280x720 (16:9)
- **Timeline/Workflow:** 1600x900
- **Compression:** Optimized for web (max 500KB per image)

### Videos
- **Format:** MP4 (H.264 codec)
- **Resolution:** 1920x1080 or 1280x720
- **Frame Rate:** 24fps or 30fps
- **File Size:** Keep under 50MB for smooth loading

## Code Reference

All paths are referenced in `src/constants.ts` and automatically load from these folders:

```typescript
thumbnail: "/case-studies/{project-id}/thumbnails/hero-thumbnail.jpg"
videoUrl: "/case-studies/{project-id}/videos/{video-file}.mp4"
workflow.timelineImage: "/case-studies/{project-id}/thumbnails/timeline-image.jpg"
```

## Next Steps

1. Add your thumbnail JPGs to each `thumbnails/` folder
2. Add your video MP4 files to each `videos/` folder
3. The app will automatically load them from the updated constants file
