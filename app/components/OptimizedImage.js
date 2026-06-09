import Image from "next/image";

/**
 * Optimized image component using next/image for automatic WebP, srcset, and lazy loading
 * Usage: <OptimizedImage src="/path.webp" alt="..." width={1200} height={630} priority />
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  fill = false,
  sizes,
  quality = 80,
  ...props
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      quality={quality}
      sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"}
      className={className}
      {...props}
    />
  );
}
