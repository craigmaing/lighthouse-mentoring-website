// Central image imports for proper Astro optimization
// This allows us to use Astro's Image component effectively

// Logos and Badges
export const lighthouseLogo = '/lighthouse-logo.png';
export const iodBadge = '/iod-badge.png';
export const rsphBadge = '/rsph-badge.jpg';
export const iodGlobalFinalist = '/iod-global-finalist.png';
export const iodAspiringFinalist = '/iod-aspiring-finalist.png';

// People
export const craigFearnPhoto = '/craig-fearn.jpg';

// Image dimensions for consistency
export const imageDimensions = {
  badges: {
    small: { width: 48, height: 48 },
    medium: { width: 80, height: 80 },
    large: { width: 120, height: 120 }
  },
  banners: {
    small: { width: 300 },
    medium: { width: 400 },
    large: { width: 500 }
  },
  photos: {
    thumbnail: { width: 200, height: 200 },
    card: { width: 400, height: 400 },
    hero: { width: 800, height: 600 }
  }
};