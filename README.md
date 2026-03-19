# 🎬 Netflix Landing Page

A modern, responsive Netflix landing page built with HTML, CSS, and JavaScript. This project replicates the iconic Netflix signup experience with a clean, professional design.

![Netflix Landing Page](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🌟 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Hero Section** - Eye-catching hero with background image and overlay
- **Email Signup Form** - Email validation and user input handling
- **Interactive Elements** - Smooth animations, hover effects, and transitions
- **Features Showcase** - Display of key Netflix benefits
- **Accessibility** - Semantic HTML and keyboard navigation support
- **Dark Theme** - Netflix-inspired dark color scheme with red accents

## 🎨 Design Highlights

- Netflix Red accent color (#e50914)
- Clean, modern typography with Segoe UI font
- Gradient overlays for better text readability
- Fade-in animations on page load
- Smooth button interactions and hover states

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🚀 Quick Start

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/netflix-landing-page.git
cd netflix-landing-page
```

2. Open `index.html` in your browser:
```bash
# macOS/Linux
open index.html

# Windows
start index.html
```

Or simply double-click `index.html` to open it in your default browser.

## 📁 Project Structure

```
netflix-landing-page/
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── script.js           # Interactive functionality
└── README.md           # Project documentation
```

## 🔧 File Descriptions

### index.html
- Netflix logo with official SVG
- Header with language selector and sign-in button
- Hero section with main CTA
- Email signup form
- Features section with benefit highlights
- Responsive viewport meta tag

### style.css
- Complete responsive styling
- CSS variables for maintainability
- Media queries for all screen sizes
- Smooth animations and transitions
- Accessible color contrast ratios

### script.js
- Email validation logic
- Form submission handling
- Button click event handlers
- Language selector placeholder
- Focus animations

## 🎯 Features in Detail

### Email Validation
- Checks for non-empty input
- Validates email format using regex
- User-friendly error messages
- Enter key support for form submission

### Responsive Navigation
- Language selector button
- Sign In button with hover effects
- Mobile-friendly header layout

### Interactive Buttons
- **Get Started**: Validates and processes email signup
- **Sign In**: Placeholder for authentication flow
- **Language Selector**: Placeholder for language options

## 💻 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Change the Netflix Red Color
Edit `style.css` and replace `#e50914` with your desired color:
```css
/* Old */
background: #e50914;

/* New */
background: #YOUR_COLOR;
```

### Update the Hero Background
In `index.html`, modify the background image URL in `.landing-page`:
```css
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url('YOUR_IMAGE_URL') center/cover no-repeat;
```

### Modify Hero Text
Edit the text content in the hero section of `index.html`:
```html
<h1 class="hero-title">Your Custom Title</h1>
<p class="hero-subtitle">Your Custom Subtitle</p>
```

## 🔒 Security Considerations

- Email validation is performed on the client-side for user feedback
- For production use, implement server-side email validation
- Sanitize and validate all user inputs on the backend
- Use HTTPS for secure form submission

## 📚 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (Vanilla)** - No frameworks or dependencies
- **Google Fonts** - Segoe UI typography

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋 Support

If you encounter any issues or have questions, please:
- Open an issue on GitHub
- Check existing issues for similar problems
- Provide detailed information about your environment

## 📸 Screenshots

### Desktop View
![Desktop Preview]

### Mobile View
![Mobile Preview]

## 🚢 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io/netflix-landing-page`

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy with one click

### Vercel
1. Import your repository on Vercel
2. Deploy automatically on every push

## 📊 Performance

- Lightweight (< 100KB total)
- Fast loading times
- Optimized images and lazy loading ready
- No render-blocking resources

## 🎓 Learning Resources

This project is great for learning:
- HTML5 semantic structure
- CSS3 animations and transitions
- Responsive web design
- Form validation in JavaScript
- Git and GitHub workflow

## 🔮 Future Enhancements

- [ ] Backend email signup integration
- [ ] Authentication system
- [ ] Movie catalog and browse page
- [ ] Video player functionality
- [ ] Dark/Light theme toggle
- [ ] Multiple language support
- [ ] PWA functionality
- [ ] Advanced filtering and search

## 📅 Changelog

### v1.0.0 (Initial Release)
- Landing page with hero section
- Email signup form with validation
- Responsive design for all devices
- Features showcase section
- GitHub Pages ready

## 👨‍💻 Author

Juan E. - [GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- Netflix for design inspiration
- Unsplash for background images
- Google Fonts for typography
- The open-source community

---

**Made with ❤️ by [Your Name]**

If you find this project helpful, please give it a ⭐ Star!
