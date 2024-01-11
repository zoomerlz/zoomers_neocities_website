import Tilt from "react-parallax-tilt";

//TODO add a chat, maybe https://chattable.neocities.org/help/
export default function Chat({ breakpoint }) {
  window.onload = function () {

    // document.getElementById("chattable").contentWindow.postMessage(
    //   `
    //         .msgWrapper {
              
    //         }
    //         .allMessages {
              
    //         }
    //         .senderInfo {
    //           font-weight: bold;
    //         }
    //         .sent {
    //           color: red;
    //         }
    //         .recieved {
              
    //         }
    //         .msgBody {
    //           font: monospace;
    //         }
    //         #background {
    //         }
    //         #input {
              
    //         }
    //         #settings {
              
    //         }
    //         .mod:before {
              
    //         }
    //         .owner:before {
              
    //         }
    //       `,
    //   "*"
    // );
  };
  return (
    <Tilt
      tiltEnable={breakpoint !== "xl" && breakpoint !== "2xl" ? false : true}
      perspective={2000}
      tiltReverse={true}
      tiltMaxAngleX={5}
      tiltMaxAngleY={15}
      className="order-last lg:order-none w-full h-full"
    >
      <div className="w-full h-full backdrop-blur border-2 border-double border-primary bg-primaryDark/60 p-5 text-2xl">
        <p>This is the chat</p>
        {/* <iframe
          className="w-full h-full"
          src="https://chattable.neocities.org/embed?chat=32334865"
          id="chattable"
          frameBorder="none"
        ></iframe> */}
      </div>
    </Tilt>
  );
}
