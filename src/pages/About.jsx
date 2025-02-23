import Breadcrumb from "../components/Breadcrumb";
import logo from "../assets/ShareTasteImages/Photos/48px-01.png";

const AboutUs = () => {
  return (
    <div>
      <Breadcrumb title="About Us" />
      <div className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>About The Project</h1>
            <p>
              <b>
              The culinary landscape has undergone a notable change with the emergence
              of digital platforms. However, there remains a deficiency
              in options that cater to various dietary preferences and ingredient-specific
              inquiries.Introducing ShareTaste, an amazing online platform for
              sharing and discovering recipes aimed at empowering culinary
              lovers, chefs, and those focused on healthy eating.
              </b>
              <br />
              <br />
              ShareTaste offers users an effortless way to browse recipes contributed
              by home cooks and professional chefs, featuring advanced tools
              that allow them to filter recipes based on dietary needs and omitted
              ingredients. Furthermore, it includes a distinctive function that
              lets users submit their recipes, which can be presented to a worldwide
              audience following verification by expert chefs.
              <br />
              <br />
              This Software Requirements Specification document acts as a
              comprehensive guide detailing the system’s goals, functionalities,
              and operational guidelines. It serves as an extensive resource for
              developers, administrators, and stakeholders, elucidating the vision
              and requirements for ShareTaste while ensuring it meets user needs
              and is technically achievable.
            </p>
          </div>
          <div className="about-col">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className="mission">
          <h1>Mission</h1>
          <p>
          The existing methods of finding and sharing recipes often lack
          personalization, verification, and community engagement. Traditional
          systems are fragmented, making it challenging for users to discover
          recipes that cater to their unique dietary needs or to share their
          culinary creations with a trusted audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

/*
Purpose

The culinary landscape has undergone a notable change with
the emergence of digital platforms. However, there remains a deficiency
in options that cater to various dietary preferences and ingredient-specific
inquiries. Introducing ShareTaste, an amazing online platform for
sharing and discovering recipes aimed at empowering culinary
lovers, chefs, and those focused on healthy eating.

ShareTaste offers users an effortless way to browse recipes contributed
by home cooks and professional chefs, featuring advanced tools
that allow them to filter recipes based on dietary needs and omitted
ingredients. Furthermore, it includes a distinctive function that
lets users submit their recipes, which can be presented to a worldwide
audience following verification by expert chefs.

This Software Requirements Specification document acts as a
comprehensive guide detailing the system’s goals, functionalities,
and operational guidelines. It serves as an extensive resource for
developers, administrators, and stakeholders, elucidating the vision
and requirements for ShareTaste while ensuring it meets user needs
and is technically achievable.

Scope of the Project

The existing methods of finding and sharing recipes often lack
personalization, verification, and community engagement. Traditional
systems are fragmented, making it challenging for users to discover
recipes that cater to their unique dietary needs or to share their
culinary creations with a trusted audience.

Current Challenges
• Limited personalization in recipe discovery.
• No standardized process for recipe verification.
• Inability to exclude specific ingredients easily during searches.
• Restricted avenues for home cooks to reach wider audiences with their creations.

Proposed Solution
ShareTaste addresses these challenges by offering an intelligent,
user-centric platform that facilitates:
• Advanced Search Capabilities: Users can search recipes based
on dietary restrictions (e.g., vegan, keto, gluten-free) or exclude
specific ingredients.
• Community-Driven Content: A platform where individuals
can share their unique recipes, fostering collaboration and
innovation.
• Recipe Verification: A robust process where user-submitted
recipes are reviewed by professional chefs for quality and accuracy.
• Engagement and Interaction: Opportunities for users to interact
with content through reviews, ratings, and feedback.
• Scalability: A design that ensures consistent performance,
even as user engagement grows.

Key Advantages
• Enhanced User Experience: A clean, intuitive interface that
prioritizes user convenience and satisfaction.
• Tailored Search Results: Advanced filters and search options
to match diverse dietary needs and preferences.
• Trusted Recipes: Chef-verified recipes provide users with reliable
and high-quality content.
• Empowerment: A platform that celebrates and elevates user-generated
content by connecting it with a broader audience.
• Time Efficiency: Fast and accurate results through an optimized
and responsive system.
• Global Reach: Breaking geographical barriers, ShareTaste connects
food enthusiasts from around the world.
*/