export default function Footer() {
  return (
    <div className="text-white bg-background-dark">
      <footer className="container text-sm font-semibold min-h-[20.3125rem]">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 h-full flex flex-col md:flex-row items-start justify-center">
          <div className="flex flex-1 gap-4">
            {/* <img src="" alt="" /> */}
            <div className="flex flex-col gap-2">
              <span>TR STATION은 최신 트렌드와</span>
              <span>고품질 제품을 제공합니다.</span>
            </div>
          </div>
          <p className="text-sm py-4">
            © 2025 TR-STATION. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
