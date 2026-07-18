"use client"

export default function Section1() {
    return (
        <main className="p-15  justify-center items-center">
            <div className="flex  py-20 px-10  gap-30 ml-30">
                <div>
                    <h1 className="text-[160px] text-blue-600 font-semibold">
                        03.
                    </h1>
                </div>
                <div className="flex flex-col w-1/2">
                    <h1 className="text-[70px] font-bold mt-4 leading-tight">
                        DESKTOP APP DEVELOPMENT
                    </h1>
                </div>
            </div>
            <div className="px-40 mt-10 flex">
                <div className="flex flex-col gap-8  w-full ">
                    <h1 className="text-5xl font-semibold ">OverView</h1>
                    <p className="w-140 text-lg">
                        At EZ Soft Tech, we design and build high-performance, secure, and feature-rich desktop applications for Windows, macOS, and Linux. Our experienced engineering team delivers tailored desktop solutions that integrate deeply with OS-level APIs, handle intensive computations efficiently, and work seamlessly offline to optimize your business operations.
                    </p>
                    <p className="w-140 text-lg">
                        Our Desktop App Development services include cross-platform development, native OS integrations, legacy software modernization, offline-first application architectures, enterprise ERP systems, and hardware integrations. We focus on delivering responsive user interfaces, robust security, and reliable performance that streamline complex workflows and boost productivity.
                    </p>
                </div>
                <div>
                    <img src="/desktop.jpeg" className="w-[100rem] rounded-2xl border border-neutral-200/50 shadow-md" alt="Desktop App Development" />
                </div>
            </div>
        </main>
    )
}