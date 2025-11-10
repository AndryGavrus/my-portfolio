/**
 * Utility functions for the portfolio application
 */

/**
 * Generates a placeholder SVG image for projects
 * @param title The title to display in the placeholder
 * @returns Data URL for the SVG placeholder
 */
export const generatePlaceholderImage = (title: string): string => {
    const svg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#60a5fa"/>
          <stop offset="100%" stop-color="#a78bfa"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <g fill="white" font-family="Inter, Arial" text-anchor="middle">
        <text x="50%" y="48%" font-size="36" opacity="0.9">${title}</text>
        <text x="50%" y="60%" font-size="16" opacity="0.75">Project preview</text>
      </g>
    </svg>
  `);
    return `data:image/svg+xml;charset=utf-8,${svg}`;
};

/**
 * Gets the current year
 * @returns Current year as a number
 */
export const getCurrentYear = (): number => new Date().getFullYear();