// 元函数

function effectDisplay(x, acc, type){
    x = new ExpantaNum(x)
    let y = `<br>当前效果: `
    switch(type) {
        case "add":
            return y + "+" + format(x,acc)
        break;
        case "sub":
            return y + "-" + format(x,acc)
        break;
        case "mul":
            return y + format(x,acc) + "倍"
        break;
        case "div":
            return y + "/" + format(x,acc)
        break;
        case "pow":
            return y + "^" + format(x,acc)
        break;
        case "root":
            return y + format(x,acc) + "次方根"
        break;
        default: // 无效果或其他
            return ""
    }
}

// 升级系统

const upgradeCost1 = 
    [null,
      [null,
        new ExpantaNum(30),new ExpantaNum(1.5e4),new ExpantaNum(1e23),new ExpantaNum("2e643"),
        new ExpantaNum("1e22059"),new ExpantaNum("2e148605"),new ExpantaNum("5e3632587"),new ExpantaNum("1e16815179"),
        new ExpantaNum("e2.333e11"),new ExpantaNum("e3.122e12"),new ExpantaNum("e3.537e16"),new ExpantaNum("e1.913e17"),
        new ExpantaNum("e1.788e19"),new ExpantaNum("e6.259e19"),new ExpantaNum("e4.252e26"),new ExpantaNum("e2e27"),
      ],
      [null,
        new ExpantaNum(287913),new ExpantaNum(1366629),new ExpantaNum(2090799),new ExpantaNum(3451291),
        new ExpantaNum(9.836e8),new ExpantaNum(7.176e9),new ExpantaNum(1.219e11),new ExpantaNum(6.281e11),
      ],
    ]

const upgradeCost2 = 
    [null,
      [null,
        new ExpantaNum(3),new ExpantaNum(4),new ExpantaNum(9),new ExpantaNum(130),
        new ExpantaNum(1176),new ExpantaNum(3634),new ExpantaNum(22789),new ExpantaNum(54004),
        new ExpantaNum(1e7),new ExpantaNum(4.0239e7),new ExpantaNum(2.1e10),new ExpantaNum(5.115e10),
        new ExpantaNum(1.515e11),new ExpantaNum(2.468e11),new ExpantaNum(3.717e12),new ExpantaNum(6.378e12),
      ],
      [null,
        new ExpantaNum(4768.5),new ExpantaNum(226598.9),new ExpantaNum(13099530),new ExpantaNum(4769636261),
        new ExpantaNum(7.495e16),new ExpantaNum(4.4e18),new ExpantaNum(1.123e23),new ExpantaNum(7.96e27),
      ],
    ]

/*
_____________________________________________
|层级|  升级成本1  |  升级成本2  |
|  1  |      点数      |       点       |
|  2  |       点       |   线段    |
|_____|__________________|__________________|
*/

function upgradeCostDisplay(layer, id){
    switch(layer) {
        case 1:
            return formatWhole(upgradeCost1[layer][id]) + " 点数和 " + formatWhole(upgradeCost2[layer][id]) + " 点"
        break;
        case 2:
            return formatWhole(upgradeCost1[layer][id]) + " 点和 " + formatWhole(upgradeCost2[layer][id]) + " 线段"
        break;
        default:
            return ""
    }
}

