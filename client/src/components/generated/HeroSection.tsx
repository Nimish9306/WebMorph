// components/generated/HeroSection.tsx

type Props = {
  title: string
  subtitle: string
}

const HeroSection = ({ title, subtitle }: Props) => {
  return (
    <section className="px-8 py-24 text-center">
      <h1 className="text-5xl font-bold">
        {title}
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
        {subtitle}
      </p>

      <button className="mt-8 rounded-xl bg-violet-600 px-6 py-3">
        Get Started
      </button>
    </section>
  )
}

export default HeroSection