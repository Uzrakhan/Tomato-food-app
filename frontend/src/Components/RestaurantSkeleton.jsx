import React from "react";
import { Skeleton, Box, Grid } from '@mui/material';

const RestaurantSkeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1,2,3,4,5,6,7,8].map((n) => (
                <Box key={n} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />

                    <Box sx={{ pt:2, px:1 , pb:2 }}>
                        <Skeleton variant="text" width="80%" height={30} animation="wave" />
                        <Skeleton variant="text" width="60%" height={20} animation="wave" />
                        {/* Rating/Price Placeholder */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                            <Skeleton variant="rectangular" width="20%" height={20} animation="wave" />
                            <Skeleton variant="rectangular" width="30%" height={20} animation="wave" />
                        </Box>
                    </Box>
                </Box>

            ))}
        </div>
    )
}

export default RestaurantSkeleton;