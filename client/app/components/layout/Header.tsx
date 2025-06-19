export default function Header() {
  return (
    <header className="text-lg lg:text-2xl font-semibold min-h-[5rem] bg-background-primary flex items-center">
      <div className="container h-full flex items-center gap-2">
        <img
          src="https://api-seapt-cdn-344342163.imgix.net/images/tr/tr-logo.png"
          alt="logo"
          className="w-14 h-14 lg:w-20 lg:h-20"
        />
        <div className="py-2">
          <h1 className="text-white">TR</h1>
          <span className="text-sub-1">TRANSFER STATION</span>
        </div>
      </div>
    </header>
  );
}