function upgradeDescription(layer, id){
    let x
    switch(layer) {
        case 1:
            switch(id) {
            case 1:
                x = new ExpantaNum(1)
                if (player.upgrade[1].includes(5)) x = x.mul(upgradeEffect(1,5))
                return "将点效果乘以点的" + (x.eq(1) ? "点次方。" : "(点数*" + format(x,4) + ")次方。" )
            break;
            case 2:
                return "将点效果乘以点数的log10对数点数次方。"
            break;
            case 3:
                return "将点获取乘以log10(log10(点数))。"
            break;
            case 4:
                return "可以购买最大点，点效果指数^(1+0.032*log10(点))，软上限为^" + format(1.16,4) + "。"
            break;
            case 5:
                return "将上述升级效果提高log(点)^0.5。"
            break;
            case 6:
                return "将线效果指数提高到点^0.35。"
            break;
            case 7:
                return "将点到线段获取指数的数量级增加1。"
            break;
            case 8:
                x = new ExpantaNum(1.625)
                if (player.upgrade[1].includes(12)) x = x.mul(upgradeEffect(1,12))
                return "将线效果提高slog10(点数)" + (x.eq(1) ? "。" : "^" + format(x,4) + "。" )
            break;
            case 9:
                return "将线效果指数提高1+log10(log10(点))/5。"
            break;
            case 10:
                x = new ExpantaNum(0.475)
                if (player.upgrade[1].includes(13)) x = new ExpantaNum(1)
                return "将点获取乘以线" + (x.eq(1) ? "。" : "^" + format(x,4) + "。" )
            break;
            case 11:
                return "每数量级^2的点数增加点数获取指数0.02。"
            break;
            case 12:
                return "将上述升级效果提高线^0.910413。"
            break;
            case 13:
                return "点升级10和线可购买3使用更好的公式。"
            break;
            case 14:
                return "将线可购买3基础增加log10(点)/20，线段获取乘以1.515。"
            break;
            case 15:
                return "将点获取软上限起始点乘以弦效果^3.33。"
            break;
            case 16:
                return "将点获取软上限起始点乘以点数的三重对数再提高1.2次方。"
            break;
            default: // 未找到升级
                return ""
            }
        break;
        case 2:
            switch(id) {
            case 1:
                return "基础线效果超过" + format("ee4") + "时会增强其效果基础。"
            break;
            case 2:
                x = new ExpantaNum(1)
                if (buyableShow(2,5)) x = x.add(buyableEffect(2,5))
                return "将线段获取乘以log10(线段)" + (x.eq(1) ? "。" : "^" + format(x) + "。" )
            break;
            case 3:
                return "将线段获取乘以log10(log10(点数))。"
            break;
            case 4:
                return "将点到线段获取指数的数量级乘以1.6，将线段效果提高1.097。"
            break;
            case 5:
                return "第4个点升级软上限根据线减弱。"
            break;
            case 6:
                return "每个线段购买项等级增加点获取1%。"
            break;
            case 7:
                return "将线到线段获取指数乘以1.13，线段获取乘以1.035。"
            break;
            case 8:
                return "将线可购买2基础增加slog10(点数)/41.85。"
            break;
            default: // 未找到升级
                return ""
            }
        break;
        default: // 未找到层级
            return ""
        }
}

function canAffordUpgrade(layer,id){
if (player.upgrade[layer].includes(id)) return false // 已购买升级
    if (upgradeCost1[layer][id] == undefined || upgradeCost2[layer][id] == undefined) return false // 未找到升级
    switch(layer) {
    case 1:
        if (player.points.lt(upgradeCost1[layer][id]) || player.prestige[1].lt(upgradeCost2[layer][id])) return false // 资源不足
        else return true
        break;
    case 2:
        if (player.prestige[1].lt(upgradeCost1[layer][id]) || player.lineSegments.lt(upgradeCost2[layer][id])) return false // 资源不足
        else return true
        break;
    default: // 未找到层级
    return false
    }
}
  
function buyUpgrade(layer,id){
    switch(layer) {
    case 1:
        if (!canAffordUpgrade(layer,id)) return
        player.upgrade[layer].push(id)

        player.points = player.points.sub(upgradeCost1[layer][id])
        player.prestige[1] = player.prestige[1].sub(upgradeCost2[layer][id])
        if (player.points.lt(1) && player.prestige[1].eq(0)) player.points = new ExpantaNum(1) // 防止软锁定
    break;
    case 2:
        if (!canAffordUpgrade(layer,id)) return
        player.upgrade[layer].push(id)

        player.prestige[1] = player.prestige[1].sub(upgradeCost1[layer][id])
        player.lineSegments = player.lineSegments.sub(upgradeCost2[layer][id])
        if (player.points.lt(1) && player.prestige[1].eq(0)) player.points = new ExpantaNum(1) // 防止软锁定
    break;
    default: // 未找到层级
        return
    }
}
  
function upgradeEffect(layer,id){
    let x
    let e
    switch(layer) {
    case 1:
        switch(id) {
        case 1:
            x = player.prestige[1].max(1).tetr(2)
            if (player.upgrade[1].includes(5)) x = x.pow(upgradeEffect(1,5))
            return x
        break;
        case 2:
            x = player.points.max(10).log10().pow(player.prestige[1].max(1))
            return x
        break;
        case 3:
            x = player.points.max(1e10).log10().log10()
            return x
        break;
        case 4:
            x = player.prestige[1].max(1).log10().mul(0.032).add(1)
            e = new ExpantaNum(0.5)
            if (player.upgrade[2].includes(5)) e = e.root(upgradeEffect(2,5))
            if (x.gte(1.16)) x = x.div(1.16).pow(e).mul(1.16)
            return x
        break;
        case 5:
            x = player.prestige[1].max(10).log10().pow(0.5)
            return x
        break;
        case 6:
            x = player.prestige[1].max(1).pow(0.35)
            return x
        break;
        case 8:
            x = player.points.max(10).slog(10).pow(1.625)
            if (player.upgrade[1].includes(12)) x = x.pow(upgradeEffect(1,12))
            return x
        break;
        case 9:
            x = player.prestige[1].max(10).log10().log10().mul(0.2).add(1)
            return x
        break;
        case 10:
            x = player.prestige[2].max(1).pow(player.upgrade[1].includes(13)?1:0.475)
            return x
        break;
        case 11:
            x = player.points.max(10).log10().log10().mul(0.02).add(1)
            return x
        break;
        case 12:
            x = player.prestige[2].max(1).pow(0.910413)
            return x
        break;
        case 14:
            x = player.prestige[1].max(1).log10().div(20)
            return x
        break;
        case 15:
            x = LAYERS.stringEff().pow(10/3)
            return x
        break;
        case 16:
            x = slogadd(player.points.max(tet10(3)),-3).pow(1.2)
            return x
        break;
        default: // 未找到升级
            return new ExpantaNum(1)
        }
    break;
    case 2:
        switch(id) {
        case 1:
            x = powExp(player.points, 2/3).max(10).log10().pow(2500).div(slogadd(4,2)).pow(20.8).max(1)
            return x
        break;
        case 2:
            e = new ExpantaNum(1)
            if (buyableShow(2,5)) e = e.add(buyableEffect(2,5))
            x = player.lineSegments.add(10).log10().pow(e)
            return x
        break;
        case 3:
            x = upgradeEffect(1,3)
            return x
        break;
        case 5:
            x = player.prestige[2].add(1).pow(0.2)
            return x
        break;
        case 6:
            x = new ExpantaNum(0)
            for (let i=1;i<=player.buyables[2].length-1;i++){
                x = x.add(totalBuyableLevel(2,i))
            }
            return x.mul(0.01).add(1)
        break;
        case 8:
            x = player.points.max(1).slog(10).div(41.85)
            return x
        break;
        default: // 未找到升级
            return new ExpantaNum(1)
        }
    break;
    default: // 未找到层级
        return new ExpantaNum(1)
    }
}
  
