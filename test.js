// import React from 'react';

// class App extends React.Component {

//   // state = {
//   //   nome: ''
//   // }

//   // render(){
//   //   return (
//   //     <div>
//   //       <label>Nome:</label>
//   //       <input type="text" value={this.state.nome} 
//   //       onChange={(e) => this.setState({nome: e.target.value})} />

//   //       O nome digitado foi: {this.state.nome}
//   //     </div>
//   //   )
//   // }

//   // Realizando soma
//   // state = {
//   //   numero1: null,
//   //   numero2: null,
//   //   resultado: null
//   // }

//   // render(){
//   //   return (
//   //     <div>
//   //       <label>Primeiro Número:</label>
//   //       <input type="text" value={this.state.numero1} 
//   //       onChange={(e) => this.setState({numero1: e.target.value})} />
//   //       <br />
//   //       <label>Segundo Número:</label>
//   //       <input type="text" value={this.state.numero2} 
//   //       onChange={(e) => this.setState({numero2: e.target.value})} />
//   //       <br />
//   //       <button onClick={() => this.setState({resultado: parseInt(this.state.numero1) + parseInt(this.state.numero2)})} >
//   //         Somar
//   //       </button>

//   //       O resultado é: {this.state.resultado}
//   //     </div>
//   //   )
//   // }


//   //Usando Funções
//   state = {
//     numero1: null,
//     numero2: null,
//     resultado: null
//   }

//   somar = () => {
//     const resultado = parseInt(this.state.numero1) + parseInt(this.state.numero2);
//     this.setState({resultado: resultado});
//   }

//   render(){
//     return (
//       <div>
//         <label>Primeiro Número:</label>
//         <input type="text" value={this.state.numero1} 
//         onChange={(e) => this.setState({numero1: e.target.value})} />
//         <br />
//         <label>Segundo Número:</label>
//         <input type="text" value={this.state.numero2} 
//         onChange={(e) => this.setState({numero2: e.target.value})} />
//         <br />
//         <button onClick={this.somar} >
//           Somar
//         </button>

//         O resultado é: {this.state.resultado}
//       </div>
//     )
//   }
// }

// export default App;
