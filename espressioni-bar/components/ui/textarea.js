export function Textarea({ className = "", ...props }) {
  return <textarea className={`px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 ${className}`} {...props} />;
}
