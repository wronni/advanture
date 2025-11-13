# Orange - Interactive Multi-Page Experience

A responsive, interactive web experience based on your Figma design with three distinct pages and smooth navigation.

## 📁 Project Structure

```
/
├── index.html       # Main HTML structure with all three pages
├── styles.css       # Complete styling and animations
├── script.js        # Navigation logic and interactions
└── README.md        # This file
```

## 🎨 Design Implementation

### Page 1 (pg1)
- Large housefly background image (1820x1024px)
- Extends beyond viewport edges for dramatic effect
- White background with "text test" overlay
- Click text to navigate to Page 2

### Page 2 (pg2)
- Solid brown/olive background (#575039)
- "text test" overlay
- Click text to navigate to Page 3

### Page 3 (pg3)
- White background
- Small housefly image (502x283px) in bottom right
- Abstract drawing in top left corner
- "text test" overlay
- Click text to navigate back to Page 1

## ✨ Features

### Navigation
- **Click on text** - Navigate to the next page in sequence
- **Arrow keys** - Use ← → or ↑ ↓ to navigate between pages
- **Number keys** - Press 1, 2, or 3 to jump directly to a page
- **Navigation buttons** - Click the numbered circles in the top right
- **Touch gestures** - Swipe left/right on mobile devices

### Interactions
- Smooth fade transitions between pages
- Text hover effects with scale and shadow
- Active page indicators in navigation
- Preloaded images for instant transitions
- Keyboard hint that auto-hides after first interaction

### Responsive Design
- Scales to fit different viewport sizes
- Maintains 1440x1024 aspect ratio
- Works on desktop, tablet, and mobile
- Touch-friendly navigation

## 🚀 Usage

1. **Open the project:**
   ```bash
   # Simply open index.html in a web browser
   open index.html
   ```

2. **Navigate:**
   - Click the large "text test" text to advance to the next page
   - Use arrow keys for quick navigation
   - Click numbered buttons (1, 2, 3) in the top right
   - Press number keys 1, 2, or 3 to jump to specific pages

3. **Mobile:**
   - Swipe left to go forward
   - Swipe right to go backward
   - Tap text or navigation buttons

## 🎯 Technical Details

### Fonts
- Uses Google Fonts: **Jacquard 12** (decorative display font)
- Falls back to system serif fonts

### Images
- Hosted via Figma's asset CDN (7-day expiration)
- Automatically preloaded for smooth transitions
- Optimized with object-fit for proper sizing

### Animations
- CSS transitions for smooth page changes
- Fade in/out effects (0.6s duration)
- Scale animations on hover and click
- Hardware-accelerated transforms

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Keyboard navigation for accessibility
- Touch gesture support

## 🎨 Customization

### Change Colors
Edit `styles.css`:
```css
#page2 {
    background: #575039; /* Change this color */
}

.page-text {
    color: #060405; /* Change text color */
}
```

### Adjust Transition Speed
Edit `styles.css`:
```css
.page {
    transition: opacity 0.6s ease; /* Change duration */
}
```

### Modify Text Size
Edit `styles.css`:
```css
.page-text {
    font-size: 200px; /* Adjust size */
}
```

## 🔧 Advanced Features

### URL Hash Navigation
Pages update the URL hash, allowing:
- Direct linking (e.g., `index.html#page2`)
- Browser back/forward buttons work correctly
- Bookmark specific pages

### Performance Optimizations
- Image preloading
- Debounced resize events
- Hardware-accelerated CSS transforms
- Efficient event delegation

### Accessibility
- Keyboard navigation support
- Focus indicators for interactive elements
- Semantic HTML structure
- ARIA-friendly navigation

## 📱 Mobile Optimization

- Touch gesture support for swipe navigation
- Responsive scaling for different screen sizes
- Mobile-friendly button sizes
- Optimized for touch interactions

## 🎮 Prototype Flow

The design follows a circular navigation pattern:
```
Page 1 → Page 2 → Page 3 → Page 1 (loops)
```

Each page's text acts as a navigation link to advance the experience, creating an engaging, story-like progression through the content.

## 🖼️ Assets

Images are loaded from Figma's CDN:
- Large housefly (Page 1 background)
- Small housefly (Page 3)
- Abstract drawing (Page 3)

**Note:** Figma assets expire after 7 days. For production use, download and host images locally.

## 💡 Tips

1. **Preload Images:** All images are preloaded on page load for instant transitions
2. **Keyboard Shortcuts:** Number keys provide instant page jumping
3. **Smooth Experience:** Transitions are optimized for 60fps performance
4. **Mobile Ready:** Works great on phones and tablets with touch support

## 🐛 Troubleshooting

**Images not loading?**
- Figma CDN links expire after 7 days
- Download images and update URLs in HTML

**Navigation not working?**
- Check browser console for JavaScript errors
- Ensure all files are in the same directory

**Text looks different?**
- Google Font "Jacquard 12" may need time to load
- Check internet connection

## 📝 Notes

- Design dimensions: 1440x1024px
- Font: Jacquard 12 (Google Fonts)
- Total pages: 3
- Circular navigation flow
- Prototype-based interaction pattern

Enjoy your interactive Orange experience! 🍊
