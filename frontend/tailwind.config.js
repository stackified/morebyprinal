/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          // Refined Teal/Cream Color Palette
          'peacock-blue': '#008B8B',        // Main Primary: Deep Teal/Peacock Blue
          'peacock-teal': '#20B2AA',        // Secondary Teal: Lighter teal for hover effects
          'deep-teal': '#006666',           // Deep teal variant for darker elements
          
          // Neutral Base Colors
          'warm-cream': '#F5F2E8',         // Warm cream/beige for backgrounds
          'soft-white': '#FAFAFA',          // Soft white for clean sections
          
          // Text Colors
          'charcoal': '#2F4F4F',           // Dark charcoal for optimal readability
          'medium-gray': '#708090',        // Medium gray for secondary text
          
          // Accent Colors (keeping minimal)
          'peacock-gold': '#DAA520',       // Minimal gold for accents
          
          // Legacy Colors (keeping for compatibility)
          'burgundy': '#8B4513',
          'warm-beige': '#F5E6D3',
          'light-cream': '#FEFCF8',
          'dark-brown': '#3C2415',
          'gold': '#D4AF37',
          'rich-burgundy': '#722F37',
        },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Lusitana', 'serif'],
        'script': ['Dancing Script', 'cursive'],
        'display': ['Recoleta', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'peacock': '0 4px 20px rgba(0, 139, 139, 0.15)',
        'elegant': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'peacock-gradient': 'linear-gradient(135deg, #008B8B 0%, #20B2AA 50%, #DAA520 100%)',
        'gold-gradient': 'linear-gradient(135deg, #DAA520 0%, #CD7F32 100%)',
      },
    },
  },
  plugins: [],
}
