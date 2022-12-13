import '../css/mycustom.css';

export default function Control(){

    return(
        <div className='box'>
            <div className='item' onClick={()=>{window.open('https://salmansaeed.us');}}>Base</div>
            <div className='item' onClick={()=>{window.open('https://salmansaeed.us/notes/admin');}}>Notes</div>
            <div className='item' onClick={()=>{window.open('https://nationalsoftwaresolutions.com/beliefprofits/');}}>NSS Admin</div>
        </div>
    );
}