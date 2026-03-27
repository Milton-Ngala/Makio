/**
 * Appends Cloudinary auto-optimization transformations to a Cloudinary image URL.
 * Serves WebP where supported, auto quality, and optionally resizes width.
 */
export function optimizeImage(url: string, width?: number): string {
  if (!url.includes('res.cloudinary.com')) return url;

  const transforms = ['f_auto', 'q_auto', ...(width ? [`w_${width}`] : [])].join(',');

  // Insert transforms after /upload/
  return url.replace('/upload/', `/upload/${transforms}/`);
}
