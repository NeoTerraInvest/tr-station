export default function Header() {
  return (
    <header className="text-2xl font-semibold min-h-[5rem] bg-background-primary">
      <div className="container h-full flex items-center">
        <img
          src="https://api-seapt-cdn-344342163.imgix.net/images/tr/tr-logo.png"
          alt="logo"
          className="w-20 h-20"
        />
        <div className="py-2">
          <h1 className="text-2xl font-bold text-white">TR</h1>
          <span className="text-sub-1">TRANSFER STATION</span>
        </div>
      </div>
    </header>
  );
}
