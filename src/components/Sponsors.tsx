interface Sponsor {
    id: number;
    name: string;
    logoUrl: string;
    websiteUrl: string;
}

interface SponsorsProps {
    sponsors: Sponsor[];
}

const Sponsors: React.FC<SponsorsProps> = ({ sponsors }) => {
    return (
        <section className='bg-gray-100 p-10'>
            <div className='container mx-auto'>
                <h2 className='text-3xl md:text-4xl font-bold text-primary mb-6 text-center'>
                    Our Sponsors
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.id}
                            className='bg-white p-4 rounded-lg shadow-md text-center'>
                            <a
                                href={sponsor.websiteUrl}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <img
                                    src={sponsor.logoUrl}
                                    alt={sponsor.name}
                                    className='w-full'
                                />
                            </a>
                            <p className='text-black mt-2 text-lg font-semibold'>
                                <a
                                    href={sponsor.websiteUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    {sponsor.name}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
