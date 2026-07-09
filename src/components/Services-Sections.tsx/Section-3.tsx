"use client"





export function Section3(){
    return(
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-start text-left max-w-xl lg:pl-12">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold mb-6 text-neutral-900 leading-tight">Ready to Scale Your Business With AI-Powered Solutions?</h2>
            <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">Our AI solutions are designed to help businesses of all sizes unlock their full potential. From automating repetitive tasks to gaining valuable insights from data, we have the expertise to help you achieve your goals.</p>
        </div>
        <div className="w-full flex justify-center lg:justify-end">
            <img className="rounded-[32px] shadow-lg w-full h-auto object-cover max-h-[450px]" src="./services-5.png" alt="" />
        </div>
    </section>
    )
}