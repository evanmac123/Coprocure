export function render() {
  return `  <header>
  <navigation>
      <a href="/" class="company-identifier">
        <img src="/img/logo-svg.svg">
      </a>

      <form class="search-container">
        <input class="search-box" autocomplete="off" name="coprocure_query" placeholder="Keyword, supplier, lead agency...">
        <svg class="search-icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.053 11.8788C18.053 15.0669 15.4547 17.6607 12.238 17.6607C9.02125 17.6607 6.42301 15.0669 6.42301 11.8788C6.42301 8.6907 9.02125 6.09683 12.238 6.09683C15.4547 6.09683 18.053 8.6907 18.053 11.8788Z" stroke="#37A8EB" stroke-width="2.32599"></path>
          <path d="M16.3083 16.5088L23.8678 23.4537" stroke="#37A8EB" stroke-width="2.32599"></path>
        </svg>
        <button class="search-now">Search</button>
      </form>
      <span class="links">
        <a href="/about.html">About</a>
         <!--  <a href="/add.html">For suppliers</a> -->
      </span>

      <svg class="big-search-icon" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13.75" cy="13.75" r="6.5431" stroke="#37A8EB" stroke-width="3.41379"/>
        <path d="M18.5625 19.25L27.5 27.5" stroke="#37A8EB" stroke-width="3.41379"/>
      </svg>

      <div class="burger-menu hamburger hamburger--squeeze">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
  </navigation>
</header>
`;
}
