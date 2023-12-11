import { useState } from "react";
import CurrentBudget from "./CurrentBudget";

//Props
function Checkbox({ BOXES }) {
  //useState dels checkbox
  const [valueOne, setCheckedOne] = useState(false);
  const [valueTwo, setCheckedTwo] = useState(false);
  const [valueThree, setCheckedThree] = useState(false);

  const onChangeOne = () => {
    setCheckedOne(!valueOne);
  };
  const onChangeTwo = () => {
    setCheckedTwo(!valueTwo);
  };
  const onChangeThree = () => {
    setCheckedThree(!valueThree);
  };

  //useState de inputs
  const [username, setUsername] = useState("");

  const onChangeName = (event) => {
    setUsername(event.target.value);
  };

  const [usertel, setUsertel] = useState("");

  const onChangeTel = (event) => {
    setUsertel(event.target.value);
  };

  const [usermail, setUsermail] = useState("");

  const onChangeMail = (event) => {
    setUsermail(event.target.value);
  };

  //CurrentBudget
  const [listita, setListita] = useState([]);
  let serviceNames = [];

  if (valueOne) {
    serviceNames.push(BOXES[0].title);
  }
  if (valueTwo) {
    serviceNames.push(BOXES[1].title);
  }
  if (valueThree) {
    serviceNames.push(BOXES[2].title);
  }

  const handleButtonClick = () => {
    let newBudget = {
      name: username,
      mail: usermail,
      tel: usertel,
      service: serviceNames,
      price: price1 + price2 + price3,
    };

    let newListita = [...listita];
    newListita.push(newBudget);
    setListita(newListita);
  };

  //useState pagines i llenguatge
  const [newPages, setNewPages] = useState(0);
  const [newLang, setNewLang] = useState(0);

  //funcions per cambiar el nombre de pagines i llenguatge
  const pageChange = (event) => {
    setNewPages(parseInt(event.target.value));
  };

  const langChange = (event) => {
    setNewLang(parseInt(event.target.value));
  };

  //funcions per els botons
  const decrementPages = () => {
    if (newPages > 0) {
      setNewPages(newPages - 1);
    }
  };

  const incrementPages = () => {
    setNewPages(newPages + 1);
  };

  const decrementLang = () => {
    if (newLang > 0) {
      setNewLang(newLang - 1);
    }
  };

  const incrementLang = () => {
    setNewLang(newLang + 1);
  };

  //calculem preus
  let price1 = valueOne ? BOXES[0].price : 0;
  let price2 = valueTwo ? BOXES[1].price : 0;
  let price3 = valueThree ? BOXES[2].price + (newPages + newLang) * 30 : 0;

  return (
    <div className="p-3 flex flex-col space-y-4 ">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        Aconsegueix la millor qualitat
      </h1>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body">
          <h3 className="card-title ">{BOXES[0].title}</h3>
          <p>Programació d'una web responsive completa</p>
          <div className="grid grid-cols-4 gap-4 ">
            <div className="card-title">{BOXES[0].price}€</div>
            <div>
              <label>
                Afegir{" "}
                <input
                  type="checkbox"
                  checked={valueOne}
                  onChange={onChangeOne}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body">
          <h3 className="card-title">{BOXES[1].title}</h3>
          <p>Programació d'una web responsive completa</p>
          <div className="grid grid-cols-4 gap-4 ">
            <div className="card-title">{BOXES[1].price}€</div>

            <label>
              Afegir{" "}
              <input
                type="checkbox"
                checked={valueTwo}
                onChange={onChangeTwo}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body">
          <h3 className="card-title">{BOXES[2].title}</h3>
          <p>Programació d'una web responsive completa</p>
          <div className="grid grid-cols-4 gap-4 ">
            <div className="card-title">{BOXES[2].price}€</div>

            <label>
              Afegir{" "}
              <input
                type="checkbox"
                checked={valueThree}
                onChange={onChangeThree}
              />
            </label>
          </div>
        </div>

        {valueThree && (
          <div className="p-5">
            <p>
              Nombre de pàgines{" "}
              <button
                className="btn btn-outline btn-xs btn-circle"
                onClick={decrementPages}
              >
                -
              </button>{" "}
              <input
                className="w-14 m-2"
                value={newPages}
                onChange={pageChange}
                id="pages"
                type="number"
              ></input>
              <button
                className="btn btn-outline btn-xs btn-circle"
                onClick={incrementPages}
              >
                +
              </button>
            </p>
            <p>
              Nombre de llenguatges{" "}
              <button
                className="btn btn-outline btn-xs btn-circle"
                onClick={decrementLang}
              >
                -
              </button>{" "}
              <input
                className="w-14"
                value={newLang}
                onChange={langChange}
                id="lang"
                type="number"
              ></input>
              <button
                className="btn btn-outline btn-xs btn-circle"
                onClick={incrementLang}
              >
                +
              </button>
            </p>
          </div>
        )}
      </div>

      <div className="card grid grid-cols-2 gap-0 w-96 bg-neutral text-neutral-content p-5 text-right">
        Preu pressupostat:{" "}
        <span className="font-bold">{price1 + price2 + price3} €</span>
      </div>

      <div className="card w-96 bg-neutral text-neutral-content p-5">
        <h3>Demanar pressupost</h3>
        <div className="grid grid-cols-4 gap-4 bg-neutral text-neutral-content p-2">
          <input
            className="h-max"
            id="name"
            type="text"
            placeholder="Nom"
            value={username}
            onChange={onChangeName}
          ></input>
          <input
            className="h-max"
            id="tel"
            type="text"
            placeholder="Telèfon"
            value={usertel}
            onChange={onChangeTel}
          ></input>
          <input
            className="h-max"
            id="mail"
            type="text"
            placeholder="Mail"
            value={usermail}
            onChange={onChangeMail}
          ></input>
          <button className="btn" onClick={() => handleButtonClick()}>
            Sol·licitar pressupost
          </button>
        </div>
      </div>
      {listita.length > 0 && (
        <div>
          {listita.map((item) => (
            <CurrentBudget
              name={item.name}
              mail={item.mail}
              tel={item.tel}
              service={item.service}
              price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkbox;
