type Props = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

export function Img({ src, alt, className = "", width, height, fill, priority }: Props) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const url =
    src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")
      ? src
      : `${base}${src.startsWith("/") ? src : `/${src}`}`;

  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={url}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${className}`}
        fetchPriority={priority ? "high" : undefined}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt={alt}
      width={width}
      height={height}
      className={className}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
