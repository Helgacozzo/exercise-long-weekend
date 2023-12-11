export default function CustomList({ type, list }) {

    return (

      <>

        {type === 'ul' && (
          <ul>
            {list.map((elem, i) => (
              <li key={i}>{elem}</li>
            ))}
          </ul>
        )}
  
        {type === 'ol' && (
          <ol>
            {list.map((elem, ix) => (
              <li key={ix}>{elem}</li>
            ))}
          </ol>
        )}

      </>

    );
    
  }