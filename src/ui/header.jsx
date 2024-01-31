export default function Header({ breakpoint }) {
  return (
      <div className="w-full h-full backdrop-blur border-2 border-double border-primary bg-primaryDark/60 p-5 text-2xl">
        <h1>This is the header</h1>
        <p>Current breakpoint: {breakpoint}</p>
      </div>
  );
}
