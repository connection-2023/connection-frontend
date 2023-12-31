import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Button from '@/components/Button/Button';

const SideNavbar = ({ onClick }: { onClick: () => void }) => {
  const sections = [
    {
      id: 'intro',
      label: '클래스 소개',
    },
    {
      id: 'plan',
      label: '일정 및 시간',
    },
    {
      id: 'location',
      label: '진행 장소',
    },
    {
      id: 'price',
      label: '가격',
    },
  ];
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.9 },
    );

    sections.forEach(({ id }) => {
      const elem = document.getElementById(id);
      if (elem) observer.observe(elem);
      sectionRefs.current[id] = elem;
    });

    return () => {
      sections.forEach(({ id }) => {
        const elem = sectionRefs.current[id];
        if (elem) observer.unobserve(elem);
      });
    };
  }, []);

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href');

    if (targetId) {
      const targetElement = sectionRefs.current[targetId.replace('#', '')];

      if (targetElement) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });

        setActiveSection(targetId.replace('#', ''));
      }
    }
  };

  return (
    <aside className="sticky top-0 z-20 h-fit w-fit justify-self-center pt-16 text-lg font-bold">
      <nav
        onClick={handleNavLinkClick}
        className="whitespace-nowrap text-lg font-bold"
      >
        <ul className="mb-6 flex flex-col gap-y-8">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                ref={(ref) => (sectionRefs.current[id] = ref)}
                className={`${
                  activeSection === id ? 'text-sub-color1' : 'text-gray-500'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-20 text-base font-semibold">
        <Button type="submit" onClick={onClick} color="secondary" size="small">
          수정완료
        </Button>
      </div>
    </aside>
  );
};

export default SideNavbar;