function upgradeShow(layer,id){
    switch(layer) {
    case 1:
        switch(id) {
        case 1:
            return player.prestige[1].gte(2) || player.upgrade[1].includes(1)
        break;
        case 2:
            return player.upgrade[1].includes(1) || player.upgrade[1].includes(2)
        break;
        case 3:
            return player.upgrade[1].includes(2) || player.upgrade[1].includes(3)
        break;
        case 4:
            return player.upgrade[1].includes(3) || player.upgrade[1].includes(4)
        break;
        case 5:
            return (player.upgrade[1].includes(4) && player.milestone[2].includes(1)) || player.upgrade[1].includes(5)
        break;
        case 6:
            return (player.upgrade[1].includes(5) && player.milestone[2].includes(1)) || player.upgrade[1].includes(6)
        break;
        case 7:
            return (player.upgrade[1].includes(6) && player.milestone[2].includes(2)) || player.upgrade[1].includes(7)
        break;
        case 8:
            return (player.upgrade[1].includes(7) && player.milestone[2].includes(2)) || player.upgrade[1].includes(8)
        break;
        case 9:
            return (player.upgrade[1].includes(8) && player.buyables[2][1].gte(9)) || player.upgrade[1].includes(9)
        break;
        case 10:
            return (player.upgrade[1].includes(9) && player.buyables[2][1].gte(9)) || player.upgrade[1].includes(10)
        break;
        case 11:
            return (player.upgrade[1].includes(10) && player.upgrade[2].includes(6)) || player.upgrade[1].includes(11)
        break;
        case 12:
            return player.upgrade[1].includes(11) || player.upgrade[1].includes(12)
        break;
        case 13:
            return (player.upgrade[1].includes(12) && player.buyables[2][4].gte(2)) || player.upgrade[1].includes(13)
        break;
        case 14:
            return (player.upgrade[1].includes(13) && player.buyables[2][4].gte(3)) || player.upgrade[1].includes(14)
        break;
        case 15:
            return (player.upgrade[1].includes(14) && player.string.gte(10)) || player.upgrade[1].includes(15)
        break;
        case 16:
            return (player.upgrade[1].includes(15) && player.string.gte(11)) || player.upgrade[1].includes(16)
        break;
        default: // 未找到升级
            return false
        }
    break;
    case 2:
        switch(id) {
        case 1:
            return player.buyables[2][2].gte(2) || player.upgrade[2].includes(1)
        break;
        case 2:
            return (player.upgrade[2].includes(1) && player.prestige[2].gte(3)) || player.upgrade[2].includes(2)
        break;
        case 3:
            return (player.upgrade[2].includes(2) && player.buyables[2][1].gte(5)) || player.upgrade[2].includes(3)
        break;
        case 4:
            return (player.upgrade[2].includes(3) && player.buyables[2][2].gte(5)) || player.upgrade[2].includes(4)
        break;
        case 5:
            return (player.upgrade[2].includes(4) && player.prestige[2].gte(4)) || player.upgrade[2].includes(5)
        break;
        case 6:
            return (player.upgrade[2].includes(5) && player.buyables[2][3].gte(3)) || player.upgrade[2].includes(6)
        break;
        case 7:
            return (player.upgrade[2].includes(6) && player.milestone[2].includes(6)) || player.upgrade[2].includes(7)
        break;
        case 8:
            return (player.upgrade[2].includes(7) && player.buyables[2][1].gte(15)) || player.upgrade[2].includes(8)
        break;
        default: // 未找到升级
            return false
        }
    break;
    default: // 未找到层级
        return false
    }
}

