import Header from "../components/header";
import Footer from "../components/footer";

const speakers = [
  {
    name: 'Carla Brown',
    location: 'California',
    img: 'IMG_2698_edited (8).webp',
  },
  {
    name: 'Tiffany Caudill',
    location: 'Sacramento, California',
    img: 'IMG_2698_edited (4).webp',
  },
  {
    name: 'Tamar Cohen',
    location: 'Richmond, BC',
    img: 'IMG_2698_edited (5).webp',
  },
  {
    name: 'Albert Nerenberg',
    location: 'Kingston, Ontario',
    img: 'IMG_2698_edited.webp',
  },
  {
    name: 'Pearl Wintoniw',
    location: 'Sacramento, California',
    img: 'IMG_2698_edited (7).webp',
  },
  {
    name: 'Marin McCue',
    location: 'Calgaary, Alberta',
    img: 'IMG_2698_edited (6).webp',
  },
  {
    name: 'Dean Estrella',
    location: 'Calgary, Alberta',
    img: 'IMG_2698_edited (2).webp',
  },
  {
    name: 'Rolande Kirouac',
    location: 'Winnipeg, Manitoba',
    img: 'IMG_2698_edited (3).webp',
  },
  {
    name: 'Angelique Doyle',
    location: 'Medicine Hat, Alberta',
    img: 'IMG_2698_edited (1).webp',
  },
];

export default function Hero() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="text-center leading-relaxed">
        <p className="text-3xl font-extrabold mt-5 mb-4">Speakers</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-lg p-5">
        {speakers.map((speaker, index) => (
          <div key={index} className="text-center">
            <div className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 mx-auto">
              <img
                src={speaker.img}
                alt={speaker.name}
                className="object-cover w-auto h-full rounded-md"
              />
            </div>
            <p className="mt-4 text-lg font-bold">{speaker.name}</p>
            <p className="text-sm text-gray-600">{speaker.location}</p>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
