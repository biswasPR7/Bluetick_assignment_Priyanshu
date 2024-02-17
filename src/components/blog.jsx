import { React } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    //

    <div className="blog" id="blogs_id">
      <h1 style={{color: "blue",fontSize:"35px"}}>Explore and enjoy the blogs written by our passionate techies</h1>
      <Slider {...settings}>
        <div className="cards">
          <header style={{ marginBottom:"50px",fontWeight: "bold",fontSize:"25px",marginTop:"10px"}}>Speaking SQL:Turning Natural Language into Database Dialogues</header>
          <main >
            Bridging Language and Data in the Enterprise Sphere: In the realm of
            enterprise data management, SQL databases have long stood as the
            backbone, housing vast quantities of invaluable information. As
            enterprises increasingly lean on business intelligence (BI) tools to
            extract insights from these data repositories, the quest for more
            intuitive and accessible querying methods gains momentum. The
            emerging solution? Leveraging Large Language Models (LLMs) to
            interact with SQL databases using natural language...
          </main>

          <a
            href="https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html"
            style={{ color:"blue",textDecoration: "none", marginLeft: "40px" }}
          >
            Read more
          </a>
        </div>
        <div className="cards">
          <header style={{marginBottom:"50px" ,fontWeight: "bold",fontSize:"25px",marginTop:"10px"}}>
            <p>Beyond Basics: Elevating AI</p>
            <p>with Reinforcement Learning </p>
          </header>
          <main >
          Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the
success of ChatGPT, marking a significant advancement in AI's ability to understand and
engage in human language. This method, vital for fine-tuning language models, addresses
the complexities and nuances of communication, ensuring AI interactions are natural and
intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding
models to avoid replicating inappropriate language or tones...
          </main>

          <a
            href="https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html"
            style={{ color:"blue",textDecoration: "none", marginLeft: "40px" }}
          >
            Read more
          </a>
        </div>
        <div className="cards">
          <header style={{marginBottom:"50px",fontWeight: "bold",fontSize:"25px",marginTop:"10px" }}>
            <p>The Fine Art of Tuning:</p>
            <p> Parameter-Efficient Fine-Tuning </p>
          </header>
          <main >
          Welcome to our exploration of the fascinating world of large language models! As many of
you are aware, the scale of these models has skyrocketed recently. Take, for instance,
GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these
behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning
requires adjusting countless parameters, which is time-consuming, and the GPU demands
are nothing short of immense...
          </main>

          <a
            href="https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html"
            style={{ color:"blue",textDecoration: "none", marginLeft: "40px" }}
          >
            Read more
          </a>
        </div>
        <div className="cards">
          <header style={{ marginBottom:"50px" ,fontWeight: "bold",fontSize:"25px",marginTop:"10px"}}>
            <p>PrivAIcy Matters:</p>
            <p>  Balancing Privacy, Price,</p><p> and Performance </p>
          </header>
          <main >
          Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial
intelligence algorithms with the magic to conjure fresh content based on available data, this
technology has unassumingly become the new frontier for a plethora of industries, including
tech, banking, and media. And, no surprises here, the technological world has openly
embraced it in myriad innovative ways...
          </main>

          <a
            href="https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html"
            style={{ color:"blue" ,textDecoration: "none", marginLeft: "40px" }}
          >
            Read more
          </a>
        </div>
      </Slider>
    </div>
  );
}
export default Projects;
