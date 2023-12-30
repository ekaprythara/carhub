import { MouseEventHandler } from "react";

export type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  isDisabled?: boolean;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
};

export type ManufacturerProps = {
  selected: string;
  setSelected: (manufacturer: string) => void;
};

export type CarProps = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type FilterProps = {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
};

export type OptionCustomFilter = {
  title: string;
  value: string;
}[];

export type CustomFilterProps = {
  options: OptionCustomFilter;
  setFilter: (filter: any) => void;
};

export type ShowMoreProps = {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
};

export type SearchBarProps = {
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
};