const displayUpgradeAccuracy = 
    [null,
        [null,2,2,4,4,4,4,2,4,4,4,4,4,2,4,4,4],
        [null,2,4,4,2,4,2,2,4]
    ]

function upgradeEffectType(layer,id){
    let array = 
        [null,
            [null,
                "mul","mul","mul","pow",
                "pow","pow","none","pow",
                "pow","mul","pow","pow",
                "none","add","mul","mul",
            ],
            [null,
                "mul","mul","mul","none",
                "root","mul","none","add",
            ],
        ]
    return array[layer][id]
}

function upgradeStyle(layer, id){
    document.getElementById("layer" + layer + "upg" + id).classList.remove("bought")
    if (player.upgrade[layer].includes(id) && !AFactived) document.getElementById("layer" + layer + "upg" + id).classList.add("bought")
}
  
// 可购买项

function buyableCostDisplay(layer, id){
    switch(layer) {
        case 2:
            return format(getBuyableCost(layer,id)) + " 线段"
        break;
        default:
            return ""
    }
}

function buyableDescription(layer, id){
    switch(layer) {
        case 2:
            switch(id) {
            case 1:
                return "每级增加" + format(buyableEffectBase(layer,id)) + "到线到线段获取指数，软上限为+" + format(25) + "。"
            break;
            case 2:
                return "每级增加" + format(buyableEffectBase(layer,id)) + "到点到线段获取指数的数量级，软上限为+" + format(10) + "。"
            break;
            case 3:
                return "将点获取乘以" + format(buyableEffectBase(layer,id)) + "每" + (player.upgrade[1].includes(13) ? "" : "平方根") + "级，软上限为" + format(1e8) + "倍。"
            break;
            case 4:
                return "将点数获取提高" + format(buyableEffectBase(layer,id)) + "每级。"
            break;
            case 5:
                return "每级增加" + format(buyableEffectBase(layer,id)) + "到线升级2效果指数。"
            break;
            default: // 未找到可购买项
                return ""
            }
        break;
        default: // 未找到层级
            return ""
        }
}

function buyableCostType(layer,id){
    let array = 
        [null,
            [],
            [null,
                "mul","mul","mul","mul","pow",
            ],
        ]
    return array[layer][id]
}

function getBaseBuyableCost(layer,id){ // 等级1的成本
    let x
    switch(layer) {
        case 2:
            switch(id) {
            case 1:
                x = new ExpantaNum(100)
                return x
            break;
            case 2:
                x = new ExpantaNum(200)
                return x
            break;
            case 3:
                x = new ExpantaNum(5e16)
                return x
            break;
            case 4:
                x = new ExpantaNum(3.5e26)
                return x
            break;
            case 5:
                x = new ExpantaNum(1.5e47)
                return x
            break;
            default: // 未找到可购买项
                return new ExpantaNum(Infinity)
            }
        break;
        default: // 未找到层级
            return new ExpantaNum(Infinity)
        }
}

function getBuyableCostScaling(layer,id){ // 成本折算
    let x
    switch(layer) {
        case 2:
            switch(id) {
            case 1:
                x = new ExpantaNum(3)
                return x
            break;
            case 2:
                x = new ExpantaNum(4.8)
                return x
            break;
            case 3:
                x = new ExpantaNum(2)
                return x
            break;
            case 4:
                x = new ExpantaNum(1.06)
                return x
            break;
            case 5:
                x = new ExpantaNum(1.588)
                if (player.milestone[2].includes(13)) x = new ExpantaNum(1.164)
                return x
            break;
            default: // 未找到可购买项
                return new ExpantaNum(Infinity)
            }
        break;
        default: // 未找到层级
            return new ExpantaNum(Infinity)
        }
}

function getBuyableCostExp(layer,id){ // 折算指数
    switch(layer) {
        case 2:
            switch(id) {
            case 1:
                x = new ExpantaNum(1.5)
                return x
            break;
            case 2:
                x = new ExpantaNum(1.6)
                return x
            break;
            case 3:
                x = new ExpantaNum(2)
                return x
            break;
            case 4:
                x = new ExpantaNum(2.25)
                return x
            break;
            case 5:
                x = new ExpantaNum(1)
                return x
            break;
            default: // 未找到可购买项
                return new ExpantaNum(Infinity)
            }
        break;
        default: // 未找到层级
            return new ExpantaNum(Infinity)
        }
}

