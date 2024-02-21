import Mock from "mockjs";
const Random = Mock.Random
//处理路径传参
import {
	parameteUrl
} from "@/utils/query-param"

//去重
function ArrSet(Arr: any[], id: string): any[] {
    let obj: any = {}
    const arrays = Arr.reduce((setArr, item) => {
        obj[item[id]] ? '' : (obj[item[id]] = true && setArr.push(item))
        return setArr
    }, [])
    return arrays
}

export default [
	{
		url: '/api/user',
		type: 'get',
		response: () => {
			const a = Mock.mock({
				success: true,
				'data|10': [
					{
						id: '@increment()',
						name: '@cname()',
						avatar: Random.image('200x200', '#50B347', '#FFF', 'Mock.js')
					}
				]
			})
			return a
		}
	}
]
