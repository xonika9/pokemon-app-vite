import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t p-4">
      <div className="flex justify-between">
        <p>&copy; {year}</p>
        <p className="font-semibold">Pokemon by x9</p>
        <a
          href="https://github.com/xonika9/pokemon-app-vite"
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
