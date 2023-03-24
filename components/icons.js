import Image from "next/image";

function CarbonNeutral() {
  return (
    <>
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"
        className="w-5 h-5 p-1"
        width={64}
        height={64}
        alt="Carbon Neutral"
      />
    </>
  );
}

function MicrophoneIcon() {
  return (
    <>
      <svg
        focusable="false"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 mr-3"
      >
        <path
          fill="#4285f4"
          d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
        ></path>
        <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
        <path
          fill="#fbbc05"
          d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
        ></path>
        <path
          fill="#ea4335"
          d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
        ></path>
      </svg>
    </>
  );
}

function CameraIcon() {
  return (
    <>
      <svg
        focusable="false"
        viewBox="0 0 192 192"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6"
      >
        <rect fill="none" height="192" width="192"></rect>
        <g>
          <circle fill="#4285f4" cx="96" cy="104.15" r="28"></circle>
          <path
            fill="#ea4335"
            d="M160,72v40.15V136c0,1.69-0.34,3.29-0.82,4.82v0v0c-1.57,4.92-5.43,8.78-10.35,10.35h0v0 c-1.53,0.49-3.13,0.82-4.82,0.82H66l16,16h50h12c4.42,0,8.63-0.9,12.46-2.51c3.83-1.62,7.28-3.96,10.17-6.86 c1.45-1.45,2.76-3.03,3.91-4.74c2.3-3.4,3.96-7.28,4.81-11.44c0.43-2.08,0.65-4.24,0.65-6.45v-12V96.15V84l-6-19l-10.82,2.18 C159.66,68.71,160,70.31,160,72z"
          ></path>
          <path
            fill="#4285f4"
            d="M32,72c0-1.69,0.34-3.29,0.82-4.82c1.57-4.92,5.43-8.78,10.35-10.35C44.71,56.34,46.31,56,48,56 h96c1.69,0,3.29,0.34,4.82,0.82c0,0,0,0,0,0L149,45l-17-5l-16-16h-13.44H96h-6.56H76L60,40H48c-17.67,0-32,14.33-32,32v12v20l16,16 V72z"
          ></path>
          <path
            fill="#34a853"
            d="M144,40h-12l16.83,16.83c1.23,0.39,2.39,0.93,3.47,1.59c2.16,1.32,3.97,3.13,5.29,5.29 c0.66,1.08,1.2,2.24,1.59,3.47v0L176,84V72C176,54.33,161.67,40,144,40z"
          ></path>
          <path
            fill="#fbbc05"
            d="M48,168h39.89l-16-16H48c-8.82,0-16-7.18-16-16v-23.89l-16-16V136C16,153.67,30.33,168,48,168z"
          ></path>
        </g>
      </svg>
    </>
  );
}

function SearchButtons(props) {
  return (
    <>
      <div className="flex p-5 space-x-2">
        <button
          className="bg-[#F8F9FA] btn"
          onClick={props.onClick}
          hidden={props.hidden}
        >
          Google Search
        </button>
        <button
          className="bg-[#F8F9FA] btn"
          onClick={props.onClick}
          hidden={props.hidden}
        >
          I&apos;m feeling Lucky
        </button>
      </div>
    </>
  );
}

function MapIcon() {
  return (
    <>
      <span className="w-[13px] h-[13px] opacity-50">
        <svg focusable="false" viewBox="0 0 16 16">
          <path d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"></path>
        </svg>
      </span>
    </>
  );
}

function BooksIcon() {
  return (
    <>
      <span className="w-[13px] h-[13px] opacity-50">
        <svg focusable="false" viewBox="0 0 24 24">
          <path d="M18 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16"></path>
        </svg>
      </span>
    </>
  );
}
function FinanceIcon() {
  return (
    <>
      <span className="w-[13px] h-[13px] opacity-50">
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0V0z" fill="none"></path>
          <path
            clip-rule="evenodd"
            d="M6 15.5l-3 2.94V10h3v5.5zm5-1.84l-1.57-1.34L8 13.64V6h3v7.66zM16 12l-3 3V2h3v10zm2.81-.19L17 10h5v5l-1.79-1.79L13 20.36l-3.47-3.02L5.75 21H3l6.47-6.34L13 17.64l5.81-5.83z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
    </>
  );
}
function ColoredSearchIcon() {
  return (
    <>
      <span className="w-[13px] h-[13px]">
        <svg focusable="false" viewBox="0 0 24 24">
          <path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path>
          <path
            fill="#ea4335"
            d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
          ></path>
          <path
            fill="#fbbc04"
            d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
          ></path>
          <path
            fill="#4285f4"
            d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
          ></path>
        </svg>
      </span>
    </>
  );
}
function FlightsIcon() {
  return (
    <>
      <span className="w-[13px] h-[13px] opacity-50">
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0V0z" fill="none"></path>
          <path d="M12.98 12.89l-4.03 4.03.42 2.95L8.24 21l-1.87-3.37L3 15.76l1.12-1.12 2.95.42 4.03-4.03L3 6.77l1.5-1.5 10.04 2.32 4.2-4.2a1.32 1.32 0 0 1 1.87 0c.52.52.52 1.36 0 1.87l-4.2 4.2 2.32 10.04-1.5 1.5-4.25-8.11z"></path>
        </svg>
      </span>
    </>
  );
}

export {
  CarbonNeutral,
  MicrophoneIcon,
  CameraIcon,
  SearchButtons,
  MapIcon,
  BooksIcon,
  FinanceIcon,
  FlightsIcon,
  ColoredSearchIcon,
};
