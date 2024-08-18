import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsGithub} from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
            <img src='https://ucarecdn.com/2a32fdbc-77ca-4732-9b11-3e1a1f86c071/ankitsbloghighresolutionlogoblacktransparent.png' className=' w-[120px] lg:h-[70px] lg:w-[200px]'></img>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://ankit-portfolio-psi.vercel.app/projects'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                 Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                >
                  Ankit's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/AnkitMahato'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Ankit Mahato "
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='mailto:ankit100mahato@gmail.com' target='_blank' icon={MdEmail}/>
            <Footer.Icon href='https://www.linkedin.com/in/ankit-mahato' target='_blank' icon={FaLinkedin}/>
            <Footer.Icon href='https://github.com/AnkitMahato90' target='_blank' icon={BsGithub}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
