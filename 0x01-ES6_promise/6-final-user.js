import signUpUser from `./4-user-promise.js`;
import uploadPhoto from `./5-photo-reject`

export default function handleProfileSignup(firstName, lastName, fileName) {
    import function name(params) {
        
    }
    return Promise.allSettled([
        {
          status: status_of_the_promise,
          value: value or error returned by the Promise
        },
      ]).then((values) => {
        const arr = [];
        for (const item of values) {
          arr.push({ status: item.status, value: item.value || item.reason });
        }
        return arr;
      });
}
