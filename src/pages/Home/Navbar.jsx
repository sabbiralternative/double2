import { useSelector } from "react-redux";
import { Settings } from "../../api";

const Navbar = () => {
  const { token, balance } = useSelector((state) => state.auth);

  const handleOpenLobby = () => {
    const url = `${Settings.lobby}/${token}`;
    window.location.href = url;
  };

  return (
    <div className="sc-dlWCHZ cMdiBI">
      <div
        className="sc-hHOBiw jrHnuU"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAZCAYAAAAbiz05AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP7SURBVHgB7ZpBVtswEEBHefR1SW5QsYUFuUHNsrCAnIBwAzhBzAkKJ2g4AWFRtrgnIGyAHeYEDUt4JepMPAZZuImsyCah/u/pKXbkGccaz4xGAaipqampqfGGgA+MOl89VQA7lqOjxubNBtS80ICPzHPj2Hao+PNsPfZ/4V08h1KqiZ3k1pwyPOZ+IIQYQlFdP1e7SkA4aYxQEIqt60OoySBwogLsL8CdmNsA2xlOYJQ3iA1iH9suJEbhqivCdoh6Yk12F7tQGyfx+/v0YHS+hr9v/DtzZTY2r1dYjsTuTvuuh3L28HwHP/+A2RhwO0aZA/0LlK9MneCIIWsWQh9hRWILIJn4C7y3U37IL/DxJbYuuBtGqqvDelq2FwnxjA87z+uIoXgcVZVn0P12sF3ive/DAlBGzkEJoPmWkWeS4A+J7dR2sPh2G6OLPHhzXo1C0b6NoXq67EnnmqWcc0fY+jCdJrzmCxKSt0LycUDhikIMhy2pXUculd6cqyI5BHsK8jzp6kOmOmyux5yip87X1hUkby06315j68Y1CSUZA8uxEpLn1IHEewAfywIyXIkAJudbE7jPMw5K/H5BQXCiziAJHSnbkNzcujF0z4y5NtA1qINi8U6ODjsePx3C56fx9Y2n0SwJaJFnNB6H9/4AWY+6DOUTu8xlirewwhMea6ck962cca46yNMMc3TYXd8eDIUYbeDqpP1O4WShWILykFAOZBxpOCsctyn/gIrh/GLbOH0Fc45v44jh1SicJ/Adsc2B+jjhtmP13Cyl51KzcaDFy/yiUDg6KdNzpCyMcdCEWZYJ8ia8CFVVY1tghHVLImwnH7t8Pr9cmLWgeaQKz1GF+/RCgdpDCNnkexKSe3qD05UW6SF371wJtYSevcsCYHxNbRxZTOOI/zEuclzuUzEw4EMylLKNoz9LKd53WJHa5xiqY1EMMNY+z30u5ts49B88NPoxHsrGMkfHgzHGJQkjzHvzbXSLtHLzZxy8maT/+Ih7cz2/De46AuNUxL0ZVwNwIzCOvZW3OQFtlSG7LPK27Ommi7wx6T6B+Vas0LY6e4o74/se63kAO5bhdf+maeqgD6jnDrJepc867sFOfgDZ0jyt9dOt/A5kS99Fn5GEt0XBl615Y5s9BreQ3KG/KXiSRfTGb6PyT6bwQsfKP98NHTvKL7ua7I7yy2+lLWWVH754lEV0fecc9Ea10YIzm1p8HII/jlDmgaGDPAWdi2E2yCPsU4UQyiHCtqH/WWleobAiIVlzF0XfBIshWd5NdOGsi3KOAOz+IqhDhhexnqspOgLWk4a8aaT1AGonZmkbZX6FJKQVZWi03GeE8mf9lxlxwBVeH7KIs7+RBVEVHgeBygAAAABJRU5ErkJggg=="
          alt="diver"
        />
        <div
          onClick={handleOpenLobby}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            padding: "3px 10px",
            fontSize: "12px",
            fontWeight: 600,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "gray",
            borderRadius: "9999px",
            cursor: "pointer",
            width: "fit-content",
            color: "white",
            marginLeft: "10px",
          }}
        >
          <svg
            style={{ width: "1rem", height: "1rem" }}
            width={25}
            height={24}
            viewBox="0 0 139 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C1.1002 79.6415 1.7002 77.1415 2.5002 74.6415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
              fill="#929292"
            />
            <path
              d="M25.4002 46.3414L20.7002 45.3414C25.5002 40.2414 31.0002 35.4414 37.2002 31.0414C37.7002 30.6414 38.3002 30.3414 38.8002 29.9414L39.2002 30.3414H39.1002C33.5002 35.3414 28.9002 40.7414 25.4002 46.3414Z"
              fill="#929292"
            />
            <path
              d="M74.1001 123.041C73.4001 123.241 72.7001 123.441 72.0001 123.541C61.7001 126.041 51.6001 126.941 42.4001 126.141L36.1001 112.241C36.8001 112.341 37.5001 112.441 38.3001 112.541C47.7001 113.541 58.1001 112.441 68.7001 109.241V108.941L74.1001 123.041Z"
              fill="#929292"
            />
            <path
              d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415L67.9002 106.241L68.8002 108.641V109.141Z"
              fill="#929292"
            />
            <path
              d="M64.9999 18.0415L64.8999 16.4415C67.8999 15.2415 70.9999 14.3415 73.9999 13.4415C79.1999 11.9415 84.3999 10.8415 89.3999 10.2415L86.5999 15.3415C79.8999 14.7415 72.4999 15.6415 64.9999 18.0415Z"
              fill="#929292"
            />
            <path
              d="M87.4001 77.7414C86.1001 78.6414 84.8001 79.5414 83.5001 80.4414C77.7001 84.1414 71.6001 86.7414 65.6001 88.2414C57.5001 90.3414 49.7001 90.5414 43.1001 88.7414C40.0001 87.9414 37.2001 86.6414 34.7001 85.0414C32.1001 83.3414 30.0001 81.1414 28.3001 78.5414C26.7001 76.0414 25.7001 73.2414 25.3001 70.2414C24.5001 65.0414 25.4001 59.3414 27.7001 53.7414C31.0001 45.8414 37.2001 37.8414 45.7001 31.4414C47.3001 30.2414 48.9001 29.1414 50.6001 28.0414C55.7001 24.8414 61.0001 22.4414 66.2001 20.8414C71.4001 19.2414 76.5001 18.4414 81.3001 18.4414C85.1001 18.4414 88.7001 18.9414 92.0001 19.9414C93.6001 20.4414 95.2001 21.0414 96.6001 21.7414C100.4 23.6414 103.6 26.3414 105.8 29.9414C108 33.3414 109 37.3414 109.1 41.4414C109.2 46.1414 108 51.2414 105.7 56.2414C102.2 63.9414 95.9001 71.6414 87.4001 77.7414Z"
              fill="black"
            />
            <path
              d="M129.2 81.8414C123.9 93.0414 117.2 99.8414 110.9 104.041C110.7 104.241 110.4 104.341 110.2 104.541L106.3 88.9414L105.1 84.3414L96.7998 77.2414C101.7 72.9414 105.8 68.2414 109 63.3414L126.2 66.3414V66.4414C127.2 71.5414 128.2 76.7414 129.2 81.8414Z"
              fill="#929292"
            />
            <path
              d="M138.5 42.9414L134 34.3414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C136 24.2414 138.5 42.9414 138.5 42.9414Z"
              fill="#929292"
            />
            <path
              d="M133.9 34.4414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C126.8 15.2414 127.7 16.4414 128.5 17.7414C131.8 22.6414 133.5 28.3414 133.9 34.4414Z"
              fill="currentColor"
            />
            <path
              d="M39.3 30.4414C33.5 35.3414 28.9002 40.7414 25.4002 46.3414L20.7002 45.3414L10 43.0414C14.9 35.3414 21.5 27.9414 29.4 21.3414L38.8 30.0414L39.3 30.4414Z"
              fill="currentColor"
            />
            <path
              d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415C67.5002 93.1415 67.7002 93.1414 67.9002 93.0414L68.7002 108.641L68.8002 109.141Z"
              fill="currentColor"
            />
            <path
              d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C0.300195 79.9415 0.1 77.7415 0 75.5415L2.5 74.7415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
              fill="url(#paint0_linear_693_22)"
            />
            <path
              d="M95.1001 0.141422L89.5001 10.2414L86.7001 15.3414C80.0001 14.8414 72.6001 15.7414 65.1001 18.1414L65.0001 16.5414L64.6001 4.14142C73.3001 1.44142 81.8001 0.0414213 89.8001 0.0414213C91.5001 -0.0585787 93.3001 0.0414217 95.1001 0.141422Z"
              fill="currentColor"
            />
            <path
              d="M126.2 66.3414C126.2 66.4414 126.2 66.4414 126.2 66.3414C121.2 74.4414 114.5 82.1414 106.2 88.9414C106.2 88.9414 106.1 88.9414 106.1 89.0414L94.6001 79.1414C95.3001 78.5414 96.1001 77.9414 96.8001 77.3414C101.7 73.0414 105.8 68.3414 109 63.4414L126.2 66.3414Z"
              fill="currentColor"
            />
            <defs>
              <linearGradient
                id="paint0_linear_693_22"
                x1="-373.769"
                y1="63.3372"
                x2="314.773"
                y2="63.3372"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="0.5594" stopColor="currentColor" />
                <stop offset={1} stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          <span>Lobby</span>
        </div>
      </div>
      <div className="sc-kWtpeL eNDhiP">
        <div className="sc-ecPEgm iDMUzN">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="iconDiver pointer strokeHover"
          >
            <path
              d="M7.96834 1.3335C4.30967 1.3335 1.33301 4.32416 1.33301 8.00016C1.33301 11.6762 4.32367 14.6668 7.99967 14.6668C11.6757 14.6668 14.6663 11.6762 14.6663 8.00016C14.6663 4.32416 11.6617 1.3335 7.96834 1.3335ZM7.99967 13.3335C5.05901 13.3335 2.66634 10.9408 2.66634 8.00016C2.66634 5.0595 5.04434 2.66683 7.96834 2.66683C10.927 2.66683 13.333 5.0595 13.333 8.00016C13.333 10.9408 10.9403 13.3335 7.99967 13.3335Z"
              fill="white"
            />
            <path
              d="M7.33301 4.6665H8.66634V9.33317H7.33301V4.6665ZM7.33301 9.99984H8.66634V11.3332H7.33301V9.99984Z"
              fill="white"
            />
          </svg>
          <span>How to play?</span>
        </div>
        <div className="sc-gdyeKB eMJSVP">Balance: {balance}</div>
        <div className="sc-bVHCgj ewtFe">
          <div className="sc-dSIIpw cCHOsr">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="iconDiver pointer strokeHover"
            >
              <path
                d="M2.75 12.25H13.25M2.75 8.25H13.25M2.75 4.25H13.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
