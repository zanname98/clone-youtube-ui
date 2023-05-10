import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes as pbRoutes } from '~/routes';
import { DefaultLayout } from '~/componnents/Layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {pbRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
