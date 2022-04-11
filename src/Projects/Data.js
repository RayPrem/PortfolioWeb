import {
    FaGithub,
   
    
    FaApple,
    
    FaSearchDollar,
    FaDesktop,
  } from "react-icons/fa";
import {RiAdminFill} from "react-icons/ri"
import {CgWebsite} from "react-icons/cg"
export const Data=[
    {id:1,title:"Home" ,cname:"nav-links" ,to:"/",aclass:"active"},
    {id:2,title:"Services",cname:"nav-links",to:"/Services"},
    {id:3,title:"About",cname:"nav-links",to:"/About"},
    {id:4,title:"Skills",cname:"nav-links",to:"/Skills"},
    //{id:5,title:"Portfolio",cname:"nav-links",to:"/Portfolio"},
    {id:6,title:"Blogs",cname:"nav-links",to:"/Blogs"},
    {id:7,title:"Contact",cname:"nav-links",to:"/Contact"},
]
export const state =[
    { id: 1, title: "Name:", text: "Prem Prasad Tharu" },
    { id: 2, title: "Email:", text: "Rayprem987@gmail.com" },
    { id: 3, title: "Phone:", text: "+9779815423275" },
    { id: 4, title: "Linkedin", text: "prem-prasad-tharu-54a172186" },
  ]
export const service = [
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "",
    },
    {
      id: 2,
      icon: <RiAdminFill className="commonIcons" />,
      heading: "System Administration",
      text:
        "",
    },
    {
      id: 3,
      icon: <CgWebsite className="commonIcons" />,
      heading: "Web Design",
      text:
        "",
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "",
    },
    {
      id: 5,
      icon: <FaDesktop className="commonIcons" />,
      heading: "Desktop Application",
      text:
        "",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "SEO Expert",
      text:
        "",
    },
  ]
  export const skill=[
    {id:1,title:'HTML',Percent:'90%',line:'line',pro:'html'},
    {id:2,title:'CSS',Percent:'70%',line:'line',pro:'css'},
    {id:3,title:'SASS',Percent:'60%',line:'line',pro:'sass'},
    {id:4,title:'PYTHON(Django)',line:'line',Percent:'80%',pro:'dj'},
    {id:5,title:'REACT JS',line:'line',Percent:'85%',pro:'js'},
    {id:6,title:'REACT Native',line:'line',Percent:'80%',pro:'nt'},
    {id:7,title:'PYTHON(Tkinter)',line:'line',Percent:'75%',pro:'tk'},
    {id:8,title:'Digital Marketing',line:'line',Percent:'60%',pro:'dm'},
    {id:9,title:'Java',line:'line',Percent:'60%',pro:'jv'},
    {id:10,title:'MYSQL',line:'line',Percent:'70%',pro:'my'},
    {id:11,title:'MangoDB',line:'line',Percent:'80%',pro:'md'},
    {id:11,title:'System Administration',line:'line',Percent:'90%',pro:'sa'},

  ]