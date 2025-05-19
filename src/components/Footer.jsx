const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo.png" alt="CineFlare Logo" className="footer-logo" />
            <p>Your ultimate destination for discovering great movies.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#movies">Movies</a>
                </li>
                <li>
                  <a href="#trending">Trending</a>
                </li>
                <li>
                  <a href="#search">Search</a>
                </li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Connect</h3>
              <ul>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@cineflare.com">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} CineFlare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
