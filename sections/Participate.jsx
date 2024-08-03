import PerksCard from "../components/PerksCard"; 
export default function Participate() {
    return (
        <div className="flex flex-col items-center my-[16vh] py-[2vh] md:mx-80 gap-20">
            <h1 className="text-7xl 2k:text-8xl font-extrabold">Why Participate though?</h1>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="bg-[#FFFFFF1A] p-10">
                    <h1 className="text-3xl font-extrabold">1. Learn</h1>
                    <p className="text-lg">Learn about the latest technologies and trends in the industry.</p>
                </div>
                <div className="bg-[#FFFFFF1A] p-10">
                    <h1 className="text-3xl font-extrabold">1. Learn</h1>
                    <p className="text-lg">Learn about the latest technologies and trends in the industry.</p>
                </div><div className="bg-[#FFFFFF1A] p-10">
                    <h1 className="text-3xl font-extrabold">1. Learn</h1>
                    <p className="text-lg">Learn about the latest technologies and trends in the industry.</p>
                </div>
            </div>
        </div>
    );
}