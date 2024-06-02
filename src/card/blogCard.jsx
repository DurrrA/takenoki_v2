import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    
  } from "@material-tailwind/react";
import {useState, useEffect,} from "react";
import { useNavigate } from 'react-router-dom';


const CardDefault = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTag, setSelectedTag] = useState('');
    const [error, setError] = useState(null);
    const filterByTag = (tag) => {
        setSelectedTag(tag);
        fetch(`/api/blogs?tag=${tag}`)
            .then(response => response.json())
            .then(data => setBlogs(data));
    }

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);

            try {
                const response = await fetch('dummydatafinal.json')
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBlogs(data);
                
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        const timer = setTimeout(() => {
            setLoading(true);
            fetchBlogs();
          }, 500);
        
          return () => clearTimeout(timer); // This will clear the timer when the component unmounts
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
        }
    if (error) {
        return <h1>Error: {error.message}</h1>
    }

            

    
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-start gap-5">
            {blogs.map((blog, index) => (
                <Card key={index} className="mt-6 w-96 mr-4">
                <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src={blog.gambar}
                    alt={blog.judul}
                />
                </CardHeader>
                <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {blog.judul}
                </Typography>
                <Typography>
                    {blog.konten.substring(0, 100) + "..."}
                </Typography>
                </CardBody>
                <CardFooter className="pt-0" style={{backgroundColor: '#yourColor'}}>
                <Button onClick={() => navigate(`/blog/${blog.id}`)}>
                    Read More
                </Button>
                </CardFooter>
            </Card>
            ))}
            </div>
        </div>
    );
}

export default CardDefault;