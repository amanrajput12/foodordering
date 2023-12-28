import React from "react";
import logo from '../../public/food app.jpg'
const Footer = () => {
    return (
      <React.Fragment>
      <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
			<img className="rounded-full" src={logo} alt="" />
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a  href="#">Terms of Use</a>
				</li>
				<li>
					<a  href="#">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a  href="#">Instagram</a>
			</li>
			<li>
				<a  href="#">Facebook</a>
			</li>
			<li>
				<a href="#">Twitter</a>
			</li>
		</ul>
	</div>
</footer>
         
       
      </React.Fragment>
    );
  };
  export default Footer