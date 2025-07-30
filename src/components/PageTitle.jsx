import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageTitle = ({ title, breadcrumbs, isDarkTheme = true }) => {
  const themeClasses = isDarkTheme
    ? {
        background: 'bg-gray-900',
        text: 'text-white',
        breadcrumbText: 'text-gray-400',
        breadcrumbTextHover: 'hover:text-gray-200',
        breadcrumbTextCurrent: 'text-gray-200',
        decorativeLine: 'bg-gray-700',
        waveFill: 'text-gray-800',
      }
    : {
        background: 'bg-gray-100',
        text: 'text-gray-800',
        breadcrumbText: 'text-gray-600',
        breadcrumbTextHover: 'hover:text-gray-800',
        breadcrumbTextCurrent: 'text-gray-800',
        decorativeLine: 'bg-gray-400',
        waveFill: 'text-white',
      };

  return (
    <div className={`${themeClasses.background} py-16 md:py-24 relative`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-4">
            <ol className="flex flex-wrap items-center text-sm md:text-base">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className={`w-4 h-4 mx-2 ${themeClasses.breadcrumbText}`} />
                  )}
                  {breadcrumb.link ? (
                    <Link
                      to={breadcrumb.link}
                      className={`${themeClasses.breadcrumbText} ${themeClasses.breadcrumbTextHover} transition-colors duration-200 ${
                        breadcrumb.current ? `${themeClasses.breadcrumbTextCurrent} font-semibold` : ''
                      }`}
                    >
                      {breadcrumb.name}
                    </Link>
                  ) : (
                    <span className={breadcrumb.current ? `${themeClasses.breadcrumbTextCurrent} font-semibold` : themeClasses.breadcrumbText}>
                      {breadcrumb.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className={`text-4xl md:text-5xl font-bold ${themeClasses.text} mb-4`}>
            {title}
          </h1>
          <div className={`w-20 h-1 ${themeClasses.decorativeLine} rounded-full`}></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className={`relative block w-full h-12 ${themeClasses.waveFill}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
      current: PropTypes.bool,
    })
  ).isRequired,
  isDarkTheme: PropTypes.bool,
};

export default PageTitle;