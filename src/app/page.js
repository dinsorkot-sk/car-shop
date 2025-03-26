import Navbar from '@/components/navbar';
import FindTires from '@/components/findTires'


export default function Home() {
  return (
    <div className='container mx-auto border-2'>
      <Navbar></Navbar>
      <div className='m-2'>
        <FindTires></FindTires>
      </div>
    </div>
  );
}
