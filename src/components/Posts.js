import { Link } from "react-router-dom";

export default function Posts({ postdata }) {
  // async function requestPic (){
  //   const res = await fetch('https://source.unsplash.com/random')
  //   const pic = await res.img()
  //   return pic
  // }

  return (
    <section class="text-white bg-gray-900">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Welcome to The Bloggy</h2>

          <p class="mt-4 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {postdata.map((post) => {
            return (
              <Link
                class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
                to={"post/" + post.slug}
              >
                <img
                  class="object-cover w-full h-56"
                  src={`https://source.unsplash.com/random/600x600?sig=${Math.random()}`}
                  alt="loading..."
                />

                <h3 class="mt-4 text-xl font-bold text-white">{post.title}</h3>

                <p class="mt-1 text-sm text-gray-300">
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

// <a href="" class="block overflow-hidden rounded-2xl">
//   <img
//     class="object-cover w-full h-56"
//     src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
//     alt=""
//   />

//   <div class="p-4 bg-gray-900">
//     <p class="text-xs text-gray-500">website.com</p>

//     <h5 class="text-sm text-white">
//       How to position your furniture for positivity
//     </h5>

//     <p class="mt-1 text-xs text-gray-500">
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis
//       aliquid accusamus? Sint, sequi voluptas.
//     </p>
//   </div>
// </a>;
