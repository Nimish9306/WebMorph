type Props = {
  title: string
  cta: string
}

const CTASection = ({
  title,
  cta,
}: Props) => {
  return (
    <section className="px-8 py-24">

      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <div className="mb-10 text-center">

          <h2 className="text-4xl font-bold">
            {title}
          </h2>

          <p className="mt-4 text-gray-400">
            We'd love to hear about your project.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Left Side */}
          <div>

            <h3 className="text-2xl font-semibold">
              Let's Build Something Amazing
            </h3>

            <p className="mt-4 text-gray-400">
              Have an idea for a website or product?
              Reach out and let's discuss how we can
              bring it to life.
            </p>

            <div className="mt-8 space-y-4 text-gray-300">

              <p>📧 hello@webmorph.ai</p>

              <p>📍 Bhopal, India</p>

              <p>📞 +91 XXXXX XXXXX</p>

            </div>

          </div>

          {/* Right Side */}
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
            />

            <textarea
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-violet-600 py-4 font-medium transition hover:bg-violet-700"
            >
              Submit
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default CTASection