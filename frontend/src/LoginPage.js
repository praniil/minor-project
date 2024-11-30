function LoginPage() {
  return (
    <>
      <div className="h-3/4 w-[60%] rounded-xl bg-slate-800 flex">
        {/* SIDE IMAGE */}
        <div className="h-full w-full rounded-md">
          <img
            src="\images\loginimg.jpg"
            className="h-full w-full p-2 rounded-2xl"
            alt="wine"
          />
        </div>

        {/* LOGIN FORM */}
        <div className="h-full w-full rounded-md cursor-pointer">
          <form className=" h-full flex flex-col items-center gap-5 p-14">
            <div className="text-3xl text-white">CREATE AN ACCOUNT</div>
            <div className="text-white">Already exists ? Log in</div>

            <div className="w-full flex justify-center gap-5">
              <input
                type="text"
                className="p-5 rounded-md h-10 outline-none"
                placeholder="First name"
              />
              <input
                type="text"
                className="p-5 rounded-md h-10 outline-none"
                placeholder="Last name"
              />
            </div>

            <input
              type="email"
              className="p-5 w-full rounded-md h-10 outline-none"
              placeholder="Email"
            />
            <input
              type="password"
              className="p-5 w-full rounded-md h-10 outline-none"
              placeholder="Password"
            />

            <button
              className="p-5 w-full rounded-md h-10 outline-none bg-purple-700 text-white flex items-center justify-center"
              type="submit"
            >
              Create an account
            </button>

            <div className="flex items-center justify-center">
              <div className="text-white">Or register with</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
