export default function imageLoader({ src }: { src: string }) {
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:") ||
    src.startsWith("blob:")
  ) {
    return src;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (base && src.startsWith(base)) return src;
  const path = src.startsWith("/") ? src : `/${src}`;
  return `${base}${path}`;
}
