import { useState } from "react"
import { useForm } from 'react-hook-form'
import {client} from '../sanity'
export default function Form ({_id}) {

    // Sets up basic data state
    
    const [formData, setFormData] = useState() 
          
    // Sets up our form states 
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)
          
    // Prepares the functions from react-hook-form
    const { register, handleSubmit, formState:{ isValid
    , errors }} = useForm()
  
    // Function for handling the form submission
    const onSubmit = async data => {
        setIsSubmitting(true)
        
        setFormData(data)
              
        try {
          await fetch('/api/createMessage', {
            method: 'POST',
           body: JSON.stringify(data),
           type: 'application/json'
          })  
          setIsSubmitting(false)
          setHasSubmitted(true)
        } catch (err) {
          setFormData(err)
        }
    }
  
    if (isSubmitting) {
      // Returns a "Submitting comment" state if being processed
      return <h3>Submitting message…</h3>
    }
    if (hasSubmitted) {
      // Returns the data that the user submitted for them to preview after submission
      return (
        <>
          <h3>Thanks for your comment!</h3>
          <ul>
            <li>
              Name: {formData.name} <br />
              Email: {formData.email} <br />
              Comment: {formData.message}
            </li>
          </ul>
        </>
      )
    }
  
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg" disabled>
        <input {...register} type="hidden" name="_id" value={_id} />
                                          
        <label className="block mb-5">
          <span className="text-gray-700">Name</span>
          <input { ...register('name', {required: true})} className="form-input mt-1 block w-full" placeholder="John Appleseed"/>
          {errors?.name?.type === 'required' && <p>"First name is required"</p>}
          </label>
                                                                                                                                                                                                                                          
        <label className="block mb-5">
          <span className="text-gray-700">Email</span>
          <input {...register("email", {
            required: "Required",
          })} className="form-input mt-1 block w-full" placeholder="your@email.com"/>
          {errors?.email?.type === 'required' && <p>"Email is required"</p>}
        </label>
      
        <label className="block mb-5">
          <span className="text-gray-700">Comment</span>
          <textarea {...register("message", {
            required: "message",
          })} className="form-textarea mt-1 block w-full" rows="8" placeholder="Enter some long form content."></textarea>
          {errors?.message?.type === 'required' && <p>"First name is required"</p>}
        </label>
        
                                                                                                                                                          
        {/* errors will return when field validation fails  */}
          
        <input type="submit" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" />
      </form>
    )
  }