import { useFormContext } from "react-hook-form"
import { FormData } from "../../pages/multi-form/form-type"


export default function Review() {
    const { watch } = useFormContext<FormData>()
    const values = watch()

  return (
    <div className="space-y-6 py-5">
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Personal Information</h3>
      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
        <div>
          <p className="text-sm text-gray-500">First Name</p>
          <p className="font-medium">{values.firstName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Last Name</p>
          <p className="font-medium">{values.lastName}</p>
        </div>
        <div className="col-span-2">
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium">{values.email}</p>
        </div>
      </div>
    </div>

    <div className="space-y-2">
      <h3 className="text-lg font-medium">Contact Details</h3>
      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
        <div>
          <p className="text-sm text-gray-500">Phone</p>
          <p className="font-medium">{values.phone}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">City</p>
          <p className="font-medium">{values.city}</p>
        </div>
        <div className="col-span-2">
          <p className="text-sm text-gray-500">Address</p>
          <p className="font-medium">{values.address}</p>
        </div>
      </div>
    </div>
  </div>
  )
}
