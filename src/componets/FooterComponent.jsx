import '../css/footer-component.css'

function FooterComponent() {
    return(
        <footer className="pie-pagina">
            <div class="grupo-1">
                <div class="box">
                    <figure>
                        <a href="#">
                            <h1>LOGO</h1>
                            <img src="" alt="" />
                        </a>
                    </figure>
                </div>
                <div class="box">
                    <p>1138393736</p>
                    <p>hello@dental.com</p>
                    <p>press@dental.com</p>
                    <p>contact@dental.com</p>
                </div>
                <div class="box">
                    <h2>SIGUENOS</h2>
                    <div class="red-social">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-youtube"></a>
                    </div>
                </div>
            </div>            
            <div className="grupo-2">
                <small>&copy; 2024 <b>Seley C.I.O.S.</b> - Todos los Derechos Reservados.</small>
            </div>
        </footer>
    )
}

export default FooterComponent