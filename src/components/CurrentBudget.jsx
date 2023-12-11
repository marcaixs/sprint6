function CurrentBudget({ name, mail, tel, service, price }) {
  return (
    <div className="card w-96 bg-neutral text-neutral-content mb-4 p-5">
      
      <div>
        <p className="font-bold">{name}</p>
        <p>{mail}</p>
        <p>{tel}</p>
      </div>
      <div class="flex items-stretch">
        <p className="font-bold mr-2">Serveis contractats: </p>
        <p>{service.join(", ")}</p>
      </div>
      <div class="flex items-stretch">
        <p className="font-bold mr-5">Total: </p>
        <p className="font-bold">{price}€</p>
      </div>
    </div>
  );
}
export default CurrentBudget;
