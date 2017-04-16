@extends('layouts.app')

@section('content')
<div class="container">
  <div class="row">
		<div class="col s8 offset-s2">
      <div class="container">
        <div class="z-depth-1 grey lighten-4 row">
          <form class="form-horizontal col s12" role="form" method="POST" action="{{ url('/login') }}">
            {{ csrf_field() }}

            <div class="input-field{{ $errors->has('email') ? ' has-error' : '' }}">
              <label for="email">E-Mail Address</label>
							<input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>
							@if ($errors->has('email'))
								<span class="help-block">
									<strong>{{ $errors->first('email') }}</strong>
								</span>
							@endif
            </div>

            <div class="input-field{{ $errors->has('password') ? ' has-error' : '' }}">
              <label for="password" class="col-md-4 control-label">Password</label>
							<input id="password" type="password" class="form-control" name="password" required>

							@if ($errors->has('password'))
								<span class="help-block">
									<strong>{{ $errors->first('password') }}</strong>
								</span>
							@endif
            </div>

            <div class="row">
							<a href="{{ url('/password/reset') }}"> Forgot Your Password? </a>
            </div>

            <div class="input-field">
								<input type="checkbox" name="remember" id="remember"> 
								<label for="remember">Remember Me </label>
            </div>

            <div class="input-field">
							<button type="submit" class="btn btn-primary">
								Login
							</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
