interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
    color: string
}
export const CircleColors = ({color, ...rest}:IProps) => {
  return (
   <span className="w-5 h-5 block rounded-full bg-amber-300" style={{backgroundColor : color}}
   {...rest }></span>
  )
}
