// components/generated/FeaturesSection.tsx

type Feature = {
  title: string
  description: string
}

type Props = {
  title: string
  features: Feature[]
}

const FeaturesSection = ({
  title,
  features,
}: Props) => {
  return (
    <section className="px-8 py-20">

      <h2 className="mb-12 text-center text-4xl font-bold">
        {title}
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default FeaturesSection