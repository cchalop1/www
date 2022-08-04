const Contact = () => {
  return (
    <button onClick={() => window.open('mailto:clement.chalopin@gmail.com')} className="mt-10 py-2 px-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-center mr-2 mb-2">
      Contact me
    </button>
  );
};

export default Contact;
