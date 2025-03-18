import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import Image from "next/image";

export default function MainSection() {
  return (
    <main className="flex-1">
      <section className="relative">
        <div className="grid lg:grid-cols-3">
          <div className="lg:col-span-2 relative h-[500px]">
            <Image
              src="/image9.jpg"
              alt="Mountain landscape"
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 text-white">
              <div className="max-w-xl">
                <div className="border-b border-white/30 pb-2 mb-6 w-fit">
                  <h2 className="text-sm font-medium tracking-wider">
                    WORLD NEWS
                  </h2>
                </div>
                <h1 className="text-4xl font-bold mb-4">
                  Amazing places in Myanmar to visit.
                </h1>
                <p className="text-white/90 mb-6">
                  For some reason — this country, this city, this neighborhood,
                  this particular street — is the place you are living a
                  majority of your life in.
                </p>
                <button className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          {/* More News - Right Side (1/3 width) */}
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">MORE NEWS</h2>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-red-500 text-xs font-medium mb-2">
                  TRAVEL
                </div>
                <h3 className="font-medium mb-2">Article title</h3>
                <p className="text-gray-500 text-sm mb-2">
                  Lorem ipsum dolor sit amet, ipsum labore luctus mel ei, ad has
                  appareat.
                </p>
                <div className="flex items-center text-gray-400 text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>2 min ago</span>
                </div>
              </div>
              <div>
                <div className="text-red-500 text-xs font-medium mb-2">
                  TECHNOLOGY
                </div>
                <h3 className="font-medium mb-2">Article title</h3>
                <p className="text-gray-500 text-sm mb-2">
                  Lorem ipsum dolor sit amet, ipsum labore luctus mel ei, ad has
                  appareat.
                </p>
                <div className="flex items-center text-gray-400 text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>2 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">TRENDING</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              image: "/image2.jpg",
              title: "Bagan News",
              time: "2h ago",
            },
            {
              image: "/image1.jpg",
              title: "Nay Win Yin",
              time: "1h ago",
            },
            {
              image: "/image3.jpg",
              title: "Bagan Travels",
              time: "3h ago",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-md overflow-hidden"
            >
              <div className="h-64 relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-2">
                  Lorem ipsum dolor sit amet, ipsum labore luctus mel ei, ad has
                  appareat.
                </p>
                <div className="flex items-center text-gray-400 text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Happening Now Section */}
      <section className="container mx-auto px-4 py-8 mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">HAPPENING NOW</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid gap-6">
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image
                src="/image6.jpg"
                alt="Golden Gate Bridge"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="bg-gray-800/80 text-white text-xs px-2 py-1 rounded w-fit mb-4">
                  CITY
                </div>
                <h3 className="text-2xl font-bold mb-2">Large article title</h3>
                <p className="text-white/90 text-sm mb-3">
                  Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                  detracto, vidit vituperatoribus duo id. Affert detraxit
                  voluptatum vis eu, inermis eloquentiam.
                </p>
                <div className="flex items-center text-white/70 text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>2m ago</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image
                src="/image8.jpg"
                alt="Forest path"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="bg-gray-800/80 text-white text-xs px-2 py-1 rounded w-fit mb-4">
                  TRAVEL
                </div>
                <h3 className="text-2xl font-bold mb-2">Large article title</h3>
                <p className="text-white/90 text-sm mb-3">
                  Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                  detracto, vidit vituperatoribus duo id. Affert detraxit
                  voluptatum vis eu, inermis eloquentiam.
                </p>
                <div className="flex items-center text-white/70 text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>2m ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="w-48 h-64 relative rounded-md overflow-hidden">
                  <Image
                    src="/image5.jpg"
                    alt="Small article"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Small title</h3>
                  <div className="text-gray-400 text-xs mb-1">
                    <span>2h ago by </span>
                    <span className="text-gray-500">Author</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
