"use client";

import Image from "next/image";

export default function WhyDifferentSection() {
  return (
    <section className="why-different-section">
      <div className="why-different-inner">
        {/* 왼쪽 골드 카드 */}
        <div className="card-left">
          <div className="card-left-top">
            <h3>그 순간이 생명입니다</h3>
            <p>
              유튜브에서 설교를 들어보지만, 한두 편만으로는 이 교회가 나와 결이 같은 곳인지 알 수 없습니다. 결국 홈페이지에 들어옵니다. 그 순간이 생명입니다.
            </p>
          </div>
          <div className="card-left-image">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=500&fit=crop"
              alt="교회 홈페이지 미리보기"
              width={600}
              height={500}
              className="card-left-img"
            />
          </div>
        </div>

        {/* 오른쪽 영역 */}
        <div className="right-area">
          <div className="card-blue">
            <h3>트렌디한 원페이지 디자인</h3>
            <p>
              쇼츠와 릴스에 익숙한 시대, 스크롤 한 번에 &quot;이 교회에서 예배하고 싶다&quot;는 마음이 들도록 설계합니다.
            </p>
            <div className="card-blue-deco" aria-hidden>
              <div className="deco-circle" />
              <div className="deco-cross" />
              <div className="deco-arch" />
            </div>
          </div>

          <div className="card-white">
            <h3>합리적인 가격, 최상의 퀄리티</h3>
            <p>
              기존 300만 원 이상의 퀄리티를, 모든 교회가 감당할 수 있는 가격으로 드립니다. 교회의 첫인상이, 누군가의 첫 예배가 됩니다.
            </p>
            <div className="badge">
              <div className="badge-dot" />
              <span className="badge-text">
                교회 맞춤 홈페이지: <span>ANATA에서 시작하세요</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-different-section {
          background: #f3f3f3;
          padding: 40px 0;
        }

        .why-different-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 20px;
          min-height: 580px;
        }

        .card-left {
          background: #ffc444;
          border-radius: 15px;
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          position: relative;
        }

        .card-left-top {
          position: relative;
          z-index: 2;
        }

        .card-left-top h3 {
          font-size: clamp(20px, 1.4vw, 26px);
          font-weight: 800;
          color: #000000;
          line-height: 1.3;
          margin-bottom: 14px;
        }

        .card-left-top p {
          font-size: clamp(14px, 1vw, 18px);
          font-weight: 400;
          color: #000000;
          line-height: 1.6;
        }

        .card-left-image {
          position: relative;
          z-index: 2;
          margin-top: 30px;
          width: 90%;
          align-self: center;
        }

        .card-left-img {
          width: 100% !important;
          height: auto !important;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          object-fit: cover;
        }

        .right-area {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .card-blue {
          background: #3452ff;
          border-radius: 15px;
          padding: 36px;
          position: relative;
          overflow: hidden;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card-blue h3 {
          font-size: clamp(20px, 1.4vw, 26px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.3;
          margin-bottom: 14px;
        }

        .card-blue p {
          font-size: clamp(14px, 1vw, 18px);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.6;
          max-width: 55%;
        }

        .card-blue-deco {
          position: absolute;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: 8px;
          opacity: 0.3;
        }

        .deco-cross {
          width: 70px;
          height: 70px;
          position: relative;
        }

        .deco-cross::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 50px;
          background: #ffffff;
          border-radius: 3px;
        }

        .deco-cross::after {
          content: "";
          position: absolute;
          top: 38%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 32px;
          height: 6px;
          background: #ffffff;
          border-radius: 3px;
        }

        .deco-circle {
          width: 70px;
          height: 70px;
          border: 5px solid #ffffff;
          border-radius: 50%;
        }

        .deco-arch {
          width: 70px;
          height: 70px;
          border: 5px solid #ffffff;
          border-radius: 50% 50% 0 0;
          border-bottom: none;
        }

        .card-white {
          background: #ffffff;
          border-radius: 20px;
          padding: 36px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card-white h3 {
          font-size: clamp(20px, 1.4vw, 26px);
          font-weight: 800;
          color: #0a0000;
          line-height: 1.3;
          margin-bottom: 14px;
        }

        .card-white p {
          font-size: clamp(14px, 1vw, 18px);
          font-weight: 400;
          color: #0a0000;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #eff9f1;
          border-radius: 50px;
          padding: 10px 20px;
          width: fit-content;
        }

        .badge-dot {
          width: 10px;
          height: 10px;
          background: #368e58;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .badge-text {
          font-size: 14px;
          font-weight: 500;
          color: #0a0000;
        }

        .badge-text span {
          color: #368e58;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .why-different-inner {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .card-blue p {
            max-width: 60%;
          }

          .card-blue-deco {
            right: 3%;
            gap: 4px;
          }

          .deco-cross,
          .deco-circle,
          .deco-arch {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </section>
  );
}
