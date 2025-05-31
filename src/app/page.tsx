import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            푸드몰만을 위한<br />
            마케팅회사
          </h1>
          <p className="text-2xl md:text-3xl mb-8">
            푸드몰 마케팅 협업 500번 +<br />
            매분기, 최신 성공사례로 증명합니다.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors">
            문의하기
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            오직 푸드몰을 위한<br />
            5가지 서비스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">01</div>
              <h3 className="text-2xl font-bold mb-4">이미지 콘텐츠</h3>
              <p className="text-gray-600">
                전문적인 푸드 스튜디오에서<br />
                제품의 매력을 살리는<br />
                고품질 이미지 제작
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">02</div>
              <h3 className="text-2xl font-bold mb-4">쇼츠 컨텐츠</h3>
              <p className="text-gray-600">
                트렌디한 쇼츠 영상으로<br />
                제품의 스토리를 전달하는<br />
                영상 제작
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">03</div>
              <h3 className="text-2xl font-bold mb-4">푸드 촬영</h3>
              <p className="text-gray-600">
                전문 푸드 스타일리스트와<br />
                함께하는 제품 촬영
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">04</div>
              <h3 className="text-2xl font-bold mb-4">광고 운영</h3>
              <p className="text-gray-600">
                데이터 기반의<br />
                효율적인 광고 전략 수립 및 운영
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">05</div>
              <h3 className="text-2xl font-bold mb-4">상세페이지 제작</h3>
              <p className="text-gray-600">
                전환율을 높이는<br />
                최적화된 상세페이지 제작
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            공존마케팅 협업사
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Success story cards */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">브랜드명</h3>
                <p className="text-gray-600">매출 200% 증가 달성</p>
              </div>
            </div>
            {/* Add more success stories */}
          </div>
        </div>
      </section>

      {/* Column Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            푸드마케팅 칼럼
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">
                  3년 미만 신생식품몰, 불티나게 팔고있는 2가지 전략
                </h3>
                <p className="text-gray-600 mb-4">
                  2024~2025년 식품마케팅 트렌드
                </p>
                <a href="#" className="text-blue-600 font-bold">
                  보러가기 →
                </a>
              </div>
            </div>
            {/* Add more columns */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            단 1가지라도 자신있는<br />
            푸드몰을 기다립니다.
          </h2>
          <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors">
            문의하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">공존마케팅</h3>
              <p className="text-gray-400">
                상호명: 공존마케팅 | 대표자: 김영주<br />
                메일: gongzonemkt@gmail.com<br />
                주소: 서울특별시 마포구 양화로 81, 패스트파이브 5층<br />
                사업자등록번호: 433-42-00758
              </p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex gap-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  서비스
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  칼럼
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Q&A
                </a>
              </div>
              <p className="text-gray-400">
                Copyright ⓒ 2025 푸드전문 온라인 마케팅회사ㅣ공존마케팅<br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}