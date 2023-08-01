import Link from "next/link"

// Icons 
import { GoFileDirectoryFill } from "react-icons/go"

const LibraryPage = () => {
    const games = [1, 2, 3, 4, 5, 6, 7, 8,9,10];

    return (
        <div className=" flex justify-center">
            <div className=" h-[100%] grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  ">
                {games.map((game) => (
                    <Link href={'/library/game'} key={game} className="transition ease-in-out duration-300 group hover:opacity-70 "> 
                        <img className="  object-cover h-[300px] w-[220px] rounded-lg" src="https://image.api.playstation.com/vulcan/ap/rnd/202208/1718/NFf86jgU4AeVYgJBEoEKBpxW.jpg" alt="" />
                    </Link>
                ))}
            </div>
        </div>
        
    );
};

export default LibraryPage;