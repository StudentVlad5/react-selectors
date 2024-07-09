import { useEffect, useState } from 'react';
import {
  SidebarBox,
  SidebarContainer,
  SidebarListItem,
  SidebarList,
  ModelListItem,
} from './Sidebar.styled';
import icon from '../../images/circle_play_icon.svg';
import data from '../CONST/MOCK_DATA.json';

export const Sidebar = () => {
  const [listCar_product, setListCar_product] = useState([]);
  const [, setListCar_model] = useState([]);
  const [, setListCar_year] = useState([]);
  const [, setListCar_vin] = useState([]);
  const [, setListCar_address] = useState([]);

  const [listCar_model_product, setListCar_model_product] = useState([]);
  const [listCar_year_model_product, setListCar_year_model_product] = useState(
    []
  );

  useEffect(() => {
    let listOfProduct = [];
    let listOfModel = [];
    let listOfYear = [];
    let listOfVin = [];
    let listOfAddres = [];

    let listCarOfModel_product = [];
    let listCarOfYear_Model_product = [];

    data.forEach(it => {
      if (listOfProduct.hasOwnProperty(it.car_product)) {
        listOfProduct[it.car_product].push(it.id);
      } else {
        listOfProduct[it.car_product] = [it.id];
      }

      if (listOfModel.hasOwnProperty(it.car_model)) {
        listOfModel[it.car_model].push(it.id);
        listCarOfModel_product[it.car_model].push(it.car_product);
      } else {
        listOfModel[it.car_model] = [it.car_product];
        listCarOfModel_product[it.car_model] = [it.car_product];
      }

      if (listOfYear.hasOwnProperty(it.car_year)) {
        listOfYear[it.car_year].push(it.id);
        listCarOfYear_Model_product[it.car_year].push(it.car_model);
      } else {
        listOfYear[it.car_year] = [it.id];
        listCarOfYear_Model_product[it.car_year] = [it.car_model];
      }

      if (listOfVin.hasOwnProperty(it.car_vin)) {
        listOfVin[it.car_vin].push(it.id);
      } else {
        listOfVin[it.car_vin] = [it.id];
      }

      if (listOfAddres.hasOwnProperty(it.parking_address)) {
        listOfAddres[it.parking_address].push(it.id);
      } else {
        listOfAddres[it.parking_address] = [it.id];
      }
    });

    setListCar_product(listOfProduct);
    setListCar_model(listOfModel);
    setListCar_year(listOfYear);
    setListCar_vin(listOfVin);
    setListCar_address(listOfAddres);

    setListCar_model_product(listCarOfModel_product);
    setListCar_year_model_product(listCarOfYear_Model_product);
  }, []);

  function handleChoice(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.currentTarget.dataset.category);
    const categoryStyles = document.querySelectorAll('.car_product');
    const modelStyles = document.querySelectorAll('.car_model');
    // const carYearStyles = document.querySelectorAll('.carYear');
    // const parkingAddressStyles = document.querySelectorAll('.parkingAddress');

    switch (e.currentTarget.dataset.help) {
      case 'car_product':
        categoryStyles.forEach(it => {
          if (it.dataset.category === e.currentTarget.dataset.category) {
            it.classList.add('active');
          } else {
            it.classList.remove('active');
          }
        });
        break;
      case 'car_model':
        modelStyles.forEach(it => {
          if (it.dataset.category === e.currentTarget.dataset.category) {
            it.classList.add('active');
          } else {
            it.classList.remove('active');
          }
        });
        break;
      // case 'car_year':
      //   setCar_vin([...new Set(array)]);
      //   break;
      // case 'car_vin':
      //   setParking_address([...new Set(array)]);
      //   break;
      default:
        break;
    }
  }
  //  Object.keys(listCar_product).map(i => console.log(i));

  return (
    <SidebarContainer>
      <SidebarBox>
        <h2>Sidebar</h2>
        <SidebarList>
          {Object.keys(listCar_product) &&
            Object.keys(listCar_product).length > 0 &&
            Object.keys(listCar_product).map(it => (
              <SidebarListItem
                key={it}
                data-category={it}
                data-help="car_product"
                className="car_product"
                onClick={e => handleChoice(e)}
              >
                <img
                  src={icon}
                  alt={`icon ${it}`}
                  style={{ width: '15px', height: '15px' }}
                />
                {it}
                <ModelListItem className="modelContainer">
                  {Object.keys(listCar_model_product).map(
                    (i, ind) =>
                      listCar_model_product[i].includes(it) && (
                        <SidebarListItem
                          className="car_model"
                          data-help="car_model"
                          key={ind}
                          data-category={i}
                          onClick={e => handleChoice(e)}
                        >
                          <img
                            src={icon}
                            alt={`icon ${i}`}
                            style={{ width: '15px', height: '15px' }}
                          />
                          {i}
                          <ModelListItem className="yearContainer">
                            {Object.keys(listCar_year_model_product).map(
                              (y, ind) =>
                                listCar_year_model_product[y].includes(i) && (
                                  <SidebarListItem
                                    className="car_year"
                                    key={ind}
                                  >
                                    <img
                                      src={icon}
                                      alt={`icon ${y}`}
                                      style={{ width: '15px', height: '15px' }}
                                    />
                                    {y}
                                  </SidebarListItem>
                                )
                            )}
                          </ModelListItem>
                        </SidebarListItem>
                      )
                  )}
                </ModelListItem>
              </SidebarListItem>
            ))}
        </SidebarList>
      </SidebarBox>
    </SidebarContainer>
  );
};
