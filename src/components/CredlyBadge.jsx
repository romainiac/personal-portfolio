import Badge from '../assets/google-ux-design-certificate.png'

import   {
    GoogleOutlined

  }
from   '@ant-design/icons'
function CredlyBadge() {

    return (
        <div
        hoverable={true}
        onClick={() => window.open("https://www.credly.com/badges/16808903-d535-44fc-b47f-f777a151e53c/embedded")}>
            <a 
            href="#"
            style={{color: "white"}}
            >
            <p>
            <GoogleOutlined /> View Google Certificate
            </p>
            </a>
        </div>

    )

}

  
export default CredlyBadge;
  