import profile from '../assets/images/profile.png'
interface Player {
    id: number;
    name: string;
    position: string;
    imageUrl: string;
}

interface PlayersProps {
    players: Player[];
}

const Players: React.FC<PlayersProps> = ({ players }) => {
    return (
        <section className='bg-gray-100 p-10 pb-0'>
            <div className='container mx-auto'>
                <h2 className='text-3xl md:text-4xl font-bold text-primary mb-6 text-center'>
                    The Team
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {players.map((player) => (
                        <div
                            key={player.id}
                            className='bg-white p-6 rounded-lg shadow-md text-center'>
                            <img
                                src={profile}
                                alt={player.name}
                                className='w-32 h-32 mx-auto rounded-full mb-4'
                            />
                            <h3 className='text-xl font-semibold'>
                                {player.name}
                            </h3>
                            <p className='text-gray-600'>{player.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Players;
