import React, { Component } from 'react';
import Hero from './Hero/Hero';
import LearnSection from './LearnSection/LearnSection';
import CodeSection from './CodeSection/CodeSection';
import GetHiredSection from './GetHiredSection/GetHiredSection';

class Landing extends Component {
    render() {
        return (
            <div>
                <Hero />
                <LearnSection />
                <CodeSection />
                <GetHiredSection />
            </div>
        )
    }
}

export default Landing;
