<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>My Baby Journal</title>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
</head>

<body>
  <!--Navbar-->
  <nav class="navbar navbar-toggleable-md navbar-dark unique-color">
    <div class="container">
      <a class="navbar-brand" href="#">
        <strong>My Baby Journal</strong>
      </a>
      <div class="collapse navbar-collapse" id="navbarNav1">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" ref="/profiles/1">Profiles <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" ref="/profiles/6">Albums <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div id="app" class="row"></div>
  </div>
  <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
  <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
