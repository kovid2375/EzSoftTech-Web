"use client"

export default function Section1() {
    return (
        <section className="py-20 sm:py-28 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden font-sans">
            {/* Main Title Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 md:gap-10 mb-10 sm:mb-16">
                <div>
                    <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[130px] text-blue-600 font-semibold leading-none tracking-tight">
                        03.
                    </span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-tight">
                        DESKTOP APP DEVELOPMENT
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
                        At EZ Soft Tech, <span className="text-blue-600 font-bold">we design and build high-performance, secure, and feature-rich desktop applications for Windows, macOS, and Linux</span>. Our experienced engineering team delivers tailored desktop solutions that integrate deeply with OS-level APIs, handle intensive computations efficiently, and work seamlessly offline to optimize your business operations.
                    </p>
                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                        Our Desktop App Development services include cross-platform development, native OS integrations,<span className="text-blue-600 font-bold"> legacy software modernization, offline-first application architectures, enterprise ERP systems, and hardware integrations.</span> We focus on delivering responsive user interfaces, robust security, and reliable performance that streamline complex workflows and boost productivity.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img 
                        src="/desktop.jpeg" 
                        className="w-full max-w-lg lg:max-w-xl h-auto object-cover rounded-3xl shadow-md border border-neutral-100" 
                        alt="Desktop App Development Overview" 
                    />
                </div>
            </div>
        </section>
    )
}