# Photo Management Guide

This document explains how to manage photos for the Ça Handi Long website using rclone.

## Directory Structure

```
public/images/
├── events/          # Event photos organized by event ID
│   ├── wonder-impro-2025/
│   ├── impro-en-seine-2025/
│   ├── impro-sur-cour-2025/
│   └── ...
├── team/            # Team member photos
│   ├── simon-garnes.jpg
│   ├── philippe-bassot.jpg
│   └── ...
└── placeholders/    # Placeholder images
```

## Uploading Photos to Google Drive

### 1. Create a Folder Structure in Google Drive

Create a folder in your Google Drive called `Ca-Handi-Long-Photos` with this structure:

```
Ca-Handi-Long-Photos/
├── events/
│   ├── wonder-impro-2025/
│   ├── impro-en-seine-2025/
│   └── ...
└── team/
```

### 2. Download Photos from Google Drive

Once you've uploaded photos to Google Drive, use these rclone commands:

```bash
# Download all event photos
rclone copy "gdrive:Ca-Handi-Long-Photos/events" "public/images/events" --progress

# Download all team photos
rclone copy "gdrive:Ca-Handi-Long-Photos/team" "public/images/team" --progress

# Download a specific event
rclone copy "gdrive:Ca-Handi-Long-Photos/events/wonder-impro-2025" "public/images/events/wonder-impro-2025" --progress
```

### 3. Sync Photos (Two-Way)

To keep photos in sync between Google Drive and your local project:

```bash
# Sync all photos (careful - this syncs both ways)
rclone sync "gdrive:Ca-Handi-Long-Photos" "public/images" --progress

# Preview what would be synced without actually doing it
rclone sync "gdrive:Ca-Handi-Long-Photos" "public/images" --dry-run --progress
```

## Optimizing Photos for Web

### Using ImageMagick (if installed)

```bash
# Convert all JPG images to WebP format (better compression)
for file in public/images/events/**/*.jpg; do
  magick "$file" -quality 85 -resize 1920x1080\> "${file%.jpg}.webp"
done
```

### Using Sharp (Node.js)

Create a script `optimize-images.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const optimizeImage = async (inputPath, outputPath) => {
  await sharp(inputPath)
    .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(outputPath);
};

// Use this to optimize all images in a directory
```

## Photo Naming Convention

### Team Photos
- Format: `firstname-lastname.jpg`
- Example: `simon-garnes.jpg`, `philippe-bassot.jpg`
- Size: 800x800px (square)
- Format: WebP or JPG

### Event Photos
- Format: `event-id-001.jpg`, `event-id-002.jpg`, etc.
- Example: `wonder-impro-001.jpg`, `wonder-impro-002.jpg`
- Size: 1920x1080px max
- Format: WebP or JPG

## Current Status

✅ rclone is configured with Google Drive (remote: `gdrive:`)
⏳ Waiting for photos to be uploaded to Google Drive
⏳ Photo optimization workflow to be implemented

## Next Steps

1. Upload photos to Google Drive in the structure above
2. Run rclone copy commands to download them
3. Optimize photos for web (convert to WebP, resize)
4. Update Gallery.tsx to reference real photos
5. Update Team.tsx to reference real team photos

## Useful Commands

```bash
# List files in Google Drive
rclone lsf gdrive:Ca-Handi-Long-Photos --recursive

# Check size before downloading
rclone size gdrive:Ca-Handi-Long-Photos

# List configured remotes
rclone listremotes

# Check rclone version
rclone version
```
