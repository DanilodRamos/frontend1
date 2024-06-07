import Trash from '../../assets/Trash.svg';

export function Home() {


  return (

    <><div className='container'>
      <form>
        <h1>Cadastrar Usuários</h1>
        <input name='nome' type='text'></input>
        <input name='idade' type='number'></input>
        <input name='email' type='email'></input>
        <button type='button'>Cadastrar</button>
      </form>
    </div><div><div>
      <p>Nome:  </p>
      <p>Idade: </p>
      <p>Email: </p>
    </div>
        <button>
          <img src={Trash} />
        </button>
      </div>
    </>); div >

    ;
}
