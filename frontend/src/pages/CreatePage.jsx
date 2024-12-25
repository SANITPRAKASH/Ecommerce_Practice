import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { useProductStore } from '../stores/ProductStore.jsx';

const CreatePage = () => {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    image: '',
  });
  
  const createProducts = useProductStore((state) => state.createProducts);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh
    try {
      const result = await createProducts(product); // Use correct store function
      if (result.success) {
        setProduct({ name: '', price: 0, image: '' }); // Reset form
        toast.success('Product Created Successfully! 🎉');
      } else {
        toast.error(`Error: ${result.message} ❌`);
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to Create Product. Server Error! ❌');
    }
  };

  // Inline CSS styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f9f9f9',
    },
    form: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      outline: 'none',
      transition: 'border-color 0.3s ease-in-out',
    },
    inputFocus: {
      borderColor: '#007bff',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease-in-out',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          placeholder="Product Name"
          name="name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          style={styles.input}
          type="number"
          placeholder="Product Price"
          name="price"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: parseFloat(e.target.value) })
          }
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Product Image URL"
          name="image"
          value={product.image}
          onChange={(e) =>
            setProduct({ ...product, image: e.target.value })
          }
        />
        <button
          style={styles.button}
          type="submit"
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Create Product
        </button>
      </form>
      {/* Toast container for displaying toast messages */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default CreatePage;
