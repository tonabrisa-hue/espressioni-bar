export function Card({ className = "", children }) {
  return <div className={`rounded-2xl border ${className}`}>{children}</div>;
}
export function CardHeader({ className = "", children }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
export function CardContent({ className = "", children }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
export function CardFooter({ className = "", children }) {
  return <div className={`p-5 pt-0 ${className}`}>{children}</div>;
}
export function CardTitle({ className = "", children }) {
  return <h3 className={`font-semibold ${className}`}>{children}</h3>;
}
export function CardDescription({ className = "", children }) {
  return <p className={`text-sm ${className}`}>{children}</p>;
}
