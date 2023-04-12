import { Formik, useFormik } from "formik";
export default function FormikDemo()
{
    const formik = useFormik({
        initialValues: {
           UserName: '',
           Password: '',
           City:'',
           Subscribe: true
        },
        onSubmit: values =>{
            alert(`${values.UserName}\nSubscription: ${(values.Subscribe==true)?"Subscribed":"Not Subscribed"}`);

        }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>Username</dt>
                    <dd><input name ="UserName" onChange={formik.handleChange}  value={formik.values.UserName} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input name="Password"onChange={formik.handleChange} value={formik.values.Password} type="password"/></dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={formik.handleChange} value={formik.values.City} name="City">
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dt>Subscribe</dt>
                    <dd className="form-switch"><input className="form-check-input" name="Subscribe" onChange={formik.handleChange} checked={formik.values.Subscribe} type="checkbox"/>Yes</dd>
                </dl>
                <button>Register</button>
            </form>
            
            
        </div>
    )
}