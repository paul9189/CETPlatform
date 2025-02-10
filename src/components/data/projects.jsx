import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHandshake, faLaptop, faMobileScreen, faPeopleArrows, faPeopleGroup, faRobot, faRocket, faSun, faUsers,  } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import './projects.css';
import SlideShow from "../SlideShow";


const projects = [
    {
        id: 1,
        name: "Cultivating Skills for Brighter Future",
        description: "Read more",
        image: "Cultivating skills.jpg",
        path: "/project-one", // Added path for navigation
        details: (
            <div className="project-container">
              <div> <SlideShow /></div>

              <div className="project-description">
              <p>From February 7 to 15, 2024, CET Bulgaria hosted the Erasmus+ program "Cultivating Skills for a Brighter Future" in Youthopia, Stara Zagora. This personal development initiative brought together 27 participants from Bulgaria, Greece, Romania, Italy, and Serbia, aiming to empower young people with self-discovery techniques, goal-setting skills, and mindfulness practices. Facilitated by the experienced Tihomira, the program combined engaging activities with a supportive environment, enabling participants to uncover their potential and create actionable strategies for their futures.</p>
              </div>

              <div className="project-goals-container">
               
                <div className="project-goals">
                <h2>Project Goals:</h2>
                <p>The training course aimed to equip participants with essential skills and knowledge to thrive in the digital landscape. Here are the key goals that guided this transformative learning experience.</p>
                </div>

                <div className="goals-container">
                <div>
                <FontAwesomeIcon icon={faHtml5} className="icon" aria-hidden="true"/>
                  <h4>Facilitate Self-Discovery</h4>
                  <p>Empower participants to identify their strengths, values, and aspirations, fostering informed personal and professional decision-making.</p>
                  </div>

                  <div>
                <FontAwesomeIcon icon={faBolt} className="icon" aria-hidden="true" />
                <h4>Enhance Goal-Setting Proficiency</h4>
                <p>Equip participants with techniques to define clear objectives and actionable steps to achieve them effectively.</p>
                </div>

                <div>
                <FontAwesomeIcon icon={faSun}  className="icon" aria-hidden="true" />
                <h4>Strengthen Mental Well-Being</h4>
                <p>Promote mindfulness and meditation practices to build resilience, reduce stress, and foster emotional stability.</p>
                </div>

                <div>
                <FontAwesomeIcon icon={faRocket}  className="icon" aria-hidden="true"/>
                <h4>Boost Employability Skills</h4>
                <p>Develop critical soft skills such as adaptability, collaboration, and communication, preparing participants for success in the job market.</p>
                </div>
                </div>
              </div>
              <div className="project-imgs">
  <img src="/p1-1.jpg" alt="" />
  <img src="/p1-2.jpg" alt="" />
  <img src="/p1-3.jpg" alt="" />
  <img src="/p1-4.jpg" alt="" />
  <img src="/p1-5.jpg" alt="" />
  <img src="/p1-6.jpg" alt="" />
 
</div>
               {/*images  */}

            </div>
          )
    },
    {
        id: 2,
        name: "Digital Creativity for Youth Workers",
        description: "Read more",
        image: "Digital-creativity.png",
        path: "/project-2",
        details:(
          <div className="project-container">
          <div> <SlideShow /></div>

            <div className="project-description">
            
            <p>From April 8-16, 2024, Stara Zagora, Bulgaria, hosted Digital Creativity for Youth Workers: Exploration, Mastery, Impact!, a transformative training course under KA153. The program equipped youth workers with advanced digital skills, including photography, video editing, and digital marketing. Participants explored emerging technologies like artificial intelligence and learned to create engaging content in various formats, such as PDF books and audio files. Emphasizing ethical practices, the training empowered participants to craft impactful digital content, connect effectively with their audiences, and adapt to the fast-evolving digital landscape. The course was conducted entirely in English and provided hands-on, practical learning experiences.</p>
            
            </div>

            <div className="project-goals-container">
             
              <div className="project-goals">
              <h2>Project Goals:</h2>
              <p>The training course aimed to equip participants with essential skills and knowledge to thrive in the digital landscape. Here are the key goals that guided this transformative learning experience.</p>
              </div>

              <div className="goals-container">
              <div>
              <FontAwesomeIcon icon={faLaptop}  className="icon" aria-hidden="true"/>
                <h4>Mastery of Digital Tools</h4>
                <p>Participants gained hands-on experience using advanced tools to create compelling digital content.</p>
                </div>

                <div>
                <FontAwesomeIcon icon={faPeopleArrows} className="icon" aria-hidden="true" />
              <h4>Creative Storytelling</h4>
              <p>The program enhanced participants' abilities in photography, video editing, and montage, empowering them to effectively share ideas and stories.</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faMobileScreen} className="icon" aria-hidden="true" />
              <h4>Ethical and Impactful Marketing</h4>
              <p>Youth workers developed strategies for engaging target audiences ethically through innovative digital marketing techniques.</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faRocket}  className="icon" aria-hidden="true"/>
              <h4>Exploration of Emerging Technologies</h4>
              <p>The course introduced artificial intelligence and other cutting-edge technologies, inspiring participants to integrate them into content creation and marketing.</p>
              </div>
              </div>
            </div>

<div className="project-imgs">
  <img src="/p2-1.png" alt="" />
  <img src="/p2-2.jpg" alt="" />
  <img src="/p2-3.jpg" alt="" />
  <img src="/p2-4.jpg" alt="" />
  <img src="/p2-5.jpg" alt="" />
  <img src="/p2-6.jpg" alt="" />
 
</div>
             {/*images  */}

          </div>
        )

    },
    {
        id: 3,
        name: "Our Stories - Our Stage",
        description: "Read more",
        image: "Our Stories - Our Stage.jpg",
        path: "/project-3",
        details: (
          <div className="project-container">
          <div> <SlideShow /></div>

            <div className="project-description">
          
            <p>From June 11-19, 2024, Stara Zagora, Bulgaria, hosted Our Stories, Our Stage, a transformative youth exchange designed to foster civic sensitivity toward human rights and democracy among European youth. Through informal educational methods such as storytelling, theater, and political simulations, participants explored their potential while gaining valuable skills not typically addressed in traditional education. A highlight of the program was the creation of a state-like simulation game, which encouraged participants to think critically, collaborate, and engage creatively with civic concepts.</p>
            
            </div>

            <div className="project-goals-container">
             
              <div className="project-goals">
              <h2>Project Goals:</h2>
              <p>This project was guided by several key objectives designed to inspire participants and help them grow as informed and engaged citizens.</p>
              </div>

              <div className="goals-container">
              <div>
              <FontAwesomeIcon icon={faUsers} className="icon" aria-hidden="true"/>
                <h4>Promoting Civic Awareness</h4>
                <p>The project deepened participants’ understanding of human rights and democracy, fostering greater responsibility as European citizens.</p>
                </div>

                <div>
              <FontAwesomeIcon icon={faBolt} className="icon" aria-hidden="true" />
              <h4>Innovative Learning Methods</h4>
              <p>Storytelling, theater, and political simulations provided engaging and impactful ways to learn and connect with complex civic concepts.</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faMobileScreen} className="icon" aria-hidden="true" />
              <h4>Creative Civic Engagement</h4>
              <p>Storytelling, theater, and political simulations provided engaging and impactful ways to learn and connect with complex civic concepts.</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faPeopleGroup} className="icon" aria-hidden="true"/>
              <h4>Developing Active Citizenship Skills</h4>
              <p>Participants enhanced critical thinking, teamwork, and public speaking abilities, preparing them for active roles in their communities.</p>
              </div>
              </div>
            </div>
            <div className="project-imgs">
  <img src="/p3-1.jpg" alt="" />
  <img src="/p3-2.jpg" alt="" />
  <img src="/p3-3.jpg" alt="" />
  <img src="/p3-4.jpg" alt="" />
  <img src="/p3-5.jpg" alt="" />
  <img src="/p3-6.jpg" alt="" />
 
