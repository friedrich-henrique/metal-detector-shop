import Image from 'next/image';

const ApplicationLogo = () => (
  <>
    <a href="/">
      <Image
        src="/logo-savel.png" // Route of the image file
        height={20} // Desired size with correct aspect ratio
        width={120} // Desired size with correct aspect ratio
        alt="Savel logo"
      />
    </a>
  </>

);

export default ApplicationLogo
