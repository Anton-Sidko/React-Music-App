import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import StatusBar from './layout/statusBar/StatusBar';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Like from './layout/pages/like/Like';
import Chart from './layout/pages/chart/Chart';
import Artist from './layout/pages/artist/Artist';
import Genre from './layout/pages/genre/Genre';

function App() {
    return (
        <>
            <Router basename="/MusicApp">
                <StatusBar />
                <Header />
                <main className="content-wrap">
                    <Switch>
                        <Route path="/like" component={Like} />
                        <Route path="/chart" component={Chart} />
                        <Route path="/artist" component={Artist} />
                        <Route path="/genre" component={Genre} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
