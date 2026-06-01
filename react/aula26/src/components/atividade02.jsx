import React, { useState } from 'react'

export default function senha({senhaCorreta}) {
   
    const [senha, setSenha] = useState('')
    const [acerto, setAcesso] = useState(false)
         return(
            <div>
                <h1>Atividade 02</h1>
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Digite a senha'/>
                <button onClick={() => setAcesso(senha === senhaCorreta)} >Verificar Senha</button>
               {acerto && <h1>senha correta, voce passou teste</h1>}
               {!acerto && senha.length > 0 && <h1>senha incorreta, tente novamente</h1>}
            </div>
         )   
}


    
