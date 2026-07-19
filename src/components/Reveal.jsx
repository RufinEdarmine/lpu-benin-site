import { useReveal } from "../hooks/useReveal";

export default function Reveal({ as: Tag = "div", className = "", children, delay }) {
  const ref = useReveal();
  const cls = `reveal ${delay ? `reveal-delay-${delay}` : ""} ${className}`.trim();
  return <Tag ref={ref} className={cls}>{children}</Tag>;
}