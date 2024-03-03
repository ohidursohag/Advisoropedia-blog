import AllPosts from "../Components/Home/AllPosts/AllPosts";
import Banner from "../Components/Home/Banner";
import Container from "../Components/Utils/Container";
import Section from "../Components/Utils/Section";

const Home = () => {

  return (
    <main>
       <Container>
            <Banner/>
            <Section>
              <AllPosts/>
            </Section>
       </Container>
    </main>
  )
};

export default Home;
