import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="custom-footer bg-slate-800 max-w-[1250px] mx-auto py-[5rem] mt-10">
      <div className="container mx-auto py-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 px-4">
            <h4 className="text-white mb-4">Column 1</h4>
            <ul>
              <Link to='#' className="text-gray-400 hover:text-white" href="#">Link 1</Link>
              <Link to='#' className="text-gray-400 hover:text-white" href="#">Link 2</Link>
              <Link to='#' className="text-gray-400 hover:text-white" href="#">Link 3</Link>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <h4 className="text-white mb-4">Column 2</h4>
            <ul>
              <Link to='#' className="text-gray-400 hover:text-white" href="#">Link 1</Link>
              <Link to='#' className="text-gray-400 hover:text-white" href="#">Link 2</Link>
              <Link to='#' className="text-gray-400 hover:text-white" href="#">Link 3</Link>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <h4 className="text-white mb-4">Column 3</h4>
            <ul>
              <Link to='#' className="text-gray-400 hover:text-white" href="#">Link 1</Link>
              <Link to='#' className="text-gray-400 hover:text-white" href="#">Link 2</Link>
              <Link to='#' className="text-gray-400 hover:text-white" href="#">Link 3</Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
