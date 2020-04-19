import React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
    console.log(`Inside navigation with params: ${name} and ${params}`);
    console.log(navigationRef);
    navigationRef.current?.navigate(name, params);
}