import type { product } from "./Categories";
interface props {
  products: product[];
  onDelete: (id: number) => void;
}

const Table = ({ products, onDelete }: props) => {
  return (
    <table className={`table table-bordered mt-3 `}>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.Description}</td>
            <td>{product.Amount}</td>
            <td>{product.Category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(product.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {products
              .reduce((acc, product) => acc + Number(product.Amount), 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
