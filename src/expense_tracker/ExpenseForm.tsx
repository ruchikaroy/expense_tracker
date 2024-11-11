import categories from "../categories";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  Description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." })
    .max(50),
  Amount: z.number({ message: "Amount is required" }).min(0.01).max(100_000),
  Category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("Description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.Description && (
          <p className="text-danger">{errors.Description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("Amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.Amount && (
          <p className="text-danger">{errors.Amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select className="form-select" {...register("Category")} id="category">
          <option value="">Choose</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.Category && (
          <p className="text-danger">{errors.Category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
