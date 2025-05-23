import testimoniData from "../../assets/testimoni.json";

const Testimoni = () => {
  return (
    <section id="testimoni" className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Apa Kata Mereka?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimoniData.map((item) => (
          <div key={item.id} className="bg-gray-100 p-4 rounded shadow text-center">
            <img
              src={`https://avatar.iran.liara.run/username?name=${item.nama}`}
              alt={item.nama}
              className="w-16 h-16 rounded-full mb-2 mx-auto"
            />
            <h4 className="font-semibold">{item.nama}</h4>
            <p className="text-sm text-gray-600 italic">"{item.ulasan}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimoni;
