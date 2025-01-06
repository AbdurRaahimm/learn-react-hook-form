
interface HeaderProps{
    title: string,
    desc?:string
}

export default function Header({title, desc}:HeaderProps) {
  return (
    <div className="space-y-1">
        <h1 className="capitalize text-2xl font-medium">{title}</h1>
        <p className="text-sm text-gray-400">{desc}</p>
    </div>
  )
}
