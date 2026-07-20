"use client"

export default function Section1() {
    return (
        <section className="py-20 sm:py-28 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden font-sans">
            {/* Main Title Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 md:gap-10 mb-10 sm:mb-16">
                <div>
                    <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[130px] text-blue-600 font-semibold leading-none tracking-tight">
                        01.
                    </span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-tight">
                        WEB DEVELOPMENT
                    </h1>
                </div>
            </div>

            {/* Overview Content Grid */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                        Overview
                    </h2>
                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                        At EZ Soft Tech, we build modern, high-performing websites that help businesses establish a strong digital presence and achieve their goals. Our skilled web development team combines the latest technologies, responsive design principles, and industry best practices to create <span className="text-blue-600 font-bold">fast, secure, and scalable web solutions</span> tailored to your unique requirements.
                    </p>
                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                        Our Web Development services include <span className="text-blue-700 font-bold">  responsive website development, custom web applications, eCommerce solutions, CMS development, API integration, performance optimization, SEO-friendly architecture, and ongoing support</span>.We focus on delivering engaging digital experiences that not only look great but also improve user engagement, streamline business operations, and drive measurable growth for your business.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img
                        src="/web-dev.png"
                        className="w-full max-w-lg lg:max-w-xl h-auto object-cover rounded-3xl shadow-md border border-neutral-100" 
                        alt="Web Development Overview" 
                    />
                </div>
            </div>
        </section>
    )
}
