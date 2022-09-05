export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <div className="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2 pt-6 border-t sm:col-span-1 border-white/10">
              <p className="font-bold text-white"> Services </p>

              <nav className="flex flex-col mt-6 space-y-4 text-sm text-gray-300">
                <a className="inline-block" href="">
                  {" "}
                  Company Review{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Accounts Review{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  HR Consulting{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  SEO Optimisation{" "}
                </a>
              </nav>
            </div>

            <div className="col-span-2 pt-6 border-t sm:col-span-1 border-white/10">
              <p className="font-bold text-white"> Company </p>

              <nav className="flex flex-col mt-6 space-y-4 text-sm text-gray-300">
                <a className="inline-block" href="">
                  {" "}
                  About{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Meet the Team{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  History{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Careers{" "}
                </a>
              </nav>
            </div>

            <div className="col-span-2 pt-6 border-t sm:col-span-1 border-white/10">
              <p className="font-bold text-white"> Helpful Links </p>

              <nav className="flex flex-col mt-6 space-y-4 text-sm text-gray-300">
                <a className="inline-block" href="">
                  {" "}
                  Contact{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  FAQs{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Live Chat{" "}
                </a>
              </nav>
            </div>

            <div className="col-span-2 pt-6 border-t sm:col-span-1 border-white/10">
              <p className="font-bold text-white"> Legal </p>

              <nav className="flex flex-col mt-6 space-y-4 text-sm text-gray-300">
                <a className="inline-block" href="">
                  {" "}
                  Accessibility{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Refund Policy{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Hiring Statistics{" "}
                </a>
              </nav>
            </div>

            <div className="col-span-2 pt-6 border-t sm:col-span-1 border-white/10">
              <p className="font-bold text-white"> Downloads </p>

              <nav className="flex flex-col mt-6 space-y-4 text-sm text-gray-300">
                <a className="inline-block" href="">
                  {" "}
                  Marketing Calendar{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  SEO Infographics{" "}
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-white/10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <p className="text-xs text-center text-gray-400 lg:text-left">
              Copyright &copy; 2022. The Bloggy. All rights reserved.
            </p>

            <nav className="flex justify-center space-x-4 text-xs text-gray-400 lg:justify-end">
              <a href=""> Terms & Conditions </a>
              <a href=""> Privacy Policy </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
