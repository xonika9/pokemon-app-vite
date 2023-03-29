import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t p-4">
      <div className="flex justify-between">
        <p>&copy; {year}</p>
        <p>Pokemon by x9</p>
        <a
          href="https://github.com/xonika9/pokemon-app"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
