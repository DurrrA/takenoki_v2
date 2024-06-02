import React from 'react'
import { Button, Dialog, Card, Typography, Input } from '@material-tailwind/react'

const BtnFeedback = ({style}) => {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
    <div style={style}>

    <Button className='bg-gray-700' onClick={handleOpen}>Feedback</Button>
    <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
    >
        <Card color="white" shadow={false} className="p-10">
            <Typography variant="h4" color="blue-gray">
                Feedback Form
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Silahkan di isi form berikut untuk memberikan feedback 
            </Typography>
            <form className="mt-8 mb-2 w-full">
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
      </Dialog>
    </div>
    </>
  )
}

export default BtnFeedback;
