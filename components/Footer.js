import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  // Get User's Country
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
  const [country, setCountry] = useState(null);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
    };

    fetch(
      `https://api.geoapify.com/v1/ipinfo?&apiKey=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCountry(result.country.name);
      })
      .catch((error) => console.log("error", error));
  }, [apiKey]);

  return (
    <footer className="absolute inset-x-0 bottom-0">
      <div className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
        <div className="px-8 py-3">{country && <p>{country}</p>}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
          <div className="px-8 py-3 flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
            <Link
              href="https://sustainability.google/carbon-free/"
              className="link flex"
            >
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"
                className="w-5 h-5 p-1"
                width={64}
                height={64}
                alt="Carbon Neutral"
              />
              <span>Carbon Neutral since 2007</span>
            </Link>
          </div>

          <div className="hidden md:flex px-8 py-3 justify-center space-x-8 whitespace-nowrap md:justify-self-start">
            <Link href="https://about.google/" className="link">
              <span>About</span>
            </Link>
            <Link
              href="https://www.google.com/intl/en_us/ads/"
              className="link"
            >
              <span>Advertising</span>
            </Link>
            <Link href="https://www.google.com/services/" className="link">
              <span>Business</span>
            </Link>
            <Link href="/search/howsearchworks/" className="link">
              <span>How Search works</span>
            </Link>
          </div>

          <div className="px-8 py-3 flex justify-center space-x-8 md:ml-auto">
            <Link
              href="https://policies.google.com/privacy?hl=en-US&fg=1"
              className="link"
            >
              <span>Privacy</span>
            </Link>
            <Link
              href="https://policies.google.com/terms?hl=en-US&fg=1"
              className="link"
            >
              <span>Terms</span>
            </Link>
            <Link
              href="https://www.github.com/joshuaedo/google"
              className="link"
            >
              <span>Source Code</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
