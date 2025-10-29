import 'tailwindcss'

function Home() {

    return (
        <section id='hero' className='flex items-center min-h-screen'>
            <div className='flex items-center'>
                <img src="/very-brighthr-logo.png" alt="very brighthr logo" className='-mr-12'/>
                <div className='pr-[4rem]'>
                    <h1 className='font-semibold text-right'>Welcome to Very Bright<sup>hr</sup></h1>
                    <p className='text-right relative right-[50px]'>Your ultimate tool for everything HR.</p>
                </div>
            </div>
        </section>
    )
}

export default Home