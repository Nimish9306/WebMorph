const PricingSection = ({ title, plans }: any) => {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">
        {title}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan:any,index:number)=>(
          <div
            key={index}
            className="rounded-2xl border border-white/10 p-6"
          >
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default PricingSection