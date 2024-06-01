import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import MyNavbar from '../components/navbar';

const TentangKami = () => {
  return (
    <div className="overflow-hidden">
  <MyNavbar />
  <div className="flex justify-center items-center h-screen bg-transparent">
    <Card color="white" shadow={false} className="p-10">
      <Typography variant="h4" color="blue-gray">
        Feedback Form
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Silahkan di isi form berikut untuk memberikan feedback 
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Feedback For Us
          </Typography>
          <div className="flex items-center justify-between">
            <textarea
                type="text"
                rows="5" // Adjust the number of rows as needed
                placeholder="Your feedback"
                color='white'
                className="w-full p-3 border border-t-blue-gray-200 focus:border-t-gray-900 bg-white text-gray-900 rounded-lg"
            ></textarea>
          </div>
        </div>
        <Button className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  </div>
</div>

  )
}

export default TentangKami
