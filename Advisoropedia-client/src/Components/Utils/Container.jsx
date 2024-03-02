import PropTypes from 'prop-types';

const Container = ({children,className }) => {

  return (
    <div className={`${className} container mx-auto px-2 md:px-3 lg:px-4`}>
       {children}
    </div>
  )
};

Container.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
};

export default Container;
