class Charger {
  constructor(data) {
    this.chargerId = data.chargerId;
    this.chargerType = data.chargerType;
    this.output = data.output;
    this.updatedAt = data.updatedAt;
  }
}

class Station {
  constructor(data) {
    this.stationId = data.stationId;
    this.name = data.name;
    this.kindDetail = data.kindDetail;
    this.address = data.address;
    this.lat = data.lat;
    this.lng = data.lng;
    this.operator = data.operator;
    this.connectorTypes = data.connectorTypes;
    this.chargers = data.chargers.map(chargerData => new Charger(chargerData));
  }
}

export async function fetchStationData(stationId) {
  try {
    console.log(`StationId: ${stationId}`);
    const response = await fetch(`https://www.syu-voltup.com/v1/stations/${stationId}`);
    const data = await response.json();
    return new Station(data.data);
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);
    throw new Error('API 호출 중 오류 발생');
  }
}