import check from '../assets/check.svg'
import checkb from '../assets/checkb.svg'

const Abenmant = () => {
  return (
    <>
      
    <section className="bg-white min-h-screen py-8 md:py-10">
      <main className="px-4 md:px-10 lg:px-20 py-6 md:py-10">
        <h1 className="text-black text-lg md:text-2xl font-medium text-center mb-3">Stay Informed, Stay Healthy</h1>
        <h1 className="text-black text-3xl md:text-5xl text-center font-medium mb-10"> Energize, Empower, and Evolve with Our Tailored Plans</h1>


        <div className="grid grid-cols-1 md:grid-cols-3  mt-10 md:mt-20 gap-5">
          <div className=" bg-gray-900 px-6 md:px-10 py-8 md:py-10"> 
            <h1 className="text-lg md:text-2xl font-bold mb-2" >Online Training with a  Coach</h1>
            <h1 className="text-gray-300 mb-2">Duration: 7 days</h1>
            <h1 className="text-4xl md:text-6xl font-extrabold flex items-center gap-2">$60 <span className="text-gray-300  text-base font-normal">USD</span></h1>

            <button className="bg-white w-full py-3 text-black text-lg font-medium my-4">Buy Now</button>
            <h1 className="mb-2">What’s included</h1>

            <ul>
              <li className="flex items-center gap-2   mb-2"><img src={check} alt="" className="h-8" />Online workouts with a professional coach via video calls </li>
              <li className="flex items-center gap-2   mb-2"><img src={check} alt="" className="h-8" />Individually tailored workouts to meet your goals </li>
              <li className="flex items-center gap-2   mb-2"><img src={check} alt="" className="h-8" />Personalized feedback and advice from the coach</li>
              <li className="flex items-center gap-2   mb-2"><img src={check} alt="" className="h-8" />Regular monitoring and adjustment of the workout plan</li>
            </ul>

          </div>
          <div className=" bg-[#d5fb00] px-6 md:px-10 py-8 md:py-10"> 
            <h1 className="text-lg md:text-2xl font-bold mb-2 text-black" >Individually Customized Nutrition  Plan</h1>
            <h1 className="text-black mb-2">Duration: 17 days</h1>
            <h1 className="text-4xl md:text-6xl font-extrabold flex items-center gap-2 text-black">$100 <span className="text-gray-700  text-base font-normal">USD</span></h1>

            <button className="bg-black w-full py-3 text-white text-lg font-medium my-4">Buy Now</button>
            <h1 className="mb-2 text-black">What’s included</h1>

            <ul>
              <li className="flex items-center gap-2   text-black mb-2"><img src={checkb} alt="" className="h-8" />Personalized nutrition plan developed by an experienced dietitian</li>
              <li className="flex items-center gap-2   text-black mb-2"><img src={checkb} alt="" className="h-8" />A list of recipes and meal suggestions for each meal</li>
              <li className="flex items-center gap-2   text-black mb-2"><img src={checkb} alt="" className="h-8" />Recommendations for grocery shopping and meal preparation</li>
              <li className="flex items-center gap-2   text-black mb-2"><img src={checkb} alt="" className="h-8" />Support and consultations with the dietitian throughout the program</li>
            </ul>

          </div>
          <div className=" bg-gray-900 px-6 md:px-10 py-8 md:py-10"> 
            <h1 className="text-lg md:text-2xl font-bold mb-2" >Personal Calorie Counter and Nutrition Management</h1>
            <h1 className="text-gray-300 mb-2">Duration: 7 days</h1>
            <h1 className="text-4xl md:text-6xl font-extrabold flex items-center gap-2">$150 <span className="text-gray-300  text-base font-normal">USD</span></h1>

            <button className="bg-white w-full py-3 text-black text-lg font-medium my-4">Buy Now</button>
            <h1 className="mb-2">What’s included</h1>

            <ul>
              <li className="flex items-center gap-2   mb-2"><img src={check} alt="" className="h-8" />Interactive personal calorie and nutrient counter</li>
              <li className="flex items-center gap-2   mb-2"><img src={check} alt="" className="h-8" />Monitoring calorie and macronutrient intake</li>
              <li className="flex items-center gap-2   mb-2"><img src={check} alt="" className="h-8" />Creating graphs and reports of your nutrition</li>
              <li className="flex items-center gap-2   mb-2"><img src={check} alt="" className="h-8" />Recommendations for calorie balance and nutrition optimization</li>
            </ul>

          </div>
        </div>
      </main>
    </section>

    </>
  );
};

export default Abenmant;
