export default function InitiativeCard({ icon, title, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-0 transform hover:-translate-y-2 border-2 border-primary/20 overflow-hidden">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover block"
        />
      )}
      <div className="p-6">
        <div className="text-5xl mb-4 text-center">{icon}</div>
        <h3 className="text-xl font-bold text-primary-dark mb-3 text-center">
          {title}
        </h3>
        <p className="text-black text-center leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

