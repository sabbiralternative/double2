import { useSelector } from "react-redux";
import { useAuth } from "../../../../../double_wheel/double_wheel/src/hooks/auth";
import { useEffect } from "react";

const Navbar = () => {
  const { token, balance } = useSelector((state) => state.auth);
  const { mutate: handleAuth } = useAuth();

  useEffect(() => {
    if (token) {
      handleAuth();
    }
  }, [token, handleAuth]);
  return (
    <div className="sc-dlWCHZ cMdiBI">
      <div className="sc-hHOBiw jrHnuU">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAZCAYAAAAbiz05AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP7SURBVHgB7ZpBVtswEEBHefR1SW5QsYUFuUHNsrCAnIBwAzhBzAkKJ2g4AWFRtrgnIGyAHeYEDUt4JepMPAZZuImsyCah/u/pKXbkGccaz4xGAaipqampqfGGgA+MOl89VQA7lqOjxubNBtS80ICPzHPj2Hao+PNsPfZ/4V08h1KqiZ3k1pwyPOZ+IIQYQlFdP1e7SkA4aYxQEIqt60OoySBwogLsL8CdmNsA2xlOYJQ3iA1iH9suJEbhqivCdoh6Yk12F7tQGyfx+/v0YHS+hr9v/DtzZTY2r1dYjsTuTvuuh3L28HwHP/+A2RhwO0aZA/0LlK9MneCIIWsWQh9hRWILIJn4C7y3U37IL/DxJbYuuBtGqqvDelq2FwnxjA87z+uIoXgcVZVn0P12sF3ive/DAlBGzkEJoPmWkWeS4A+J7dR2sPh2G6OLPHhzXo1C0b6NoXq67EnnmqWcc0fY+jCdJrzmCxKSt0LycUDhikIMhy2pXUculd6cqyI5BHsK8jzp6kOmOmyux5yip87X1hUkby06315j68Y1CSUZA8uxEpLn1IHEewAfywIyXIkAJudbE7jPMw5K/H5BQXCiziAJHSnbkNzcujF0z4y5NtA1qINi8U6ODjsePx3C56fx9Y2n0SwJaJFnNB6H9/4AWY+6DOUTu8xlirewwhMea6ck962cca46yNMMc3TYXd8eDIUYbeDqpP1O4WShWILykFAOZBxpOCsctyn/gIrh/GLbOH0Fc45v44jh1SicJ/Adsc2B+jjhtmP13Cyl51KzcaDFy/yiUDg6KdNzpCyMcdCEWZYJ8ia8CFVVY1tghHVLImwnH7t8Pr9cmLWgeaQKz1GF+/RCgdpDCNnkexKSe3qD05UW6SF371wJtYSevcsCYHxNbRxZTOOI/zEuclzuUzEw4EMylLKNoz9LKd53WJHa5xiqY1EMMNY+z30u5ts49B88NPoxHsrGMkfHgzHGJQkjzHvzbXSLtHLzZxy8maT/+Ih7cz2/De46AuNUxL0ZVwNwIzCOvZW3OQFtlSG7LPK27Ommi7wx6T6B+Vas0LY6e4o74/se63kAO5bhdf+maeqgD6jnDrJepc867sFOfgDZ0jyt9dOt/A5kS99Fn5GEt0XBl615Y5s9BreQ3KG/KXiSRfTGb6PyT6bwQsfKP98NHTvKL7ua7I7yy2+lLWWVH754lEV0fecc9Ea10YIzm1p8HII/jlDmgaGDPAWdi2E2yCPsU4UQyiHCtqH/WWleobAiIVlzF0XfBIshWd5NdOGsi3KOAOz+IqhDhhexnqspOgLWk4a8aaT1AGonZmkbZX6FJKQVZWi03GeE8mf9lxlxwBVeH7KIs7+RBVEVHgeBygAAAABJRU5ErkJggg=="
          alt="diver"
        />
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
