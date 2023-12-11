function CurrentBudget({ name, mail, tel, service, price }) {
  return (
    <div className="card w-96 bg-neutral text-neutral-content mb-4">
      <h2 className="card-title ">Pressupostos en curs:</h2>
      <div>
        <p>{name}</p>
        <p>{mail}</p>
        <p>{tel}</p>
      </div>
      <div class="flex items-stretch">
        <p className="font-bold">Serveis contractats:</p>
        <p>{service.join(", ")}</p>
      </div>
      <div class="flex items-stretch">
        <p className="font-bold">Total:</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
export default CurrentBudget;
