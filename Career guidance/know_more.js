// Data array containing all card content
const careersData = [
    {"title": "Aerospace Engineer", "description": "Aerospace Engineers design, develop, and test aircraft, spacecraft, satellites, and missiles. They ensure aerodynamic performance and safety, working on systems ranging from commercial airplanes to defense rockets.", "link": "roles/aerospace-engineer.html"},
    {"title": "Agricultural Scientist", "description": "Agricultural Scientists research and develop methods to improve the efficiency, sustainability, and safety of agricultural practices. They focus on crop production, soil health, pest control, and food quality to boost farming outcomes.", "link": "roles/agricultuarl-scientist.html"},
    {"title": "AI Research Scientist", "description": "AI Research Scientists explore and develop new algorithms and models in artificial intelligence. They conduct cutting-edge research in machine learning, deep learning, NLP, and robotics to solve complex real-world problems.", "link": "roles/AI Research Scientist.html"},
    {"title": "AI Engineer", "description": "AI Engineers develop, test, and deploy AI-based systems using machine learning and deep learning frameworks. They turn theoretical AI concepts into practical applications.", "link": "roles/ai-engineer.html"},
    {"title": "Air Traffic Controller", "description": "Responsible for the safe and orderly movement of aircraft in the skies and at airports. Requires fast decision-making and stress management.", "link": "roles/Air Traffic Controller.html"},
    {"title": "Automobile Technician", "description": "Maintains and repairs vehicles by diagnosing issues, replacing parts, and performing routine service. A hands-on, skilled trade.", "link": "roles/Automobile Technician.html"},
    {"title": "Biotechnology Researcher", "description": "Conducts lab-based experiments to develop new products in healthcare, agriculture, and environment using biological systems.", "link": "roles/Biotechnology Researcher.html"},
    {"title": "Blockchain Developer", "description": "Builds decentralized applications (dApps), smart contracts, and blockchain protocols to ensure secure, distributed data systems.", "link": "roles/blockchain-developer.html"},
    {"title": "Business Analyst", "description": "Bridges the gap between business goals and technology by analyzing data and processes to drive decision-making.", "link": "roles/Business Analyst.html"},
    {"title": "Civil Engineer", "description": "Plans and supervises the construction of infrastructure projects like buildings, roads, and bridges with a focus on safety and durability.", "link": "roles/Civil Engineer.html"},
    {"title": "Climate Change Analyst", "description": "Studies environmental data and models to assess the impact of climate change and recommends sustainable solutions to mitigate it.", "link": "roles/climate-change-analyst.html"},
    {"title": "Clinical Research Associate", "description": "Clinical Research Associates ensure that clinical trials are conducted ethically and in compliance with regulatory standards, monitoring study sites and managing data collection.", "link": "roles/Clinical Research Associate.html"},
    {"title": "Compliance Officer", "description": "Compliance Officers ensure that organizations adhere to legal standards and internal policies, assessing and managing regulatory risks.", "link": "roles/Compliance Officer.html"},
    {"title": "Construction Project Manager", "description": "Construction Project Managers oversee construction projects from planning to completion, ensuring they are completed on time, within budget, and to required standards.", "link": "roles/Construction Project Manager.html"},
    {"title": "Corporate Lawyer", "description": "Corporate Lawyers advise companies on their legal rights, responsibilities, and obligations, ensuring compliance with corporate laws and regulations.", "link": "roles/Corporate Lawyer.html"},
    {"title": "Corporate Trainer", "description": "Corporate Trainers develop and deliver training programs to enhance employee skills and knowledge, aligning with organizational goals.", "link": "roles/Corporate Trainer.html"},
    {"title": "Cybersecurity Analyst", "description": "Cybersecurity Analysts protect an organization's computer networks and systems by monitoring for security breaches and implementing security measures.", "link": "roles/Cybersecurity Analyst.html"},
    {"title": "Data Scientist", "description": "Data Scientists analyze complex data to help organizations make informed decisions, using statistical techniques and machine learning algorithms.", "link": "roles/data-scientist.html"},
    {"title": "Digital Content Creator", "description": "Digital Content Creators produce engaging content for platforms like YouTube, Instagram, and blogs, aiming to educate, entertain, or promote.", "link": "roles/Digital Content Creator.html"},
    {"title": "Digital Marketing Manager", "description": "Leads and strategizes all online marketing campaigns—SEO, social media, email marketing—to improve brand presence and ROI.", "link": "roles/Digital Marketing Manager.html"},
    {"title": "Digital Marketing Specialist", "description": "Executes online marketing strategies such as SEO, PPC, content marketing, and social media management to boost online presence.", "link": "roles/digital-marketing-specialist.html"},
    {"title": "Economic Researcher", "description": "Studies economic trends and data to provide insights for policies, markets, and development strategies.", "link": "roles/economic-researcher.html"},
    {"title": "Energy Policy Analyst", "description": "Analyzes energy policies and their environmental/economic impact, working on sustainable energy strategies.", "link": "roles/Energy Policy Analyst.html"},
    {"title": "Environmental Consultant", "description": "Provides expert assessment and advisory services on environmental risks, regulations, and sustainability practices.", "link": "roles/Environmental Consultant.html"},
    {"title": "Environmental Scientist", "description": "Studies and addresses environmental issues such as pollution, conservation, and climate change through research and analysis.", "link": "roles/environmental-scientist.html"},
    {"title": "Event Manager", "description": "Plans and manages events such as conferences, weddings, and concerts, ensuring smooth execution from logistics to guest experience.", "link": "roles/event_manager.html"},
    {"title": "Fashion Designer", "description": "Fashion Designers create original clothing, accessories, and footwear by sketching designs, selecting fabrics, and overseeing production.", "link": "roles/Fashion Designer.html"},
    {"title": "Financial Analyst", "description": "Financial Analysts evaluate investment opportunities, analyze economic trends, and provide recommendations to businesses or investors.", "link": "roles/financial-analyst.html"},
    {"title": "Financial Planner", "description": "Financial Planners help individuals manage their finances, plan investments, and achieve long-term financial goals.", "link": "roles/financial-planner.html"},
    {"title": "Fire Safety Officer", "description": "Fire Safety Officers develop and enforce safety protocols to prevent and respond to fire-related hazards in buildings and industries.", "link": "roles/Fire Safety Officer.html"},
    {"title": "Flight Attendant", "description": "Flight Attendants ensure passenger safety and comfort during flights, handling emergencies and customer service onboard.", "link": "roles/flight-attendant.html"},
    {"title": "Food Safety Inspector", "description": "Food Safety Inspectors ensure that food products comply with health and safety regulations by inspecting food facilities and procedures.", "link": "roles/Food Safety Inspector.html"},
    {"title": "Food Safety Specialist", "description": "Specializes in designing and implementing food safety protocols, conducting risk assessments, and managing quality systems in food production.", "link": "roles/Food Safety Specialist.html"},
    {"title": "Game Developer", "description": "Game Developers design, code, and test interactive games for consoles, computers, and mobile platforms using various programming tools and engines.", "link": "roles/Game Developer.html"},
    {"title": "Genetic Counselor", "description": "Genetic Counselors guide individuals on genetic health risks and inherited conditions, often working with families and healthcare professionals.", "link": "roles/Genetic Counselor.html"},
    {"title": "Geologist", "description": "Geologists study earth processes, rock formations, and natural resources, contributing to exploration, mining, and environmental planning.", "link": "roles/Geologist.html"},
    {"title": "Healthcare Data Analyst", "description": "Healthcare Data Analysts collect and interpret medical data to improve patient care, optimize operations, and support healthcare research.", "link": "roles/healthcare-data-analyst.html"},
    {"title": "Hotel Manager", "description": "Hotel Managers oversee daily operations of a hotel including guest services, housekeeping, staffing, and profitability.", "link": "roles/hotel-manager.html"},
    {"title": "Human Resources Manager", "description": "HR Managers handle recruitment, employee relations, policy implementation, and workplace culture development.", "link": "roles/Human Resources Manager.html"},
    {"title": "Industrial Automation Specialist", "description": "These specialists design, implement, and maintain automated systems in manufacturing to improve efficiency and productivity.", "link": "roles/industrial-automation-specialist.html"},
    {"title": "Instructional Designer", "description": "Instructional Designers create engaging learning experiences by developing content and multimedia training modules.", "link": "roles/Instructional Designer.html"},
    {"title": "Interior Designer", "description": "Interior Designers enhance the aesthetics and functionality of indoor spaces through design planning, color coordination, and décor selection.", "link": "roles/Interior Designer.html"},
    {"title": "Legal Advisor", "description": "Legal Advisors offer counsel to businesses or individuals on legal matters, ensuring compliance and mitigating risks.", "link": "roles/legal-advisor.html"},
    {"title": "Librarian", "description": "Librarians manage library resources, assist users with research, and promote information literacy and reading habits.", "link": "roles/Librarian.html"},
    {"title": "Logistics Coordinator", "description": "Logistics Coordinators manage the flow of goods from suppliers to customers, ensuring timely and cost-effective delivery.", "link": "roles/Logistics Coordinator.html"},
    {"title": "Machine Learning Engineer", "description": "ML Engineers build systems and models that learn from data and make predictions or automate decisions using algorithms.", "link": "roles/Machine Learning Engineer.html"},
    {"title": "Manufacturing QC Inspector", "description": "QC Inspectors monitor the production process and ensure products meet quality standards and safety regulations.", "link": "roles/manufacturing-quality-control-inspector.html"},
    {"title": "Marine Biologist", "description": "Marine Biologists study ocean ecosystems, marine organisms, and their interactions with the environment for conservation or research purposes.", "link": "roles/marine-biologist.html"},
    {"title": "Mechanical Engineer", "description": "Mechanical Engineers design, test, and improve mechanical devices and systems used in industries like manufacturing, automotive, and aerospace.", "link": "roles/Mechanical Engineer.html"},
    {"title": "Mental Health Counselor", "description": "Counselors provide therapy and support to individuals dealing with stress, anxiety, depression, and other mental health issues.", "link": "roles/mental-health-counselor.html"},
    {"title": "Nutritionist", "description": "Nutritionists provide dietary advice and develop meal plans to promote health, manage diseases, and improve overall nutrition.", "link": "roles/nutritionist.html"},
    {"title": "Operations Manager", "description": "Operations Managers oversee production, supply chain, and business processes to ensure efficiency and profitability across departments.", "link": "roles/Operations Manager.html"},
    {"title": "Pharmaceutical Sales Representative", "description": "These professionals promote and sell medications to healthcare providers and hospitals, ensuring product awareness and brand presence.", "link": "roles/Pharmaceutical Sales Representative.html"},
    {"title": "Pharmaceutical Scientist", "description": "Pharmaceutical Scientists research and develop new drugs, conduct clinical trials, and work on improving formulations and delivery methods.", "link": "roles/Pharmaceutical Scientist.html"},
    {"title": "Project Manager", "description": "Project Managers lead planning, execution, and closure of projects while managing teams, budgets, timelines, and client expectations.", "link": "roles/Project Manager.html"},
    {"title": "Psychologist", "description": "Psychologists study behavior, emotions, and mental processes, providing therapy or conducting research to support mental health.", "link": "roles/Psychologist.html"},
    {"title": "Public Relations Specialist", "description": "PR Specialists manage public image, media communication, and branding for organizations or individuals through strategic messaging.", "link": "roles/public_relation_specialist.html"},
    {"title": "Public Relations Strategist", "description": "PR Strategists develop long-term communication plans, manage campaigns, and build stakeholder relationships to shape public perception.", "link": "roles/Public Relations Strategist.html"},
    {"title": "Radiologic Technologist", "description": "Radiologic Technologists use imaging equipment like X-rays and MRIs to help diagnose and treat medical conditions.", "link": "roles/Radiologic Technologist.html"},
    {"title": "Real Estate Agent", "description": "Real Estate Agents assist clients in buying, selling, or renting properties, and provide market guidance and legal support.", "link": "roles/real-estate-agent.html"},
    {"title": "Renewable Energy Engineer", "description": "These engineers design and implement systems using solar, wind, hydro, or bioenergy technologies to generate clean energy.", "link": "roles/Renewable Energy Engineer.html"},
    {"title": "Robotics Engineer", "description": "Robotics Engineers design, build, and maintain robots used in industries, research, and automation systems.", "link": "roles/robotics-engineer.html"},
    {"title": "Satellite Systems Engineer", "description": "These engineers design, test, and operate satellite systems used in communication, weather monitoring, and space exploration.", "link": "roles/Satellite Systems Engineer.html"},
    {"title": "Social Worker", "description": "Social Workers help individuals and communities overcome challenges related to health, poverty, education, and well-being.", "link": "roles/Social Worker.html"},
    {"title": "Software Developer", "description": "Software Developers create applications and systems software for a wide range of platforms using various programming languages.", "link": "roles/Software Developer.html"},
    {"title": "Sports Coach", "description": "Sports Coaches train athletes, develop game strategies, and enhance performance for competitive sports.", "link": "roles/Sports Coach.html"},
    {"title": "Sustainability Consultant", "description": "Sustainability Consultants help organizations reduce their environmental impact and adopt eco-friendly practices.", "link": "roles/sustainabilty-consultant.html"},
    {"title": "Supply Chain Manager", "description": "Supply Chain Managers oversee procurement, inventory, logistics, and distribution to ensure efficiency and cost-effectiveness.", "link": "roles/supply-chain-manager.html"},
    {"title": "Teacher (Secondary Education)", "description": "Secondary teachers educate students in specific subjects, foster learning, and prepare them for board exams and future studies.", "link": "roles/Teacher (Secondary Education).html"},
    {"title": "Tourism Officer", "description": "Tourism Officers promote tourism in a region by managing attractions, planning events, and providing visitor services.", "link": "roles/Tourism Officer.html"},
    {"title": "Urban Planner", "description": "Urban Planners design cities and public spaces, addressing infrastructure, transportation, environment, and housing needs.", "link": "roles/Urban Planner.html"},
    {"title": "UX/UI Designer", "description": "UX/UI Designers craft user-friendly digital experiences through interface design, user research, and usability testing.", "link": "roles/UX-UI-designer.html"},
    {"title": "Veterinarian", "description": "Veterinarians diagnose and treat illnesses in animals, perform surgeries, and ensure animal health and welfare.", "link": "roles/Veterinarian.html"}
  ];
  
  // Function to render career cards
  function renderCareerCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    careersData.forEach((career) => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${career.title}</h5>
          <p class="card-text">${career.description}</p>
          <a href="${career.link}" class="btn btn-outline-primary">Read more</a>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  // Initialize when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    renderCareerCards("careers-container");
  });