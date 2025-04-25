type IconProps = {
  src: string
  title: string
  className?: string
  size?: number
}

export const Icon = ({ src, title, size = 32, className }: IconProps) => {
  return (
    <img
      src={src}
      alt={title}
      title={title}
      width={size}
      height={size}
      className={className}
      loading="lazy"
    />
  )
}