function getBuyableCost(layer,id){
    switch(layer) {
        case 2:
            if (buyableCostType(layer,id) == "mul") {
                return getBaseBuyableCost(layer,id).mul(ExpantaNum.pow(getBuyableCostScaling(layer,id),player.buyables[layer][id].pow(getBuyableCostExp(layer,id))))
            } else if (buyableCostType(layer,id) == "pow") {
                return ExpantaNum.pow(10,getBaseBuyableCost(layer,id).log10().mul(ExpantaNum.pow(getBuyableCostScaling(layer,id),player.buyables[layer][id].pow(getBuyableCostExp(layer,id)))))
            } else { // 未找到可购买项
                return new ExpantaNum(Infinity)
            }
        break;
        default: // 未找到层级
            return new ExpantaNum(Infinity)
        }
}

function getMaxBuyableCost(layer,id){
    switch(layer) {
        case 2:
            if (buyableCostType(layer,id) == "mul") {
                return getBaseBuyableCost(layer,id).mul(ExpantaNum.pow(getBuyableCostScaling(layer,id),getMaxBulkBuyable(layer,id).add(player.buyables[layer][id]).sub(1).pow(getBuyableCostExp(layer,id))))
            } else if (buyableCostType(layer,id) == "pow") {
                return ExpantaNum.pow(10,getBaseBuyableCost(layer,id).log10().mul(ExpantaNum.pow(getBuyableCostScaling(layer,id),getMaxBulkBuyable(layer,id).add(player.buyables[layer][id]).sub(1).pow(getBuyableCostExp(layer,id)))))
            } else { // 未找到可购买项
                return new ExpantaNum(Infinity)
            }
        break;
        default: // 未找到层级
            return new ExpantaNum(Infinity)
        }
}

function getMaxBulkBuyable(layer,id){
    let res
    switch(layer) {
        case 2:
            res = player.lineSegments
            if (buyableCostType(layer,id) == "mul") {
                return res.div(getBaseBuyableCost(layer,id)).logBase(getBuyableCostScaling(layer,id)).pow(getBuyableCostExp(layer,id).rec()).add(1).max(0).sub(player.buyables[layer][id]).floor().max(0)
            } else if (buyableCostType(layer,id) == "pow") {
                return res.max(1).log10().div(getBaseBuyableCost(layer,id).log10()).logBase(getBuyableCostScaling(layer,id)).pow(getBuyableCostExp(layer,id).rec()).add(1).max(0).sub(player.buyables[layer][id]).floor().max(0)
            } else { // 未找到可购买项
                return new ExpantaNum(0)
            }
        break;
        default: // 未找到层级
            return new ExpantaNum(0)
        }
}

function canAffordBuyable(layer,id){
    switch(layer) {
        case 2:
            if (player.lineSegments.lt(getBuyableCost(layer,id))) return false // 资源不足
            else return true
            break;
        default: // 未找到层级
        return false
        }
}

function buyBuyable(layer,id,max=false){
    let bulk
    max = player.milestone[2].includes(10)
    switch(layer) {
        case 2:
            bulk = getMaxBulkBuyable(layer,id)
            if (!canAffordBuyable(layer,id)) return
            if (!player.milestone[2].includes(14)) player.lineSegments = player.lineSegments.sub(max?getMaxBuyableCost(layer,id):getBuyableCost(layer,id))
            player.buyables[layer][id] = player.buyables[layer][id].add(max?bulk:1)
        break;
        default: // 未找到层级
            return
        }
}

function buyableEffectBase(layer,id){
    let x
    switch(layer) {
    case 2:
        switch(id) {
        case 1:
            x = new ExpantaNum(1)
            return x
        break;
        case 2:
            x = new ExpantaNum(0.5)
            if (player.upgrade[2].includes(8)) x = x.add(upgradeEffect(2,8))
            return x
        break;
        case 3:
            x = new ExpantaNum(1.3)
            if (player.upgrade[1].includes(14)) x = x.add(upgradeEffect(1,14))
            return x
        break;
        case 4:
            x = new ExpantaNum(2)
            return x
        break;
        case 5:
            x = new ExpantaNum(0.5)
            return x
        break;
        default: // 未找到可购买项
            return new ExpantaNum(1)
        }
    break;
    default: // 未找到层级
        return new ExpantaNum(1)
    }
}

function freeBuyableLevel(layer,id){
    let x
    switch(layer) {
    case 2:
        switch(id) {
        case 1:
            x = new ExpantaNum(0)
            return x
        break;
        case 2:
            x = new ExpantaNum(0)
            return x
        break;
        case 3:
            x = new ExpantaNum(0)
            return x
        break;
        case 4:
            x = new ExpantaNum(0)
            return x
        break;
        case 5:
            x = new ExpantaNum(0)
            return x
        break;
        default: // 未找到可购买项
            return new ExpantaNum(0)
        }
    break;
    default: // 未找到层级
        return new ExpantaNum(0)
    }
}

function totalBuyableLevel(layer,id){
    let x = player.buyables[layer][id].add(freeBuyableLevel(layer,id))
    return x
}

