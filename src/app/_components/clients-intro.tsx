export function Clientsntro() {
  return (
    <section>
      <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
        Clients
      </h2>
      <div className="mb-16 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        <p>Clients goes here</p>
      </div>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        <a
          href="#"
          className="mx-3 mb-6 border border-black bg-black px-12 py-3 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0 lg:px-8"
        >
          Full list of clients
        </a>
      </div>
    </section>
  );
}
