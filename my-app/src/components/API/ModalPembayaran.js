import logo from './payment.svg';
import './App.css';

function ModalPembayaran() {
  return (
    <div className="App">
      <header className="App-header">
        <button type="submit">Logo</button>
        <button type="submit">Keluar</button>
      </header>
        <img src={logo} className="App-logo" alt="logo" />
        <p className='utama'>Pemesanan berhasil </p>
        <p>Silahkan cek email untuk melakukan pembayaran </p>
        <button type="submit">Back To Home</button>
        <footer>
          <p>2020 by: FE-18</p>
        </footer>
    </div>

  );
}

export default ModalPembayaran;