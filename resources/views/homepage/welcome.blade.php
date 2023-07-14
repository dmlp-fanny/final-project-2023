
<x-layout>

    <header>
        
        <nav class="navbar navbar-custom navbar-expand-lg bg-body-tertiary custom-navbar">
            <div class="container-fluid">
                <div class="navbar-brand">Connect</div>
               
                <div class="collapse navbar-collapse" id="navbarNav"> 
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about-us">About us</a></li>
                        <li class="nav-item"><a class="nav-link" href="#how-it-works">Services</a></li> 
                        <li class="nav-item"><a class="nav-link" href="#join-us">Contact</a></li>
                        <li class="nav-item"><a class="nav-link" href="#myModal" data-bs-toggle="modal">Demo Day</a></li>
                    </ul>
                </div>    
                <a class="nav-link login-link" href="/login">Login</a>
                <a class="btn btn-primary signup-btn" href="/register">Sign up</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    </header>

    <!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">CONNECT APP</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
        <div class="qrcode">
            <img src="/icons/qrcode.png">
        </div>

        <h3>Behind the Scenes of the Project</h3>
        <h4>Workflow</h4>
        
        <p><strong>How did we divide the work?</strong></p>

            <p>
                <strong>Tuyen:</strong> - Homepage, Login, Registration<br>
                <strong>Fanny:</strong> - Back End, User Flow
    
            </p>
        <p><strong>What tools did we use? </strong></p>
            <li>Organization - monday.com </li>
            <li>Data Modelling - dbdiagram.io </li>
            <li>Wireframe - invisionapp.com</li>
            <li>User Flow - BPMN Editor</li>
        </p>
        <div class="screenshot">
            <img src="/icon/monday.png">
            <img src="/icon/dbdiagram.png">
            <img src="/icon/wireframe.png">
            <img src="/icon/bpmneditor.png">
        </div>
            <h4>Tech Stack</h4>
            <p><strong>What programming languages we use?</strong></p>
        <div class="icons">   
            <img src="/icon/html.png">
            <img src="/icon/css.png">
            <img src="/icon/sass.png">
            <img src="/icon/bootstrap.png">
            <img src="/icon/react.png">
            <img src="/icon/js.png">
            <img src="/icon/laravel.png">
            <img src="/icon/php.png">
            <img src="/icon/mysql.jpg">
        </div> 
        <h4>Lessons Learnt</h4>
        <p><strong>What are we taking away from this project?</strong></p>
            <ul>
                <strong>Tuyen:</strong>
                <li>Approach the project from different angles</li>
                <li>Communication</li>
                <strong>Fanny:</strong>
                <li>Longer brainstorming and planning phase</li>
                <li>Laravel</li>
            </ul>
        <h4>Future Direction</h4>
        <p><strong>What can be done in the future?</strong></p>
        <ul>
            <li>Messages</li>
            <li>Translators - assessment, ratings, feedback</li>
            <li>Availability - searching in range</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    {{-- Hero session: Headline, background img, short text, Sign up button --}}
   
    <section id="banner-section" class="banner">
        <div class="banner-content">
            <h1>You speak your mother tongue, we help with translation</h1>
        </div>
    </section>

    
    
    {{-- Description session:  --}}

    <section id="how-it-works" class="description">
        <h2>How it works?</h2>
        <p class="description-text">Experience the simplicity of our matching translation services through three simple steps. Our user-friendly application allows you to access our platform, submit your translation requests, and enjoy the assistance of a translator who bridges communication gaps regardless of your mother tongue. Narrowing down the language barriers and embrace effective and smooth communication</p>
        <div class="description-boxes">
            
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://img.icons8.com/wired/64/news.png" alt="news"/>
                <div class="card-body">
                  <h5 class="card-title">Step 1</h5>
                  <p class="card-text">Sign up for an account or log in to your existing account to access our platform</p>
                 
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://img.icons8.com/wired/64/checked-2.png" alt="checked-2" />
                <div class="card-body">
                  <h5 class="card-title">Step 2</h5>
                  <p class="card-text">Once logged in, create a request by providing the necessary details. After filling in the required information, simply click the send button to submit your request.</p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://img.icons8.com/wired/64/meeting.png"  alt="meeting"/>
                <div class="card-body">
                  <h5 class="card-title">Step 3</h5>
                  <p class="card-text">Your request will be paired with a matching translator. The translator will accept your request.</p>
                  
                </div>
              </div>
            
        </div>
    </section>

    {{-- Feedback session --}}
    <section id="join-us" class="feedback">
        
        <div class="feedback-container">
                <h2 class="card-title">Join us to help others!</h2>
                <p class="card-text">Unlock the power of your language skills by becoming a member, you have the opportunity to make a positive impact on others while also finding joy and fulfillment. Embrace the chance to contribute your linguistic talents and be a part of something greater. Together, we can make a difference through the power of language.</p> 
        </div>
    </section>

    <section id="about-us" class="about-us">
        <div class="content_right">
            <h2>About us</h2>
            <p>Hello, we are Fanny & Tuyen, we love solving everyday challenges, making your life more convenient with less hassle. We are here to lend a helping hand. Let us be a part of making your life smoother and more enjoyable.</p>
            <h4>What does connect mean?</h4>
            <p>"Connect" is a platform that fosters connections between individuals who face language barriers and those who possess language skills and are eager to assist others. Our goal is to bridge the gap and facilitate meaningful interactions, enabling individuals to connect and communicate effectively. "Connect" serves as a catalyst for bringing people together, creating a supportive community where language skills become a powerful tool for making a positive impact and helping others.</p>
        </div>
        <div class="content_left">
            <img src="/img/teamimg.jpg">
        </div>
    </section>
    {{-- footer section  --}}

    <footer custom-navbar>
        <div class="block1">
            <div class="contact">
            <a href="#">About</a>
            <a href="#">Home</a>
            <a href="#how-it-works">Services</a>
            <a href="#join-us">Contact</a>
            </div>
            
            <div class="faq">
                <a href="#">For translators</a>
                <a href="#">For clients</a>
                <a href="#">FAQ</a>
            </div>
           
            <div>
            <input type="email" placeholder="Your Email">
            <a class="btn btn-primary signup-btn" href="http://www.final-project.test/register">Signup</a>
            </div>
        </div>
        <div class="copyright">
            &copy; 2023 The Chopsticks Duo. All rights reserved.
        </div>
        
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</x-layout>
