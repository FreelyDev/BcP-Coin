import './tokenomics.scss'
import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Reserve', value: 10 },
    { name: 'Liquidity', value: 10 },
    { name: 'Marketing', value: 10 },
    { name: 'Ecosystem Development', value: 15 },
    { name: 'Advisors', value: 5 },
    { name: 'Team', value: 15 },
    { name: 'Community and Users Incentives', value: 15 },
    { name: 'Sale', value: 20 },
  ];
  const COLORS = ['#9D4F9D', '#DE3593', '#FF99FF', '#F05F47', '#FBB315', '#02012D', '#6060F2', '#B0ACEB', '#9D4F9D'];

export default function Tokenomics() {
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * (index === 2 ? 9 : index === 4 || index === 5 ? 4 : index === 3 || index === 6 || index === 7 ? 7 : 7.6);
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <>
          
    
          <text x={x} y={y} fill="white" textAnchor={'middle'} dominantBaseline="central" style={{fontSize : 10}}>
            {`${(percent * 100).toFixed(0)}%`}
          </text>

          {
            data[index].name === 'Ecosystem Development' ? 
            <>
                <text x={x} y={y + 15} fill="white" textAnchor={'middle'} dominantBaseline="central"  style={{fontSize : 10}}>
                Ecosystem
                </text>
                <text x={x} y={y + 25} fill="white" textAnchor={'middle'} dominantBaseline="central"  style={{fontSize : 10}}>
                Development
                </text>
            </>:
            data[index].name === 'Community and Users Incentives' ? 
            <>
                <text x={x} y={y + 15} fill="white" textAnchor={'middle'} dominantBaseline="central"  style={{fontSize : 10}}>
                Community
                </text>
                <text x={x} y={y + 25} fill="white" textAnchor={'middle'} dominantBaseline="central"  style={{fontSize : 10}}>
                and Users
                </text>
                <text x={x} y={y + 35} fill="white" textAnchor={'middle'} dominantBaseline="central"  style={{fontSize : 10}}>
                Incentives
                </text>
            </>:
            <>
                <text x={x} y={y + 15} fill="white" textAnchor={x > cx ? 'middle' : 'middle'} dominantBaseline="central"  style={{fontSize : 10}}>
                    {`${data[index].name}`}
                </text>
            </>
          }

          
          </>
        );
      };

    return (
        <>
            <div className="tokenomics">
                <div className="content">
                    <div className="wrapper mb-3" data-aos="fade-up">
                        <div className="left">
                            <h2>Tokenomics</h2>
                            <div className="my_chart">
                                <PieChart width={700} height={700}>
                                    <Pie
                                        data={data}
                                        startAngle={70}
                                        endAngle={430}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        innerRadius={95}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                        label={renderCustomizedLabel}
                                        stroke="none"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    
                                </PieChart>
                                <div className="sub_title">
                                    <div className="sub_title_content">
                                        <div className="title">
                                            Total Supply
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left">
                        <ul>
                            {data.map((d, k)=>(
                                <li className={`clr_0${k}`} key={k} >
                                    <h3>{d.value}%</h3>
                                <p>{d.name}</p>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}