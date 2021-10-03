import yoshida_jinja_mono from "../assets/yoshida_jinja_mono.jpg";
import tokanso_mono from "../assets/tokanso_mono.jpg";
export default function Page_WeddingInfomation() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-start max-w-md items-center m-auto">
        <div className="mb-4 w-9/12">
          <p className="w-full text-center mb-16 mt-8">結婚式のご案内</p>
          <div className="flex flex-col justify-center w-full items-center border rounded-lg p-4 border-primary">
            <p className="flex-grow text-center -mt-8 bg-primary text-white rounded-md px-8 py-1">
              日時
            </p>
            <table className="table-auto m-auto">
              <tbody>
                <tr>
                  <td className="text-lg text-center py-4 px-2">2021年</td>
                  <td className="text-lg text-center py-4 px-2">10月</td>
                  <td className="text-lg text-center py-4 px-2">17日</td>
                  <td className="text-lg text-center py-4 px-2">(日)</td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    挙式
                  </td>
                  <td>11:00</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    |
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    受付
                  </td>
                  <td>12:30</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    |
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    披露宴
                  </td>
                  <td>13:00</td>
                  <td></td>
                </tr>
                {/* <tr>
                <td colspan="4" className="text-center pt-8">
                  場所
                </td>
              </tr>
              <tr>
                <td colspan="4">挙式/吉田神社</td>
              </tr>
              <tr>
                <td colspan="4">京都府京都市左京区吉田神楽岡町30</td>
              </tr>
              <tr>
                <td colspan="4">075-771-3788</td>
              </tr>
              <tr>
                <td colspan="4">披露宴/東観荘</td>
              </tr>
              <tr>
                <td colspan="4">京都府京都市左京区吉田神楽岡町30</td>
              </tr>
              <tr>
                <td colspan="4">075-771-3788</td>
              </tr> */}
              </tbody>
            </table>
          </div>
          <div className="m-16"></div>
          <div className="flex flex-col justify-center w-full items-center border rounded-lg p-4 border-primary">
            <p className="flex-grow text-center -mt-8 bg-primary text-white rounded-md px-8 py-1">
              場所
            </p>
            <div className="m-4 "></div>
            <div
              className="w-full"
              style={{
                backgroundImage: `url(${yoshida_jinja_mono})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                minHeight: "200px",
              }}
            >
              <div className="flex flex-col items-start">
                <p className="-ml-2 -mt-2 pl-4 pr-8 py-1 text-white bg-gray-800 bg-opacity-90">
                  挙式/吉田神社
                </p>
                <div className="flex flex-row justify-end w-full mt-4">
                  <a
                    href="https://goo.gl/maps/o4MU9PZegdzhS9bn8"
                    className="ml-2 mt-2 px-2 text-white bg-gray-800 bg-opacity-50"
                  >
                    <u>京都市左京区吉田神楽岡町30</u>
                  </a>
                </div>
                <div className="flex flex-row justify-end w-full">
                  <p className="ml-2 mt-2 px-2 text-white bg-gray-800 bg-opacity-50">
                    075-771-3788
                  </p>
                </div>
                <div className="flex flex-row justify-end w-full ">
                  <a
                    href="http://www.yoshidajinja.com/index.html"
                    className="ml-2 mt-2 px-2 text-white bg-gray-800 bg-opacity-50"
                  >
                    <u>神社HP</u>
                  </a>
                </div>
              </div>
            </div>
            <div className="m-8"></div>
            <div
              className="w-full"
              style={{
                backgroundImage: `url(${tokanso_mono})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                minHeight: "200px",
              }}
            >
              <div className="flex flex-col items-end">
                <p className="-ml-2 -mt-2 pl-4 pr-8 py-1 text-white bg-gray-800 bg-opacity-90">
                  披露宴/東観荘
                </p>
                <div className="flex flex-row justify-start w-full mt-4">
                  <a
                    href="https://goo.gl/maps/XUSKQ1EiiWMVXQjK7"
                    className="ml-2 mt-2 px-2 text-white bg-gray-800 bg-opacity-50"
                  >
                    <u>京都市東山区八坂鳥居前東入円山町614</u>
                  </a>
                </div>
                <div className="flex flex-row justify-start w-full">
                  <p className="ml-2 mt-2 px-2 text-white bg-gray-800 bg-opacity-50">
                    075-561-0581
                  </p>
                </div>
                <div className="flex flex-row justify-start w-full ">
                  <a
                    href="http://kekkonbiyori.jp/ryoutei/ha_toukansou.php"
                    className="ml-2 mt-2 px-2 text-white bg-gray-800 bg-opacity-50"
                  >
                    <u>会場HP</u>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 text-sm">
              <p>
                ※吉田神社から東観荘への移動は
                <br />
                　タクシーをご用意しております
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