</div>
             {/*images  */}

          </div>
        )

    },
    {
        id: 4,
        name: "The State of Mind",
        description: "Read more ",
        image: "the-state-of-mind.png",
        path: "/project-4",
        details: (
          <div className="project-container">
          <div> <SlideShow /></div>

            <div className="project-description">
        
            <p>"The State of Mind" is an Erasmus+ training course that took place from 20th to 27th November 2024 in Bulgaria. This innovative program focused on designing interactive political games, where participants explored the complexities of navigating political systems. The course incorporated the power of artificial intelligence to fuel creativity in youth work, blending traditional art with modern technology. Through hands-on workshops, participants created engaging, dynamic experiences, including digital art, animations, and original music compositions, showcasing the potential of AI in fostering creativity and developing new tools for youth work.</p>
           
            </div>

            <div className="project-goals-container">
             
              <div className="project-four-goals">
              <h2>Project Goals:</h2>
              <p>This project was guided by several key objectives designed to inspire participants and help them grow as informed and engaged citizens.</p>
              </div>

              <div className="goals-four-container">
              <div>
              <FontAwesomeIcon icon={faRobot} className="icon" aria-hidden="true"/>
                <h4>Fostering Creativity through AI</h4>
                <p>This goal focused on utilizing artificial intelligence to inspire and enhance creativity in youth work. Participants explored how AI tools like ChatGPT, LeonardoAI, and Dream Machine could be integrated into hands-on workshops to develop innovative art and content. The aim was to show how technology can be a catalyst for creative expression and engagement among young people.</p>
                </div>

                <div>
                <FontAwesomeIcon icon={faHandshake} className="icon" aria-hidden="true" />
              <h4>Designing Interactive Political Games</h4>
              <p>The project aimed to design and test interactive political games that simulate the challenges of navigating complex political systems. By experiencing these games, participants gained a deeper understanding of political processes and learned how to apply these simulations in youth work, making political education more engaging and accessible for young audiences.</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faMobileScreen} className="icon" aria-hidden="true" />
              <h4>Developing New Tools for Youth Work</h4>
              <p>A key objective was to equip participants with new tools and methods for youth work, particularly focusing on the integration of digital and interactive media. Through workshops and collaborative activities, participants learned how to combine traditional methods with new technologies to create impactful learning experiences for young people.</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faUsers}   className="icon" aria-hidden="true"/>
              <h4>Building International Collaboration</h4>
              <p>The project aimed to foster international collaboration among youth workers and participants from various backgrounds. By working together in teams, participants exchanged ideas, shared best practices, and built strong connections across cultures, ultimately enriching their professional development and expanding their networks in the youth work community.</p>
              </div>
              </div>
            </div>

            <div className="project-imgs">
  <img src="/p4-1.jpg" alt="" />
  <img src="/p4-2.jpg" alt="" />
  <img src="/p4-3.jpg" alt="" />
  <img src="/p4-4.jpg" alt="" />
  <img src="/p4-5.jpg" alt="" />
  
 
