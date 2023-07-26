import Create from '@/components/Create';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Todos from '@/components/Todos';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <div className='flex flex-col'>
        <Create />
        <Todos />
      </div>
    </main>
  );
}
