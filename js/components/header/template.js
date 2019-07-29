export function render() {
  return `  <header>
  <navigation>
    <a href="/" class="company-identifier">
      <svg width="19" height="24" viewBox="0 0 19 24" fill="none" alt="CoProcure logo" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.85564 23.4374L6.66197 22.0879C6.57322 22.0333 6.51916 21.9365 6.51916 21.8323V8.94281C6.51916 8.7834 6.60165 8.63535 6.7372 8.55147L14.6879 3.63145C14.9948 3.44152 15.3803 3.43172 15.6964 3.60582L18.2496 5.01166C18.3965 5.09258 18.4878 5.24704 18.4878 5.4148V15.0079C18.4878 15.1657 18.407 15.3124 18.2737 15.3968L11.7063 19.553C11.3999 19.7469 11 19.5268 11 19.1641V16.6453C11 16.4914 11.0769 16.3477 11.205 16.2623L15.1847 13.6097V7.5L9.77004 10.8502V22.9264C9.77004 23.3958 9.2554 23.6834 8.85564 23.4374Z" fill="#37A8EB"/>
        <path d="M0.211299 15.3972L4.32747 18.044C4.63374 18.2409 5.03659 18.021 5.03659 17.6569V14.8012C5.03659 14.6497 4.96205 14.5079 4.83728 14.4221L3.5 13.5017V7L8.5 4.00347L10.0308 4.45871C10.1564 4.49607 10.292 4.4781 10.4035 4.40932L12.7966 2.93375C13.1035 2.74447 13.0834 2.29169 12.7608 2.13041L8.99315 0.246573C8.68617 0.0930831 8.32192 0.107747 8.02827 0.285416L0.221974 5.00854C0.0841851 5.09191 0 5.24124 0 5.40228V15.0101C0 15.1667 0.0796046 15.3125 0.211299 15.3972Z" fill="#37A8EB"/>
      </svg>
      <span class="company-name">CoProcure</span>
    </a>

    <form class="search-container" style="display: none;">
      <input class="search-box" autocomplete="off" name="coprocure_query" placeholder="Keyword, supplier, lead agency...">
      <svg class="search-icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.053 11.8788C18.053 15.0669 15.4547 17.6607 12.238 17.6607C9.02125 17.6607 6.42301 15.0669 6.42301 11.8788C6.42301 8.6907 9.02125 6.09683 12.238 6.09683C15.4547 6.09683 18.053 8.6907 18.053 11.8788Z" stroke="#37A8EB" stroke-width="2.32599"></path>
        <path d="M16.3083 16.5088L23.8678 23.4537" stroke="#37A8EB" stroke-width="2.32599"></path>
      </svg>            
      <button class="search-now">Search</button>
    </form>

    <span class="links">
      <a href="/about.html">About</a>
      <a href="/add.html">For suppliers</a>
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