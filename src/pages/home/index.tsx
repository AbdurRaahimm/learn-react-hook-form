import { useFieldArray, useForm } from "react-hook-form";
import Header from "../../components/Header";

type Product = {
  discount: number;
  products: {
    name: string;
    price: number;
    quantity: number;
  }[];
};

export default function HomePage() {
  const {
    register,
    control,
    formState: { errors },
    watch,
  } = useForm<Product>({ defaultValues: { discount: 0, products: [] } });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
    rules: {
      required: "Please append at least 1 item",
    },
  });

  // Watch all values
  const discount = watch("discount");
  const products = watch("products");

  // Calculate total and discounted total
  const total = products?.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const discountedTotal = total - (total * (discount || 0)) / 100;

  return (
    <div className="max-w-3xl mx-auto py-8">
      <Header
        title="shopping invoice"
        desc="This is a simple shopping invoice application. You can create your invoice, save it and print it."
      />
      {/* add print */}
      <div className="flex justify-end print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          Print
        </button>
      </div>
      <div className="mt-4 py-3 px-5 bg-gray-100">
        <form>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 space-y-4"
            >
              <div className="col-span-1 mt-3">
                <label htmlFor={`products.${index}.name`}>
                  <span>Product Name</span>
                  <input
                    {...register(`products.${index}.name` as const)}
                    type="text"
                    placeholder="Product name"
                    className="border px-3 py-1 rounded-sm w-full"
                  />
                </label>
              </div>
              <div className="col-span-1 mt-3">
                <label htmlFor={`products.${index}.price`}>
                  <span>Price</span>
                  <input
                    {...register(`products.${index}.price` as const)}
                    type="number"
                    min={1}
                    placeholder="Price"
                    className="border px-3 py-1 rounded-sm w-full"
                  />
                </label>
              </div>
              <div className="col-span-1 mt-3">
                <label htmlFor={`products.${index}.quantity`}>
                  <span>Quantity</span>
                  <input
                    {...register(`products.${index}.quantity` as const)}
                    type="number"
                    min={1}
                    placeholder="Quantity"
                    className="border px-3 py-1 rounded-sm w-full"
                  />
                </label>
              </div>
              <div className="col-span-1 mt-3 flex justify-center items-center">
                {products[index]?.price && products[index]?.quantity && (
                  <p className="text-lg font-semibold">
                    Total: {products[index].price * products[index].quantity}
                  </p>
                )}
              </div>
              <div className="col-span-1 mt-3 flex justify-center items-center">
                <button
                  type="button"
                  className="text-red-500 text-xl font-semibold cursor-pointer"
                  onClick={() => remove(index)}
                >
                  x
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ name: "", price: 0, quantity: 0 })}
            className="bg-white text-gray-400 border mt-5 px-3 py-1 rounded-sm cursor-pointer print:hidden"
          >
            + Add product
          </button>
        </form>
      </div>
      <p>{errors.products?.root?.message}</p>
      <div className="flex flex-col items-end mt-4">
        <div className="mt-3">
          <label htmlFor="discount">
            <span>Discount (%)</span>
            <input
              {...register("discount")}
              type="number"
              placeholder="Discount (%)"
              className="border px-3 py-1 rounded-sm w-full"
            />
          </label>
        </div>
        <div className="mt-3 text-xl font-semibold">
          <p>Total: {total}</p>
          <p>Final Total (after discount): {discountedTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
