const Register = () => {
  return (
    <div className="text-center py-8">
      <div className="bg-slate-700 py-6 w-1/2 mx-auto">
        <h2 className="text-3xl text-white">Please Register</h2>
        <form>
          <input
            className="w-2/3 mb-4 mt-4 border-black border-[1px] pl-3 py-2"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <br />
          <input
            className="w-2/3 mb-4 border-black border-[1px] pl-3 py-2"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <br />
          <input
            className="w-2/3 mb-4 border-black border-[1px] pl-3 py-2"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <br />
          <input
            className="btn btn-success w-1/3 border-black border-[1px]"
            type="submit"
            value="Register"
          />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Register;
