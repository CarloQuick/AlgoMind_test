// This is the layout for the User Dashboard
import Sidebar from './Sidebar';

const DBLayout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar /> {/* This allows the sidebar to be displayed across different dashboard links*/}
            <main className="flex-1">
                {children} {/* This is where the page content will go */}
            </main>
        </div>
    );
};

export default DBLayout;