</div>      {/*images  */}

          </div>
        )

    },
    {
      id: 5,
      name: "Don’t Get Fooled!",
      description: "Read more",
      image: "Don’t Get Fooled!.png",
      path: "/project-five", // Added path for navigation
      details: (
          <div className="project-container">
            <div> <SlideShow /></div>

            <div className="project-description">
            <p>From October 29th to November 6th, 2024, the picturesque Youthtopia Riverside near Stara Zagora, Bulgaria, became a vibrant meeting point for young people from Bulgaria, Poland, Romania, Greece, and Turkey.This Erasmus+ youth exchange was designed to tackle the pressing global issues of fake news and propaganda while enhancing media literacy, critical thinking, and teamwork skills.
“Don’t Get Fooled!” combined education, creativity, and intercultural dialogue into a week-long immersive experience. Participants engaged in interactive media literacy workshops, where hands-on exercises demonstrated how AI tools can help identify fake news. Through role-playing scenarios and fact-checking sessions, they learned to analyze sources critically and spot biases inherent in misinformation. Creative activities such as storytelling, game design, and collaborative filmmaking provided a platform for participants to express their ideas and share their insights on how propaganda impacts society.
The exchange also emphasized the importance of cultural understanding. In a setting where historical divides could have hindered dialogue, young people from Greece and Turkey, among others, built meaningful connections, forging friendships over shared meals, group activities, and open conversations. The lively Halloween celebration, complete with a costume party, dancing, and games, added an element of fun and camaraderie, proving that education and enjoyment go hand in hand.
By the end of the exchange, the outcomes were clear: participants not only improved their ability to discern credible information from fake news, but they also enhanced their practical skills in creative expression and collaborative problem-solving. “Don’t Get Fooled!” stands as a testament to the power of Erasmus+ in empowering youth to become informed, proactive citizens ready to challenge misinformation and build bridges across cultures.
</p>
            </div>

            <div className="project-goals-container">
              <div className="project-goals">
                <h2>Project Goals:</h2>
              </div>
              <div className="goals-container">
                <div>
                  <FontAwesomeIcon icon={faHtml5} className="icon" aria-hidden="true"/>
                  <h4>Equip with Critical Tools</h4>
                  <p> Provide participants with AI-driven insights and practical techniques to recognize and counter fake news and propaganda.
                  </p>
                </div>

                <div>
                  <FontAwesomeIcon icon={faBolt} className="icon" aria-hidden="true" />
                  <h4>Enhance Media Literacy & Critical Thinking</h4>
                  <p>Use hands-on workshops, role-playing scenarios, and fact-checking exercises to strengthen analytical skills.
                  </p>
                </div>

                <div>
                  <FontAwesomeIcon icon={faSun}  className="icon" aria-hidden="true" />
                  <h4>Promote Creative Expression</h4>
                  <p>Encourage the use of storytelling, game design, and collaborative filmmaking to creatively communicate the challenges posed by misinformation.
                  </p>
                </div>

                <div>
                  <FontAwesomeIcon icon={faRocket}  className="icon" aria-hidden="true"/>
                  <h4>Foster Intercultural Understanding</h4>
                  <p>Build bridges between youth from diverse backgrounds, breaking down historical barriers and fostering genuine intercultural dialogue.</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faRocket}  className="icon" aria-hidden="true"/>
                  <h4>Develop Teamwork and Collaboration</h4>
                  <p>Engage participants in group discussions and creative projects that enhance collaborative problem-solving and collective action.                    </p>
                </div>
              </div>
            </div>
            <div className="project-imgs">
<img src="/p5-1.jpg" alt="" />
<img src="/p5-2.jpg" alt="" />
<img src="/p5-3.jpg" alt="" />
<img src="/p5-4.jpg" alt="" />
<img src="/p5-5.jpg" alt="" />
<img src="/p5-6.jpg" alt="" />

</div>
             {/*images  */}

          </div>
        )
  },

  {
    id: 6,
    name: "Play it Out!",
    description: "Read more",
    image: "Play it Out.png",
    path: "/project-six", // Added path for navigation
    details: (
        <div className="project-container">
            <div> <SlideShow /></div>

          <div className="project-description">
          <p>From November 11th to 19th, 2024, the serene surroundings of Youthtopia Riverside near Stara Zagora, Bulgaria, set the stage for "Play it Out!"—an Erasmus+ youth exchange that united young people from Moldova, Bulgaria, Romania, Lithuania, and Hungary. In this inspiring project, theatre became more than just performance; it was a dynamic tool for non-formal education aimed at addressing pressing social issues and fostering personal growth.
"Play it Out!" invited participants to dive into the world of forum theatre, a method that blends performance with interactive dialogue. Through a series of intensive workshops, participants collaboratively crafted and rehearsed three thought-provoking scenes. One scene depicted a high school bullying scenario, capturing the impact of peer pressure and social exclusion. Another explored the complexities of an abusive and deceitful marital relationship, shedding light on the emotional and societal challenges faced by those caught in toxic dynamics. The third scene focused on the sensitive topic of forced marriage, highlighting the struggle between societal expectations and personal freedom.
These workshops culminated in live performances at the Youth Center of Stara Zagora, where the true power of forum theatre shone through. The interactive format encouraged audience members not just to watch, but to participate—stepping into the narrative, offering alternative solutions, and engaging in real-time dialogue. This immersive experience not only sparked meaningful conversations among spectators but also left a lasting impact on the local community by raising awareness about human rights, democracy, and social pressures.
Beyond the stage, "Play it Out!" celebrated cultural diversity with a memorable cultural evening. During this event, participants shared traditional dishes, music, and stories from their respective countries, nurturing intercultural dialogue and forging new friendships. The shared experiences both on and off stage enhanced teamwork, public speaking, and creative problem-solving skills, empowering these young change-makers to approach societal challenges with renewed confidence and creativity.
"Play it Out!" stands as a testament to the transformative potential of theatre. By merging creative expression with critical social issues, the project has equipped participants with practical skills and inspired them to become active advocates for positive change in their communities. Stay tuned for more insights, reflections, and stories as these young artists continue to drive social change through the powerful medium of theatre.
</p>
          </div>

          <div className="project-goals-container">
            <div className="project-goals">
              <h2>Project Goals:</h2>
            </div>
            <div className="goals-container">
              <div>
                <FontAwesomeIcon icon={faHtml5} className="icon" aria-hidden="true"/>
                <h4>Utilize Forum Theatre for Social Change</h4>
                <p> Use performance art to explore and address real-world issues such as bullying, domestic abuse etc.
                </p>
              </div>

              <div>
                <FontAwesomeIcon icon={faBolt} className="icon" aria-hidden="true" />
                <h4>Enhance Communication and Presentation Skills</h4>
                <p>Empower participants by developing public speaking abilities and creative problem-solving through interactive workshops.
                </p>
              </div>

              <div>
                <FontAwesomeIcon icon={faSun}  className="icon" aria-hidden="true" />
                <h4>Foster Teamwork and Conflict Resolution</h4>
                <p>Cultivate collaboration and constructive conflict management by engaging in group rehearsals and performances.
                </p>
              </div>

              <div>
                <FontAwesomeIcon icon={faRocket}  className="icon" aria-hidden="true"/>
                <h4>Engage Local Communities</h4>
                <p>Leverage interactive performances to stimulate community dialogue on human rights, democracy, and societal challenges, inviting audience participation and feedback.</p>
              </div>
            </div>
          </div>
          <div className="project-imgs">
<img src="/p6-1.jpg" alt="" />
<img src="/p6-2.jpg" alt="" />
<img src="/p6-3.jpg" alt="" />
<img src="/p6-4.jpg" alt="" />
<img src="/p6-5.jpg" alt="" />
<img src="/p6-6.jpg" alt="" />

</div>
           {/*images  */}

        </div>
      )
}
];

export default projects;
