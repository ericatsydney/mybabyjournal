<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Laravel + React example app</title>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVY
</head>

<body>
  <div class="container">
    <div id="app" class="row"></div>
  </div>
  <script src="{{ asset('js/bundle.js') }}"></script>
</body>
</html>
