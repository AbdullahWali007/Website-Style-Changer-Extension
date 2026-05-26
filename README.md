# Aesthetic Reality Filter (ARF)

Aesthetic Reality Filter is a browser extension designed to intelligently transform web reality. Move beyond basic dark mode—ARF completely overhauls your browsing aesthetic with deeply integrated themes ranging from neon-soaked Cyberpunk to frosted Glassmorphism. 

Built with advanced DOM observation and specificity-crushing CSS, ARF tames the most stubborn websites on the internet without breaking their functionality.

## Features

* **Universal & Intelligent Theming:** Transforms all websites using dynamic CSS injection and custom color mixing.
* **The Brand & Media Sanctuary:** Intelligently identifies and protects logos, SVGs, charts, and media (images, videos, iframes) from being distorted by global color overrides.
* **Dynamic Host Sanctuaries:** Includes bespoke, hand-crafted CSS rules to flawlessly conquer complex web apps including:
    * YouTube (including live chat and player controls)
    * WhatsApp Web
    * Google Gemini
    * Pinterest
    * Wikipedia
* **Adaptive Immersion Engine:** Dynamically applies visual filters (contrast, sepia, grayscale, hue-rotation) to web images based on your active theme and chosen immersion level.
* **Anti-Ghosting Tech:** Utilizes a custom algorithmic "fade killer" to hunt down and strip away stubborn white gradients, transparent overlays, and static shadows that typically break standard dark themes.
* **Real-Time DOM Adaptation:** Employs an optimized `MutationObserver` to instantly catch and style dynamically loaded content on infinite-scroll pages and Single Page Applications.

## Available Themes

ARF ships with a diverse array of built-in realities:

* **Cyberpunk:** Neon accents on deep dark backgrounds.
* **Zen:** A clean, calming light scheme.
* **Dark Academia:** Rich browns, sepia tones, and vintage contrast.
* **Elvish:** Features imported `Cinzel` and `Cormorant Garamond` fonts, golden accents, and radial gradient backgrounds.
* **Vaporwave:** Nostalgic purples and bright pinks.
* **Terminal:** High-contrast hacker green and black.
* **Solarized:** Easy-on-the-eyes standard light reading theme.
* **Glassmorphism:** Features an animated, glowing aurora background with blurred, translucent UI surfaces.

## In Action

Here is how the Aesthetic Reality Filter transforms the web:

### Wikipedia Redefined
![Wikipedia Theme](images/Screenshot%20wikipedia.png)

### YouTube & Live Chat Integration
![YouTube Theme](images/Screenshot%20Youtube.png)
![YouTube Extended](images/Screenshot%20yt-2.png)

## Installation (Developer Mode)

1. Clone or download this repository to your local machine.
2. Open your Chromium-based browser and navigate to the Extensions page (`chrome://extensions/`).
3. Toggle on **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the folder containing the extension files.
5. Upon successful installation, the onboarding page will automatically launch to help you set your reality. 

## Under the Hood

ARF relies on a robust `content.js` script that acts as a "root hijacker". Instead of just appending `<style>` tags, it utilizes `CSSStyleSheet` objects and injects them directly into `document.adoptedStyleSheets`, ensuring styles aggressively cascade even into Shadow DOM components.