function buyableEffect(layer,id){
    let x
    switch(layer) {
    case 2:
        switch(id) {
        case 1:
            x = totalBuyableLevel(layer,id).mul(buyableEffectBase(layer,id))
            if (x.gte(25)) x = x.div(25).pow(0.5).mul(25)
            return x
        break;
        case 2:
            x = totalBuyableLevel(layer,id).mul(buyableEffectBase(layer,id))
            if (x.gte(10)) x = x.div(10).pow(0.5).mul(10)
            return x
        break;
        case 3:
            x = ExpantaNum.pow(buyableEffectBase(layer,id),totalBuyableLevel(layer,id).pow(player.upgrade[1].includes(13)?1:0.5))
            if (x.gte(1e8)) x = ExpantaNum.pow(10,x.log10().div(8).pow(0.75).mul(8))
            return x
        break;
        case 4:
            x = ExpantaNum.pow(buyableEffectBase(layer,id),totalBuyableLevel(layer,id))
            return x
        break;
        case 5:
            x = totalBuyableLevel(layer,id).mul(buyableEffectBase(layer,id))
            return x
        break;
        default: // 未找到可购买项
            return new ExpantaNum(1)
        }
    break;
    default: // 未找到层级
        return new ExpantaNum(1)
    }
}

function buyableShow(layer,id){
    switch(layer) {
    case 2:
        switch(id) {
        case 1:
            return player.milestone[2].includes(2) || player.milestone[2].includes(6)
        break;
        case 2:
            return player.buyables[2][1].gte(1) || player.milestone[2].includes(6)
        break;
        case 3:
            return player.milestone[2].includes(4) || player.milestone[2].includes(6)
        break;
        case 4:
            return player.milestone[2].includes(7)
        break;
        case 5:
            return player.milestone[2].includes(11)
        break;
        default: // 未找到可购买项
            return false
        }
    break;
    default: // 未找到层级
        return false
    }
}

const displayBuyableAccuracy = 
    [null,
        [null],
        [null,2,2,4,2,2],
    ]

function buyableEffectType(layer,id){
    let array = 
        [null,
            [],
            [null,
                "add","add","mul","pow","add",
            ],
        ]
    return array[layer][id]
}

// 里程碑

function milestoneDescription(layer, id){
    switch(layer) {
        case 2:
            switch(id) {
            case 1:
                return "解锁更多点升级。"
            break;
            case 2:
                return "解锁线段。"
            break;
            case 3:
                return "始终可以购买最大点。"
            break;
            case 4:
                return "自动购买点且不重置任何内容。" + `<br>` + "将点数获取乘以10^10^线。"
            break;
            case 5:
                return "解锁弦。" + `<br>` + "线重置时保留点升级。"
            break;
            case 6:
                return "解锁更多线升级。"
            break;
            case 7:
                return "解锁一个线可购买项。"
            break;
            case 8:
                return "将线需求除以" + format(128.1) + "。"
            break;
            case 9:
                return "根据线增加线段上限1秒的生产量。"
            break;
            case 10:
                return "可以购买最大线可购买项。"
            break;
            case 11:
                return "解锁一个线可购买项。"
            break;
            case 12:
                return "弦重置时保留线升级。"
            break;
            case 13:
                return "减少线可购买项5的成本折算。"
            break;
            case 14:
                return "线可购买项不再消耗任何资源。"
            break;
            default: // 未找到里程碑
                return ""
            }
        break;
        default: // 未找到层级
            return ""
        }
}

function milestoneReq(layer, id){
    switch(layer) {
        case 2:
            switch(id) {
            case 1:
                return formatWhole(1) + " 线"
            break;
            case 2:
                return formatWhole(2) + " 线"
            break;
            case 3:
                return formatWhole(3) + " 线"
            break;
            case 4:
                return formatWhole(4) + " 线"
            break;
            case 5:
                return formatWhole(5) + " 线"
            break;
            case 6:
                return formatWhole(1) + "pL 弦"
            break;
            case 7:
                return formatWhole(2) + "pL 弦"
            break;
            case 8:
                return formatWhole(3) + "pL 弦"
            break;
            case 9:
                return formatWhole(6) + " 线"
            break;
            case 10:
                return formatWhole(10) + "pL 弦"
            break;
            case 11:
                return formatWhole(15) + "pL 弦"
            break;
            case 12:
                return formatWhole(75) + "pL 弦"
            break;
            case 13:
                return formatWhole(230) + "pL 弦"
            break;
            case 14:
                return formatWhole(1000) + "pL 弦"
            break;
            default: // 未找到里程碑
                return ""
            }
        break;
        default: // 未找到层级
            return ""
        }
}

