import React from 'react';
import { DefaultButton } from '../CommonUI';

const LandingNextBtn = () => (
    <DefaultButton
        title="GO"
        onPress={() => console.warn("GO")}
    />
);

export default LandingNextBtn;