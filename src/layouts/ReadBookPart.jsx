import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../config/axios";

export default function ReadBookPart() {
  const [showChapterContent, setShowChapterContent] = useState({});
  const { bookId } = useParams();

  const fetchChapterContent = async (chapterId) => {
    try {
      const response = await axios.get(`/chapter/get/${bookId}/${chapterId}`);
      const showChapterContent = response.data.chapterContent;
      setShowChapterContent(showChapterContent);
      console.log(showChapterContent);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchChapterContent();
  }, {});
  return (
    <div className="p-7 w-3/4 m-auto border-double border-4 border-black rounded-3xl h-full my-5">
      <div className="flex justify-between">
        <div>
          <i
            type="button"
            className="border-2 border-black bg-slate-200 p-2 rounded-lg fa-solid fa-backward"
          ></i>
        </div>
        <div>
          <i
            type="button"
            className=" border-2 border-black bg-slate-200 p-2 rounded-lg fa-solid fa-forward"
          ></i>
        </div>
      </div>
      <div>
        <div className="grid justify-center ">
          <h1 className="text-3xl font-extrabold grid justify-center">
            Atomic Habits
          </h1>
          <h1 className="text-xl font-bold mt-2">fgsdg</h1>
          <br />
        </div>
      </div>
      <div className="text-lg leading-9">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quasi
        inventore quos eos mollitia vel itaque libero! Illum, explicabo iure!
        Ipsum ab voluptatum laborum laudantium odit, nisi, aliquam
        reprehenderit, et itaque incidunt est? Omnis perferendis eos in expedita
        natus recusandae vero fugiat labore non ut dolorem, accusantium
        voluptatibus, reprehenderit corporis cum accusamus! Dicta, maxime, illum
        quis ab itaque eius labore, odio sit totam officia aut facilis.
        Provident est molestiae repellat excepturi fugit consequatur quo
        voluptatem voluptate rem dolores autem maxime libero suscipit tempora
        delectus architecto, illum earum, ex obcaecati error natus, ad id cum.
        Eius saepe hic beatae suscipit facere fuga quis, velit officiis dolorum
        reiciendis ipsum tempore praesentium, debitis totam ipsam, odit soluta
        dolores iusto repellendus delectus unde eum? Obcaecati voluptate
        praesentium perferendis, eius sapiente molestias consequuntur amet
        molestiae quaerat architecto quia mollitia maxime exercitationem
        recusandae natus fugiat beatae et? Pariatur alias ea odit eveniet
        voluptate voluptas facere provident. Reprehenderit ea numquam dolore
        enim voluptatibus quas unde eos, nulla, illum porro odio fugiat officia
        excepturi, cupiditate consectetur quasi! Incidunt odio aliquam alias,
        veritatis fugiat quibusdam nesciunt saepe minus quos dolor culpa dolorum
        eligendi impedit neque reprehenderit autem similique beatae possimus
        sint enim consequatur, facere voluptatum? Eos quos asperiores dolores
        quidem nostrum, esse voluptate. Voluptates consequatur odio ea rerum
        laborum expedita autem quos libero voluptatem. Possimus nisi sint
        debitis? Deleniti vero sapiente maiores, consequatur explicabo dicta
        blanditiis ex. Facere repudiandae veritatis esse odit, praesentium eaque
        iure maxime consectetur amet labore sapiente possimus vitae!
        Consequuntur quibusdam animi beatae repellendus mollitia sit consectetur
        odit provident incidunt corporis? Doloribus temporibus eligendi
        voluptatibus veniam facilis natus exercitationem dicta at alias quae
        maiores, voluptates omnis nostrum, laudantium ad enim quos, eaque
        fugiat. Sunt repellendus laborum labore, repellat voluptatem amet
        eligendi quis quae ex pariatur quasi vel doloremque ab ea vero quisquam
        expedita, quo alias culpa officia? Est expedita id odit, perspiciatis
        architecto nesciunt. Facilis amet quos nam alias. Minus doloremque quae
        veritatis accusamus distinctio at! Modi quidem tempore natus
        reprehenderit ex rerum, asperiores itaque laborum nemo blanditiis enim,
        placeat nulla ipsa, provident omnis perspiciatis sequi deserunt dolores
        exercitationem. Obcaecati itaque dolorum est excepturi voluptatem
        repellendus quisquam nostrum placeat nesciunt hic, distinctio architecto
        eos facilis esse dolor. Omnis libero quos accusamus assumenda, rerum
        laboriosam voluptas ad rem magni deleniti ipsa earum. Quam omnis aut
        enim quaerat voluptatem ipsum, earum explicabo temporibus voluptates
        nostrum! Id optio odit eos obcaecati, esse officia excepturi animi vel
        temporibus sed ut consequuntur laudantium architecto. Voluptatibus illum
        sequi quia beatae cupiditate suscipit magni distinctio. Fuga inventore,
        alias magnam omnis nihil beatae itaque et, vitae quidem deserunt fugiat
        eaque ex voluptatem sint. Odio magni debitis animi et illo modi earum,
        eum reiciendis mollitia vero nemo unde, adipisci pariatur dolorum eos
        doloribus vel, minus asperiores a dolorem consequuntur corrupti
        molestiae! Nihil minus illo quaerat rerum perferendis saepe, cupiditate
        quis! Voluptatum quos eos quam sit, cupiditate fugiat exercitationem
        error architecto modi doloribus, soluta non dolorum vel debitis labore
        placeat repellendus cum consectetur minus! Odio ipsa necessitatibus quia
        earum! Deleniti, exercitationem! Voluptas, saepe quaerat voluptatem
        explicabo odit modi! Vero reiciendis eum aut ipsa perferendis saepe
        corrupti aperiam, nulla error, delectus aspernatur. Dolorum recusandae,
        in aperiam, itaque deleniti fuga eligendi reprehenderit id consequatur
        consequuntur tempore similique ea perferendis. Natus quam eos aut dolore
        deleniti? Quod harum incidunt excepturi! Cum reiciendis magnam nobis
        animi laborum fugiat nisi consectetur vel omnis facere! Nemo esse
        asperiores, saepe tempora minus, reiciendis animi consectetur
        repudiandae rerum officia dolorem corrupti eaque totam amet. Mollitia,
        quia quidem ad, officia officiis nesciunt voluptas id culpa impedit in
        ea corporis unde cupiditate, a quos quisquam. Explicabo, recusandae
        commodi iure molestiae ea labore animi quia assumenda eveniet deserunt
        molestias magni deleniti, pariatur beatae! Animi quia ullam aspernatur
        expedita iste corporis eligendi ducimus recusandae sed earum saepe nihil
        dolor, alias beatae neque eveniet consequuntur sapiente quibusdam, ea
        reprehenderit, distinctio sunt similique. Magni mollitia enim, natus
        cum, ad nam tempora pariatur animi doloremque earum possimus beatae
        aliquid? Commodi ducimus animi hic modi harum cupiditate, error culpa
        explicabo nulla exercitationem ipsa reprehenderit vero ullam! Et
        doloremque similique ducimus! Dignissimos atque, architecto illo ipsum
        distinctio delectus porro repellendus et? Adipisci aperiam, hic,
        voluptate ipsum voluptatem voluptates accusantium maiores veniam nisi
        architecto aut libero fuga sunt non enim minus rerum quidem, molestias
        consectetur quod sint nemo! Sint, doloribus est. Nostrum nihil error
        repellat saepe vero. Nesciunt molestias ad autem alias totam mollitia
        molestiae voluptatem iusto minus officia possimus et maiores, quo enim
        ex tenetur debitis, odit expedita consequuntur obcaecati adipisci
        repudiandae asperiores voluptatibus. Cum repellat a, molestiae possimus
        ullam culpa eum ut. Ab aliquid, tenetur est doloribus dolores natus
        facere similique voluptas id, veritatis harum laborum distinctio, eaque
        fugit quibusdam! At eum dolor accusantium. Ut veniam necessitatibus
        rerum, distinctio iusto eligendi tempore iste inventore ipsa quo vel
        commodi dolorem vitae, voluptate nemo illo et magnam ea architecto
        similique? Architecto distinctio eius velit incidunt amet facilis hic
        placeat doloremque dignissimos asperiores delectus a necessitatibus,
        recusandae non quae perferendis libero molestias quo laboriosam facere
        repudiandae soluta in earum iusto. Voluptate, deleniti aperiam totam
        illum eum doloremque, corporis perferendis esse molestias impedit odio!
        Repellendus repellat hic inventore nesciunt non fugit libero pariatur
        expedita eius ad quia placeat odit reiciendis magni excepturi ex
        molestiae voluptates, minima laboriosam! Labore veritatis laudantium
        dolore maxime optio, voluptatum odit quo porro ad rem autem dolorum at
        unde fugiat inventore non. Aperiam harum recusandae voluptatem
        accusamus. Quisquam provident unde aliquam veritatis, tempore itaque
        amet adipisci. Dolores explicabo commodi esse dicta adipisci minus a
        sunt exercitationem magnam velit iste porro quod repudiandae recusandae
        itaque, hic beatae nesciunt repellat, dolorum qui nam amet non
        laboriosam? Sit aspernatur voluptatibus quaerat laboriosam, nostrum
        saepe officiis ab tempora sed vel inventore vitae natus nisi consequatur
        quo adipisci molestias debitis accusantium soluta, totam molestiae hic
        eos quos quia. Ducimus maxime placeat quasi autem repellat esse harum
        sit, odio quis suscipit delectus molestiae tenetur, ad enim est amet
        voluptate mollitia magnam et commodi repudiandae aliquam dolor quas?
        Atque explicabo non a deserunt repudiandae officiis illo veniam id quis
        reiciendis dolores exercitationem inventore perferendis quas saepe
        asperiores eaque numquam molestias sunt voluptas vitae unde ipsa, est
        repellendus. Inventore asperiores recusandae placeat porro sunt
        repellendus iusto, eius exercitationem soluta, aperiam nisi! Omnis
        voluptas qui aliquid tenetur, doloribus dolor aliquam eum. Rem iure
        aspernatur quasi dolorem sapiente saepe laudantium in. Dolore voluptate
        sed amet cupiditate animi neque perspiciatis dolores doloribus eligendi
        quia, at obcaecati, iure iste, facere magni. In, voluptatibus soluta
        quod possimus reprehenderit ipsum harum molestias alias. Magnam sint
        modi deleniti quas voluptate repudiandae eos voluptates! Ducimus aut
        error nemo cumque sequi earum, labore ut delectus asperiores ipsam
        quibusdam velit eaque consequatur non ab eius amet temporibus!
        Asperiores, ratione error amet nihil aspernatur quaerat tempora
        consectetur expedita officiis ut reiciendis alias soluta nesciunt, iusto
        possimus voluptatem tempore ea veniam saepe. Quod voluptates iusto
        laboriosam debitis, minus commodi. Nulla ea fugiat quidem in est quo,
        velit itaque? Soluta, a eum cupiditate sed quae repellat, magni
        exercitationem totam nam cum reiciendis incidunt consequuntur dicta
        laudantium nesciunt, quos beatae quasi! Fugit excepturi sapiente sed
        assumenda doloremque, iste praesentium consequatur cumque asperiores
        minus, accusamus error culpa, quae consequuntur! Quibusdam tenetur,
        adipisci recusandae hic suscipit esse consequuntur eaque, atque alias
        libero tempore eius doloremque? Itaque, eum amet, minima perspiciatis
        blanditiis temporibus nisi maiores fuga quam optio deserunt quibusdam!
        Doloribus quae, amet eveniet quidem accusamus eligendi sit assumenda
        odit molestiae, illo optio atque ratione voluptatibus, culpa laboriosam?
        Voluptatibus, tempore dolore. Fugiat earum dolore suscipit quam nostrum
        minima alias fuga culpa quia corrupti quibusdam sed, est qui sapiente
        magni ipsam tenetur voluptates labore molestias possimus hic. Adipisci,
        unde, ratione minus nulla impedit voluptate temporibus delectus dolore
        amet quibusdam facere ab beatae molestiae labore laudantium corrupti
        voluptatum. Explicabo nobis placeat blanditiis facilis omnis qui ea vero
        nam eius ipsam accusamus cupiditate, enim illum excepturi, sed vel
        maxime eum officia aperiam quas deleniti voluptate iure. Accusamus sed
        ex placeat minima quaerat porro cupiditate quisquam labore quibusdam
        iure optio eveniet explicabo praesentium, ea fugit totam. Velit quas
        magni, corporis neque voluptate perspiciatis laudantium numquam
        obcaecati vel, quasi incidunt aut porro fuga itaque officia! Provident a
        distinctio quo modi repellat numquam corporis enim nisi molestias sequi
        hic esse, dolore aut iure qui id atque necessitatibus officiis eos earum
        voluptatum unde ipsam corrupti fuga. Officiis voluptates sit amet
        tempore, repudiandae corrupti velit numquam deleniti. Consectetur, optio
        suscipit? Dolorum, corporis perspiciatis! Quidem excepturi, aut maxime
        necessitatibus quae accusamus inventore atque autem et veritatis ipsam
        cupiditate tempore hic pariatur odio! Rerum voluptas, nemo vero porro
        illum itaque? Voluptates, optio? Nisi odit nihil, ipsam possimus
        repudiandae ullam harum nam. Eius, praesentium placeat. Minima hic ad
        deleniti consectetur perspiciatis numquam officiis? Laborum ab
        asperiores ad autem nisi quas eveniet amet, voluptatem ipsam maiores
        possimus necessitatibus nam ratione provident. Pariatur ad quidem
        tempore vero! Optio quis et eligendi recusandae iusto, adipisci repellat
        doloremque in deleniti inventore deserunt sequi. Laborum suscipit iste
        commodi, mollitia deserunt incidunt accusamus natus distinctio et
        tempore, cum voluptates recusandae necessitatibus alias. Reiciendis
        quidem consequatur minima laboriosam inventore facere consectetur magnam
        omnis incidunt, voluptatem dolorem ipsa perferendis expedita labore
        natus numquam! Ad nobis tempora ut aspernatur sint. Incidunt eligendi
        vitae nesciunt nam ab recusandae, dolore quia eum repellendus!
        Doloribus, iure minus vitae rem rerum sint aliquam mollitia, veniam
        dolor ex laboriosam? Eum, eos accusamus! Quidem quam porro placeat est
        fuga explicabo! Maxime non placeat nisi cupiditate fuga, quibusdam
        voluptatum modi quis rem debitis sequi tempore vitae officia dolorum,
        atque dignissimos impedit beatae assumenda sed. Laudantium adipisci
        veritatis harum, numquam officia quis voluptatem error voluptate a autem
        alias sed eos vel animi, inventore eligendi itaque maiores recusandae
        neque excepturi! Est tenetur dolores asperiores ad doloribus? Laudantium
        velit tempore at mollitia impedit accusamus eaque, nam officia, libero
        cupiditate fugit dolorem, aliquam ipsum facere numquam temporibus quo
        optio voluptas esse tempora non saepe aut doloremque. Sunt impedit
        inventore et aperiam eveniet, dignissimos blanditiis harum, repellendus
        ex quaerat eos eius nisi dicta. Est porro amet quidem assumenda non
        voluptatem, soluta molestiae error itaque vero ducimus sed vel eveniet
        quaerat vitae suscipit. Doloribus dignissimos saepe quod suscipit
        excepturi, dolor vero qui deleniti tempora repudiandae quisquam at
        voluptas necessitatibus velit cupiditate odit ullam commodi. Libero cum
        sequi necessitatibus sunt repudiandae corrupti quam alias ipsum ipsa
        saepe inventore nobis, nulla earum fugit? Perferendis odit expedita,
        nihil autem repellendus accusantium eius nisi atque obcaecati corporis
        non quod molestias temporibus necessitatibus! Aperiam, minima at magni
        saepe porro nesciunt iste exercitationem in fugiat. Corrupti dolorem,
        quod laboriosam magnam, harum mollitia illo aliquam repellendus id
        placeat quidem facere nam porro commodi, eos animi ab nobis repudiandae
        et fuga qui aspernatur. Nemo, dolor, officia eum aperiam mollitia quae
        rerum illo iusto dicta at autem est quasi hic inventore dolorum. Vitae
        optio veniam reiciendis laboriosam neque? Provident explicabo similique
        sed, sequi alias earum voluptatem velit ipsa dolore, quia
        exercitationem, aperiam dolores quod facilis quidem odit accusantium
        minus voluptatum ut nostrum ducimus numquam reprehenderit officiis!
        Explicabo voluptas ipsam recusandae aliquid est voluptates distinctio
        quo adipisci architecto quod dolore perspiciatis optio facilis odio
        laboriosam porro at tempora obcaecati nihil, placeat quidem. Suscipit,
        odio harum alias magnam non nesciunt fugiat? Molestias architecto,
        adipisci quasi molestiae, repudiandae aut maxime, esse dignissimos
        aliquam odit non aperiam natus laborum. Distinctio adipisci est
        molestias animi. Repellat inventore sit assumenda odit. Similique,
        ratione modi fugit minima sint at laboriosam ad voluptates provident
        maxime beatae necessitatibus velit distinctio est expedita dolor rerum
        exercitationem unde id quia quo vel molestiae corporis debitis? Ratione
        odio ducimus aliquid. Laboriosam omnis voluptatem sit nostrum in
        molestiae commodi quo fuga fugiat. Excepturi aliquid mollitia possimus
        est ipsum natus, provident in quae fuga impedit debitis itaque. Dolorem
        recusandae placeat atque magnam nostrum, blanditiis rerum vero tempore
        reiciendis sequi voluptate veniam enim vel accusantium ipsum quas!
        Doloribus eaque numquam suscipit officia optio est nisi eos ut pariatur
        corrupti nihil architecto recusandae cumque excepturi consectetur beatae
        quaerat id, molestias quod sint. Dolorum recusandae hic itaque porro
        libero nisi, obcaecati architecto repudiandae aspernatur est iusto et
        dolore rem voluptas odit explicabo reprehenderit sit, velit pariatur
        officiis! Eos sapiente fugiat magni praesentium voluptatibus dicta
        deserunt fuga, quia a, qui dolorem nostrum. Fuga, culpa impedit iusto
        hic voluptatem illum maxime magni esse consectetur est ipsa, quaerat
        excepturi unde numquam molestiae praesentium deserunt harum rem,
        accusantium atque aut dolorum. Facilis nihil doloremque minus natus
        itaque aliquid accusantium, ad animi consequuntur veniam cum ab
        exercitationem delectus iure inventore nam error? Cupiditate
        exercitationem itaque unde quia magni quod quasi quisquam vel odio
        delectus. Laborum optio voluptas amet dolore quibusdam libero quam, sit
        ratione voluptates reiciendis pariatur cupiditate, vel labore maiores
        recusandae suscipit distinctio. Cupiditate repellendus error numquam
        culpa odio consequatur. Non, nobis quaerat? Repudiandae dolorem ut
        veniam perspiciatis quasi facilis odio aliquid eius quas error nesciunt
        non nulla blanditiis delectus, iusto sit. Debitis, dolor a! Recusandae
        facere quis quasi perferendis voluptatum magni quas tenetur ipsam
        placeat. Distinctio expedita nemo fuga voluptatum. Eius esse accusantium
        reiciendis doloremque, nam recusandae consequatur ut dolore aliquam
        nostrum, voluptatibus aut error architecto delectus sequi fugit iusto.
        Illo odit suscipit commodi, error quis cupiditate ad, sed odio numquam
        saepe quaerat? Necessitatibus sunt eum cupiditate incidunt veniam nihil
        tempora inventore facilis pariatur! Debitis sint ratione voluptatum
        aliquid. Dolorum sapiente autem quidem, corporis velit assumenda
        excepturi, minima expedita provident in delectus qui est ipsa?
        Asperiores dolorum quod eos molestias aspernatur ipsa aperiam facere
        illum, ad laudantium laborum voluptatum nihil rerum maxime odit?
        Debitis, animi. Porro repellendus sit numquam ducimus dicta quam animi.
        Quae impedit harum eligendi quisquam numquam assumenda qui suscipit
        unde, cupiditate debitis ducimus id quaerat exercitationem ex voluptate
        animi facilis! Optio incidunt dolor nulla rem aliquam corrupti,
        repellendus reiciendis hic a, nemo nobis. Pariatur in blanditiis neque
        culpa itaque. Aperiam dicta neque porro nemo minima corporis atque
        accusamus voluptatibus quae eos sit, iusto, dolore, enim autem maxime at
        sapiente pariatur accusantium voluptatem? Quis dolorum nostrum vitae
        enim accusamus dolor officia repellat libero suscipit ut perferendis,
        omnis quidem quas ullam tempore rerum commodi aperiam saepe totam
        laudantium consequatur harum iusto quos? Quam quia labore nesciunt
        itaque provident quasi aspernatur, fugit recusandae laudantium eveniet.
        Reprehenderit, repudiandae delectus repellat amet recusandae
        perspiciatis sit dolor. Aliquam quibusdam cum recusandae ducimus quidem
        facere blanditiis, itaque cupiditate nostrum libero doloribus dicta
        voluptate quis repudiandae qui deserunt reprehenderit illo possimus
        nulla id voluptatibus voluptatum ea ex corrupti! Cupiditate possimus
        perferendis eum quam atque! Amet blanditiis est rem molestias dolore
        aliquam quia ratione perferendis similique voluptate molestiae, nihil
        natus delectus minima labore eveniet quod, ab distinctio illum numquam
        obcaecati debitis! Suscipit, tempore maxime. Quam, molestias eligendi?
        Harum tempora officiis accusantium architecto quod incidunt recusandae
        repudiandae aliquam ducimus pariatur et, voluptatem similique eos,
        molestiae, itaque nulla odio non alias dignissimos sit veritatis eaque
        earum ipsa commodi! Cumque sapiente numquam dolore perspiciatis
        pariatur! Rem sit, aperiam, veritatis dignissimos necessitatibus porro
        odit ad omnis inventore soluta commodi beatae dolorum? Rerum, aliquid!
        Dolorum facilis vitae dolore sapiente, eaque quos magni provident ex
        nobis quaerat maiores dicta voluptatem, sunt iure libero minus, laborum
        odio asperiores! Unde minima sapiente aspernatur architecto corporis ab
        dolor totam adipisci facilis nihil suscipit, ipsam, nobis repellat!
        Praesentium rerum exercitationem amet, ipsa facere voluptate officia
        vero labore sed fugit! Aperiam enim aliquam soluta ratione, rerum esse
        non temporibus tempore assumenda nihil, expedita itaque, voluptas
        consectetur perferendis cumque? Suscipit ipsa, quis nesciunt voluptatem
        odit mollitia animi eos. Asperiores quod vel itaque beatae mollitia
        fugiat sunt molestias quas aut, dignissimos maiores quibusdam eveniet,
        consequuntur accusantium iste numquam corrupti provident officiis in
        perferendis! Veniam alias ipsum quia in omnis, culpa eum aspernatur enim
        aperiam laboriosam obcaecati harum, facilis et aliquid eveniet minus
        excepturi error ea magni consequuntur eius reprehenderit quos. Dolore
        quod consequuntur molestias ex nostrum, optio eveniet blanditiis aperiam
        perspiciatis dolores eaque commodi unde repellat veritatis laudantium
        distinctio deserunt perferendis facere ad incidunt facilis pariatur id
        iusto. Ducimus harum officiis ullam culpa. Praesentium expedita eius nam
        tenetur. Error, amet. Repellat voluptates adipisci recusandae impedit
        perferendis corporis aperiam laboriosam quia inventore magni!
        Consequatur consectetur iure voluptatibus ea repellat optio blanditiis
        molestiae nobis quia! Ut, doloribus hic. Labore sit voluptates saepe.
        Sint ipsam totam voluptate sequi corrupti voluptas saepe a nesciunt
        nostrum sit nihil quasi deleniti consequuntur, qui animi distinctio at.
        Consequuntur, doloribus vel praesentium deserunt nihil voluptatem natus
        ducimus eaque provident quas error repudiandae eligendi id. Quo omnis
        similique corporis doloremque ullam numquam magnam non! Delectus
        aspernatur esse porro fuga minima tempore totam libero in officiis,
        culpa cum possimus molestias ullam exercitationem distinctio dolores
        beatae voluptate eveniet! Harum qui reprehenderit soluta magnam nam
        voluptate cupiditate necessitatibus dolorum laborum vero. Deleniti
        dignissimos dicta repellendus temporibus praesentium laudantium
        excepturi nulla culpa fugiat similique, facere enim maiores, cumque
        obcaecati quo ex, corporis aliquid veritatis consequatur ut sapiente
        voluptatibus veniam? Tempora fuga assumenda impedit amet, rerum atque
        doloremque consequuntur ipsa, tenetur, quaerat consequatur
        exercitationem maiores quod praesentium repudiandae architecto rem sit
        perferendis sunt! Pariatur similique labore aspernatur, tempore iusto
        unde vitae voluptate accusamus nesciunt incidunt eius velit saepe odit,
        rerum deserunt dignissimos expedita nulla sunt praesentium nihil quod
        necessitatibus voluptatibus veritatis? Non magnam necessitatibus
        perferendis distinctio esse dicta natus dolores, reiciendis eos qui fuga
        accusamus eum sapiente sint quidem eaque? Odit asperiores iste nisi
        mollitia autem. Quia vitae voluptatem maxime, eius fugit veritatis
        deserunt magni nulla vero doloribus qui distinctio dolore, laborum ipsa,
        repellendus accusamus? Et labore voluptatibus dolore, sunt eos totam eum
        quisquam facere perspiciatis eligendi adipisci quidem? Ut, tenetur optio
        cupiditate quibusdam delectus sequi fugiat neque quo nisi voluptas quia
        similique dolor quasi impedit ratione, quidem sapiente quod explicabo,
        asperiores consequuntur. Nisi, distinctio est qui necessitatibus itaque
        numquam consequatur sunt accusamus esse vitae eveniet cum ab sequi ea!
        Vero eligendi repellendus nam deserunt? Quasi fuga ea optio animi nihil
        repellat adipisci corporis amet libero exercitationem minus repellendus
        sapiente facilis quibusdam provident itaque ex dolor, ipsam eius
        quisquam pariatur! Hic autem dolorem iste, accusamus voluptas deleniti
        sint totam, eos tenetur laboriosam nam nihil quaerat dolor
        reprehenderit. Placeat, mollitia similique fuga enim fugit veritatis
        exercitationem blanditiis atque facere perferendis minima architecto
        deserunt, illo quos, vitae doloribus odit a? Iure accusamus neque
        ratione aliquam distinctio, itaque suscipit vero ut, cum molestiae illo
        mollitia aspernatur quam! Tenetur maiores sit nesciunt aut dicta
        laudantium sint officiis, commodi nulla quidem cupiditate quasi
        laboriosam odit adipisci doloribus.
      </div>
    </div>
  );
}