function canGainMilestone(layer, id){
    if (player.milestone[layer].includes(id)) return false
    switch(layer) {
        case 1: // 无里程碑
            return false
        break;
        case 2:
            switch(id) {
            case 1:
                return player.prestige[2].gte(1)
            break;
            case 2:
                return player.prestige[2].gte(2)
            break;
            case 3:
                return player.prestige[2].gte(3)
            break;
            case 4:
                return player.prestige[2].gte(4)
            break;
            case 5:
                return player.prestige[2].gte(5)
            break;
            case 6:
                return player.string.gte(1)
            break;
            case 7:
                return player.string.gte(2)
            break;
            case 8:
                return player.string.gte(3)
            break;
            case 9:
                return player.prestige[2].gte(6)
            break;
            case 10:
                return player.string.gte(10)
            break;
            case 11:
                return player.string.gte(15)
            break;
            case 12:
                return player.string.gte(75)
            break;
            case 13:
                return player.string.gte(230)
            break;
            case 14:
                return player.string.gte(1000)
            break;
            default: // 未找到里程碑
                return false
            }
        break;
        default: // 未找到层级
            return false
        }
}

function updateMilestones(){
    for (let i=1;i<=amtLayers;i++){
        for (let j=1;j<=loadMilestones[i];j++){
            if (canGainMilestone(i,j)) player.milestone[i].push(j)
        }
    }
}

function milestoneShow(layer,id){
    switch(layer) {
    case 2:
        switch(id) {
        case 1:
            return true
        break;
        case 2:
            return player.milestone[2].includes(1)
        break;
        case 3:
            return player.milestone[2].includes(2)
        break;
        case 4:
            return player.milestone[2].includes(3)
        break;
        case 5:
            return player.milestone[2].includes(4)
        break;
        case 6:
            return player.milestone[2].includes(5)
        break;
        case 7:
            return player.milestone[2].includes(6)
        break;
        case 8:
            return player.milestone[2].includes(7)
        break;
        case 9:
            return player.milestone[2].includes(8)
        break;
        case 10:
            return player.milestone[2].includes(9)
        break;
        case 11:
            return player.milestone[2].includes(10)
        break;
        case 12:
            return player.milestone[2].includes(11)
        break;
        case 13:
            return player.milestone[2].includes(12)
        break;
        case 14:
            return player.milestone[2].includes(13)
        break;
        default: // 未找到里程碑
            return false
        }
    break;
    default: // 未找到层级
        return false
    }
}

// 其他

function getProductionRateDisplay(curr, gain){
    if (AFactived) return ""
    let now = new ExpantaNum(curr)
    let next = new ExpantaNum(curr).add(gain)
    let now2
    let next2
    let rate = "+" + format(gain)
    if (now.gt(0)){
        if (next.div(now).gte(10) && now.gte(1e100)) rate = "x" + format(ExpantaNum.pow(10,next.div(now).log10().mul(20)))
        if (next.log10().div(now.log10()).gte(10) && now.gte("e1e100")) rate = "^" + format(ExpantaNum.pow(10,next.log10().div(now.log10()).log10().mul(20)))
        for (let i = 2; i <= 99; i++){
            now2 = slogadd(now.max(slogadd(1,i)),-i)
            next2 = slogadd(next.max(slogadd(1,i)),-i)
            if (next2.div(now2).gte(10) && now.gte(slogadd(1e100,i))) rate = "exp" + (i==2 ? "" : `<sup>` + (i-1) + `</sup>`) + " ^" + format(ExpantaNum.pow(10,next2.div(now2).log10().mul(20)))
            else break;
        }
        if (now.gte("10^^100")){
            let nowSlog = now.slog(10)
            let nextSlog = next.slog(10)
            rate = "^^" + format(nextSlog.sub(nowSlog).mul(20).add(1), 4)
            if (nowSlog.gte(1e100)) rate = "x" + format(ExpantaNum.pow(10,nextSlog.div(nowSlog).log10().mul(20))) + " 数量级^数量级"
            if (nextSlog.log10().div(nowSlog.log10()).gte(10) && nowSlog.gte("10^^e1e100")) rate = "^" + format(ExpantaNum.pow(10,nextSlog.log10().div(nowSlog.log10()).log10().mul(20))) + " 数量级^数量级"
            for (let i = 2; i <= 99; i++){
                now3 = slogadd(nowSlog.max(slogadd(1,i)),-i)
                next3 = slogadd(nextSlog.max(slogadd(1,i)),-i)
                if (next3.div(now3).gte(10) && nowSlog.gte(slogadd(1e100,i))) rate = "exp" + (i==2 ? "" : `<sup>` + (i-1) + `</sup>`) + " ^" + format(ExpantaNum.pow(10,next3.div(now3).log10().mul(20))) + " 数量级^数量级"
                else break;
            }
            if (nowSlog.gte("10^^100")) rate = "^^" + format(nextSlog.slog(10).sub(nowSlog.slog(10)).mul(20).add(1), 4) + " 数量级^数量级"
        }
    }
    return rate
}

