export default function Footer() {
  return (
    <div className="text-gray-500 bg-background-dark">
      <footer className="container text-sm font-semibold min-h-[15.3125rem]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 h-full flex flex-col md:flex-row items-start justify-between gap-4">
          <div className="flex gap-4">
            <img
              src="https://api-seapt-cdn-344342163.imgix.net/images/tr/tr-logo.png"
              alt="logo"
              className="w-10 h-10"
            />
            <div className="flex flex-col gap-2">
              <span>TR STATION은 최신 트렌드와</span>
              <span>고품질 제품을 제공합니다.</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white">이용약관</span>
            <span>개인정보처리방침</span>
            <span>사업자정보확인</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white">고객센터</span>
            <span>02-1234-5678</span>
            <span>월-금 09:00-18:00</span>
            <span>주말 및 공휴일 휴무</span>
          </div>
          <p className="text-sm py-4">
            © 2025 TR-STATION. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
