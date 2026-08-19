
const HomePage = () => {
    return (
        <div className='p-4 md:p-8 min-h-screen bg-linear-to-b from-purple-50 to-purple-300'>
            {/* My intro */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-4 md:p-8' >
                <div className='text-left text-gray-700 col-span-2' >
                    <p className='text-xl md:text-3xl font-semibold'>
                        Bonjour!
                    </p>
                    <p className='leading-relaxed text-xs md:text-sm'>
                        Having recently graduated from Concordia University in Montreal with a degree in software engineering, I decided to further develop my skills in data modeling, machine learning, and analytical visualization at McGill University.

                        Given my diverse range of interests, I am open to working in a variety of industries. What truly inspires me is the versatility of analytics: the ability to apply the same tools to fields as diverse as finance, healthcare, or even astrophysics. Whether it’s modeling financial risk, improving patient care pathways, or analyzing cosmological data, I firmly believe that mastering data is a universal language that drives discovery.

                        Collaborating with research professors and contributing to publishable work represents a unique opportunity for me to combine scientific rigor with tangible impact. In the short term, my ambition is to hold a position related to the design of IT systems that have a real and positive impact on society, and, in the longer term, to move into consulting or analytical leadership roles.
                    </p>
                </div>
                <div className='relative flex justify-center col-span-1'>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=60"
                    className="w-full h-60 sm:h-80 sm:w-80 rounded-t-full object-cover"
                    />
                    <div className="absolute -bottom-3 -right-3 w-60 h-60 bg-fuchsia-200 rounded-full opacity-50 blur-2xl"></div>
                </div>
            </div>

            {/* Project gallery title */}
            <div className="max-w-7xl mx-auto mt-10 mb-4 text-center" >
                <div className='text-3xl' >
                    {'𓆉⋆｡˚⋆❀ 🐚🫧𓇼 ˖° Projects 🪼⋆｡𖦹°🫧⋆.ೃ࿔*:･'.split('').map((c, idx) => {
                        const delay = 150 * idx
                        const isTitle = 'projects'.split('').includes(c.toLowerCase())

                        return <span key={`k-${c}-${delay}`}
                                style={{ animationDelay: `${delay}ms` }}
                                className={`${isTitle ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl lg:text-3xl'} text-fuchsia-800 animate-bounce inline-block`}
                                // className={`${c === '.' ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl lg:text-3xl'} text-fuchsia-800 animate-[bounce_1s_infinite_ease-in-out,pulse_2s_infinite_ease-in-out]`}
                            >
                            {c}
                        </span>

                    })}
                </div>
            </div>

            {/* Gallery section */}
            <div className='max-w-7xl mx-auto space-y-6' style={{ animation: 'fadeInUp' }}>
                {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-62.5 gap-4 md:gap-6'> */}
                <div className='h-60 md:h-65 grid grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl mx-auto p-6 md:p-8' >
                    <div className='relative flex flex-col gap-2 justify-center items-center col-span-1'>
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=60"
                            className="w-full h-50 sm:h-60 sm:w-60 object-cover"
                        />
                        <div className="absolute -bottom-3 -right-3 w-60 h-60 bg-fuchsia-200 rounded-full opacity-50 blur-2xl"></div>
                        <button type='button'
                            className='w-fit h-8 px-2 rounded-full bg-emerald-500 text-amber-400
                                font-semibold hover:scale-90 transition-all transition-discrete
                                delay-150 duration-300 ease-in-out'
                        >
                            More 𐫱✿❀❁✽
                        </button>
                    </div>
                    <div className='text-left text-gray-700 h-60 col-span-2' >
                        <p className='text-base md:text-xl font-semibold'>
                            Project name
                        </p>
                        <p className='leading-relaxed text-sm md:text-sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>

                <div className='h-64 md:h-72 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto p-8 md:p-12' >
                    <div className="grid grid-rows-2 col-span-1" >
                        <div className='text-left text-gray-700' >
                            <p className='text-base md:text-lg font-semibold'>
                                Project name
                            </p>
                            <p className='leading-relaxed text-sm md:text-xs'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis metus eros, egestas vestibulum nisl interdum euismod. Nunc mauris neque, placerat eget condimentum non, interdum vitae libero. In ornare felis ac rhoncus semper. 
                            </p>
                        </div>
                        <div className='relative flex flex-col gap-2 justify-center items-center'>
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=60"
                                className="w-full h-50 sm:h-60 sm:w-60 object-cover"
                            />
                            <div className="absolute -bottom-3 -right-3 w-60 h-60 bg-fuchsia-200 rounded-full opacity-50 blur-2xl"></div>
                            <button type='button'
                                className='w-fit h-8 px-2 rounded-full bg-emerald-500 text-amber-400
                                    font-semibold hover:scale-90 transition-all transition-discrete
                                    delay-150 duration-300 ease-in-out'
                            >
                                More 𐫱✿❀❁✽
                            </button>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 h-full" >
                        <div className='relative flex flex-col gap-2 justify-center items-center'>
                            <img src="https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60"
                                className="w-full h-40 sm:h-50 sm:w-50 rounded-t-full object-cover"
                            />
                            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-fuchsia-200 rounded-full opacity-50 blur-2xl"></div>
                            <button type='button'
                                className='w-fit h-8 px-2 rounded-full bg-emerald-500 text-amber-400
                                    font-semibold hover:scale-90 transition-all transition-discrete
                                    delay-150 duration-300 ease-in-out'
                            >
                                More 𐫱✿❀❁✽
                            </button>
                        </div>
                        <div className='text-left text-gray-700 h-50' >
                            <p className='text-base md:text-xl font-semibold'>
                                Project name
                            </p>
                            <p className='leading-relaxed text-sm md:text-sm'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
