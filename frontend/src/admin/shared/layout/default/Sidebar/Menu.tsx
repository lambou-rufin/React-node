import classNames from 'classnames';
import React, { useEffect } from 'react';

// import getParents from '../../../utilities/getParents';
import getParents from '../../../utilities/getParents';
import slideDown from '../../../utilities/slideDown';
import slideUp from '../../../utilities/slideUp';

import { Link, NavLink, useNavigate } from 'react-router-dom';

const MenuHeading: React.FC<any> = ({ className, text, ...props }) => {
  const compClass = classNames({
    'nk-menu-heading': true,
    [className]: className
  });
  return (
    <li className={compClass}>
      <h6 className="overline-title">{text || props.children}</h6>
    </li>
  );
};

const MenuItemTemplate: React.FC<any> = ({ text, icon, to }) => {
  const navigate = useNavigate();
  const onNavigate = (location: string) => {
    if (location) navigate(location);
  };
  return (
    <>
      {icon && (
        <span className="nk-menu-icon">
          <em className={`icon ni ni-${icon}`}></em>
        </span>
      )}
      {text && (
        <span className="nk-menu-text" onClick={() => onNavigate(to)}>
          {text}
        </span>
      )}
    </>
  );
};

const MenuItemLink: React.FC<any> = ({ text, icon, sub, to, blank, onClick }) => {
  return (
    <>
      {!blank && !sub && (
        <NavLink className="nk-menu-link" to={to}>
          <MenuItemTemplate icon={icon} text={text} />
        </NavLink>
      )}
      {blank && (
        <Link className="nk-menu-link" to={to} target="_blank">
          <MenuItemTemplate icon={icon} text={text} />
        </Link>
      )}
      {sub && (
        <a className="nk-menu-link nk-menu-toggle" onClick={onClick} href="#expand">
          <MenuItemTemplate icon={icon} text={text} to={to} />
        </a>
      )}
    </>
  );
};

const MenuItem: React.FC<any> = ({ sub, className, ...props }) => {
  const compClass = classNames({
    'nk-menu-item': true,
    'has-sub': sub,
    [className]: className
  });
  return <li className={compClass}>{props.children}</li>;
};

const MenuSub: React.FC<any> = ({ mega, className, ...props }) => {
  const compClass = classNames({
    'nk-menu-sub': true,
    [className]: className
  });
  return <ul className={compClass}>{props.children}</ul>;
};

const MenuList: React.FC<any> = ({ className, ...props }) => {
  const compClass = classNames({
    'nk-menu': true,
    [className]: className
  });
  return <ul className={compClass}>{props.children}</ul>;
};

const Menu: React.FC<any> = () => {
  // variables for Sidebar
  const menu = {
    classes: {
      main: 'nk-menu',
      item: 'nk-menu-item',
      link: 'nk-menu-link',
      toggle: 'nk-menu-toggle',
      sub: 'nk-menu-sub',
      subparent: 'has-sub',
      active: 'active',
      current: 'current-page'
    }
  };
  const navigate = useNavigate();

  const currentLink = (selector: any) => {
    const elm = document.querySelectorAll(selector);
    elm.forEach(function (item) {
      const activeRouterLink = item.classList.contains('active');
      if (activeRouterLink) {
        const parents = getParents(item, `.${menu.classes.main}`, menu.classes.item);
        parents.forEach((parentElemets: any) => {
          parentElemets.classList.add(menu.classes.active, menu.classes.current);
          const subItem = parentElemets.querySelector(`.${menu.classes.sub}`);
          subItem !== null && (subItem.style.display = 'block');
        });
      } else {
        item.parentElement.classList.remove(menu.classes.active, menu.classes.current);
      }
    });
  };

  // dropdown toggle
  const dropdownToggle = (elm: any) => {
    const parent = elm.parentElement;
    const nextelm = elm.nextElementSibling;
    const speed = nextelm.children.length > 5 ? 400 + nextelm.children.length * 10 : 400;
    if (!parent.classList.contains(menu.classes.active)) {
      parent.classList.add(menu.classes.active);
      slideDown(nextelm, speed);
    } else {
      parent.classList.remove(menu.classes.active);
      slideUp(nextelm, speed);
    }
  };

  // dropdown close siblings
  const closeSiblings = (elm: any) => {
    const parent = elm.parentElement;
    const siblings = parent.parentElement.children;
    Array.from(siblings).forEach((item: any) => {
      if (item !== parent) {
        item.classList.remove(menu.classes.active);
        if (item.classList.contains(menu.classes.subparent)) {
          const subitem = item.querySelectorAll(`.${menu.classes.sub}`);
          subitem.forEach((child: any) => {
            child.parentElement.classList.remove(menu.classes.active);
            slideUp(child, 400);
          });
        }
      }
    });
  };

  const menuToggle = (e: any) => {
    e.preventDefault();
    const item = e.target.closest(`.${menu.classes.toggle}`);
    dropdownToggle(item);
    closeSiblings(item);
  };

  useEffect(() => {
    currentLink(`.${menu.classes.link}`);
    // eslint-disable-next-line
  }, [null]);

  return (
    <MenuList>
      <MenuItem>
        <MenuItemLink icon="dashboard" text="Tableaux de bord" to="/admin/dashboard" />
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink
          icon="user-alt"
          text="Personne"
          onClick={(e: any) => {
            navigate('/admin/person/list');
            menuToggle(e);
          }}
          sub
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Rechercher" to="/admin/person/chearch" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Catégories" to="/admin/person/category" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Rôles" to="/admin/person/role" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Permissions" to="/admin/person/permissions" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Services" to="/admin/person/service" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Remarques" to="/apps/kanban/custom" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Paramètres par défaut" to="/apps/kanban/custom" />
          </MenuItem>
        </MenuSub>
      </MenuItem>

      <MenuItem>
        <MenuItemLink icon="inbox" text="Process" to="/admin/process" />
      </MenuItem>

      <MenuItem sub>
        <MenuItemLink
          icon="calendar-booking"
          text="Evènements"
          onClick={(e: any) => {
            navigate('/admin/event/list');
            menuToggle(e);
          }}
          sub
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Type d'évènement" to="/admin/event/type" />
            <MenuItemLink text="Chant" to="/admin/event/song" />
          </MenuItem>
        </MenuSub>
      </MenuItem>

      <MenuItem>
        <MenuItemLink icon="users" text="Communautés" to="/admin/community" />
      </MenuItem>

      <MenuItem>
        <MenuItemLink icon="comments" text="Conversations" to="/apps/calendar" />
      </MenuItem>

      <MenuItem>
        <MenuItemLink icon="sign-euro" text="Dons" to="/apps/calendar" />
      </MenuItem>

      <MenuItem>
        <MenuItemLink icon="book-read" text="Formations" to="/apps/calendar" />
      </MenuItem>

      <MenuItem sub>
        <MenuItemLink icon="setting" text="Paramétrage" onClick={menuToggle} sub />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Thème" to="/admin/process/theme" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Site" to="/admin/site" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Découvrir" to="/admin/setting/discover" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Slider" to="/admin/setting/slider" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
