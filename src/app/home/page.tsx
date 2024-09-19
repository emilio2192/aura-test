import LoggedLayout from '../components/PrincipalLayout';
import InformationComponent from './InformationComponent';
import WelcomeComponent from './components/WelcomeComponent';


export default function HomePage() {
  return (
    <LoggedLayout>
      <InformationComponent />
      <WelcomeComponent />
    </LoggedLayout>
  );
}