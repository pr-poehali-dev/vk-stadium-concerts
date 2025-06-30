import Header from "@/components/Header";
import ConcertCard from "@/components/ConcertCard";
import VenueInfo from "@/components/VenueInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1
            className="font-bold text-5xl md:text-6xl mb-4 text-black"
            style={{ fontFamily: "Montserrat" }}
          >
            VK STADIUM
          </h1>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "Open Sans" }}
          >
            Концертная площадка мирового уровня в самом сердце города
          </p>
        </section>

        {/* Upcoming Concert */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-8 text-center text-black"
            style={{ fontFamily: "Montserrat" }}
          >
            Ближайший концерт
          </h2>
          <ConcertCard />
        </section>

        {/* Venue Information */}
        <VenueInfo />
      </main>
    </div>
  );
};

export default Index;
