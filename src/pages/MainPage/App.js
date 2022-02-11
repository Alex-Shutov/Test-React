import React, {useState} from 'react';
import style from './style.css'
import FormComponent from "../../components/FormComponent/FormComponent";
import Api from "../../api/api";

function App() {

    const [usersList,setUserList] = useState([])
    const [initList, setInitList] = useState({
        name:'',
        age:'',
        debt:'',
        choose:'',
    })

    const handlerSubmitForm = () => {
        const data = new FormData()
        for (let value in initList) {

            data.append(value, initList[value]);
            console.log(data.get(value))

        }
        data.append('token',`${new Date().getTime()}_Pref${initList.name}_${initList.age}`)


            //Api.addUser(data)
            // .then((res)=>res.data)
            // .then(()=>Api.getUser(data.get('token')))
            //     .then((res)=>setUserList([...initList,...res.data]))
    }


  return (
    <div className={style.main}>
        <h2 className={style.header}>Форма для заполнения</h2>
        <div className={style.formContent}>
      <FormComponent
          onSubmitForm={()=>handlerSubmitForm()}
          initValues={initList}
          setValues={setInitList}
      />
        </div>
        <h4 className={style.tableHeader}>Таблица пользователей</h4>
        <div className={style.usersContent}>
            {usersList.length!==0 && usersList.map((user)=>(
                //todo : Добавление UserComponent
                <>
                    {user}
                </>
            ))}
        </div>
    </div>
  );
}

export default App;
