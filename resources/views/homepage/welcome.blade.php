
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
                <a class="nav-link" href="/login">Login</a>
                <a class="btn btn-primary signup-btn" href="/register">Sign up</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    </header>

    <!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">CONNECT APP</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h4>Team</h4>
        <h4>Workflow</h4>
        <p>Helpful tools: 
            <li>Organization - monday.com </li>
            <li>Data Modelling - dbdiagram.io </li>
            <li>Wireframe - invisionapp.com</li>
            <li>User Flow - BPMN Editor</li>
        </p>
        <h4>Tech Stack</h4>

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
        <p class="description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, excepturi nulla omnis ipsa cumque obcaecati!Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, excepturi nulla omnis ipsa cumque obcaecatiLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, excepturi nulla omnis ipsa cumque obcaecati</p>
        <div class="description-boxes">
            
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://img.icons8.com/wired/64/news.png" alt="news"/>
                <div class="card-body">
                  <h5 class="card-title">Step 1</h5>
                  <p class="card-text">Login or sign up to create a request. Select date, time, languages and category. Click send!</p>
                 
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://img.icons8.com/wired/64/checked-2.png" alt="checked-2" />
                <div class="card-body">
                  <h5 class="card-title">Step 2</h5>
                  <p class="card-text">Get matched with the available translators</p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://img.icons8.com/wired/64/meeting.png"  alt="meeting"/>
                <div class="card-body">
                  <h5 class="card-title">Step 3</h5>
                  <p class="card-text">Aha, you got a list of matched translators, let's confirm and meet up</p>
                  
                </div>
              </div>
            
        </div>
    </section>

    {{-- Feedback session --}}
    <section id="join-us" class="feedback">
        
        <div class="feedback-container">
                <h2 class="card-title">Join us to help others!</h2>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit</p> 
        </div>
    </section>

    <section id="about-us" class="about-us">
        <div class="content_left">
            <img src="/img/teamimg.jpg">
        </div>
        <div class="content_right">
            <h2>About us</h2>
            <p>Hi, this is Fanny & Tuyen, we love solving small problems and help making your life a bit easier with less hassle.</p>
            <p>What does connect mean?</p>
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
