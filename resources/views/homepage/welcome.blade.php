<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    @vite('resources/css/welcome.scss')

    <title>Landing page</title>
</head>
<body>

    {{-- Header session: Logo, Navigation bar, Login & Sign up buttons --}}

    <header>
        
        <div class="navbar">
            <img class="logo" src="https://img.icons8.com/dusk/64/rice-bowl.png" alt="rice-bowl"/>
            
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li> 
            </ul>
            
            <a href="/dashboard/login">Login</a>
            
            {{-- <button class="btn signup-btn">Signup</button> --}}
            <a href="http://www.final-project.test/register">Signup</a>
          </div>
    </header>

    {{-- Hero session: Headline, background img, short text, Sign up button --}}

    <section class="banner">
        <h1>Call for action text headline</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ex optio? Odio aliquam, iste saepe mollitia architecto eveniet ipsa. Placeat.</p>
        <a href="#signup" class="btn signup-btn">Sign Up</a>
    </section>

    {{-- Description session: headline, short text, 3 sub items (flexbox: each sub item includes 1 img, 1 bold text, 1 short text) --}}

    <section class="description">
        <h2>How it works?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, excepturi nulla omnis ipsa cumque obcaecati!Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, excepturi nulla omnis ipsa cumque obcaecatiLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, excepturi nulla omnis ipsa cumque obcaecati</p>
        <div class="description-boxes">
            <div class="boxes box1">
                <img src="" alt="">
                <h3>Step 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div class="boxes box2">
                <img src="" alt="">
                <h3>Step 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div class="boxes box3">
                <img src="" alt="">
                <h3>Step 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
    </section>

     {{-- Review session --}}

    <section class="reviews">
        <p>REVIEW SECTION IS HERE</p>
    </section>

    {{-- Feedback session --}}

    <section class="joinus">
        <div class="testimonials">
            <img class="card-img" src="" alt="">
            <div class="card">
                <header class="card-header"> 
                    <div>
                        <h3>Check out what others have said about us and join us to help others</h3>
                    </div>
                </header>
                <p class="card-lead">John Doe</p>
                <p class="card-quote">"I am very happy: I need a translator to help with the cardiovascular checkup. The application is very user-friendly. The translator is also very helpful and friendly...."</p>
                <button><a href="#">Learn more</a></button>
            </div>
           
        </div>
       
        
    </section>

    {{-- footer section  --}}

    <footer>
        <div class="contact">
          <a href="#">About</a>
          <a href="#">Home</a>
          <a href="#">Contact</a>
        </div>
        <div class="faq">
            <a href="#">For translators</a>
            <a href="#">For clients</a>
            <a href="#">FAQ</a>
        </div>
        <div class="copyright">
            &copy; 2023 The Chopsticks Duo. All rights reserved.
          </div>
        <div>
          <input type="email" placeholder="Your Email">
          <button class="btn">Register</button>
        </div>
        
      </footer>
</body>
</html>