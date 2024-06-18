'use client';
import { Menu, User, X } from 'lucide-react';
import { FC } from 'react';
import SearchBar from './navbar/SearchBar';
import Button from './ui/Button';
import { useContact, useMenu } from './Provider';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    const { setFormVisibility } = useContact();
    const { showMenu, showMenuVisibility } = useMenu();
    return (
        <nav className="sticky top-0 z-20 flex justify-between p-5 shadow-md bg-body text-info">
            {/* <SearchBar /> */}
            <div>{/* Place holder for search bar */}</div>
            <div className="flex items-center gap-5">
                <Button disabled onClick={setFormVisibility}>
                    Contact Me <User size={18} />
                </Button>

                <button
                    onClick={() => showMenuVisibility(!showMenu)}
                    type="button"
                >
                    <Menu className="flex transition-colors cursor-pointer lg:hidden hover:text-primary" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
