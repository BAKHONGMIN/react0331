import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
const Interview = (props) => {   
    //함수형 컴포넌트에서는 this를 쓰지않는다
    let [ interviewId, interviewIdUpdate ] = useState([]);  
    const [typeData,insertDB] = useState(0);   
   
    const interviewDataSetting = async () => {                      
                                    axios({
                                        url : `/prointerview?type=${props.botable}`,
                                        method :  'POST',
                                    })
                                        .then(

                                            (result) => {  

                                                //select전용
                                                try{  
                                                    console.log(result)
                                                    interviewIdUpdate([...result.data]); 
                                                    insertDB(result.data[ result.data.length - 1 ].no);                                                 
                                                }
                                                catch(err){ console.log(err.message) }



                                            }
                                        )
                                        .catch ( e => { console.log(e +'이유로 통신이 불안전함') }
                                        ) 
    } 
    useEffect( () => {  interviewDataSetting(); } , [typeData]  ) 
    //typeData이 값이 변할때 재랜더링해라.
    
    

        return (  
            <div> <h2>{ interviewId.length > 0 ? props.titlenm : "데이터전송중..." }</h2>
             {
                 interviewId.map(( contant, i ) => {
                     return(
                         <li key={contant.no}>
                             <h3>{i+1} {contant.subject}</h3><div>{contant.content}</div>
                         </li>
                     )
                 })
             }
             <section id='formContent'>
                 <h2>면접제안</h2>
                 <div>
                     <from action='/prointerview?type=write' method='post' name='meetSuppose'>
                        <div className='inner'>
                            <dl className='row mx-0'>
                                <dt className='col-md-3'><label for='subject'>타이틀</label></dt>
                                <dd className='col-md-9'>
                                    <input type='text' name='subject' id='subject' />
                                </dd>

                                <dt className='col-md-3'><label for='wr_content'>타이틀</label></dt>
                                <dd className='col-md-9'>
                                    <textarea rows='5' id='wr_content' name='wr_content'>

                                    </textarea>
                                </dd>

                                <dt className='col-md-3'><label for='subject'>타이틀</label></dt>
                                <dd className='col-md-9'>
                                    <input type='text' name='subject' id='subject' />
                                </dd>
                            </dl>
                            <input type="submit" className="btn" value="제안하기" />
                        </div>
                     </from>
                 </div>
             </section>
            </div>
        );   
}
export default Interview;