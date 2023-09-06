import team from '../assets/images/team.png'
const About = () => {
  return (
	<section className="bg-white p-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              About Kipkunur Football Club
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ac justo nec justo consequat semper sit amet id libero. Nullam
              aliquet odio eu odio laoreet, at convallis augue rhoncus. Etiam
              ut ligula et sapien eleifend fermentum. Sed vitae odio non ex
              varius euismod.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={team}
              alt="About Football Club"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About