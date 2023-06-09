const Footer2 = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="mt-[10rem] bg-gray-100 dark:bg-[rgb(0,0,0)] text-sm">
      <div className="w-[100%] m-[auto] bg-gray-800 h-[2px]"></div>
      <div className="m-[auto] pb-8 pt-5 text-gray-800 dark:text-gray-400 dark:font-light flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%] text-base">
        <p>© {year} CampusCrate. All Rights Reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a className="text-base font-medium text-pink-600" href="https://github.com/Harshkumar62367/CampusCrate">
            CampusCrate Team
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer2;
