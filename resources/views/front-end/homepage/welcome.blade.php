<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Landing page</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    <style>
        .navbar-landingpage {
            display: flex;
            justify-content: space-between;
        }
        a {
            text-decoration: none;
            color: black;
        }
        .navbar a:hover {
            color: rgb(146, 133, 133);
        }

    </style>
        
    </head>
    <body class="antialiased">
        <header>
            <img src="" alt="">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <a href="#login" class="login-button">Login</a>
            <a href="#signup" class="signup-button">Sign Up</a>
        </header>
       
    </body>
</html>
