<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    @vite('resources/css/welcome.scss');

    <title>Landing page</title>
</head>
<body>

    {{-- Header session: Logo, Navigation bar, Login & Sign up buttons --}}

    <header>
        <img class="logo" alt="">
        <nav>
            <ul class="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <a href="#login" class="btn login-button">Login</a>
        <a href="#signup" class="btn signup-button">Sign Up</a>
    </header>

    {{-- Hero session: Headline, background img, short text, Sign up button --}}

    <section class="banner">
        <h1>Call for action text headline</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ex optio? Odio aliquam, iste saepe mollitia architecto eveniet ipsa. Placeat.</p>
        <a href="#signup" class="btn signup-button">Sign Up</a>
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

    </section>

    {{-- Feedback session --}}

    <section class="joinus">
        
    </section>

    {{-- footer section  --}}

    <footer>
        <div class="footer">
            <ul class="footer-items">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
               
            <p>&copy; 2023 The Chopsticks Duo. All rights reserved.</p>
        </div>
        
    </footer>
</body>
</html>