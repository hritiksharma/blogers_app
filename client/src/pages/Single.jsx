import React from "react";
import image from "../assets/Education&Litracy.jpg";
import Edit from "../assets/Edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={image} alt="" />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*1m4rhnk*_ga*MzMxMTQ5MzYyLjE2NjYxNjE4NDk.*_ga_8JE65Q40S6*MTY2NzM4MTg2Ny41LjEuMTY2NzM4MTg3MC4wLjAuMA.."
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 months ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo atque
          ducimus, et itaque rem autem blanditiis inventore, soluta.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          accusantium fuga ea vitae ratione alias aliquam possimus, quaerat
          atque id repellendus ipsum harum, numquam veniam maiores. Quibusdam
          aut voluptas rem sint nisi cupiditate sit laboriosam debitis natus
          harum dicta porro iure magnam saepe corrupti, dolor modi iusto
          recusandae in ipsa tempora quia. Impedit, natus. Accusamus aliquid
          exercitationem, doloribus omnis perspiciatis eius? Deserunt sed,
          magnam consequatur vitae sapiente reiciendis. Debitis cupiditate
          magni, est perspiciatis ducimus quibusdam dolorem? Quae vero esse
          ducimus voluptatum, repudiandae excepturi eligendi eum, quasi vitae
          omnis illo. Optio a mollitia aliquid vel autem qui esse pariatur sunt
          iste ipsam quis accusantium voluptate labore sapiente nihil similique,
          placeat ipsa vitae nulla veritatis id, quidem saepe rerum facere. Vel
          <br />
          <br />
          consequuntur rerum quod quam dolorem. Sunt veritatis quam aspernatur
          repellendus saepe magnam, tempore assumenda consequatur velit,
          quibusdam voluptate consectetur corporis quae, autem illum explicabo
          illo aliquam ea quia culpa maxime ex. Iusto, maiores? Dignissimos
          temporibus earum pariatur fugit voluptatibus dolores officiis omnis,
          aut eligendi, enim explicabo sapiente! Illo quae reiciendis aspernatur
          totam quidem delectus sit sequi suscipit explicabo dolorem, est
          quisquam veniam cumque officia at temporibus maiores cum, nulla, fugit
          ad porro mollitia?
          <br />
          <br />
          Accusamus officia mollitia expedita voluptate rem dolore distinctio
          illo neque incidunt aperiam. Qui facere eos placeat, tempora assumenda
          accusamus ex nostrum excepturi quia culpa deleniti illo aliquid
          molestiae. Culpa quasi inventore quae impedit distinctio voluptate
          recusandae expedita facere, similique magni praesentium, earum,
          excepturi vel tempora hic temporibus aut porro delectus. Natus
          deserunt voluptatem perspiciatis placeat id repellat eius porro illo,
          quas saepe quasi cum nobis sint repellendus ab laborum quisquam
          obcaecati aut enim. Culpa impedit magnam incidunt voluptatibus nostrum
          quae soluta iusto eos. Alias voluptatibus iure eaque, minima nisi
          nesciunt sint laudantium dicta corrupti vero, quae consequuntur maxime
          tenetur? Explicabo veritatis voluptas nihil hic natus odio qui.
          Quibusdam quis consectetur fuga vel rerum eum possimus eos eligendi!
          Temporibus odit praesentium, deserunt sequi placeat quisquam nulla
          porro autem quo mollitia dolorem facere quos beatae! Expedita aperiam
          quasi blanditiis repellat asperiores iusto saepe quidem consequuntur
          temporibus in esse natus perspiciatis rem totam, doloribus et
          architecto porro cupiditate illo? Similique iusto porro quam.
          Voluptate omnis recusandae quaerat corporis, ipsam quasi quod rerum.
          Explicabo cupiditate, placeat praesentium maxime recusandae ducimus,
          laborum minus cum sequi possimus, corporis totam repellat eaque?
          Aperiam accusantium harum est laborum eos doloremque dignissimos
          consequuntur porro omnis, corporis, atque dolore incidunt deleniti?
          Magnam ipsa provident repellendus porro, quasi quia fugiat maiores
          cumque quos numquam animi maxime fugit praesentium neque eveniet,
          autem ad vel aliquam architecto nostrum minima excepturi dolores
          similique a. Sit cumque illo qui corrupti nemo quaerat doloribus cum
          nulla aliquid doloremque voluptate officia molestias repellendus
          tempore accusamus inventore ipsum, eveniet necessitatibus ut culpa
          voluptates sed. Molestias nostrum laborum quo iure, cumque delectus
          quidem sapiente voluptates odit ab mollitia distinctio tempora
          consequatur deserunt magni inventore voluptatibus at quia et autem
          tempore. Possimus quod tenetur esse molestias labore maxime culpa quae
          ipsum autem corrupti voluptatum, provident dolorem optio quidem omnis
          qui, odio libero. Facere distinctio libero voluptas id facilis.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
