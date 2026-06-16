// components/generated/Footer.tsx

type Props = {
  copyright: string
}

const Footer = ({ copyright }: Props) => {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-gray-400">
      {copyright}
    </footer>
  )
}

export default Footer