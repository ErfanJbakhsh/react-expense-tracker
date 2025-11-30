import { useForm } from "react-hook-form";
interface FormData {
  Description: string;
  Amount: number;
  Category: string;
}
interface props {
  onSubmit: (data: FormData) => void;
}
const ProductForm = ({ onSubmit }: props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const categories = ["Groceries", "Utilities", "Entertainment"];

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label className="form-label" htmlFor="Description">
          Description
        </label>
        <input
          {...register("Description", { required: true, minLength: 3 })}
          id="Description"
          className="form-control"
          type="text"
        />
        {(errors.Description?.type === "required" ||
          errors.Description?.type === "minLength") && (
          <p className="text-danger">
            Description should be at least 3 characters.
          </p>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="Amount">
          Amount
        </label>
        <input
          {...register("Amount", { required: true, min: 1 })}
          id="Amount"
          className="form-control"
          type="number"
          min={1}
        />
        {errors.Amount?.type === "required" && (
          <p className="text-danger">Amount is required.</p>
        )}
        {errors.Amount?.type === "min" && (
          <p className="text-danger">Amount should be at least 1.</p>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="Category">
          Category
        </label>
        <select
          {...register("Category", { required: true })}
          id="Category"
          className="form-select"
          defaultValue=""
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.Category && (
          <p className="text-danger">Category is required.</p>
        )}
      </div>
      <button className="btn btn-primary mt-2">Submit</button>
    </form>
  );
};

export default ProductForm;
