import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-8 text-white">
      <div className="container mx-auto text-center">
        <p className="text-lg md:text-xl font-semibold">
         Kipkunur Football Club <br/> &copy; {new Date().getFullYear()}
        </p>
        <p className="mt-2 text-sm">
          Contact us at: <a href="mailto:contact@kipkunurfc.com" className="underline">contact@kipkunurfc.com</a>
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=100094085814545"
            className="text-white hover:text-secondary transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094085814545"
            className="text-white hover:text-secondary transition duration-300"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094085814545"
            className="text-white hover:text-secondary transition duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
