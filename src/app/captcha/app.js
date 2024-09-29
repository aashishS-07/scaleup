import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Contact from "@/components/Contact";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LfBYCgqAAAAAGQUzYjeWBbJowGj_ilU76W1M_br"
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;

