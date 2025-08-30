import BigButton from '../common/big-button';

export function Clientsntro() {
  return (
    <section className="">
      <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
        Clients
      </h2>
      <div className="mb-16 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        <p>Clients goes here</p>
      </div>
      <BigButton link="/#">Full list of clients</BigButton>
    </section>
  );
}
