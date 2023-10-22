const HOME_ROUTE = "/";
const CHARACTERS_ROUTE = "/people";
const PLANETS_ROUTE = "/planets";
const SPECIES_ROUTE = "/species";
const STAR_SHIPS_ROUTE = "/starships";
const TRANSPORT_ROUTE = "/transport";
const VEHICLES_ROUTE = "/vehicles";
const NOT_FOUND_ROUTE = "*";

import CharacterIcon from "@/assets/categoryIcons/characters.png";
import StarShipsIcon from "@/assets/categoryIcons/star-ships.png";
import TransportIcon from "@/assets/categoryIcons/transport.png";
import VehiclesIcon from "@/assets/categoryIcons/vehicles.png";

import HomePage from "@/pages/Home/HomePage";
import CharactersPage from "@/pages/Characters/CharactersPage";
import DetailPage from "@/pages/DetailPage/DetailPage";

// interface RouteListType {
//   label: routeListLabels;
//   href: string;
//   icon: StaticImageData | null;
// }
const ADDITIONAL_ROUTES = [
  {
    label: "characters",
    href: CHARACTERS_ROUTE + "/:id",
    component: DetailPage,
    icon: CharacterIcon,
  },
  {
    label: "characters",
    href: STAR_SHIPS_ROUTE + "/:id",
    component: DetailPage,
    icon: CharacterIcon,
  },
  {
    label: "characters",
    href: TRANSPORT_ROUTE + "/:id",
    component: DetailPage,
    icon: CharacterIcon,
  },
  {
    label: "characters",
    href: VEHICLES_ROUTE + "/:id",
    component: DetailPage,
    icon: CharacterIcon,
  },
];

const ROUTE_LIST = [
  { label: "home", href: HOME_ROUTE, component: HomePage, icon: null },
  {
    label: "characters",
    href: CHARACTERS_ROUTE,
    component: CharactersPage,
    icon: CharacterIcon,
  },
  {
    label: "star-ships",
    href: STAR_SHIPS_ROUTE,
    component: CharactersPage,
    icon: StarShipsIcon,
  },
  {
    label: "transport",
    href: TRANSPORT_ROUTE,
    component: CharactersPage,
    icon: TransportIcon,
  },
  {
    label: "vehicles",
    href: VEHICLES_ROUTE,
    component: CharactersPage,
    icon: VehiclesIcon,
  },
  {
    label: "not-found",
    href: NOT_FOUND_ROUTE,
    component: HomePage,
    icon: null,
  },
];

// type routeListLabels =
//   | "home"
//   | "characters"
//   | "planets"
//   | "species"
//   | "star-ships"
//   | "transport"
//   | "vehicles";

export {
  ADDITIONAL_ROUTES,
  HOME_ROUTE,
  CHARACTERS_ROUTE,
  PLANETS_ROUTE,
  SPECIES_ROUTE,
  STAR_SHIPS_ROUTE,
  TRANSPORT_ROUTE,
  VEHICLES_ROUTE,
  NOT_FOUND_ROUTE,
  ROUTE_LIST,
};
