import auth from '../../utils/auth';

import { useQuery } from '@apollo/client';

import NeedList from '../../components/NeedList';
import NeedForm from '../../components/NeedForm';

import { QUERY_NEEDS } from '../../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_NEEDS);
  const needs = data?.allNeeds || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <NeedForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <NeedList
              needs={needs}
              title="Some Feed for Need(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;



// export default function Home() {
//   return (
//     <div id="home-page">
//       <h1>Home</h1>
//       <h2>{auth.loggedIn() ? 'We did it!' : 'Not logged in'}</h2>

//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsum, quibusdam rerum quia delectus dolor quis reiciendis accusamus, voluptate rem tempore error in sed molestiae deleniti distinctio nemo at. Praesentium.
//       </p>

//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsum, quibusdam rerum quia delectus dolor quis reiciendis accusamus, voluptate rem tempore error in sed molestiae deleniti distinctio nemo at. Praesentium.
//       </p>
//     </div>
//   );
// }

