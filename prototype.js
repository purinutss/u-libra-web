<div>
  <div className="flex">
    <div className="mb-6">
      <label
        for="firstName"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        First Name
      </label>
      <input
        type="text"
        className="is-invalid shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        name="firstName"
        value={input.firstName}
        onChange={handleChangeInput}
      />
      <div className="invalid-feedback text-red-500">{error.firstName}</div>
    </div>
    <div className="mb-6">
      <label
        for="lastName"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Last Name
      </label>
      <input
        type="text"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        name="lastName"
        value={input.lastName}
        onChange={handleChangeInput}
      />
    </div>
  </div>
  ;
  <div className="flex">
    <div className="mb-6">
      <label
        for="telephone"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Telephone
      </label>
      <input
        type="text"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        name="telephone"
        value={input.telephone}
        onChange={handleChangeInput}
      />
    </div>
    <div className="mb-6">
      <label
        for="email"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Email
      </label>
      <input
        type="email"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        name="email"
        value={input.email}
        onChange={handleChangeInput}
      />
    </div>
  </div>
  ;
  <div className="flex">
    <div className="mb-6">
      <label
        for="password"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Password
      </label>
      <input
        type="password"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        name="password"
        value={input.password}
        onChange={handleChangeInput}
      />
    </div>
    <div className="mb-6">
      <label
        for="confirmPassword"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Confirm password
      </label>
      <input
        type="password"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        name="confirmPassword"
        value={input.confirmPassword}
        onChange={handleChangeInput}
      />
    </div>
  </div>
  ;
</div>;
