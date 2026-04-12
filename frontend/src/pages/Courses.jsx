import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/courses.css";

const Courses = () => {
  return (
    <div className="page-courses">
      <Navbar />

      <div className="header-section">
        <h2 id="navigation">
          <a href="/">Home</a>&gt;<a href="#">Courses</a>
        </h2>
        <h1>Upskill For Your Dream Career</h1>
      </div>
      <div className="container my-5">
        <h2 className="mb-4 text-primary">Agricultural Scientist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Fundamentals of Agricultural Science
              </h5>
              <p className="card-text">
                Learn the foundational principles of agricultural science,
                including soil science, plant physiology, and crop production.
              </p>
              <a
                href="https://www.coursera.org/learn/science-plant-nutrition"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Crop Production and Management</h5>
              <p className="card-text">
                Explore sustainable crop management techniques, including pest
                control, irrigation methods, and organic farming practices.
              </p>
              <a
                href="https://www.futurelearn.com/courses/sustainable-agricultural-land-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Plant Genetics and Breeding</h5>
              <p className="card-text">
                Dive into the world of plant genetics and breeding, including
                genetic modification and hybrid crop production.
              </p>
              <a
                href="https://www.edx.org/course/plant-bioinformatics"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Soil Science and Fertility Management
              </h5>
              <p className="card-text">
                Understand soil chemistry, soil testing, and nutrient management
                to boost crop production and sustainability.
              </p>
              <a
                href="https://www.futurelearn.com/courses/soils"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Climate Smart Agriculture</h5>
              <p className="card-text">
                Learn about climate-resilient farming practices to adapt to
                changing environmental conditions.
              </p>
              <a
                href="https://elearning.fao.org/course/view.php?id=338"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Agricultural Biotechnology</h5>
              <p className="card-text">
                Explore biotechnological advancements in agriculture, such as
                GMOs and gene editing techniques.
              </p>
              <a
                href="https://www.coursera.org/learn/agricultural-biotechnology"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Agricultural Economics and Policy</h5>
              <p className="card-text">
                Gain knowledge in agricultural economics, rural development, and
                policy making for sustainable food systems.
              </p>
              <a
                href="https://www.coursera.org/learn/food-security"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Data Science in Agriculture</h5>
              <p className="card-text">
                Learn how data science, precision farming, and IoT are
                transforming agriculture through technology.
              </p>
              <a
                href="https://www.udemy.com/course/data-science-for-agriculture/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          {/* Add more cards here as needed */}
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">AI Engineer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Artificial Intelligence Specialization
              </h5>
              <p className="card-text">
                Comprehensive AI course covering fundamentals like search
                algorithms, game playing, and machine learning.
              </p>
              <a
                href="https://www.coursera.org/specializations/ai"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Deep Learning Specialization</h5>
              <p className="card-text">
                Learn about deep learning fundamentals, neural networks, CNNs,
                RNNs, and applications like autonomous driving.
              </p>
              <a
                href="https://www.coursera.org/specializations/deep-learning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Machine Learning by Andrew Ng</h5>
              <p className="card-text">
                Foundational machine learning course covering algorithms like
                regression, clustering, and deep learning.
              </p>
              <a
                href="https://www.coursera.org/learn/machine-learning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">AI for Everyone</h5>
              <p className="card-text">
                A high-level overview of AI, its applications, and how it's
                transforming industries.
              </p>
              <a
                href="https://www.coursera.org/learn/ai-for-everyone"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to TensorFlow for AI</h5>
              <p className="card-text">
                Learn how to use TensorFlow to build AI models, including neural
                networks and machine learning applications.
              </p>
              <a
                href="https://www.coursera.org/learn/introduction-tensorflow"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">AI Programming with Python</h5>
              <p className="card-text">
                Learn AI programming using Python, including machine learning
                algorithms and neural networks.
              </p>
              <a
                href="https://www.udacity.com/course/ai-programming-with-python-nanodegree--nd089"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Reinforcement Learning Specialization
              </h5>
              <p className="card-text">
                Master reinforcement learning, covering Q-learning, policy
                gradient methods, and deep reinforcement learning.
              </p>
              <a
                href="https://www.coursera.org/specializations/reinforcement-learning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Applied AI with Deep Learning</h5>
              <p className="card-text">
                Learn to apply AI techniques using deep learning frameworks like
                TensorFlow and PyTorch.
              </p>
              <a
                href="https://www.udacity.com/course/applied-ai-with-deep-learning--nd020"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Advanced Machine Learning Specialization
              </h5>
              <p className="card-text">
                A deep dive into advanced machine learning topics including deep
                learning, natural language processing, and more.
              </p>
              <a
                href="https://www.coursera.org/specializations/advanced-machine-learning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">AI Research Scientist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Advanced Machine Learning Specialization
              </h5>
              <p className="card-text">
                Explore advanced topics in machine learning, including deep
                learning, reinforcement learning, and Bayesian methods.
              </p>
              <a
                href="https://www.coursera.org/specializations/advanced-machine-learning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Introduction to Artificial Intelligence with Python
              </h5>
              <p className="card-text">
                Learn foundational AI concepts and implement algorithms in
                Python, including search, optimization, and learning.
              </p>
              <a
                href="https://cs50.harvard.edu/ai/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Deep Learning Specialization</h5>
              <p className="card-text">
                Master deep neural networks, CNNs, RNNs, and strategies to
                research and build deep learning applications.
              </p>
              <a
                href="https://www.coursera.org/specializations/deep-learning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Mathematics for Machine Learning</h5>
              <p className="card-text">
                Solidify your mathematical foundation in linear algebra,
                multivariable calculus, and probability for AI research.
              </p>
              <a
                href="https://www.coursera.org/specializations/mathematics-machine-learning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Probabilistic Graphical Models</h5>
              <p className="card-text">
                Dive deep into Bayesian networks, hidden Markov models, and
                inference—critical tools in AI research.
              </p>
              <a
                href="https://www.coursera.org/specializations/probabilistic-graphical-models"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Reinforcement Learning Specialization
              </h5>
              <p className="card-text">
                Study cutting-edge reinforcement learning algorithms such as
                policy gradients, Q-learning, and actor-critic methods.
              </p>
              <a
                href="https://www.coursera.org/specializations/reinforcement-learning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Deep Learning for Coders</h5>
              <p className="card-text">
                Project-based course to rapidly build research-level deep
                learning models using PyTorch and modern best practices.
              </p>
              <a
                href="https://course.fast.ai/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">AI for Research</h5>
              <p className="card-text">
                Work on real-world research projects in NLP, computer vision,
                and generative models under expert mentorship.
              </p>
              <a
                href="https://www.udacity.com/course/ai-for-research--ud908"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Deep Learning for Self-Driving Cars
              </h5>
              <p className="card-text">
                An advanced course from MIT focused on neural networks,
                perception, and control systems for autonomous vehicles.
              </p>
              <a
                href="https://deeplearning.mit.edu/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Aerospace Engineer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Introduction to Aeronautical Engineering
              </h5>
              <p className="card-text">
                Understand the fundamentals of flight, aerodynamics, propulsion,
                and aircraft design principles.
              </p>
              <a
                href="https://online.stanford.edu/courses/soeaeronautics0001-aeronautics-and-aerodynamics"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Aircraft Structures and Materials</h5>
              <p className="card-text">
                Explore structural analysis and materials used in aircraft and
                spacecraft, including composites and alloys.
              </p>
              <a
                href="https://www.edx.org/course/aircraft-structures-and-materials"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Flight Mechanics and Controls</h5>
              <p className="card-text">
                Study the dynamics of flight, aircraft stability, and control
                systems used in aerospace engineering.
              </p>
              <a
                href="https://ocw.mit.edu/courses/aeronautics-and-astronautics/16-333-aircraft-stability-and-control-spring-2004/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Air Traffic Controller</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Air Traffic Control Fundamentals</h5>
              <p className="card-text">
                Gain insights into ATC systems, aviation regulations,
                navigation, and communications protocols.
              </p>
              <a
                href="https://www.udemy.com/course/air-traffic-control-fundamentals/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to Aviation</h5>
              <p className="card-text">
                Learn about airport operations, aircraft types, and the role of
                air traffic services in aviation safety.
              </p>
              <a
                href="https://www.futurelearn.com/courses/introduction-to-aviation"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Automobile Technician</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Automotive Systems and Maintenance</h5>
              <p className="card-text">
                Understand internal combustion engines, transmissions,
                suspension, and maintenance procedures.
              </p>
              <a
                href="https://www.udemy.com/course/automotive-basic-maintenance-and-inspection/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Vehicle Electrical Systems</h5>
              <p className="card-text">
                Learn about diagnostics, sensors, wiring, and electronic control
                systems in modern vehicles.
              </p>
              <a
                href="https://alison.com/course/automotive-electrical-systems"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Biotechnology Researcher</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Principles of Biotechnology</h5>
              <p className="card-text">
                Study the basics of molecular biology, genetic engineering, and
                recombinant DNA technology.
              </p>
              <a
                href="https://www.edx.org/course/principles-of-biomanufacturing"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Bioinformatics and Genomics</h5>
              <p className="card-text">
                Learn how to analyze biological data and apply computational
                methods to genomic research.
              </p>
              <a
                href="https://www.coursera.org/specializations/genomic-data-science"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Blockchain Developer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Blockchain Basics</h5>
              <p className="card-text">
                Understand the core principles of blockchain, including
                consensus algorithms and decentralization.
              </p>
              <a
                href="https://www.coursera.org/learn/blockchain-basics"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Ethereum and Solidity Development</h5>
              <p className="card-text">
                Develop smart contracts and decentralized apps (DApps) using
                Solidity and Ethereum tools.
              </p>
              <a
                href="https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Blockchain Specialization</h5>
              <p className="card-text">
                Dive deeper into blockchain cryptography, data structures, smart
                contracts, and distributed systems.
              </p>
              <a
                href="https://www.coursera.org/specializations/blockchain"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Business Analyst</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Business Analysis Foundations</h5>
              <p className="card-text">
                Learn the role of a business analyst, how to gather
                requirements, and how to work with stakeholders.
              </p>
              <a
                href="https://www.linkedin.com/learning/business-analysis-foundations"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Excel for Business Analysts</h5>
              <p className="card-text">
                Master Excel tools and functions for data analysis, dashboards,
                and decision support.
              </p>
              <a
                href="https://www.coursera.org/learn/excel-business-analysts"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">SQL for Data Analysis</h5>
              <p className="card-text">
                Understand how to query databases, clean data, and gain business
                insights using SQL.
              </p>
              <a
                href="https://www.udemy.com/course/sql-for-data-analysis/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Civil Engineer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Fundamentals of Civil Engineering</h5>
              <p className="card-text">
                Cover the basics of structural, geotechnical, and transportation
                engineering.
              </p>
              <a
                href="https://nptel.ac.in/courses/105/106/105106179/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Construction Management</h5>
              <p className="card-text">
                Gain insights into project planning, scheduling, resource
                allocation, and risk management.
              </p>
              <a
                href="https://www.coursera.org/learn/construction-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Climate Change Analyst</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Climate Change Science and Solutions
              </h5>
              <p className="card-text">
                Explore the science behind climate change, policy responses, and
                sustainable development strategies.
              </p>
              <a
                href="https://www.edx.org/course/climate-change-science-and-solutions"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Sustainability and Climate Risk</h5>
              <p className="card-text">
                Understand the risks and opportunities climate change poses for
                economies, societies, and ecosystems.
              </p>
              <a
                href="https://www.coursera.org/learn/sustainability-climate-risk"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Clinical Research Associate</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Clinical Trials and Good Clinical Practice
              </h5>
              <p className="card-text">
                Learn the process and regulations involved in designing and
                conducting clinical trials.
              </p>
              <a
                href="https://www.coursera.org/learn/clinical-trials"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Introduction to Clinical Data Management
              </h5>
              <p className="card-text">
                Understand how clinical data is collected, monitored, and
                analyzed in healthcare studies.
              </p>
              <a
                href="https://www.udemy.com/course/introduction-to-clinical-data-management/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Compliance Officer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Corporate Governance and Compliance
              </h5>
              <p className="card-text">
                Explore the frameworks, laws, and practices used to ensure
                ethical conduct in organizations.
              </p>
              <a
                href="https://www.coursera.org/learn/corporate-governance"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Risk Management and Compliance</h5>
              <p className="card-text">
                Understand how to identify and manage risks while complying with
                regulations in financial and corporate sectors.
              </p>
              <a
                href="https://www.edx.org/course/risk-management-in-the-global-economy"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Construction Project Manager</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Construction Project Management</h5>
              <p className="card-text">
                Learn how to plan, manage, and execute construction projects
                efficiently and safely.
              </p>
              <a
                href="https://www.coursera.org/specializations/construction-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Construction Safety and Health</h5>
              <p className="card-text">
                Understand safety protocols and regulations in the construction
                industry.
              </p>
              <a
                href="https://www.udemy.com/course/construction-safety-management/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Corporate Lawyer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Corporate & Commercial Law</h5>
              <p className="card-text">
                Understand legal frameworks related to corporate structure,
                governance, and transactions.
              </p>
              <a
                href="https://www.coursera.org/specializations/corporate-commercial-law"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Mergers and Acquisitions</h5>
              <p className="card-text">
                Explore the legal and strategic aspects of mergers,
                acquisitions, and restructuring.
              </p>
              <a
                href="https://www.edx.org/course/mergers-and-acquisitions-law"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Corporate Trainer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Training and Development Foundations
              </h5>
              <p className="card-text">
                Learn instructional design, training needs analysis, and
                delivery methods.
              </p>
              <a
                href="https://www.udemy.com/course/learning-and-development-strategy/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Effective Communication for Trainers
              </h5>
              <p className="card-text">
                Develop public speaking, presentation, and learner engagement
                techniques for effective training.
              </p>
              <a
                href="https://www.coursera.org/learn/communication-strategies"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Cybersecurity Analyst</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to Cybersecurity</h5>
              <p className="card-text">
                Gain foundational knowledge in cybersecurity, including network
                security and common threats.
              </p>
              <a
                href="https://www.coursera.org/learn/intro-cyber-security"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                IBM Cybersecurity Analyst Professional Certificate
              </h5>
              <p className="card-text">
                Develop practical skills for threat detection, risk management,
                and incident response.
              </p>
              <a
                href="https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Data Scientist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Data Science Specialization</h5>
              <p className="card-text">
                Comprehensive program covering R programming, statistics,
                machine learning, and data products.
              </p>
              <a
                href="https://www.coursera.org/specializations/jhu-data-science"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Applied Data Science with Python</h5>
              <p className="card-text">
                Master Python for data analysis, visualization, and machine
                learning.
              </p>
              <a
                href="https://www.coursera.org/specializations/data-science-python"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Digital Content Creator</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Content Creation for Social Media</h5>
              <p className="card-text">
                Learn to create engaging content for platforms like Instagram,
                YouTube, and TikTok.
              </p>
              <a
                href="https://www.udemy.com/course/content-creation-masterclass/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Storytelling & Video Editing</h5>
              <p className="card-text">
                Master storytelling techniques and learn video editing with
                tools like Adobe Premiere.
              </p>
              <a
                href="https://www.skillshare.com/en/classes/Storytelling-for-Videos-How-to-Craft-Your-Narrative/1155777175"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Digital Marketing Manager</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Digital Marketing Specialization</h5>
              <p className="card-text">
                Covers SEO, SEM, social media, analytics, and content marketing
                strategies.
              </p>
              <a
                href="https://www.coursera.org/specializations/digital-marketing"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Marketing Strategy with Meta</h5>
              <p className="card-text">
                Design integrated marketing strategies with a focus on Facebook
                and Instagram ads.
              </p>
              <a
                href="https://www.coursera.org/professional-certificates/meta-social-media-marketing"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Digital Marketing Specialist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">SEO & Google Ads Masterclass</h5>
              <p className="card-text">
                Master search engine optimization and paid ads with Google
                tools.
              </p>
              <a
                href="https://www.udemy.com/course/seo-ultimate-guide/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                HubSpot Digital Marketing Certification
              </h5>
              <p className="card-text">
                Get certified in inbound marketing, email campaigns, and content
                optimization.
              </p>
              <a
                href="https://academy.hubspot.com/courses/digital-marketing"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Economic Researcher</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Principles of Economics</h5>
              <p className="card-text">
                Foundational course in micro and macroeconomics with analytical
                focus.
              </p>
              <a
                href="https://www.edx.org/course/principles-of-economics"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Applied Econometrics</h5>
              <p className="card-text">
                Learn how to analyze and interpret data using econometric models
                and statistical tools.
              </p>
              <a
                href="https://www.coursera.org/learn/applied-econometrics"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Energy Policy Analyst</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Energy Within Environmental Constraints
              </h5>
              <p className="card-text">
                Explore the interaction of energy systems, economics, and
                climate change.
              </p>
              <a
                href="https://online-learning.harvard.edu/course/energy-within-environmental-constraints"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Global Energy and Climate Policy</h5>
              <p className="card-text">
                Examine energy transition policies and global agreements on
                sustainability.
              </p>
              <a
                href="https://www.futurelearn.com/courses/global-energy-and-climate-policy"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Environmental Consultant</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Environmental Management & Ethics</h5>
              <p className="card-text">
                Understand environmental assessment tools, compliance, and
                sustainable planning.
              </p>
              <a
                href="https://www.coursera.org/learn/environmental-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Sustainability in Practice</h5>
              <p className="card-text">
                Practical techniques for assessing and improving environmental
                performance.
              </p>
              <a
                href="https://www.futurelearn.com/courses/sustainability-in-practice"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Environmental Scientist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Ecology: Ecosystem Dynamics and Conservation
              </h5>
              <p className="card-text">
                Study ecological systems, biodiversity, and conservation
                strategies.
              </p>
              <a
                href="https://www.coursera.org/learn/ecology-conservation"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Earth Systems and Environmental Impact
              </h5>
              <p className="card-text">
                Learn about environmental processes, pollution control, and
                sustainability.
              </p>
              <a
                href="https://www.edx.org/course/environmental-science"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Event Manager</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Event Management Masterclass</h5>
              <p className="card-text">
                Learn planning, budgeting, logistics, and client coordination
                for successful events.
              </p>
              <a
                href="https://www.udemy.com/course/event-management-course/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Strategic Event Planning</h5>
              <p className="card-text">
                Master the art of goal-oriented, measurable, and memorable event
                execution.
              </p>
              <a
                href="https://www.coursera.org/learn/event-planning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Fashion Designer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Fashion as Design</h5>
              <p className="card-text">
                Explore the history, impact, and creative process behind
                garments with insights from designers and makers.
              </p>
              <a
                href="https://www.coursera.org/learn/fashion-design"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Sustainable Fashion</h5>
              <p className="card-text">
                Understand the global challenges of fashion and explore
                sustainable design principles and practices.
              </p>
              <a
                href="https://www.futurelearn.com/courses/sustainable-fashion"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Introduction to Fashion Illustration
              </h5>
              <p className="card-text">
                Learn the basics of drawing fashion figures, garments, and
                rendering textures and fabric types.
              </p>
              <a
                href="https://www.udemy.com/course/fashion-illustration-for-beginners/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Pattern Making and Sewing Basics</h5>
              <p className="card-text">
                Master essential techniques in pattern drafting, sewing
                construction, and clothing assembly.
              </p>
              <a
                href="https://www.skillshare.com/en/classes/Sewing-101-Basics/787029045"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Fashion Draping Techniques</h5>
              <p className="card-text">
                Discover how to drape fabric on a dress form to create elegant
                designs and silhouettes.
              </p>
              <a
                href="https://www.domestika.org/en/courses/2466-fashion-design-draping-techniques"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Financial Analyst</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Financial Market Analysis</h5>
              <p className="card-text">
                Learn how to analyze financial markets, including key market
                indicators and analysis techniques.
              </p>
              <a
                href="https://www.coursera.org/learn/financial-markets-global"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Investment Analysis and Portfolio Management
              </h5>
              <p className="card-text">
                Understand the principles of investment analysis, portfolio
                management, and risk assessment techniques.
              </p>
              <a
                href="https://www.edx.org/course/investment-analysis-and-portfolio-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Financial Modeling for Beginners</h5>
              <p className="card-text">
                Learn how to build financial models and perform financial
                statement analysis to evaluate a company’s performance.
              </p>
              <a
                href="https://www.udemy.com/course/financial-modeling-for-beginners/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Corporate Finance</h5>
              <p className="card-text">
                Gain an understanding of corporate finance concepts, including
                capital budgeting, financial structure, and valuation.
              </p>
              <a
                href="https://www.coursera.org/learn/corporate-finance"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Advanced Excel for Financial Analysts
              </h5>
              <p className="card-text">
                Master advanced Excel techniques that every financial analyst
                needs, including complex formulas and data analysis tools.
              </p>
              <a
                href="https://www.udemy.com/course/advanced-excel-for-financial-analysis/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Financial Planner</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Financial Planning and Analysis</h5>
              <p className="card-text">
                Master financial planning and analysis to help clients meet
                their long-term financial goals.
              </p>
              <a
                href="https://www.udemy.com/course/financial-planning-analysis-for-businesses/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Certified Financial Planner (CFP) Certification
              </h5>
              <p className="card-text">
                Prepare for the Certified Financial Planner (CFP) exam with a
                comprehensive study guide.
              </p>
              <a
                href="https://www.cfp.net/certification"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Retirement Planning</h5>
              <p className="card-text">
                Learn the techniques of retirement planning, including
                investment, tax, and estate planning.
              </p>
              <a
                href="https://www.coursera.org/learn/retirement-planning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Personal Financial Management</h5>
              <p className="card-text">
                Gain knowledge in personal financial planning, budgeting, tax
                management, and investment strategies.
              </p>
              <a
                href="https://www.edx.org/course/personal-financial-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Estate Planning and Wealth Management
              </h5>
              <p className="card-text">
                Learn estate planning, wealth management, and trust management
                strategies for high-net-worth clients.
              </p>
              <a
                href="https://www.udemy.com/course/estate-planning-and-wealth-management/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Fire Safety Officer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Fire Safety and Prevention</h5>
              <p className="card-text">
                Learn the fundamentals of fire safety, prevention techniques,
                and emergency protocols in the workplace.
              </p>
              <a
                href="https://www.udemy.com/course/fire-safety-and-prevention/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Fire Risk Assessment</h5>
              <p className="card-text">
                Understand how to perform fire risk assessments, identify
                hazards, and implement safety measures.
              </p>
              <a
                href="https://www.coursera.org/learn/fire-safety"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Workplace Fire Safety</h5>
              <p className="card-text">
                Learn to identify fire hazards in the workplace and implement
                preventive fire safety measures.
              </p>
              <a
                href="https://www.futurelearn.com/courses/fire-safety-in-the-workplace"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Fire Safety Engineering</h5>
              <p className="card-text">
                Get an in-depth understanding of fire dynamics, fire modeling,
                and fire prevention engineering techniques.
              </p>
              <a
                href="https://www.edx.org/course/fire-safety-engineering"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Firefighting Techniques and Strategies
              </h5>
              <p className="card-text">
                Learn the techniques and strategies used in firefighting,
                focusing on safety, equipment, and procedure.
              </p>
              <a
                href="https://www.udemy.com/course/firefighting-techniques/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Flight Attendant</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Flight Attendant Training</h5>
              <p className="card-text">
                Gain the skills necessary to work as a flight attendant,
                including safety procedures and customer service.
              </p>
              <a
                href="https://www.udemy.com/course/flight-attendant-training/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Aviation Safety and Emergency Procedures
              </h5>
              <p className="card-text">
                Learn the essential safety protocols and emergency response
                strategies for flight attendants.
              </p>
              <a
                href="https://www.coursera.org/learn/aviation-safety"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Cabin Crew Training</h5>
              <p className="card-text">
                Understand the responsibilities and duties of cabin crew,
                including in-flight services and passenger care.
              </p>
              <a
                href="https://www.edx.org/course/cabin-crew-training"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">In-Flight Customer Service</h5>
              <p className="card-text">
                Learn how to provide exceptional in-flight service, ensuring
                customer satisfaction and safety.
              </p>
              <a
                href="https://www.udemy.com/course/in-flight-customer-service-training/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">First Aid and Medical Emergencies</h5>
              <p className="card-text">
                Learn how to administer first aid and handle medical emergencies
                on board an aircraft.
              </p>
              <a
                href="https://www.coursera.org/learn/first-aid"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Food Safety Inspector</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Food Safety and Quality Management</h5>
              <p className="card-text">
                Learn how to ensure food safety and quality in food production
                environments, focusing on safety protocols.
              </p>
              <a
                href="https://www.udemy.com/course/food-safety-quality-management/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">HACCP and Food Safety Regulations</h5>
              <p className="card-text">
                Understand the Hazard Analysis and Critical Control Points
                (HACCP) system for food safety.
              </p>
              <a
                href="https://www.coursera.org/learn/food-safety-haccp"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Food Safety Auditing</h5>
              <p className="card-text">
                Learn the skills required to conduct food safety audits in food
                manufacturing and service environments.
              </p>
              <a
                href="https://www.udemy.com/course/food-safety-auditing/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Global Food Safety Initiatives</h5>
              <p className="card-text">
                Study global initiatives for food safety and the regulations
                followed worldwide to ensure consumer protection.
              </p>
              <a
                href="https://www.futurelearn.com/courses/global-food-safety"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Foodborne Diseases and Outbreak Investigation
              </h5>
              <p className="card-text">
                Learn how foodborne diseases spread and the process of
                investigating outbreaks in the food industry.
              </p>
              <a
                href="https://www.edx.org/course/foodborne-diseases-investigation"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Food Safety Specialist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Food Safety Management</h5>
              <p className="card-text">
                Gain insights into food safety management systems, HACCP, and
                the regulations for food safety in production.
              </p>
              <a
                href="https://www.coursera.org/learn/food-safety-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Food Safety Systems and Standards</h5>
              <p className="card-text">
                Learn the different safety systems in food production
                environments, focusing on standards like ISO 22000.
              </p>
              <a
                href="https://www.udemy.com/course/food-safety-systems-standards/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Food Microbiology and Safety</h5>
              <p className="card-text">
                Understand the role of microbiology in food safety and how to
                prevent contamination in food production.
              </p>
              <a
                href="https://www.edx.org/course/food-microbiology-and-safety"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Food Inspection Techniques</h5>
              <p className="card-text">
                Learn the techniques for inspecting food products and facilities
                to ensure they comply with food safety standards.
              </p>
              <a
                href="https://www.udemy.com/course/food-inspection-techniques/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Food Safety Compliance and Law</h5>
              <p className="card-text">
                Study the legal requirements for food safety and how to comply
                with industry regulations.
              </p>
              <a
                href="https://www.coursera.org/learn/food-safety-compliance"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Game Developer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to Game Development</h5>
              <p className="card-text">
                Learn the fundamentals of game development using popular game
                engines like Unity and Unreal Engine.
              </p>
              <a
                href="https://www.coursera.org/learn/game-development"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                C# Programming for Game Development
              </h5>
              <p className="card-text">
                Master C# programming for game development, focusing on Unity's
                scripting system for game logic and interactivity.
              </p>
              <a
                href="https://www.udemy.com/course/csharp-programming-for-unity/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Unreal Engine 4 Mastery</h5>
              <p className="card-text">
                Explore Unreal Engine 4 and learn how to create stunning 3D
                games with advanced graphics and immersive experiences.
              </p>
              <a
                href="https://www.udemy.com/course/unreal-engine-4-mastery/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Game Design and Development Fundamentals
              </h5>
              <p className="card-text">
                Learn the key principles of game design and development,
                including storytelling, game mechanics, and user engagement.
              </p>
              <a
                href="https://www.coursera.org/learn/game-design"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Advanced Game Development Techniques
              </h5>
              <p className="card-text">
                Learn advanced techniques in game development, including AI for
                games, multiplayer functionality, and performance optimization.
              </p>
              <a
                href="https://www.udemy.com/course/advanced-game-development/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Genetic Counselor</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Genetics and Genomics for Healthcare
              </h5>
              <p className="card-text">
                Learn about the basics of genetics and genomics, and how they
                are applied in clinical settings to guide healthcare decisions.
              </p>
              <a
                href="https://www.coursera.org/learn/genetics-genomics-healthcare"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Genetic Counseling: Principles and Practices
              </h5>
              <p className="card-text">
                A comprehensive course on genetic counseling practices,
                including risk assessment and patient communication.
              </p>
              <a
                href="https://www.edx.org/course/genetic-counseling-principles"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to Genetic Counseling</h5>
              <p className="card-text">
                This course introduces the fundamentals of genetic counseling
                and how to support patients with genetic conditions.
              </p>
              <a
                href="https://www.coursera.org/learn/genetic-counseling"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Genetic Disorders and Counseling</h5>
              <p className="card-text">
                Understand various genetic disorders and the role of genetic
                counseling in managing these conditions.
              </p>
              <a
                href="https://www.udemy.com/course/genetic-disorders-counseling/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Ethical and Legal Issues in Genetic Counseling
              </h5>
              <p className="card-text">
                Explore the ethical and legal considerations when practicing
                genetic counseling and providing genetic testing results.
              </p>
              <a
                href="https://www.edx.org/course/ethical-legal-issues-genetic-counseling"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Geologist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Fundamentals of Geology</h5>
              <p className="card-text">
                Learn the basic principles of geology, including the study of
                rocks, minerals, and Earth's processes.
              </p>
              <a
                href="https://www.coursera.org/learn/geology"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Environmental Geology</h5>
              <p className="card-text">
                Understand the relationship between geology and the environment,
                focusing on natural hazards and sustainability.
              </p>
              <a
                href="https://www.udemy.com/course/environmental-geology/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Geophysics for Geologists</h5>
              <p className="card-text">
                Learn the techniques used in geophysics to study the Earth's
                subsurface, including seismic and magnetic methods.
              </p>
              <a
                href="https://www.edx.org/course/geophysics-for-geologists"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Petroleum Geology</h5>
              <p className="card-text">
                Study the geology of oil and gas reservoirs, focusing on
                exploration, drilling, and production processes.
              </p>
              <a
                href="https://www.coursera.org/learn/petroleum-geology"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Hydrogeology: Water Science and Management
              </h5>
              <p className="card-text">
                Understand the science of groundwater and water resource
                management for sustainable development.
              </p>
              <a
                href="https://www.udemy.com/course/hydrogeology-water-science-management/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Healthcare Data Analyst</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Introduction to Healthcare Data Analysis
              </h5>
              <p className="card-text">
                Learn the basics of healthcare data analysis, including patient
                data, statistical methods, and data-driven decision-making.
              </p>
              <a
                href="https://www.coursera.org/learn/healthcare-data-analysis"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Data Analytics in Healthcare</h5>
              <p className="card-text">
                Gain hands-on experience with healthcare data analysis tools,
                using real-world healthcare datasets to derive insights.
              </p>
              <a
                href="https://www.udemy.com/course/data-analytics-in-healthcare/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Health Informatics and Analytics</h5>
              <p className="card-text">
                Learn how to leverage informatics to analyze healthcare data and
                improve decision-making in medical fields.
              </p>
              <a
                href="https://www.edx.org/course/health-informatics"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Hotel Manager</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Hotel Management Basics</h5>
              <p className="card-text">
                Learn the foundational aspects of hotel management, from
                operations and customer service to financial management.
              </p>
              <a
                href="https://www.coursera.org/learn/hotel-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Advanced Hotel Management</h5>
              <p className="card-text">
                Take your hotel management skills to the next level with
                advanced topics on marketing, technology, and leadership.
              </p>
              <a
                href="https://www.udemy.com/course/advanced-hotel-management/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Revenue Management for Hotels</h5>
              <p className="card-text">
                Learn the art of revenue management and how to maximize profit
                through pricing strategies and demand forecasting.
              </p>
              <a
                href="https://www.coursera.org/learn/hotel-revenue-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Human Resources Manager</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Human Resource Management Essentials
              </h5>
              <p className="card-text">
                Learn HR fundamentals such as recruitment, employee relations,
                compensation, and benefits management.
              </p>
              <a
                href="https://www.coursera.org/learn/human-resource-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Strategic Human Resource Management
              </h5>
              <p className="card-text">
                Delve into strategic HR practices that align human resource
                planning with business goals.
              </p>
              <a
                href="https://www.edx.org/course/strategic-human-resource-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Leadership and Management for HR Professionals
              </h5>
              <p className="card-text">
                Develop leadership skills to effectively manage HR teams and
                make critical decisions that impact organizational success.
              </p>
              <a
                href="https://www.udemy.com/course/leadership-for-hr-professionals/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Industrial Automation Specialist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Industrial Automation: Fundamentals and Practices
              </h5>
              <p className="card-text">
                Learn about the fundamentals of automation, including PLCs,
                SCADA systems, and robotics in manufacturing.
              </p>
              <a
                href="https://www.coursera.org/learn/industrial-automation"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Robotics for Industrial Automation</h5>
              <p className="card-text">
                Master robotics technologies used in modern industrial
                automation systems for manufacturing and production
                optimization.
              </p>
              <a
                href="https://www.udemy.com/course/robotics-for-industrial-automation/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                PLC Programming for Industrial Automation
              </h5>
              <p className="card-text">
                Gain expertise in PLC programming, a critical skill for
                industrial automation and control systems.
              </p>
              <a
                href="https://www.coursera.org/learn/plc-programming"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Instructional Designer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Instructional Design: Theories and Practices
              </h5>
              <p className="card-text">
                Learn the key theories and methodologies behind effective
                instructional design in eLearning and classroom settings.
              </p>
              <a
                href="https://www.coursera.org/learn/instructional-design"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                eLearning Development for Instructional Designers
              </h5>
              <p className="card-text">
                Master the skills to create engaging and interactive eLearning
                content using modern authoring tools.
              </p>
              <a
                href="https://www.udemy.com/course/elearning-development-for-instructional-designers/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>

          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Advanced Instructional Design and Delivery
              </h5>
              <p className="card-text">
                Learn advanced techniques in instructional design, including
                multimedia integration and learning management systems.
              </p>
              <a
                href="https://www.edx.org/course/advanced-instructional-design"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Interior Designer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Interior Design Fundamentals</h5>
              <p className="card-text">
                Learn the basics of interior design, including design
                principles, color theory, and spatial arrangements.
              </p>
              <a
                href="https://www.coursera.org/learn/interior-design"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Design Thinking for Interior Designers
              </h5>
              <p className="card-text">
                Learn how to apply design thinking techniques to create
                innovative and functional interior spaces.
              </p>
              <a
                href="https://www.udemy.com/course/interior-design-for-beginners"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">3D Interior Design with AutoCAD</h5>
              <p className="card-text">
                Master the skills of 3D interior design using AutoCAD software,
                ideal for professional interior designers.
              </p>
              <a
                href="https://www.lynda.com/AutoCAD-tutorials/AutoCAD-3D-Design/521868"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Legal Advisor</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to Law</h5>
              <p className="card-text">
                Explore the foundations of law, including types of law and how
                they are applied in real-world scenarios.
              </p>
              <a
                href="https://www.coursera.org/learn/introduction-to-law"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Business Law for Lawyers</h5>
              <p className="card-text">
                Learn business law principles to guide you in handling legal
                issues for companies and corporations.
              </p>
              <a
                href="https://www.udemy.com/course/business-law-for-business-professionals/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">International Law</h5>
              <p className="card-text">
                Understand the laws that govern international relations,
                treaties, and organizations.
              </p>
              <a
                href="https://www.edx.org/course/international-law"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Librarian</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to Library Science</h5>
              <p className="card-text">
                Learn the basic principles and methods of library management and
                services.
              </p>
              <a
                href="https://www.coursera.org/learn/library-science"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Library Information Systems</h5>
              <p className="card-text">
                Understand how modern libraries use digital systems to manage
                books, resources, and patrons.
              </p>
              <a
                href="https://www.udemy.com/course/library-information-systems/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Cataloging and Classification</h5>
              <p className="card-text">
                Learn how to organize and classify library resources efficiently
                using the Dewey Decimal system.
              </p>
              <a
                href="https://www.lynda.com/Library-Science-tutorials/Library-Science-101"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Logistics Coordinator</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Logistics and Supply Chain Management
              </h5>
              <p className="card-text">
                Learn key logistics strategies and techniques in managing supply
                chains efficiently.
              </p>
              <a
                href="https://www.coursera.org/learn/supply-chain-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Logistics Management</h5>
              <p className="card-text">
                Understand the processes involved in managing logistics and
                transportation in global supply chains.
              </p>
              <a
                href="https://www.udemy.com/course/logistics-management/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Global Logistics and Transportation
              </h5>
              <p className="card-text">
                Explore global logistics and the importance of transportation in
                efficient supply chain management.
              </p>
              <a
                href="https://www.edx.org/course/global-logistics-and-transportation"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Machine Learning Engineer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Machine Learning by Andrew Ng</h5>
              <p className="card-text">
                A foundational course in machine learning by Stanford
                University, covering supervised and unsupervised learning.
              </p>
              <a
                href="https://www.coursera.org/learn/machine-learning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Deep Learning Specialization</h5>
              <p className="card-text">
                Learn deep learning techniques with this hands-on series of
                courses on neural networks and deep learning.
              </p>
              <a
                href="https://www.coursera.org/specializations/deep-learning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Applied Machine Learning</h5>
              <p className="card-text">
                Learn how to apply machine learning techniques to solve
                real-world problems with various tools and techniques.
              </p>
              <a
                href="https://www.udemy.com/course/applied-machine-learning/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">
          Manufacturing Quality Control Inspector
        </h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Quality Control in Manufacturing</h5>
              <p className="card-text">
                Learn the essential methods for ensuring quality in
                manufacturing, including testing, inspection, and control
                techniques.
              </p>
              <a
                href="https://www.coursera.org/learn/quality-control-manufacturing"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Fundamentals of Manufacturing</h5>
              <p className="card-text">
                Get an understanding of the manufacturing process, focusing on
                product design, material selection, and production techniques.
              </p>
              <a
                href="https://www.udemy.com/course/fundamentals-of-manufacturing/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Inspection and Testing for Quality Control
              </h5>
              <p className="card-text">
                Learn how to inspect and test products to maintain high
                standards in manufacturing and production lines.
              </p>
              <a
                href="https://www.lynda.com/Quality-Control-tutorials/Quality-Control-Manufacturing-101/123456"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Marine Biologist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Marine Biology: An Introduction</h5>
              <p className="card-text">
                Understand the fundamentals of marine biology, focusing on ocean
                ecosystems, marine life, and environmental challenges.
              </p>
              <a
                href="https://www.coursera.org/learn/marine-biology"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Marine Conservation and Sustainability
              </h5>
              <p className="card-text">
                Learn about marine conservation, sustainability practices, and
                the importance of preserving ocean ecosystems.
              </p>
              <a
                href="https://www.udemy.com/course/marine-conservation-sustainability/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Coral Reef Ecology</h5>
              <p className="card-text">
                Explore the ecology of coral reefs, understanding their
                importance, threats, and conservation efforts.
              </p>
              <a
                href="https://www.edx.org/course/coral-reef-ecology"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Mechanical Engineer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Introduction to Mechanical Engineering
              </h5>
              <p className="card-text">
                Learn the basics of mechanical engineering, covering design,
                thermodynamics, materials science, and mechanics.
              </p>
              <a
                href="https://www.coursera.org/learn/mechanical-engineering"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Mechanical Engineering Design</h5>
              <p className="card-text">
                Understand the principles of mechanical design, focusing on CAD,
                materials selection, and product development.
              </p>
              <a
                href="https://www.udemy.com/course/mechanical-design-course/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Fluid Mechanics in Mechanical Engineering
              </h5>
              <p className="card-text">
                Dive deep into the concepts of fluid mechanics and its
                application in mechanical systems like turbines and pumps.
              </p>
              <a
                href="https://www.lynda.com/Mechanical-Engineering-tutorials/Fluid-Mechanics-Introduction/567890"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Mental Health Counselor</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Mental Health Counseling: Foundations
              </h5>
              <p className="card-text">
                Learn the foundational principles and techniques used by mental
                health counselors to support clients.
              </p>
              <a
                href="https://www.coursera.org/learn/mental-health-counseling"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Cognitive Behavioral Therapy (CBT)</h5>
              <p className="card-text">
                Explore the principles of cognitive-behavioral therapy, a widely
                used method for treating mental health disorders.
              </p>
              <a
                href="https://www.udemy.com/course/cognitive-behavioral-therapy-cbt-training/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Psychological First Aid</h5>
              <p className="card-text">
                Learn the basics of psychological first aid and how to support
                individuals in distress in a compassionate manner.
              </p>
              <a
                href="https://www.edx.org/course/psychological-first-aid"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Nutritionist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to Nutrition</h5>
              <p className="card-text">
                Learn about the essential nutrients, dietary needs, and the role
                of nutrition in health and disease prevention.
              </p>
              <a
                href="https://www.coursera.org/learn/nutrition"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Clinical Nutrition and Dietetics</h5>
              <p className="card-text">
                Explore the clinical aspects of nutrition, including diet
                planning, disease prevention, and therapeutic nutrition.
              </p>
              <a
                href="https://www.udemy.com/course/clinical-nutrition-dietetics/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Sports Nutrition</h5>
              <p className="card-text">
                Learn about sports nutrition and how to tailor diets to improve
                performance and recovery for athletes.
              </p>
              <a
                href="https://www.lynda.com/Nutrition-tutorials/Sports-Nutrition/123456"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Operations Manager</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Operations Management: Analysis and Improvement
              </h5>
              <p className="card-text">
                Learn the fundamentals of operations management, including
                process analysis, improvement techniques, and operational
                strategy.
              </p>
              <a
                href="https://www.coursera.org/learn/operations-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Supply Chain Management</h5>
              <p className="card-text">
                Understand the key principles of managing and optimizing supply
                chains in various industries.
              </p>
              <a
                href="https://www.udemy.com/course/supply-chain-management-basics/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Advanced Project Management</h5>
              <p className="card-text">
                Master advanced project management techniques and tools to
                manage large and complex projects.
              </p>
              <a
                href="https://www.coursera.org/learn/advanced-project-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">
          Pharmaceutical Sales Representative
        </h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Pharmaceutical Sales and Marketing</h5>
              <p className="card-text">
                Explore the essentials of pharmaceutical sales, including
                customer relations, product knowledge, and sales strategies.
              </p>
              <a
                href="https://www.coursera.org/learn/pharmaceutical-sales"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Pharmaceutical Marketing</h5>
              <p className="card-text">
                Learn about pharmaceutical marketing strategies, including
                regulatory issues and consumer behavior analysis.
              </p>
              <a
                href="https://www.udemy.com/course/pharmaceutical-marketing/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Pharma Sales Representative Training
              </h5>
              <p className="card-text">
                Gain the necessary skills and knowledge to succeed as a
                pharmaceutical sales representative, including product knowledge
                and communication skills.
              </p>
              <a
                href="https://www.udemy.com/course/pharma-sales-representative-training/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Pharmaceutical Scientist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Pharmaceutical Research and Development
              </h5>
              <p className="card-text">
                Understand the process of pharmaceutical R&D, from drug
                discovery to clinical trials and regulatory approval.
              </p>
              <a
                href="https://www.coursera.org/learn/pharmaceutical-research"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Advanced Pharmaceutical Sciences</h5>
              <p className="card-text">
                Dive into advanced topics in pharmaceutical science, including
                drug design and formulation.
              </p>
              <a
                href="https://www.edx.org/course/advanced-pharmaceutical-sciences"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Pharmaceutical Chemistry</h5>
              <p className="card-text">
                Explore the chemistry behind pharmaceutical compounds, their
                synthesis, and interactions in the body.
              </p>
              <a
                href="https://www.coursera.org/learn/pharmaceutical-chemistry"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Project Manager</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Project Management Professional (PMP) Certification
              </h5>
              <p className="card-text">
                Prepare for the PMP exam and gain skills in planning, executing,
                and managing projects in any industry.
              </p>
              <a
                href="https://www.coursera.org/learn/project-management-principles"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Agile Project Management</h5>
              <p className="card-text">
                Learn Agile methodologies for managing projects with flexibility
                and adaptability in fast-paced environments.
              </p>
              <a
                href="https://www.udemy.com/course/agile-project-management/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Leadership in Project Management</h5>
              <p className="card-text">
                Learn how to lead teams effectively, manage conflict, and
                motivate employees in a project setting.
              </p>
              <a
                href="https://www.coursera.org/learn/leadership-in-project-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Psychologist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to Psychology</h5>
              <p className="card-text">
                Get a comprehensive understanding of human behavior, cognition,
                and mental health from a psychological perspective.
              </p>
              <a
                href="https://www.coursera.org/learn/psychology"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Clinical Psychology</h5>
              <p className="card-text">
                Study therapeutic techniques and the role of clinical psychology
                in treating mental health disorders.
              </p>
              <a
                href="https://www.udemy.com/course/clinical-psychology/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Psychopathology</h5>
              <p className="card-text">
                Learn about various psychological disorders and their
                treatments, including anxiety, depression, and personality
                disorders.
              </p>
              <a
                href="https://www.edx.org/course/psychopathology"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Public Relations Specialist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Public Relations Strategy</h5>
              <p className="card-text">
                Learn the key elements of PR strategy, including media
                relations, crisis communication, and brand management.
              </p>
              <a
                href="https://www.coursera.org/learn/public-relations-strategy"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Crisis Communication and PR</h5>
              <p className="card-text">
                Develop skills in managing communication during crises and
                understanding public perception in the digital age.
              </p>
              <a
                href="https://www.udemy.com/course/crisis-communication-pr/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Media Relations</h5>
              <p className="card-text">
                Learn how to build and maintain strong relationships with media
                outlets and effectively pitch news stories.
              </p>
              <a
                href="https://www.coursera.org/learn/media-relations"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Public Relations Strategist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Public Relations Campaigns</h5>
              <p className="card-text">
                Learn the key principles of creating and executing public
                relations campaigns that effectively communicate a brand’s
                message.
              </p>
              <a
                href="https://www.coursera.org/learn/public-relations-campaigns"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Strategic Public Relations</h5>
              <p className="card-text">
                Explore the strategies behind successful public relations,
                including reputation management and social media engagement.
              </p>
              <a
                href="https://www.udemy.com/course/strategic-public-relations/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Digital PR and Social Media</h5>
              <p className="card-text">
                Learn how to leverage digital PR techniques and social media
                platforms to shape public perception and build brand awareness.
              </p>
              <a
                href="https://www.edx.org/course/digital-public-relations"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Radiologic Technologist</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Radiologic Technology and Imaging</h5>
              <p className="card-text">
                Explore the fundamentals of radiologic technology, including
                imaging techniques and safety protocols in medical settings.
              </p>
              <a
                href="https://www.coursera.org/learn/radiologic-imaging"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Medical Imaging and Radiation Therapy
              </h5>
              <p className="card-text">
                Understand the principles of medical imaging, radiation therapy,
                and the clinical application of these technologies in
                healthcare.
              </p>
              <a
                href="https://www.udemy.com/course/medical-imaging-radiation-therapy/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Introduction to Radiation Protection
              </h5>
              <p className="card-text">
                Learn the basics of radiation protection, safety standards, and
                risk management in radiologic practice.
              </p>
              <a
                href="https://www.edx.org/course/radiation-protection"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Real Estate Agent</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Real Estate Fundamentals</h5>
              <p className="card-text">
                Learn about the real estate market, including property
                valuation, sales, and the legal aspects of real estate
                transactions.
              </p>
              <a
                href="https://www.coursera.org/learn/real-estate"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Real Estate Investment and Analysis
              </h5>
              <p className="card-text">
                Gain expertise in real estate investment, focusing on property
                analysis, ROI, and investment strategies.
              </p>
              <a
                href="https://www.udemy.com/course/real-estate-investment-analysis/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Real Estate Marketing</h5>
              <p className="card-text">
                Master strategies to market properties, build a real estate
                brand, and generate leads effectively.
              </p>
              <a
                href="https://www.coursera.org/learn/real-estate-marketing"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Renewable Energy Engineer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Renewable Energy: Technology and Policy
              </h5>
              <p className="card-text">
                Learn about renewable energy technologies, including wind,
                solar, and hydro, as well as their associated policies and
                global impact.
              </p>
              <a
                href="https://www.coursera.org/learn/renewable-energy"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Solar Energy Basics</h5>
              <p className="card-text">
                Understand the basics of solar energy, including photovoltaic
                systems, solar panels, and their installation and maintenance.
              </p>
              <a
                href="https://www.udemy.com/course/solar-energy-basics/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Wind Energy Technology</h5>
              <p className="card-text">
                Explore the technology behind wind energy generation and learn
                how wind turbines work, as well as their environmental impact.
              </p>
              <a
                href="https://www.edx.org/course/wind-energy-technology"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Robotics Engineer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Robotics Fundamentals</h5>
              <p className="card-text">
                Learn the basics of robotics, including sensors, actuators, and
                the programming techniques used in robot design.
              </p>
              <a
                href="https://www.coursera.org/learn/robotics"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Advanced Robotics Systems</h5>
              <p className="card-text">
                Delve deeper into the design and development of autonomous
                robots, including path planning, machine learning, and sensor
                fusion.
              </p>
              <a
                href="https://www.udemy.com/course/advanced-robotics-systems/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Industrial Robotics</h5>
              <p className="card-text">
                Explore the industrial applications of robotics, including
                automation, robotic arms, and their use in manufacturing
                processes.
              </p>
              <a
                href="https://www.edx.org/course/industrial-robotics"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Satellite Systems Engineer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to Satellite Systems</h5>
              <p className="card-text">
                Learn about the fundamentals of satellite systems, including
                orbit dynamics, communication systems, and satellite design
                principles.
              </p>
              <a
                href="https://www.coursera.org/learn/satellite-systems"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Spacecraft and Satellite Engineering
              </h5>
              <p className="card-text">
                Gain an in-depth understanding of spacecraft engineering,
                satellite architecture, and design considerations for space
                missions.
              </p>
              <a
                href="https://www.udemy.com/course/spacecraft-and-satellite-engineering/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Advanced Satellite Communications</h5>
              <p className="card-text">
                Explore advanced topics in satellite communication systems,
                including signal processing, error correction, and satellite
                network management.
              </p>
              <a
                href="https://www.edx.org/course/advanced-satellite-communications"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Social Worker</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Social Work: Practice and Ethics</h5>
              <p className="card-text">
                Learn the essential ethical and practical aspects of social
                work, focusing on client interaction, confidentiality, and case
                management.
              </p>
              <a
                href="https://www.coursera.org/learn/social-work-ethics"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to Social Work</h5>
              <p className="card-text">
                Get an overview of the social work field, including its history,
                foundational theories, and the roles of social workers in
                society.
              </p>
              <a
                href="https://www.udemy.com/course/introduction-to-social-work/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Mental Health and Social Work</h5>
              <p className="card-text">
                Explore the intersection between social work and mental health,
                including techniques for providing support to individuals with
                mental health disorders.
              </p>
              <a
                href="https://www.edx.org/course/mental-health-and-social-work"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Software Developer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to Programming</h5>
              <p className="card-text">
                Learn the basics of computer programming, focusing on languages
                like Python, C++, and Java for building software applications.
              </p>
              <a
                href="https://www.coursera.org/learn/introduction-to-programming"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Full Stack Web Development</h5>
              <p className="card-text">
                Gain skills in both front-end and back-end web development,
                learning HTML, CSS, JavaScript, Node.js, and databases.
              </p>
              <a
                href="https://www.udemy.com/course/full-stack-web-development/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Mobile App Development</h5>
              <p className="card-text">
                Learn to develop mobile applications for both Android and iOS
                using modern technologies like Flutter and React Native.
              </p>
              <a
                href="https://www.edx.org/course/mobile-app-development"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Sports Coach</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Coaching Fundamentals</h5>
              <p className="card-text">
                Learn the core principles of coaching, including communication
                skills, motivational techniques, and performance tracking.
              </p>
              <a
                href="https://www.coursera.org/learn/coaching-fundamentals"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Sports Psychology for Coaches</h5>
              <p className="card-text">
                Explore the psychological aspects of coaching, including mental
                conditioning, motivation, and the coach-athlete relationship.
              </p>
              <a
                href="https://www.udemy.com/course/sports-psychology-for-coaches/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Strength and Conditioning for Athletes
              </h5>
              <p className="card-text">
                Learn how to design training programs focused on improving
                strength, endurance, and flexibility for athletes of all levels.
              </p>
              <a
                href="https://www.edx.org/course/strength-and-conditioning-for-athletes"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Sustainability Consultant</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Sustainable Business Practices</h5>
              <p className="card-text">
                Learn the principles of sustainability in business, including
                energy efficiency, waste reduction, and sustainable sourcing.
              </p>
              <a
                href="https://www.coursera.org/learn/sustainable-business"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Environmental Sustainability</h5>
              <p className="card-text">
                Explore the environmental issues that impact sustainability and
                learn how to address them through innovative solutions.
              </p>
              <a
                href="https://www.udemy.com/course/environmental-sustainability/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Circular Economy: Sustainable Development
              </h5>
              <p className="card-text">
                Understand the circular economy model, including recycling,
                reuse, and designing for sustainability in business practices.
              </p>
              <a
                href="https://www.edx.org/course/circular-economy-sustainable-development"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Supply Chain Manager</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Introduction to Supply Chain Management
              </h5>
              <p className="card-text">
                Learn the foundational principles of supply chain management,
                including logistics, inventory management, and procurement.
              </p>
              <a
                href="https://www.coursera.org/learn/supply-chain-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Advanced Supply Chain Strategies</h5>
              <p className="card-text">
                Explore advanced topics in supply chain management, including
                optimization techniques, risk management, and global logistics.
              </p>
              <a
                href="https://www.udemy.com/course/advanced-supply-chain-strategies/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Logistics and Transportation Management
              </h5>
              <p className="card-text">
                Understand the critical aspects of logistics and transportation,
                including warehouse management, distribution strategies, and
                freight management.
              </p>
              <a
                href="https://www.edx.org/course/logistics-and-transportation-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Teacher (Secondary Education)</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Classroom Management and Instruction
              </h5>
              <p className="card-text">
                Learn strategies for effective classroom management and
                instructional techniques for secondary school educators.
              </p>
              <a
                href="https://www.coursera.org/learn/classroom-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Secondary Education Teaching Methodology
              </h5>
              <p className="card-text">
                Learn about various teaching methodologies that can be applied
                in secondary education, including active learning and formative
                assessment.
              </p>
              <a
                href="https://www.udemy.com/course/secondary-education-teaching-methods/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Digital Pedagogy for Educators</h5>
              <p className="card-text">
                Explore how to incorporate digital tools and resources into
                secondary education, enhancing engagement and learning outcomes.
              </p>
              <a
                href="https://www.edx.org/course/digital-pedagogy-for-educators"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Tourism Officer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Tourism Management Fundamentals</h5>
              <p className="card-text">
                Learn the core principles of tourism management, focusing on
                destination marketing, hospitality, and sustainable tourism
                practices.
              </p>
              <a
                href="https://www.coursera.org/learn/tourism-management"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Tourism Economics and Development</h5>
              <p className="card-text">
                Gain insights into the economic impact of tourism, including how
                it drives local economies, employment, and community
                development.
              </p>
              <a
                href="https://www.udemy.com/course/tourism-economics-and-development/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Sustainable Tourism Practices</h5>
              <p className="card-text">
                Learn sustainable tourism practices that reduce environmental
                impact, promote cultural preservation, and support local
                economies.
              </p>
              <a
                href="https://www.edx.org/course/sustainable-tourism-practices"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Urban Planner</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to Urban Planning</h5>
              <p className="card-text">
                Learn the basics of urban planning, including city design, land
                use, transportation planning, and sustainability issues in urban
                areas.
              </p>
              <a
                href="https://www.coursera.org/learn/urban-planning"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Advanced Urban Design</h5>
              <p className="card-text">
                Delve into advanced urban design topics, including smart cities,
                resilient infrastructure, and public space development.
              </p>
              <a
                href="https://www.udemy.com/course/advanced-urban-design/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                Urban Sustainability and Resilience
              </h5>
              <p className="card-text">
                Explore sustainable urban planning practices, including managing
                climate change risks, reducing carbon footprints, and creating
                resilient cities.
              </p>
              <a
                href="https://www.edx.org/course/urban-sustainability-and-resilience"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">UX/UI Designer</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Introduction to UX Design</h5>
              <p className="card-text">
                Learn the fundamentals of user experience (UX) design, focusing
                on research, prototyping, and testing for digital products.
              </p>
              <a
                href="https://www.coursera.org/learn/ux-design"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">
                User Interface Design for Beginners
              </h5>
              <p className="card-text">
                Learn the principles of user interface (UI) design, including
                layout, typography, and color theory to create intuitive user
                interfaces.
              </p>
              <a
                href="https://www.udemy.com/course/ui-design-for-beginners/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">UX Research and Usability Testing</h5>
              <p className="card-text">
                Explore methods for conducting UX research and usability testing
                to improve the user experience of websites and applications.
              </p>
              <a
                href="https://www.edx.org/course/ux-research-and-usability-testing"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="mb-4 text-primary">Veterinarian</h2>
        <div className="d-flex flex-row overflow-auto gap-3 pb-3">
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Veterinary Medicine Basics</h5>
              <p className="card-text">
                Learn the basics of veterinary medicine, including animal
                anatomy, physiology, and common diseases in animals.
              </p>
              <a
                href="https://www.coursera.org/learn/veterinary-medicine"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Animal Behavior and Training</h5>
              <p className="card-text">
                Understand animal behavior and training methods to help manage
                and improve animal health and well-being.
              </p>
              <a
                href="https://www.udemy.com/course/animal-behavior-and-training/"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
          <div className="card" style={{ minWidth: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Small Animal Surgery</h5>
              <p className="card-text">
                Gain knowledge about common surgical procedures performed on
                small animals, including techniques for soft tissue surgery and
                orthopedic procedures.
              </p>
              <a
                href="https://www.edx.org/course/small-animal-surgery"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Visit Course
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
