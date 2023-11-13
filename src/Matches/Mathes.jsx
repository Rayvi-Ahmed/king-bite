import { useEffect, useState } from "react";
import 'swiper/css';
import MatchData from "./MatchData/MatchData";
import Marquee from "react-fast-marquee";

const Mathes = () => {
    const [matches, setKhela] = useState([])

    useEffect(() => {

        fetch('/public/Matches.json')
            .then(res => res.json())
            .then(data => {
                setKhela(data)
                console.log(data);
            })
    }, [])

    return (
        <div className="mt-7 container mx-auto lg:py-9">
            <div className="text-2xl text-cyan-500 font-serif font-semibold">
                <h1>Matches: </h1>
            </div>



            <Marquee className="gap-2">
                {
                    matches.map(match =>

                        <MatchData
                            key={match._id}
                            match={match}
                        >
                        </MatchData>)
                }
            </Marquee>



        </div>
    );
};

export default Mathes;