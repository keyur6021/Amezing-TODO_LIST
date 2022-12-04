import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { RxUpload } from 'react-icons/rx'


function App() {

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [oldVal, setoldVal] = useState('');


  const addHandleClick = () => {
    console.log("test");

    if (isUpdate) {
      let oldData = data.filter((value) => {
        return value !== oldVal
      })

      setData([...oldData, value])
      setValue('')
      setIsUpdate(false)
    }
    else {
      setData([...data, value])
      setValue('')

    }
  }

  const updateHandleClick = (data1) => {
    setValue(data1)
    setoldVal(data1)
    setIsUpdate(true)
  }

  const deleteHandleClick = (data1) => {
    setData(data.filter((data) => {
      return data !== data1
    }))
  }


  return (
    <div className="App">
      <div className='main-parent'>
        <div className='title-todo'>
          Task List Of 2022
        </div>
        <div className='main-card mt-2'>
          <div className='card'>
            <div className='input-main'>

              <input type='text' value={value} placeholder='What do you have planned?' className='search-text' onChange={(e) => setValue(e.target.value)} />

              <button onClick={addHandleClick} className='add-button m-1'>
                <span>
                  {isUpdate ? "UPDATE" : "ADD TASK"}
                </span>
              </button>

            </div>

            <div>
              {
                data.map((data1, index) => {
                  return (
                    <div key={index}>
                      <div className='content-main mt-3'>
                        <div className='content-todo'>
                          {data1}
                        </div>
                        <div className='content'>

                          {!isUpdate &&
                            <button
                              className='update-button'
                              onClick={() => updateHandleClick(data1)}
                            >
                              <RxUpload style={{ paddingRight: '2px' }} />
                              UPDATE</button>
                          }

                        </div>
                        <div className='content'>
                          <button
                            className="delete-button"
                            onClick={() => deleteHandleClick(data1)}
                          >
                            <RiDeleteBin6Fill style={{ paddingRight: '2px' }} />
                            DELETE
                          </button>

                        </div>
                      </div>








                    </div>
                  )
                })
              }
            </div>
          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
