import { features } from '../constants';

const FeatureSection = () => {
  return (
    <section id='feature'>
        <div className="bg-white py-12 mt-20">
            <div className="text-center">
                <h3 className="text-2xl sm:text-4xl font-medium mb-6">
                <span className='bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text'>{" "}Ordinační hodiny</span>
                </h3>
                <div className="flex justify-center space-x-12">
                    <div className="text-center">
                        <h4 className="text-xl font-semibold text-black">Pondělí - Čtvrtek</h4>
                        <p className="text-lg text-black">8:00 - 11:00 | 16:00 - 18:00</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-xl font-semibold text-black">Pátek</h4>
                        <p className="text-lg text-black">8:00 - 11:00 | 16:00 - 17:00</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-xl font-semibold text-black">Sobota - Neděle</h4>
                        <p className="text-lg text-neutral-500">Zavřeno</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection;