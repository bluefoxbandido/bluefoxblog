import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <h5 className="display-1">
                    <span className="blue">{`(`}</span>
                    <span className="red">{`bluefox`}</span>
                    <span className="blue">{`)`}</span>
                    <span className="white">{`=>`}</span>
                    <span className="blue">{'{'}</span>
                    <span className="red">{`about`}</span>
                    <span className="blue">{`}`}</span>
                </h5>
                <h6 className="h6">About the Developer</h6>
                <div className="aboutContent">
                    <div className="authorSleeve">
                        <div className="avatar">
                            <img src="../assets/profile.jpg" />
                        </div>
                        <div className="quote">
                            "amor fati"
                        </div>
                    </div>
                    <div className="bio">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Haec dicuntur fortasse ieiunius;</b> Quo modo autem philosophus loquitur? Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Quodsi ipsam honestatem undique pertectam atque absolutam. Istam voluptatem, inquit, Epicurus ignorat? Duo Reges: constructio interrete. Respondent extrema primis, media utrisque, omnia omnibus. <i>An potest cupiditas finiri?</i> Sit sane ista voluptas. </p>

                        <p>Laboro autem non sine causa; Iis igitur est difficilius satis facere, qui se Latina scripta dicunt contemnere. Quae in controversiam veniunt, de iis, si placet, disseramus. Quantum Aristoxeni ingenium consumptum videmus in musicis? <i>Istam voluptatem, inquit, Epicurus ignorat?</i> Quid, de quo nulla dissensio est? Longum est enim ad omnia respondere, quae a te dicta sunt. Suo enim quisque studio maxime ducitur. Ita credo. Animum autem reliquis rebus ita perfecit, ut corpus; </p>

                        <p>Si enim ad populum me vocas, eum. Eadem nunc mea adversum te oratio est. <b>Iam contemni non poteris.</b> Hoc enim constituto in philosophia constituta sunt omnia. <b>Quonam modo?</b> <mark>Quo modo?</mark> Tu vero, inquam, ducas licet, si sequetur; Homines optimi non intellegunt totam rationem everti, si ita res se habeat. </p>

                        <p>Itaque hic ipse iam pridem est reiectus; Philosophi autem in suis lectulis plerumque moriuntur. Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui deceat frugaliter. Illa tamen simplicia, vestra versuta. Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt; Videsne quam sit magna dissensio? Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Ergo hoc quidem apparet, nos ad agendum esse natos. </p>

                        <p>Callipho ad virtutem nihil adiunxit nisi voluptatem, Diodorus vacuitatem doloris. <b>Frater et T.</b> <b>Que Manilium, ab iisque M.</b> Itaque his sapiens semper vacabit. Homines optimi non intellegunt totam rationem everti, si ita res se habeat. In quo etsi est magnus, tamen nova pleraque et perpauca de moribus. Non enim iam stirpis bonum quaeret, sed animalis. <i>Sint ista Graecorum;</i> </p>

                        <p>Vulgo enim dicitur: Iucundi acti labores, nec male Euripidesconcludam, si potero, Latine; Nam, ut paulo ante docui, augendae voluptatis finis est doloris omnis amotio. <i>Is es profecto tu.</i> Sed quid attinet de rebus tam apertis plura requirere? </p>

                        <p>Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? Itaque si aut requietem natura non quaereret aut eam posset alia quadam ratione consequi. <i>Itaque contra est, ac dicitis;</i> Videamus igitur sententias eorum, tum ad verba redeamus. Cur iustitia laudatur? Sed haec quidem liberius ab eo dicuntur et saepius. </p>

                        <blockquote cite="http://loripsum.net">
                            Nam si quae sunt aliae, falsum est omnis animi voluptates esse e corporis societate.
                        </blockquote>



                    </div>
                </div>
            </div>
        )
    }
}
