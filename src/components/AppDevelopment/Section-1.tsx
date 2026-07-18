"use client"

export default function Section1() {
    return (
        <main className="p-15  justify-center items-center">
            <div className="flex  py-20 px-10  gap-30 ml-30">
                <div>
                    <h1 className="text-[160px] text-blue-600 font-semibold">
                        02.
                    </h1>
                </div>
                <div className="flex flex-col w-1/2">
                    <h1 className="text-[70px] font-bold mt-4">
                        APP DEVELOPMENT
                    </h1>
                </div>
            </div>
            <div className="px-40 mt-10 flex">
                <div className="flex flex-col gap-8  w-full ">
                    <h1 className="text-5xl font-semibold ">OverView</h1>
                    <p className="w-140 text-lg">
                        At EZ Soft Tech, we develop innovative mobile applications that deliver exceptional user experiences and help businesses connect with their customers anytime, anywhere. Our experienced app developers create high-performance, feature-rich applications for Android, iOS, and cross-platform environments using modern technologies and industry best practices.
                    </p>
                    <p className="w-140 text-lg">
                        Our App Development services include native and cross-platform app development, enterprise mobility solutions, eCommerce applications, API integration, cloud connectivity, app maintenance, performance optimization, and ongoing updates. We focus on building reliable mobile solutions that increase customer engagement, streamline operations, and accelerate business growth.
                    </p>
                </div>
                <div>
                    <img src="/app-dev.png" className="w-[100rem]" alt="" />
                </div>
            </div>
        </main>
    )
}