import 'bootstrap/dist/css/bootstrap.css';
import Tablazat from './Tablazat';

function Home(){
    return(
        <>
        <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 bg-torzs">
                        <h3 className='text-dark'>Központi felvételi tájékoztató</h3>
                        <p>
                        A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket. <a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi" target='_blank'>Tájákoztató oldal</a><br/>
                        <img src="logo.png"  className="img-thumbnail" alt="img-thumbnail" title="" /></p>
                    </div>
                    <div className="col-md-4">
                        <h3>Tájékoztatás</h3> 
                        <h3>Jószakma Szakgimnázium </h3>
                        <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.</p><br/>
                        <p><img src="e-mail-marketing-2745489__340.jpg" className="img-thumbnail" alt="marketing" title="marketing" /></p>
                    </div>
                    <div className="col-md-4 bg-torzs">
                    <h3>Az oldal használatáról</h3>
                    <h6>Ön az oldal használatával a következő információkhoz juthat hozzá</h6>
                    <ul>
                    <li>Előzetes rangsor: </li>
                      <ol>
                          <li>Nevek</li>
                          <li>Ágazat</li>
                          <li>Összes pontszám</li>
                      </ol>
                    <li>Előzetes rangsor nyelvi előkészítő</li>
                    <li>A felvettek névsora</li>
                    </ul>  
                    </div>
                </div>
                <div>
                        <h3>A felvételt nyert tanulók névsora a nyelvi előkészítőre</h3>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;