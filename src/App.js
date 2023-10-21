import './App.css';

function App() {
  return (
  <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    
    <a class="navbar-brand" href="/">Pranchal Shah</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/">Resume</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/">Projects</a>
        </li>

          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Links
              </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/">Github</a></li>
              <li><a class="dropdown-item" href="/">LinkedIn</a></li>
              <li><a class="dropdown-item" href="/">Email</a></li>
            </ul>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  </>
  );
}

export default App;
