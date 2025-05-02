@extends('layouts.app')

@section('content')
<div class="container d-flex justify-content-center align-items-center" style="min-height: 90vh;">
    <div class="col-md-6">
        <div class="card shadow-lg border-0 rounded-4">
            <div class="card-header text-center text-white rounded-top-4" style="background-color: rgb(126, 65, 223);">
                <h4 class="mb-0">{{ __('Login to Your Account') }}</h4>
            </div>

            <div class="card-body px-5 py-4">
                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <!-- Email -->
                    <div class="mb-3">
                        <label for="email" class="form-label">{{ __('Email Address') }}</label>
                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                               name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                        @error('email')
                            <div class="invalid-feedback d-block">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Password -->
                    <div class="mb-3">
                        <label for="password" class="form-label">{{ __('Password') }}</label>
                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                               name="password" required autocomplete="current-password">
                        @error('password')
                            <div class="invalid-feedback d-block">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Remember Me -->
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" name="remember" id="remember"
                               {{ old('remember') ? 'checked' : '' }}>
                        <label class="form-check-label" for="remember">{{ __('Remember Me') }}</label>
                    </div>

                    <!-- Buttons -->
                    <div class="d-grid gap-2 mb-3">
                        <button type="submit" class="btn text-white" style="background-color: rgb(126, 65, 223);">
                            {{ __('Login') }}
                        </button>
                    </div>

                    <!-- Links -->
                    <div class="text-center">
                        @if (Route::has('password.request'))
                            <a href="{{ route('password.request') }}" class="d-block mb-2">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        @endif
                        <a href="{{ route('register') }}" class="text-decoration-none fw-semibold" style="color: rgb(126, 65, 223);">
                            {{ __("Don't have an account? Register here") }}
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
