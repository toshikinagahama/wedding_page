import wedding_contract from "../assets/wedding_contract.jpg";
import satomi1 from "../assets/satomi1.jpg";
import toshiki1 from "../assets/toshiki1.jpg";
export default function Page_FromUs() {
  return (
    <div className="w-full">
      <div className="flex flex-col max-w-md items-center m-auto">
        <p className="w-full text-center m-4">【 ご挨拶 】</p>
        <img
          src={wedding_contract}
          style={{
            "-webkit-filter": "grayscale(100%)",
            "-moz-filter": "grayscale(100%)",
            "-ms-filter": "grayscale(100%)",
            "-o-filter": "grayscale(100%)",
            filter: "grayscale(100%)",
          }}
        />
      </div>
      <div className="flex flex-col justify-start max-w-md items-center m-auto">
        <div className="mb-4">
          <div className="mt-4"></div>

          <p className="w-full text-center leading-8 text-sm mt-2">
            このたび私たちは
            <br />
            結婚式を挙げることとなりました
            <br />
            日頃お世話になっております皆様に
            <br />
            感謝の気持ちを込めて
            <br />
            ささやかですが小宴を設けましたので
            <br />
            短い時間ではございますが
            <br />
            どうぞお楽しみいただけましたら幸いでございます
          </p>
        </div>
        <hr className="border-gray-600 w-9/12" />
      </div>
      <div className="flex flex-col justify-start max-w-md items-center m-auto">
        <p className="w-full text-center m-4">【 新郎新婦紹介 】</p>
        <img className="rounded-full w-32 h-32" src={toshiki1} />
        <div className="m-8"></div>
        <img className="rounded-full w-32 h-32" src={satomi1} />
      </div>
    </div>
  );
}
