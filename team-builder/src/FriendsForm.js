

export default function FriendsForm (params){
const {formData} = params;
console.log(formData)


    return (
        <div>
            <form>
                <input type='text' placeholder='First Name' name='fname'></input>
                <input type='text' placeholder='Last Name' name='lname'></input>
                <input type='text' placeholder='Email' name='email'></input>
            </form>
        </div>
    )
}