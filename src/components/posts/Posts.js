import { Link } from "react-router-dom";

export default function Posts({ postdata }) {
  return (
    <section className="text-white bg-gray-900">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Welcome to The Bloggy
          </h2>

          <p className="mt-4 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {postdata.map((post, i) => {
            return (
              <Link
                className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
                to={"/post/" + post.slug}
                key={i}
              >
                <img
                  className="object-cover w-full h-56"
                  src={`https://source.unsplash.com/random/600x600?sig=${Math.random()}`}
                  alt="loading..."
                />

                <h3 className="mt-4 text-xl font-bold text-white">
                  {post.title}
                </h3>

                <p className="mt-1 text-sm text-gray-300">
                  {post.excerpt.substr(0, 60)}...
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
