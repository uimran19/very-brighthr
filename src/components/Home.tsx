import 'tailwindcss'

function Home() {

    return (
        <section>
            <div className='flex items-center'>
                <img src="/very-brighthr-logo.png" alt="very brighthr logo" className='-mr-12'/>
                <h1 className='mr-12 font-semibold'>Welcome to Very Bright<sup>hr</sup></h1>
            </div>
            <p>Your ultimate tool for everything HR.</p>
        </section>
    )
}

export default Home