function changeOption(id){
    switch(id){
        case 0:
            player.options.notation = (player.options.notation+1)%14
        break;
        case 1:
            player.options.debug = (player.options.debug+1)%2
        break;
        case 2:
            player.options.fullStandard = (player.options.fullStandard+1)%2
        break;
        default: // 未找到选项
        return 
    }
}

const notationOptionRange = [[0,15],[0,15],[0,15],[0,15],[3,10],[1,15]]
const notationOptionDefault = [2,3,4,6,5,9]
const notationOptionName = [
    "数字的精度",
    "e处数字的精度",
    "F,G,H处数字的精度",
    "J,K处数字的精度",
    "到下一个字母的字母数量",
    "到下一个指数的数字指数"
]

function changeAccuracyOptionButton(id){
    let num = prompt("你想将" + notationOptionName[id] + "改为...(最小值: " + notationOptionRange[id][0] + ", 最大值: " + notationOptionRange[id][1] + ", 默认值: " + notationOptionDefault[id] + ", 取消或留空将改为默认值)",player.options.notationOption[id])
    if (num === null || num == "") num = notationOptionDefault[id]
    num = Math.round(Number(num))
    if (isNaN(num)) num = notationOptionDefault[id]
    if (num < notationOptionRange[id][0]) num = notationOptionRange[id][0]
    if (num > notationOptionRange[id][1]) num = notationOptionRange[id][1]
    player.options.notationOption[id] = num
}

function getStatHTML(){
    let output = `<b style="font-size: 24px">资源</b><br>`
    output = output + `点数: <b>` + format(player.points) + `</b><br>`
    output = output + `维度转换: <b>` + formatWhole(player.dimShift) + `</b><br>`
    output = output + `点: <b>` + formatWhole(player.prestige[1]) + `</b> (下一需求: <b>` + format(LAYERS.req(1)) + `</b> 点数, 效果: +<b>` + format(LAYERS.eff(1)) + `</b> 点数/秒)<br>`
    if (player.dimShift>=1) output = output + `线: <b>` + formatWhole(player.prestige[2]) + `</b> (下一需求: <b>` + format(LAYERS.req(2)) + `</b> 点, 效果: <b>` + format(LAYERS.eff(2)) + `</b>倍点数获取)<br>`
    if (player.milestone[2].includes(2)) output = output + `线段: <b>` + format(player.lineSegments) + `</b> (效果: ^<b>` + format(LAYERS.lineSegEff(),4) + `</b> 点数获取)<br>`
    if (player.milestone[2].includes(5)) output = output + `弦: <b>` + formatLength(player.string.mul(pL)) + `</b> (下一需求: <b>` + format(LAYERS.stringReq()) + `</b> 线段, 效果: ^<b>` + format(LAYERS.stringEff(),4) + `</b> 线段获取和效果)<br><br>`
    
    output = output + `<b style="font-size: 24px">点数生产</b><br>`
    output = output + `<b style="font-size: 18px">乘数</b><br>`
    output = output + `<b>` + format(LAYERS.eff(1)) + `</b> (点效果)<br>`
    if (player.dimShift>=1) output = output + `x<b>` + format(LAYERS.eff(2)) + `</b> (线效果)<br>`
    if (player.milestone[2].includes(4)) output = output + `x<b>` + format(slogadd(player.prestige[2],2)) + `</b> (线里程碑4效果)<br>`
    output = output + `总获取乘数: <b>` + format(getPointsGainMulti()) + `</b><br><br>`
    
    output = output + `<b style="font-size: 18px">指数</b><br>`
    if (player.milestone[2].includes(2)) output = output + `<b>` + format(LAYERS.lineSegEff(),4) + `</b> (线段效果)<br>`
    if (player.upgrade[1].includes(11)) output = output + `x<b>` + format(upgradeEffect(1,11),4) + `</b> (点升级11效果)<br>`
    if (buyableShow(2,4)) output = output + `x<b>` + format(buyableEffect(2,4),4) + `</b> (线可购买4效果)<br>`
    output = output + `总获取指数: <b>` + format(getPointsGainExp(),4) + `</b><br><br>`
    output = output + `总体点数获取: <b>` + format(getPointsGainMulti()) + `<sup>` + format(getPointsGainExp(),4) +`</sup></b> = <b>` + format(getPointsGain()) + `</b><br><br>`
    return output
}

function getGameSpeedHTML(){
    let output = ``
    if (!getGameSpeed().eq(1)) output = output + `游戏速度: <b style="font-size: 18px;">` + format(getGameSpeed(),3) + `</b>倍`
    if (!getGameSpeed().eq(1) && !player.dev.devSpeed.eq(1)) output = output + ", "
    if (!player.dev.devSpeed.eq(1)) output = output + `开发速度: <b style="font-size: 18px;">` + format(player.dev.devSpeed,3) + `</b>倍`
    return output
}
