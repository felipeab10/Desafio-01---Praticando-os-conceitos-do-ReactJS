import { ChangeEventHandler } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { ReactComponent as Plus } from '/src/assets/plus.svg';
import './addTask.css';
interface SearchProps {
  description: string;
  onSetDescription: (value: string) => void;
}


export function AddTask({  onSetDescription, description }: SearchProps) {
  return (
    <div className='search-box'>
      <Input
        type="text"
        required
        placeholder='Adicione uma nova tarefa'
        onChange={(event) => onSetDescription(event.target.value)}
        value={description} 
        />
      <Button type='submit'>
        <div className='button-group'>
          Criar {<Plus />}
        </div>
      </Button>
    </div>
  )
}