import { useEffect, useRef, useState } from "react";
import Input from "components/Input";
import { AiFillFacebook } from "react-icons/ai";
function App() {
  const ref = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enabled = username && password;

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center justify-center gap-x-8">
      <div className="hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
            alt=""
          />
        </div>
      </div>

      <div className="w-[350px] grid gap-y-3">
        <div className=" bg-white border  px-[50px] pt-8 pb-2">
          <a href="/#" className="flex items-center justify-center">
            <img
              className="h-[51px]"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
              alt=""
            />
          </a>
          <form className="grid gap-y-1.5 mt-5 mb-3 ">
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label=" Phone number, username or email"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label=" password"
            />

            <button
              type="submit"
              disabled={!enabled}
              className="h-[30px] bg-brand text-white mt-2 text-sm rounded disabled:opacity-50 font-semibold"
            >
              Log In
            </button>
            <div className="flex items-center">
              <div className="h-px bg-gray-300 flex-1" />
              <span className="px-4 text-sm font-semibold">OR</span>
              <div className="h-px bg-gray-300 flex-1" />
            </div>
            <a
              href="/#"
              className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook"
            >
              <AiFillFacebook size={20} />
              Log in with Facebook
            </a>
            <a
              href="/#"
              className="text-xs flex items-center justify-center text-link"
            >
              Forgot password
            </a>
          </form>
        </div>
        <div className="bg-white border p-4 text-sm text-center">
          Dont't have an account?{" "}
          <a href="/#" className="font-semibold text-brand">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
