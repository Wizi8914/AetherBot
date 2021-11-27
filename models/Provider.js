const { Member } = require('./models')

async function getMember(member) {
    const data = await Member.findOne({ id: member.id })
    if (data) return data;
}

async function updateMember(member, params) {
    let data = await this.getMember(member)
    if (typeof(data) !== "object") data = {};
    for(const key in params) {
        if (data[key] !== params) data[key] = params[key] 
    }

    return data.updateOne(params);
}


module.exports = {
    updateMember,
    getMember
}