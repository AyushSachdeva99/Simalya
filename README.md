# KeshQueen - Handcrafted Hair Oil Website

Welcome to the KeshQueen website! This is a professional, responsive website designed to showcase and sell handmade hair oils.

## 🌿 Features

- **Beautiful Hero Section** - Eye-catching landing page with call-to-action
- **Product Showcase** - Display multiple hair oil products with descriptions and pricing
- **About Section** - Tell your brand story and highlight what makes your products special
- **Benefits Section** - Showcase why customers should choose your products
- **Testimonials** - Build trust with customer reviews
- **Contact Form** - Easy way for customers to get in touch and place orders
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Smooth Animations** - Professional scroll effects and hover interactions

## 📁 File Structure

```
keshQueen/
├── index.html          # Main HTML file
├── styles.css          # All styling and design
├── script.js           # Interactive functionality
├── images/             # Folder for product images
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Add Your Product Images

Place your product images in the `images/` folder. Then update the HTML:

```html
<!-- Replace the hero-placeholder with: -->
<div class="hero-image">
    <img src="images/your-product-hero.jpg" alt="KeshQueen Hair Oil">
</div>

<!-- Replace product icons with: -->
<div class="product-image">
    <img src="images/coconut-oil.jpg" alt="Coconut Blend">
</div>
```

### 2. Update Contact Information

Edit these sections in `index.html`:

```html
<!-- Line ~340 - Update email -->
<p>keshmantra@example.com</p>

<!-- Line ~348 - Update phone -->
<p>+91 XXXXX XXXXX</p>

<!-- Line ~356 - Update location -->
<p>Your City, India</p>
```

### 3. Customize Products

Edit the product cards in `index.html` (around line 147-239):
- Change product names
- Update descriptions
- Modify prices
- Add or remove products

### 4. Modify Colors

Update the color scheme in `styles.css` (lines 9-15):

```css
:root {
    --primary-color: #2d5016;      /* Main green */
    --secondary-color: #6b8e23;    /* Secondary green */
    --accent-color: #d4a574;       /* Gold accent */
    /* ... */
}
```

### 5. Update Testimonials

Edit testimonial content in `index.html` (around line 277-307):
- Change customer names
- Update reviews
- Add more testimonial cards

## 🚀 How to Use

### Option 1: Open Directly
Simply double-click `index.html` to open it in your browser.

### Option 2: Use a Local Server
For better testing:

```bash
# If you have Python installed:
python -m http.server 8000

# If you have Node.js installed:
npx http-server

# Then open: http://localhost:8000
```

## 📱 Social Media Integration

To add working social media links, update the footer in `index.html` (around line 407):

```html
<a href="https://facebook.com/yourpage" class="social-icon">FB</a>
<a href="https://instagram.com/yourpage" class="social-icon">IG</a>
<a href="https://wa.me/91XXXXXXXXXX" class="social-icon">WA</a>
```

## 📧 Setting Up Contact Form

The form currently shows an alert message. To actually receive messages:

### Option 1: Use Formspree (Easy, Free)
1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update the form in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Use Google Forms
1. Create a Google Form
2. Link to it from your contact button

### Option 3: Backend Integration
Create a backend API and update `script.js` to send form data to your server.

## 🎯 Next Steps

1. **Add Real Images** - Replace emoji placeholders with actual product photos
2. **Update Contact Info** - Add your real email, phone, and address
3. **Customize Content** - Personalize all text to match your brand
4. **Test on Mobile** - Open on your phone to ensure it looks good
5. **Deploy Online** - Host on GitHub Pages, Netlify, or Vercel (free options)

## 🌐 Deploying Your Website

### GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository named "keshqueen"
3. Upload these files
4. Go to Settings > Pages
5. Select main branch and save
6. Your site will be live at: `https://yourusername.github.io/keshqueen`

### Netlify (Free)
1. Go to netlify.com
2. Drag and drop this folder
3. Get instant deployment!

## 💡 Tips for Success

- **High-Quality Images**: Use clear, well-lit photos of your products
- **Authentic Story**: Share the real story behind your mother's recipes
- **Customer Reviews**: Add genuine testimonials as you get customers
- **SEO**: Update meta tags in HTML for better Google search results
- **Pricing**: Keep prices competitive and clearly displayed
- **WhatsApp Integration**: Add a WhatsApp button for instant customer contact

## 🔧 Browser Support

Works on all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Need Help?

If you need to make changes and aren't sure how, feel free to ask! Common requests:
- Adding more product pages
- Setting up payment integration
- Adding image galleries
- Creating a blog section
- Mobile menu improvements

---

Made with ❤️ for KeshQueen - Bringing natural hair care to everyone!
