<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>My Baby Journal</title>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
  <!--Navbar-->
    <nav>
  <div class="container">
  <div class="row">
      <div class="nav-wrapper">
        <div class="col s12">
          <a class="brand-logo" href="#">My Baby Journal</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a ref="/profiles/1">Profiles</a>
            </li>
            <li>
              <a ref="/profiles/6">Albums</a>
            </li>
          </ul>
        </div>
          <ul class="side-nav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
      </div>
  </div>
  </div>
    </nav>
  <!-- Reactjs component start --->
  <div class="container">
    <div id="app" class="row"></div>
  </div>
  <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
  <script src="{{ asset('js/app.js') }}"></script>
  <script src="{{ asset('js/init.js') }}"></script>
</body>
</html>
