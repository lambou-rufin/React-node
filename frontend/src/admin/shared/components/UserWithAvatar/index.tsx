import { ParticipantStatus } from "admin/modules/process/core/models/datas"
import { ProcessEnum } from "admin/modules/process/core/models/enums"

const UserWithAvatar = ({
  user,
  team,
  type,
  manager,
  user_status,
}: any) => {

  const defaultAvatar = '/images/avatar/a.jpg'
  return (
    <div className="d-flex gap-2 mb-1">
      <div
        className="media media-huge d-flex flex-column justify-content-center mt-1"
        style={{ borderRadius: '50%', position: 'relative', width: "50px", height: "50px" }}
      >
        <img
          id="image-result"
          className="w-100 h-100"
          style={{ overflow: 'hidden' }}
          src={user?.avatar_url ?? defaultAvatar}
          alt="avatar"
        />
      </div>
      <div className="d-flex justify-content-center flex-column">
        <div className="d-flex gap-1">
          <div className="d-flex justify-content-center flex-column">
            <h5 className="m-0" style={{ lineHeight: "15px", color: "#5054A6" }}>
              {`${user?.firstname} ${user?.lastname}`}
            </h5>
          </div>
          <div>
            <span className="badge text-bg-info-soft secondary-soft">
              {type === ProcessEnum.NONE && `${team?.name}`}
            </span>
          </div>
        </div>
        {type !== ProcessEnum.PARTICIPANT &&
          <span className='' style={{ marginTop: "4px", lineHeight: "10px", fontSize: "14px", textTransform: "capitalize" }}>{user.campus?.name}</span>
        }
        <span style={
          type === ProcessEnum.PARTICIPANT ? { fontSize: "14px", color: "#8A8A8A" } : { fontSize: "12px" }
        }>{type === ProcessEnum.NONE ? user.category?.name : ParticipantStatus[user_status]}</span>

        <span className="badge text-bg-info-soft secondary-soft">
          {type === ProcessEnum.PARTICIPANT && manager && `${manager?.lastname || ''} ${manager?.firstname || ''}`}
        </span>
      </div>
    </div>
  )
}

UserWithAvatar.defaultProps = {
  type: ProcessEnum.NONE
}

export default UserWithAvatar
