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
      <div className="flex flex-col justify-start items-center m-auto">
        <p className="w-full text-center m-4">【 新郎新婦紹介 】</p>
        <div className="m-4"></div>
        <div className="flex flex-row justify-end items-center">
          <img className="rounded-full w-32 h-32" src={toshiki1} />
          <div className="flex flex-col ml-8">
            <p className="text-sm">新郎：　永濱敏樹</p>
            <hr className="border-gray-600 mb-4 mr-4" />
            <p className="text-xs">
              1991年8月19日
              <br />
              京都府宇治市生まれ
            </p>
            <p className="text-xs mt-2">
              血液型：A型
              <br />
              趣味　：野球、3Dプリンタ
              <br />
              特技　：ぷよぷよ
            </p>
          </div>
        </div>
        <div className="m-8"></div>
        <div className="flex flex-row justify-start max-w-md items-center">
          <div className="flex flex-col mr-4">
            <p className="text-sm">新婦：　高橋里実</p>
            <hr className="border-gray-600 mb-4 mr-4" />
            <p className="text-xs">
              1993年11月25日
              <br />
              スウェーデン生まれ
            </p>
            <p className="text-xs mt-2">
              血液型：O型
              <br />
              趣味　：マンガ、ツーリング
              <br />
              特技　：3分以内に寝る
            </p>
          </div>
          <img className="rounded-full w-32 h-32" src={satomi1} />
        </div>
        <div className="m-8"></div>
      </div>

      <div className="flex flex-col justify-start items-center m-auto">
        <hr className="border-gray-600 w-9/12" />
        <div className="mb-4">
          <div className="mt-4"></div>
          <p className="text-center leading-8 text-sm mt-2 mb-4">
            【 ふたりの出会い 】
          </p>
          <table className="table-auto m-auto text-xs">
            <tbody>
              <tr>
                <td>2015年4月</td>
                <td>大阪大学田中研究室で知り合う</td>
              </tr>
              <tr>
                <td>2016年4月</td>
                <td>敏樹、就職で東京へ</td>
              </tr>
              <tr>
                <td></td>
                <td>里実、大学院で東京へ</td>
              </tr>
              <tr>
                <td>2016年8月</td>
                <td>お付き合い開始</td>
              </tr>
              <tr>
                <td>2020年7月</td>
                <td>4年の交際を経て結婚</td>
              </tr>
              <tr>
                <td>2021年10月</td>
                <td>今日に至る</td>
              </tr>
            </tbody>
          </table>
          <div className="m-8"></div>
        </div>
      </div>
    </div>
  );
}
