export function render() {
  return `
  <section class="contact-us blue-back">
    <div class="section-interior">
      <h3>Questions or suggestions?</h3>
      <p class="subtext--medium">We would love to hear from you. Send us a message and we will get back to you as soon as we can.</p>
      <form method="POST" action="https://5o1jg1o9n4.execute-api.us-west-2.amazonaws.com/staging/contact">
        <div class="fields row">
          <div class="submitter-info">
            <label>Name</label>
            <input name="fullname" type="text" />
            <label>Email</label>
            <input name="email" type="text" />
          </div>
          <div class="message-info">
            <label>Message</label>
            <textarea name="description"></textarea>
          </div>
        </div>
        <div class="">
          <button class="highlight">Submit</button>
        </div>
      </form>
    </div>
  </section>
  <footer>
  <div class="section-interior">
    <div class="tagline">
      <h2 class="some-big dark-emphasis">We're committed to making government more transparent, efficient, and inclusive</h2>
      <div class="social-links">
        <a href="https://medium.com/coprocure" target="_new">
          <img src="img/social/Medium.svg" alt="Medium logo" />
        </a>
        <a href="https://www.linkedin.com/company/coprocure/" target="_new">
          <img src="img/social/LinkedIN.svg" alt="LinkedIn logo" />
        </a>
        <a href="mailto:hello@coprocure.us" target="_new">
          <img src="img/social/Mail.svg" alt="Mail icon" />
        </a>
        <a href="https://twitter.com/coprocure" target="_new">
          <img src="img/social/Twitter.svg" alt="Twitter logo" />
        </a>
      </div>
    </div>
    <div class="us-links">
      <a href="#">About</a>
      <a href="https://medium.com/coprocure" target="_new">Blog</a>
      <a href="https://medium.com/coprocure/coprocure-is-hiring-a-backend-engineer-2e8780b30c55" target="_blank">Careers</a>
      <a href="#">For Suppliers</a>
    </div>
  </div>
  <div class="section-interior down-low">
    <span class="copyright">&#0169; 2019 by CoProcure. All rights reserved.</span>
    <div class="bottom-links">
      <a href="https://www.coprocure.us/add.html">Share Your Contracts</href>
      <a href="https://www.coprocure.us/files/CoProcure-privacy-policy.pdf" target="_new">Privacy Policy</a>
      <a href="https://www.coprocure.us/files/CoProcure-terms-of-use.pdf" target="_new">Terms of Use</a>
    </div>
  </div>
</footer>`;
}
