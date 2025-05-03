import Hero from '../Components/Home/Hero'
import EduElevate from '../Components/Home/Eduelevate'
import CoursesOld from '../Components/Home/CoursesOld'
import Collaboration from '../Components/Home/Collaboration'
import Feedback from '../Components/Home/Feedback'
import Newsletter from '../Components/Home/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <EduElevate />
      <CoursesOld />
      <Collaboration />
      <Feedback />
      <Newsletter />
    </div>
  )
}

export default Home