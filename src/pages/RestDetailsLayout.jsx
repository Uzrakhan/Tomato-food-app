// RestaurantDetailsLayout.jsx
import { NavLink, Outlet, useParams } from 'react-router-dom';

const RestaurantDetailsLayout = () => {
  const { id } = useParams();

  return (
    <div className="restaurant-details">
      {/* Tabs Navigation */}
      <div className="tabs-container">
        <NavLink
          to={`/restaurant/${id}`}
          end // Important for matching exact path
          className={({ isActive }) => `tab ${isActive ? 'active-tab' : ''}`}
        >
          Overview
        </NavLink>
        <NavLink
          to={`/restaurant/${id}/orderonline`}
          className={({ isActive }) => `tab ${isActive ? 'active-tab' : ''}`}
        >
          Order Online
        </NavLink>
      </div>

      {/* Content Area */}
      <Outlet />
    </div>
  );
};

export default RestaurantDetailsLayout;