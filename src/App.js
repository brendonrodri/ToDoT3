import React, { Component } from "react"
import styled from "styled-components";

const Input = styled.input`
  margin-top: 1rem ;
  margin-left: 1rem;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  border: 3px solid rgb(100, 30, 230);
  `
const Botaoadd = styled.button`
  width: 10vw;
  border-radius: 5px;
  border: 3px solid rgb(100, 30, 230);
  margin-left: 1rem;
  transition: 800ms;
  :hover{
    background-color:rgb(100, 30, 230);
    color: white;

  }
`
const Botao = styled.button`
  width: 10vw;
  background-color: aliceblue;
`
export default class App extends Component {
  
  state = {
    tarefa: "", //vai ficar responsável por levar a minha tarefa do input para a lista, ou seja, guardar o que foi digitado no input
    placeholder: "Adicione uma tarefa",
    lista: [] // espaço para guardar as tarefas, será atualzidado sempre que uma nova tarefa for adicionada
  }

  recebendoInput = (event) =>{
    this.setState({tarefa: event.target.value }) //altera no estado o que foi digitado no input
  }

  adicionar = () =>{
    //concional para não adicionar tarefa vazia
    if(this.state.tarefa === ''){
      return 
    }
    this.setState({lista: this.state.lista.concat({ //concat que vai concatenar minha lista anterior com minha tarefa nova e retornar uma lista atualizada
      tarefa: this.state.tarefa, //minha nova tarefa
      id: Math.random() //id gerado aleatoriamente, que tarefa vai ter o seu único
    }), tarefa: ''}) //mudar o valor do input para vazia sempre que eu adicionar uma tarefa nova
  }

  deletar = (id) =>{ //paremetro que recebe nosso id referente a tarefa especifica 
    this.setState({
      lista: this.state.lista.filter((item)=>{ //fazendo um filtro na minha lista para remover a minha tarefa
        return item.id !== id
      })
    })
  }
  render(){
    return(
      <>
        <Input value={this.state.tarefa} placeholder={this.state.placeholder} onChange={this.recebendoInput} />
        <Botaoadd onClick={this.adicionar}>Adicionar</Botaoadd>
        <ul>
          {this.state.lista.map((item)=>(
            <>
              <li>{item.tarefa} </li>
              <Botao onClick={()=>{
                  this.deletar(item.id)
              }}>Deletar</Botao>
              
            </>
          ))}
        </ul>
      </>
    )
  }
}