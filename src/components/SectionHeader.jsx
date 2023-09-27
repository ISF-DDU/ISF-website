import React from 'react'

const SectionHeader = ( {title} ) => {
    return (
        <section class="container mx-auto">
            <div class="grid grid-rows-1">
                <div class="h-56 flex flex-col justify-center">
                    <h1 class="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-2 aos-init aos-animate text-blue-900">{ title }</h1>
                    <p class="whitespace-normal max-w-[84ch]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum aliquet augue sed vulputate. Vestibulum tortor ex, viverra eget cursus nec, gravida sit amet tortor. Ut iaculis sed leo at vehicula. Morbi eu quam in massa suscipit ultrices.</p>
                </div>
            </div>
        </section>
    )
}

export default SectionHeader
