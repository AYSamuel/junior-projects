import Create from '@/components/Create';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Todos from '@/components/Todos';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <div className='flex xs:flex-col lgl:flex-row lgl:mt-10'>
        <Create />
        <Todos />
      </div>
    </main>
  );
}
