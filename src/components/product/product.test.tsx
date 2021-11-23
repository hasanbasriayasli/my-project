import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Product from "./product";

test("renders Product", async () => {
  const { getByTestId } = render(<Product item={item} />);
  const elementAddButton = getByTestId("addButton");
  expect(elementAddButton).toHaveTextContent("Sepete Ekle");
  expect(getByTestId('brand')).toHaveTextContent(item?.brand);
  expect(getByTestId('color')).toHaveTextContent(item?.color);
  expect(getByTestId('fullPrice')).toHaveTextContent(item?.fullPrice.toString());
  expect(getByTestId('discountPrice')).toHaveTextContent(item?.discountPrice.toString());
  expect(getByTestId('discountPercentage')).toHaveTextContent('12%');  
});

const item = {
  productId: 33,
  color: "Kırmızı",
  brand: "Spigen",
  image: "/assets/red_case.svg",
  name: "Red Spigen Iphone 11 Kılıf Garantili",
  fullPrice: 194.0,
  discountPrice: 162.12,
  createdDate: "2021-11-13T24:20:33.313Z",
};
