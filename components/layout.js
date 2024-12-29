import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <div className="bg-primary flex flex-col" style={{ minHeight: '100vh' }}>
            <Header />
            <div >
                {children}
            </div>
            <div className='mb-16'>

            </div>
            <Footer />
        </div>

    );
}
