import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import { ICharacter } from '../interfaces/character.interface';

export const Chart = ({characters}:{characters:ICharacter[]}) => {
  return (
    <BarChart
    width={500}
    height={300}
    data={characters}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="votes"  fill="#FACC15" />
  </BarChart>
  )
}
