import './Contact.css'
import Button from '../components/Button';
import Input from '../components/Input';

const Contact = () => {
    return (
        <form method='post' className='text-gradiente formulario-contato'>
            <h1>Contato</h1>
            <form action="" method="post"></form>
            <div className='formulario-contato'>
                <label className='formulario-contato'>
                    <h2>Nome*</h2>
                    <Input />
                    <input
                        type="text"
                        className='input-convidado text-gradiente'
                        name='nome-convidado'
                        id='nome-convidado'
                        required
                        autoComplete='off'
                    />
                </label>
                <label className='formulario-contato'>
                    <h2>Empresa</h2>
                    <input
                        type="text"
                        className='input-convidado text-gradiente'
                        name='empresa-convidado'
                        id='empresa-convidado'
                        autoComplete='off'
                    />
                </label>
                <label className='formulario-contato'>
                    <h2>Linkedin</h2>
                    <input
                        type="text"
                        className='input-convidado text-gradiente'
                        name='linkedin-convidado'
                        id='linkedin-convidado'
                        autoComplete='off'
                    />
                </label>
                <label className='formulario-contato'>
                    <h2>Numero*</h2>
                    <input
                        type="text"
                        className='input-convidado text-gradiente'
                        name='numero-convidado'
                        id='numero-convidado'
                        required
                        autoComplete='off'
                    />
                </label>
                <label className='formulario-contato'>
                    <h2>Email*</h2>
                    <input
                        type="email"
                        className='input-convidado text-gradiente'
                        name='email-convidado'
                        id='email-convidado'
                        autoComplete='off'
                        required
                    />
                </label>

                <Button
                    className={'text-gradiente button-convidado'}
                    type={'submit'}
                    texto={"Enviar"}
                />

            </div>
        </form>
    )
}

export default Contact