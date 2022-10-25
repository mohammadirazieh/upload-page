import logo from "./Images/bina_logo.png"
import back1 from "./Images/back_1.jpg"
import './App.css';
import Mycomponent from './compontens/list/Mycomponent';

var myList = [
  'امیر',
  'علی',
  'اکبر'
];


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <span className="Logo-background">
          <img src={logo} className="App-logo" alt="logo" />
        </span>
        <div className="menu1">
          <span className="s1">
            صفحه اصلی
          </span>
          <span className="s1">
            | اتاق وضعبت
          </span>        <span className="s1">
            | بلاگ
          </span>        <span className="s1">
            | محصولات تحلیلی
          </span>        <span className="s1">
            | درباره ما
          </span>        <span className="s1">
            | درباره
          </span>
        </div>

      </header>
      <body className='body'>
        <div className="all">
          <div className="right">
            <div>
              <button className="exit">
                خروج
              </button>
              <button className="exit">
                ورود به پنل مدیر
              </button>
            </div>
          </div>
          <div className="left">
            <div>
              <span className="upload">
                بارگذاری فایل
                <button className="up">
                </button>
              </span>
            </div>
            <div>
              <span>
                  توضیحات فایل
                <button className="explain">
                </button>
              </span>
            </div>
          </div>

        </div>
        {
          myList.map((item) => {
            return <Mycomponent title={item} />
          })
        }
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
