import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faFutbol, faUsers } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const Stats = () => {
    const stats = [
        { icon: faTrophy, label: 'Trophies', value: 10 },
        { icon: faFutbol, label: 'Goals Scored', value: 100 },
        { icon: faUsers, label: 'Members', value: 60 },
    ];
    return (
        <section className='bg-gray-100 py-12'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className='bg-white p-6 rounded-lg shadow-lg text-center flex flex-col gap-4'>
                            <FontAwesomeIcon
                                icon={stat.icon}
                                className='text-primary text-4xl'
                            />
                            <CountUp
                                start={0}
                                end={stat.value}
                                enableScrollSpy
                                duration={3}
                                separator=','
                                useEasing={true}>
                                {({ countUpRef }) => (
                                    <span
                                        className='text-3xl font-bold text-secondary'
                                        ref={countUpRef}
                                    />
                                )}
                            </CountUp>
                            <h3 className='text-xl font-semibold'>
                                {stat.label}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
