import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BreadCrumbEditSong: React.FC = () => {
  return (
    <Breadcrumb className="breadcrumb-arrow">
      <Breadcrumb.Item href="/admin/event/song/list">
        <span style={{ color: '#787c9e', fontWeight: 500 }}>Chant</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        <b>Edition</b>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

const BreadCrumbLyricsSong: React.FC = () => {
  return (
    <Breadcrumb className="breadcrumb-arrow">
      <Breadcrumb.Item href="/admin/event/song/list">
        <span style={{ color: '#787c9e', fontWeight: 500 }}>Chant</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        <b>Parole</b>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

const BreadCrumbEvent: React.FC<{ nameEvent: string; active?: string }> = ({ nameEvent, active }) => {
  return (
    <Breadcrumb className="breadcrumb-arrow">
      <Breadcrumb.Item href="/admin/event/list">
        <span style={{ color: '#787c9e', fontWeight: 500 }}>Évènement</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        <b>{nameEvent}</b>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
const BreadCrumbSession: React.FC<{
  nameSession: string;
  nameEvent: string;
  active?: string;
  idEvent: string;
}> = ({ nameSession, nameEvent, active, idEvent }) => {
  const onclickEvent = () => {
    localStorage.setItem('statusEvent', 'navigation');
  };
  return (
    <Breadcrumb className="breadcrumb-arrow">
      <Breadcrumb.Item href={`/admin/event/list`}>
        <span style={{ color: '#787c9e', fontWeight: 500 }}>Évènement</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href={`/admin/event/detail/${idEvent}`} onClick={onclickEvent}>
        <span style={{ color: '#787c9e', fontWeight: 500 }}>{nameEvent}</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        <b>{nameSession}</b>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

const BreadCrumbs: React.FC<{
  from: string;
  actualLocation: string;
  fromHref: string;
  active?: string;
}> = ({ from, actualLocation, fromHref, active }) => {
  return (
    <div>
      <Link to={fromHref}>
        <span style={{ fontSize: "14.4px", color: '#787c9e', fontWeight: 500 }}>{from} <span className='mx-1'>&gt;</span></span>
      </Link>
      <span style={{ fontSize: "14.4px", color: '#43476B', whiteSpace: 'nowrap' }}> <b>{actualLocation}</b></span>
    </div>
  )
  return (
    <Breadcrumb className="breadcrumb-arrow">
      <Breadcrumb.Item href={fromHref}>
        <span style={{ color: '#787c9e', fontWeight: 500 }}>{from}</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        <b>{actualLocation}</b>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export { BreadCrumbEditSong, BreadCrumbEvent, BreadCrumbLyricsSong, BreadCrumbSession, BreadCrumbs };
