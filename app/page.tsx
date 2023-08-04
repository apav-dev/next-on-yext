import Container from "@/components/Containter";
import { Home } from "@/types/autogen";
import { formatDate } from "@/utils";
import Image from "next/image";

// 1. Set up ISR
// 2. Deploy to Vercel and test page speed
// 3. Add a blog post and see if it updates
// 4. Repeat the same for Blog Post pages
export default async function Home() {
  const homeResponse: { response: { docs: Home[] } } = await fetch(
    `https://cdn.yextapis.com/v2/accounts/me/content/home?api_key=${process.env.YEXT_CONTENT_API_KEY}&v=20230701`,
    { next: { tags: ["id"] } }
  ).then((res) => res.json());

  const home = homeResponse.response.docs[0];

  return (
    <main>
      <Container>
        <div>
          <div className="flex flex-col border-b border-gray-200 lg:border-0">
            <nav aria-label="Offers" className="order-last lg:order-first">
              <div className="mx-auto max-w-7xl lg:px-8"></div>
            </nav>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute hidden h-full w-1/2 lg:block"
              />
              <div className="relative bg-gray-100 lg:bg-transparent">
                <div className="mx-auto max-w-7xl bg-gradient-to-t from-gray-700 via-gray-900 to-black px-4  sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                  <div className="mx-auto max-w-2xl py-24  lg:max-w-none lg:py-64">
                    <div className="lg:pr-16">
                      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
                        {home.c_heading}
                      </h1>
                      <p className="mt-4 text-xl text-white">
                        {home.c_subHeading}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {home.c_coverPhoto && (
                <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
                  <Image
                    src={home.c_coverPhoto.image.url}
                    alt={home.c_coverPhoto.image.alternateText || "alt text"}
                    className="h-full w-full object-cover object-center"
                    width={home.c_coverPhoto.image.width}
                    height={home.c_coverPhoto.image.height}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Neighborhoods
              </h2>
              <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                {home.c_featuredBlogs?.map((blog) => (
                  <article
                    key={blog.id}
                    className="relative isolate flex flex-col gap-8 lg:flex-row"
                  >
                    {blog.c_coverPhoto && (
                      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                        <Image
                          src={blog.c_coverPhoto.image.url}
                          alt={
                            blog.c_coverPhoto.image.alternateText || "alt text"
                          }
                          width={blog.c_coverPhoto.image.width}
                          height={blog.c_coverPhoto.image.height}
                          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-x-4 text-xs">
                        <span className="text-gray-500">
                          {formatDate(blog.datePosted)}
                        </span>
                      </div>
                      <div className="group relative max-w-xl">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href={`blog/${blog.slug}`}>
                            <span className="absolute inset-0" />
                            {blog.name}
                          </a>
                        </h3>
                        <p className="mt-5 text-sm leading-6 text-gray-600">
                          {blog.c_description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
