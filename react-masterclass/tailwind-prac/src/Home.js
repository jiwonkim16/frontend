const Home = () => {
  return (
    <form className="flex flex-col space-y-2 p-5">
      <input
        type="text"
        required
        placeholder="Username"
        className="peer border p-1 border-gray-400 rounded"
      />
      <span className="hidden peer-invalid:block peer-invalid:text-red-500">
        This input is invalid
      </span>
      <input type="submit" value="Login" className="bg-white" />
    </form>
  );
};

export default Home;
