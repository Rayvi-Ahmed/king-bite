
import { Link } from 'react-router-dom';
import MatchDetails from '../MatchDetails';


const MatchData = ({ match }) => {
    console.log(match);

    const { _id, Australia_logo, Tournament, Opponent, Opponent_logo, Venue, Match_time, Win_probability, date } = match



    return (
        <div>
            <div className='lg:ml-10 ml-5 lg:mt-10 mt-5'>
                <div className="card w-96 lg:h-[300px] bg-[#085251;] border border-yellow-400  shadow-l text-yellow-400 rounded-none">
                    <div className='flex justify-center items-center gap-8 p-5'>
                        <figure><img className='w-[40px] lg:w-[60px]' src={Australia_logo} alt="Shoes" /></figure>
                        VS
                        <figure><img className='w-[40px] lg:w-[60px]' src={Opponent_logo} alt="Shoes" /></figure>
                    </div>
                    <div className="card-body p-3 lg:h-[150px] h-5/6 ">
                        <h2 className="card-title">
                            {Tournament}
                            <div className="badge badge-secondary">LIVE</div>
                        </h2>
                        <div className='mb-0'>
                            <p>Oponiant Team : {Opponent}</p>
                            <p>Venue : {Venue}</p>
                            <p>Date : {date}</p>
                        </div>
                        <div className="card-actions flex justify-center items-centern ">
                            <div className="badge badge-outline">{Match_time}</div>
                            <div className="badge badge-outline">Win Probabilty {Win_probability}</div>

                            <Link to={`/allMatch/${_id}`}> <div className="badge badge-outline">Get Details</div></Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MatchData; 