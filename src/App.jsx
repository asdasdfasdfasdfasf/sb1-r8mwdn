import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServicesOverview from './pages/services/ServicesOverview';
import CloudSolutions from './pages/services/CloudSolutions';
import Cybersecurity from './pages/services/Cybersecurity';
import DataAnalytics from './pages/services/DataAnalytics';
import ApplicationDev from './pages/services/ApplicationDev';
import ErpSolutions from './pages/services/ErpSolutions';
import ContractStaffing from './pages/services/ContractStaffing';
import ProductsOverview from './pages/products/ProductsOverview';
import DigitalSolutions from './pages/products/DigitalSolutions';
import EnterpriseSoftware from './pages/products/EnterpriseSoftware';
import MobileApplications from './pages/products/MobileApplications';
import Careers from './pages/careers/Careers';
import CurrentOpenings from './pages/careers/CurrentOpenings';
import LifeAtCompany from './pages/careers/LifeAtCompany';
import Benefits from './pages/careers/Benefits';
import InvestorRelations from './pages/InvestorRelations';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Services Routes */}
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/application-development" element={<ApplicationDev />} />
        <Route path="/services/erp-solutions" element={<ErpSolutions />} />
        <Route path="/services/contract-staffing" element={<ContractStaffing />} />
        
        {/* Products Routes */}
        <Route path="/products" element={<ProductsOverview />} />
        <Route path="/products/digital-solutions" element={<DigitalSolutions />} />
        <Route path="/products/enterprise-software" element={<EnterpriseSoftware />} />
        <Route path="/products/mobile-applications" element={<MobileApplications />} />
        
        {/* Careers Routes */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/openings" element={<CurrentOpenings />} />
        <Route path="/careers/life" element={<LifeAtCompany />} />
        <Route path="/careers/benefits" element={<Benefits />} />
        
        {/* Other Routes */}
        <Route path="/investor-relations" element={<InvestorRelations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;