import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SpotifyFirstPage } from '../pages/spotifyFirstPage'
import { SpotifySignUp } from './../pages/spotifySignUp/index';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SpotifyFirstPage} />
        <Route path='/br/signup/' component={SpotifySignUp} />
      </Switch>
    </Router>
  )
}