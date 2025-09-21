// Utility function to get correct asset paths for both development and production
export const getAssetPath = (path) => {
  // Remove leading dot and slash if present
  const cleanPath = path.replace(/^\.\//, '');
  
  // In development, React serves public folder files from root
  // In production (GitHub Pages), we need the /morebyprinal prefix
  if (process.env.NODE_ENV === 'development') {
    return `/${cleanPath}`;
  } else {
    return `./${cleanPath}`;
  }
};

// Specific function for images
export const getImagePath = (imagePath) => {
  return getAssetPath(imagePath);
};
