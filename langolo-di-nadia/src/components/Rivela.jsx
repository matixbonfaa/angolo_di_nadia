// Rivela — mostra i figli con un fade-up elegante quando entrano nel viewport.
// Usare `delay` (ms) per creare lo stagger tra elementi di una griglia.
//
// props:
//   as:    elemento da renderizzare ("div" default, "li", "article"…)
//   delay: ritardo della transizione in ms
// L'effetto è disattivato via CSS con prefers-reduced-motion.

import { useInView } from '../hooks/useInView.js'

function Rivela({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`rivela ${inView ? 'in-vista' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Rivela
