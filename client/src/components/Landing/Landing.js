import React, { Component } from 'react';
import Hero from './Hero/Hero';
import LearnSection from './LearnSection/LearnSection';
import CodeSection from './CodeSection/CodeSection';
import GetHiredSection from './GetHiredSection/GetHiredSection';
import Footer from './Footer/Footer';

class Landing extends Component {
    render() {
        return (
            <div>
                <Hero />
                <LearnSection />
                <CodeSection />
                <GetHiredSection />
                <Footer />
            </div>
        )
    }
}

export default Landing;
