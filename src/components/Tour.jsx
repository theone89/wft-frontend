/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

export const Tour = () => {
  return (
    <>
      <section id="Tour" className="px-4 py-24 mx-auto max-w-7xl">
        <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">
          Skcript Blog
        </h2>
        <p className="mb-20 text-lg text-gray-500">
          Comes directly from the desk of engineers, creators and managers at
          Skcript.
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <div>
            <a href="#">
              <Image
                loading="lazy"
                width={500}
                height={500}
                src="/assets/images/IMG1.jpg"
                className="object-cover w-full h-56 mb-5 bg-center rounded"
                alt="Kutty"

              />
            </a>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              <a href="#" className="text-gray-900 hover:text-purple-700">
                Process Documents Using Artificial Intelligence For RPA Bots
              </a>
            </h2>
            <p className="mb-3 text-sm font-normal text-gray-500">
              Earlier RPA bots used to have some limitations like it would take
              structured data for processing from excel, database, on these
              data. But with advancements in technology like OCR (Optical
              Character Recognition) and Machine Learning, RPA bots are capable
              of extracting these data …
            </p>
            <p className="mb-3 text-sm font-normal text-gray-500">
              <a
                href="#"
                className="font-medium text-gray-900 hover:text-purple-700"
              >
                Reservation
              </a>
              • April 16, 2020
            </p>
          </div>
          <div>
            <a href="#">
              <Image
                loading="lazy"
                width={500}
                height={500}
                src="/assets/images/IMG2.jpg"
                className="object-cover w-full h-56 mb-5 bg-center rounded"
                alt="Kutty"

              />
            </a>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              <a href="#" className="text-gray-900 hover:text-purple-700">
                Implement Dark Mode in Your Android App
              </a>
            </h2>
            <p className="mb-3 text-sm font-normal text-gray-500">
              Are you curious to implement the Dark Mode in Android Application?
              Here’s the perfect guideline to attain the Dark Mode in Android
              Application. Don’t waste your time; just implement and enjoy Dark
              Mode.
            </p>
            <p className="mb-3 text-sm font-normal text-gray-500">
              <a
                href="#"
                className="font-medium text-gray-900 hover:text-purple-700"
              >
                Reservation
              </a>
              • April 16, 2020
            </p>
          </div>
          <div>
            <a href="#">
              <Image
                loading="lazy"
                width={500}
                height={500}
                src="/assets/images/IMG8.jpg"
                className="object-cover w-full h-56 mb-5 bg-center rounded"
                alt="Kutty"

              />
            </a>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              <a href="#" className="text-gray-900 hover:text-purple-700">
                Why is Mental Health one of the Important Issues to Address?
              </a>
            </h2>
            <p className="mb-3 text-sm font-normal text-gray-500">
              Mental health was one of the under spoken topics before this
              lockdown. After sitting at home for about six months I realized
              that this is one of the important issues to address not only in
              the work sector but also in daily living.
            </p>
            <p className="mb-3 text-sm font-normal text-gray-500">
              <a
                href="#"
                className="font-medium text-gray-900 hover:text-purple-700"
              >
                Reservation
              </a>
              • April 16, 2020
            </p>
          </div>
          <div>
            <a href="#">
              <Image
                loading="lazy"
                width={500}
                height={500}
                src="/assets/images/IMG3.jpg"
                className="object-cover w-full h-56 mb-5 bg-center rounded"
                alt="Kutty"

              />
            </a>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              <a href="#" className="text-gray-900 hover:text-purple-700">
                Pattern Matching In Elixir
              </a>
            </h2>
            <p className="mb-3 text-sm font-normal text-gray-500">
              Pattern matching is a great way to write idiomatic functional
              code. It’s a powerful tenant of functional programming that makes
              it a joy to write conditional statements. If you don’t want your
              code to be peppered with deeply nested statements or multiple
              variations of similar business logic, use pattern matching!
            </p>
            <p className="mb-3 text-sm font-normal text-gray-500">
              <a
                href="#"
                className="font-medium text-gray-900 hover:text-purple-700"
              >
                Reservation
              </a>
              • April 16, 2020
            </p>
          </div>
          <div>
            <a href="#">
              <Image
                loading="lazy"
                width={500}
                height={500}
                src="/assets/images/IMG4.jpg"
                className="object-cover w-full h-56 mb-5 bg-center rounded"
                alt="Kutty"

              />
            </a>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              <a href="#" className="text-gray-900 hover:text-purple-700">
                3 things you should change during your focus group interview
              </a>
            </h2>
            <p className="mb-3 text-sm font-normal text-gray-500">
              We changed three things about our feedback sessions, and it
              changed everything about running customer feedback sessions.
            </p>
            <p className="mb-3 text-sm font-normal text-gray-500">
              <a
                href="#"
                className="font-medium text-gray-900 hover:text-purple-700"
              >
                Reservation
              </a>
              • April 16, 2020
            </p>
          </div>
          <div>
            <a href="#">
              <Image
                loading="lazy"
                width={500}
                height={500}
                src="/assets/images/IMG5.jpg"
                className="object-cover w-full h-56 mb-5 bg-center rounded"
                alt="Kutty"

              />
            </a>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              <a href="#" className="text-gray-900 hover:text-purple-700">
                Using Webpack with React Typescript
              </a>
            </h2>
            <p className="mb-3 text-sm font-normal text-gray-500">
              Ever wondered if there is a way to just tie up all your code into
              one single module for easy usage. If so, in this article I will
              show you how to bundle all your code into a single javascript
              module that you can easily use in any other project.
            </p>
            <p className="mb-3 text-sm font-normal text-gray-500">
              <a
                href="#"
                className="font-medium text-gray-900 hover:text-purple-700"
              >
                Reservation
              </a>
              • April 16, 2020
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
          <a
            href="#"
            className="w-full rounded-full btn btn-light btn-xl md:w-auto"
          >
            Previous Page
          </a>
          <a
            href="#"
            className="w-full rounded-full btn btn-light btn-xl md:w-auto"
          >
            Next Page
          </a>
        </div>
      </section>
    </>
  );
};
