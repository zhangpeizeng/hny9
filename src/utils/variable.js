export const USER_ROLES = [{
  value: '1',
  label: '黄金糕'
},
{
  value: '2',
  label: '双皮奶'
},
{
  value: '3',
  label: '蚵仔煎'
},
{
  value: '4',
  label: '龙须面'
},
{
  value: '5',
  label: '北京烤鸭'
}]

// 车位级别
const ParkingAssetsLevel = [
  {
    value: '1',
    label: '普通车位'
  },
  {
    value: '2',
    label: 'VIP车位'
  },
  {
    value: '3',
    label: '贵族车位'
  }
]
const trueOrFalse = [
  {
    value: '0',
    label: '否'
  },
  {
    value: '1',
    label: '是'
  }
]

// 企业入驻状态
const settleInStatus = [
  {
    value: '0',
    label: '未签约'
  },
  {
    value: '1',
    label: '已入驻'
  }
]
// 角色
const operateRole = [
  {
    value: '1',
    label: '角色1'
  },
  {
    value: '2',
    label: '角色2'
  }
]
// 角色类别
export const ROLE_TYPES = [
  { label: '组织', value: 1 },
  { label: '个人', value: 2 },
  { label: '企业', value: 3 },
  { label: '运营', value: 4 }
]
export const ROLE_TYPES_MAP = {
  1: '组织',
  2: '个人',
  3: '企业',
  4: '运营'
}
// 车位用途
const parkingSpaceFlag = [
  { label: '自用', value: 1 },
  { label: '可租', value: 2 },
  { label: '可售', value: 3 }
]
// 车位位置
const parkingSpaceAddress = [
  { label: '一期A区B1停车场A区', value: '一期A区B1停车场A区', codes: ['001', '002', '003', '004'] },
  { label: '一期A区B1停车场B区', value: '一期A区B1停车场B区', codes: ['005', '006', '007', '008'] },
  { label: '一期A区B1停车场C区', value: '一期A区B1停车场C区', codes: ['009', '010', '011', '012'] },
  { label: '一期A区B1停车场D区', value: '一期A区B1停车场D区', codes: ['013', '014', '015', '016'] },
  { label: '一期A区B1停车场E区', value: '一期A区B1停车场E区', codes: ['017', '018', '019', '021'] },
  { label: '一期A区B1停车场F区', value: '一期A区B1停车场F区', codes: ['111', '112', '113', '114'] }
]
// 在职状态
const serviceStatus = [
  { label: '在职', value: 1 },
  { label: '离职', value: 2 }
]
// 性别
const sex = [
  { label: '男', value: 1 },
  { label: '女', value: 2 }
]
/**
 * 访客相关字典
 */
const visitorStatus = [
  { label: '待审批', value: 1 },
  { label: '待接收邀请', value: 2 },
  { label: '已拒绝邀请', value: 3 },
  { label: '待入园', value: 4 },
  { label: '已拒绝', value: 5 },
  { label: '已入园', value: 6 },
  { label: '已结束', value: 7 }
]
/**
 * 设备管理相关字典
 */
export const dictList = {
  ParkingAssetsLevel: ParkingAssetsLevel,
  trueOrFalse: trueOrFalse,
  settleInStatus: settleInStatus,
  operateRole: operateRole,
  parkingSpaceFlag: parkingSpaceFlag,
  parkingSpaceAddress: parkingSpaceAddress,
  serviceStatus: serviceStatus,
  sex: sex,
  visitorStatus: visitorStatus
}
