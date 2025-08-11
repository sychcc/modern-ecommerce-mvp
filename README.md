# E-commerce Component System 電商組件系統

## Project Overview

A modern, modular e-commerce website built with component-based architecture and professional SASS styling system. Each component is developed independently with its own demo page, ensuring modularity, testability, and maintainability.
Current Components

## Features (v1.0)

- [x] Responsive navigation bar (Desktop/Tablet/Mobile)
- [x] Interactive hamburger menu with slide-out navigation
- [x] Shopping cart icon with quantity indicator
- [x] User avatar with hover effects
- [x] Smooth CSS animations and transitions

## Coming Next

Product Grid Component (v1.1) - Product display with filtering
Shopping Cart Component (v1.2) - Add/remove items functionality
Footer Component (v1.3) - Contact info and social links
Full MVP Integration (v2.0) - Complete e-commerce experience

## Technologies Used

- **HTML5** - Semantic markup structure
- **SASS** - Advanced CSS with variables, nesting, and modular imports
- **JavaScript ES6+** - Modern vanilla JavaScript with modules
- **Flexbox** - Advanced responsive layout systems
- **Google Fonts** - Inter and Noto Sans font families
- **SVG Icons** - Scalable vector graphics for crisp displays

## Project Structure

ecommerce-component-system/
├── assets/ # Shared resources
│ ├── images/ # Images, icons, graphics
│ ├── js/ # JavaScript modules
│ └── fonts/ # Custom fonts
├── styles/ # SASS modular system
│ ├── base/ # Global styles and variables
│ ├── components/ # Component-specific styles
│ ├── main.scss # Main SASS entry point
│ └── main.css # Compiled CSS output
├── components/ # Component demos and docs
│ └── navbar/ # Individual component folders
├── index.html # Main integration page
└── README.md # Project documentation

## Design System

scss// theme color
$color-white: #ffffff;
$color-blue: #4338ca; // Primary brand color
$color-black: #171717;       // Text color
$color-grey: #525252; // Secondary text
$color-light-grey: #f9fafb;
$color-lightest-grey: #edf0f3;

// Typography
$font-family-primary: "Noto Sans", sans-serif;
$font-family-brand: "Inter", sans-serif;
$font-size-sm: 0.875rem;    // 14px
$font-size-base: 1rem; // 16px
$font-size-lg: 1.125rem; // 18px

// Spacing System
$spacing-xs: 0.5rem;        // 8px
$spacing-sm: 1rem; // 16px
$spacing-md: 1.5rem;        // 24px
$spacing-lg: 2rem; // 32px
$spacing-xl: 3rem; // 48px

// Effects
$transition-fast: 0.2s ease;
$transition-normal: 0.3s ease;
$shadow-light: 0 2px 8px rgba(0, 0, 0, 0.1);
Responsive Breakpoints

Desktop (1024px+) - Full navigation with all features
Tablet (768px - 1023px) - Adapted layout for medium screens
Mobile (767px and below) - Hamburger menu with slide-out navigation

## Getting Started

Clone the repository
Open index.html in your browser for the full experience
View individual components in components/[component-name]/index.html

v1.0 - Complete navbar component with SASS architecture and responsive design

## Next Steps

- Develop product grid component with filtering and sorting
- Implement shopping cart functionality with local storage
- Create footer component with social media integration
- Integrate all components into complete Ecommerce MVP
