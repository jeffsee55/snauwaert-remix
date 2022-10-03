/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from "react";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Product as ProductType } from "_tina/__generated__/types";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/outline";

const product = {
  name: "Everyday Ruck Snack",
  href: "#",
  price: "$220",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg",
  imageAlt:
    "Model wearing light green backpack with black canvas straps and front zipper pouch.",
  breadcrumbs: [
    { id: 1, name: "Travel", href: "#" },
    { id: 2, name: "Bags", href: "#" },
  ],
  strings: [
    {
      name: "Unstrung",
      description: "Enough room for a serious amount of snacks.",
    },
    {
      name: "Strung",
      description: "Perfect for a reasonable amount of snacks.",
    },
  ],
  stringOptions: [
    {
      name: "Unstrung",
    },
    {
      name: "Black Beam 1.25mm",
    },
    {
      name: "Black Beam 1.35mm",
    },
    {
      name: "White Beam 1.25mm",
    },
    {
      name: "Sunny Core 1.25mm",
    },
    {
      name: "Yellow Beam 1.15mm",
    },
    {
      name: "Yellow Beam 1.20mm",
    },
  ],
  sizes: [
    {
      name: '4" (0)',
      inStock: true,
    },
    {
      name: '1/8" (1)',
      inStock: true,
    },
    {
      name: '1/4" (2)',
      inStock: true,
    },
    {
      name: '3/8" (3)',
      inStock: true,
    },
    {
      name: '1/2" (4)',
      inStock: true,
    },
  ],
};
const reviews = { average: 4, totalCount: 1624 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Product(props: ProductType) {
  const [selectedString, setSelectedString] = useState(product.sizes[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center text-sm">
                    <a
                      href={breadcrumb.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {breadcrumb.name}
                    </a>
                    {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {props.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">${props.price}</p>

              <div className="ml-4 pl-4 border-l border-gray-300">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {reviews.totalCount} reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <div className="text-base text-gray-500 prose">
                <TinaMarkdown content={props.body} />
              </div>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon
                className="flex-shrink-0 w-5 h-5 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500">
                In stock and ready to ship
              </p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <ImageGallery images={props.images} />
        </div>

        {/* Product form */}
        <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              {/* <div className="sm:flex sm:justify-between">
                <RadioGroup value={selectedString} onChange={setSelectedString}>
                  <RadioGroup.Label className="sr-only">
                    Stringing
                  </RadioGroup.Label>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {product.strings.map((size) => (
                      <RadioGroup.Option
                        as="div"
                        key={size.name}
                        value={size}
                        className={({ active }) =>
                          classNames(
                            active ? "ring-2 ring-indigo-500" : "",
                            "relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label
                              as="p"
                              className="text-base font-medium text-gray-900"
                            >
                              {size.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="p"
                              className="mt-1 text-sm text-gray-500"
                            >
                              {size.description}
                            </RadioGroup.Description>
                            <div
                              className={classNames(
                                active ? "border" : "border-2",
                                checked
                                  ? "border-indigo-500"
                                  : "border-transparent",
                                "absolute -inset-px rounded-lg pointer-events-none"
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div> */}
              <div className="">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Strings
                </label>
                <select
                  id="location"
                  name="location"
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  defaultValue="Canada"
                >
                  {product.stringOptions.map((option) => {
                    return <option key={option.name}>{option.name}</option>;
                  })}
                </select>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                >
                  <span>Which strings are right for me?</span>
                  <QuestionMarkCircleIcon
                    className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
              {/* Size picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    See sizing chart
                  </a>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    {" "}
                    Choose a size{" "}
                  </RadioGroup.Label>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        className={({ active, checked }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer focus:outline-none"
                              : "opacity-25 cursor-not-allowed",
                            active
                              ? "ring-2 ring-offset-2 ring-indigo-500"
                              : "",
                            checked
                              ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                              : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                            "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                          )
                        }
                        disabled={!size.inStock}
                      >
                        <RadioGroup.Label as="span">
                          {size.name}
                        </RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Add to bag
                </button>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="group inline-flex text-base font-medium">
                  <ShieldCheckIcon
                    className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500 hover:text-gray-700">
                    Lifetime Guarantee
                  </span>
                </a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

const ImageGallery = (props) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 w-full max-w-2xl block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {props.images.map((image) => (
            <Tab
              key={image}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only"> {image} </span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    className={classNames(
                      selected ? "ring-indigo-500" : "ring-transparent",
                      "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
        {props.images.map((image) => (
          <Tab.Panel key={image}>
            <img
              src={image}
              alt={image}
              className="h-full w-full object-contain object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
