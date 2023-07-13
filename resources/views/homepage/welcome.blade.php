
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

    {{-- Review session --}}
        
        {{-- <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                {{-- <img src="/img/meeting.jpg" class="d-block w-100" /> --}}
                {{-- <div class="carousel-caption  d-md-block carousel-meeting">
                <h5>JOHN DOE</h5>
                <p>Title: some rating here!</p>

                <p> Rating: ⭐⭐⭐⭐⭐ </p>
                <p>"I need a translator to help me with an cardiovascular checkup. It went well, the translator was helpful and friendly. I was very happy with the app, highly recommend....".</p>
                <p class="animated bounceInright" style="animation-delay: 3s"><a href="#">Learn more</a></p>
                </div>
            </div> --}}
            {{-- <div class="carousel-item">
                <img src="/img/horgward.jpg" class="d-block w-100">
                <div class="carousel-caption  d-md-block">
                <h5>HARRY POTTER</h5>
                <p>Title: [APP NAME] - AN UNKNOWN GEM TO HOGWART !</p>

                <p> Rating: ⭐⭐⭐⭐⭐ </p>
                <p>"I use the app for my trip to Prague as I need to attend an important meeting in Prague - The Prague Supreme Magic Council. I would not know what to do without a translator. This app works just like Amortentia a powerful love enchantment. Not actually creating love but falling into that connection. Both muggles and wizards can fall under the spell of AMORTENTIA as well as this app!".</p>
                <p class="animated bounceInright" style="animation-delay: 3s"><a href="#">Learn more</a></p>
                </div>
            </div> --}}
            {{-- <div class="carousel-item">
                <img src="/img/welikeyoutoo.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption  d-md-block">
                <h5>FRODO</h5>
                <p>Title: A Journey through Middle-earth TO PRAGUE - An App for True Adventurers!</p>

                <p> Rating: ⭐⭐⭐⭐⭐ </p> --}}
                    
                {{-- <p> Review:
                    Oh, my dear fellow travelers! If you seek a delightful and enchanting experience akin to the epic quest of the One Ring, look no further than this remarkable app! As Frodo Baggins, a hobbit who has traversed Middle-earth and borne the weight of the world, I wholeheartedly bestow upon this application the highest honor of five shimmering stars!Furthermore, the app's user interface is intuitive and user-friendly, allowing even the humblest of hobbits to navigate with ease. The app's developers have clearly poured their hearts into creating an experience that caters to both seasoned travelers and those venturing into Middle-earth for the first time.ESPECIALLY USEFUL IN CZECH IF YOU DONT SPEAK CZECH!!!</p>
                    <p class="animated bounceInright" style="animation-delay: 3s"><a href="#">Learn more</a></p>
                </div>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div> --}}

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
