import Link from "next/link"

// Icons 
import { GoFileDirectoryFill } from "react-icons/go"

const GamePage = () => {

    return (
        <div className="">
            <img className=" min-h-[300px] max-h-[400px] w-[100%] object-cover" src="https://cdn1.epicgames.com/offer/9bcf5a4dc1d54cb6ab1a42f3a70c5cf4/Share_Image_1920x1080_1920x1080-3ec6b92b109d6ebe190c7fd8da23b989" alt="" />
            <div className="flex justify-between items-center p-5">
                <div className="flex items-center gap-6">
                    <button className=" bg-green w-40 h-10 rounded-md hover:opacity-80">PLAY</button>
                    <div>
                        <p><b>PLAY TIME</b></p>
                        <p className="text-xs opacity-70">2.2 hours</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <button className=" bg-accent-50 w-10 h-10 rounded-md">S</button>

                </div>
                
            </div>
        </div>
        
    );
};

export default GamePage;