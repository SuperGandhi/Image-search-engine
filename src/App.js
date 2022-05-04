import { Formik, Form, Field} from "formik";
import { useState } from "react";
import "./header.css"

const App=()=> {
  const [photos, setPhotos] = useState([])
  console.log({photos});
  return (
    <div>
      <header>
        <Formik
          initialValues={{search:''}}
          onSubmit={async values =>{
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                'Authorization' : 'Client-ID KhpcZpBiy_yUk1D6MeY7VgUYe6Z2YlM4BKXqBK2dA1A'
              }
            })
            const data = await response.json()
            // call api unplash
            setPhotos(data.results)
          }} 
        >
          <Form>
            <Field name="search"/>
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default App;
