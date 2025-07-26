import { useEffect, useState } from "react";

const RollingContainer = () => {
  const [stake, setStake] = useState(10);
  const [counter, setCounter] = useState(15);
  const [rangeWidth, setRangeWidth] = useState(100);
  const [translateX, setTranslateX] = useState(1113.42);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (counter > 0) {
      setLoading(false);
      const interval = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }

    if (loading) {
      setCounter(15);
      setRangeWidth(100);
    }
  }, [counter, loading]);

  useEffect(() => {
    if (counter > 0) {
      const interval = setInterval(() => {
        setRangeWidth((prev) => prev - 6.66666666667);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [counter]);

  useEffect(() => {
    if (counter === 0) {
      const random = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
      const multiply = 56 * random;
      setTranslateX((prev) => prev + multiply);
      const randomDelay = Math.random() * (6000 - 3000) + 3000;
      const timeout = setTimeout(() => {
        setTimeout(() => {
          setLoading(true);
        }, 3000);
        setTranslateX(1113.42);
      }, randomDelay);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      const timeout = setTimeout(() => {
        setTranslateX(1113.42);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [counter]);

  return (
    <div className="sc-fXSgeo dJFZGz">
      <div className="sc-JrDLc ghPzjb">
        <span>Round id:&nbsp;</span>
        <span>2295462</span>
      </div>
      <div className="sc-fjvvzt dHAETj">
        <div className="sc-bbSZdi ledPWQ">
          <div className="sc-fBWQRz isBhEX">
            <div className="sc-hknOHE eBcVAM">
              {counter && counter > 0 ? counter : "Rolling..."}
            </div>
            <div className="sc-uVWWZ fMlwGs">
              {counter > 0 ? (
                <div className="sc-hCPjZK cMNeoC">
                  <div
                    className="sc-Nxspf bKVnay"
                    style={{ width: `${rangeWidth}%` }}
                  ></div>
                </div>
              ) : (
                <div className="sc-cfxfcM hOqlWx">&nbsp;</div>
              )}
            </div>
          </div>
        </div>
        <div className="sc-gFAWRd gePbww">
          <div
            className="sc-gmPhUn iiXCiw"
            style={{
              transform: `translateX(-${translateX}px)`,
              transitionProperty: "transform",
              transitionDuration: "3s",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>1</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>14</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>2</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>13</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>3</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>12</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>4</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ dXhjaW">
                <div>14x</div>
                <div>0</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>11</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>5</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>10</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>6</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>9</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>7</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>8</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>1</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>14</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>2</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>13</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>3</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>12</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>4</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ dXhjaW">
                <div>14x</div>
                <div>0</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>11</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>5</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>10</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>6</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>9</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>7</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>8</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>1</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>14</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>2</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>13</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>3</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>12</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>4</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ dXhjaW">
                <div>14x</div>
                <div>0</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>11</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>5</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>10</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>6</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>9</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>7</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>8</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>1</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>14</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>2</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>13</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>3</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>12</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>4</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ dXhjaW">
                <div>14x</div>
                <div>0</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>11</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>5</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>10</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>6</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>9</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>7</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>8</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>1</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>14</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>2</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>13</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>3</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>12</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>4</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ dXhjaW">
                <div>14x</div>
                <div>0</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>11</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>5</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>10</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>6</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>9</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>7</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>8</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>1</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>14</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>2</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>13</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>3</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>12</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>4</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ dXhjaW">
                <div>14x</div>
                <div>0</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>11</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>5</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>10</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>6</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>9</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>7</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>8</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>1</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>14</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>2</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>13</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>3</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>12</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>4</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ dXhjaW">
                <div>14x</div>
                <div>0</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>11</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>5</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>10</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>6</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>9</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>7</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>8</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>1</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>14</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>2</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>13</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>3</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>12</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>4</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ dXhjaW">
                <div>14x</div>
                <div>0</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>11</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>5</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>10</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>6</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>9</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ bRdOFI">
                <div>2x</div>
                <div>7</div>
              </div>
            </div>
            <div className="sc-hRJfrW bPNgAz">
              <div className="sc-iHbSHJ grThzw">
                <div>2x</div>
                <div>8</div>
              </div>
            </div>
          </div>
          <div className="sc-tagGq hFRKMf">
            <div className="sc-esYiGF jErYaf">
              <svg
                width={59}
                height={18}
                viewBox="0 0 59 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.9383 1.7303L0.5 18H59L32.5617 1.7303C30.8374 0.669178 28.6626 0.66918 26.9383 1.7303Z"
                  fill="url(#paint0_linear_473_33802)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_473_33802"
                    x1="29.75"
                    y1={0}
                    x2="29.75"
                    y2={18}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="0.0001" stopColor="#F37C0E" />
                    <stop offset={1} stopColor="#F49F53" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="sc-klVQfs iJFdVr">
          <div className="sc-bypJrT gSizWh">
            <button onClick={() => setStake(10)} className="sc-ddjGPC eteDig">
              MIN
            </button>
            <button
              onClick={() => setStake((prev) => prev > 10 && prev / 2)}
              className="sc-ddjGPC eteDig"
            >
              /2
            </button>
            <div className="sc-dSCufp gryDwp">
              <div className="sc-fxwrCY jnQoDG">
                <input
                  onChange={(e) => setStake(e.target.value)}
                  type="number"
                  placeholder="Enter Stake"
                  className="sc-hIUJlX iDyRhz"
                  value={stake}
                />
              </div>
            </div>
            <button
              onClick={() => setStake((prev) => prev + prev)}
              className="sc-ddjGPC eteDig"
            >
              x2
            </button>
            <button
              onClick={() => setStake(10000)}
              className="sc-ddjGPC eteDig"
            >
              MAX
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RollingContainer;
