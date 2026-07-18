"use client"

export default function Section1() {
    return (
        <main className="p-15  justify-center items-center">
            <div className="flex  py-20 px-10  gap-30 ml-30">
                <div>
                    <h1 className="text-[160px] text-blue-600 font-semibold">
                        01.
                    </h1>
                </div>
                <div className="flex flex-col w-1/2">
                    <h1 className="text-[70px] font-bold mt-4">
                        WEB DEVELOPMENT
                    </h1>
                </div>
            </div>
            <div className="px-40 mt-10 flex">
                <div className="flex flex-col gap-8  w-full ">
                    <h1 className="text-5xl font-semibold ">OverView</h1>
                    <p className="w-140 text-lg">
                        At EZ Soft Tech, we build modern, high-performing websites that help businesses establish a strong digital presence and achieve their goals. Our skilled web development team combines the latest technologies, responsive design principles, and industry best practices to create <span className="text-blue-600 font-bold"> fast, secure, and scalable web solutions</span> tailored to your unique requirements.
                    </p>
                    <p className="w-140 text-lg">
                        Our Web Development services include responsive website development, custom web applications, eCommerce solutions, CMS development, API integration, performance optimization, SEO-friendly architecture, and ongoing support. We focus on delivering engaging digital experiences that not only look great but also improve user engagement, streamline business operations, and drive measurable growth for your business.
                    </p>
                </div>
                <div>
                    <img src="/web-dev.png" className="w-[130rem]" alt="" />
                </div>
            </div>
        </main>
    )
}