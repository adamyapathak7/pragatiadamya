
const Service = require('../models/service');

async function addService(req, res) {
  try {
    const { categoryId } = req.params;
    const service = await Service.create({ ...req.body, categoryId });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllServices(req, res) {
  try {
    const { categoryId } = req.params;
    const services = await Service.findAll({ where: { categoryId } });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function updateService(req, res) {
  try {
    const { serviceId } = req.params;
    const service = await Service.findByPk(serviceId);
    if (!service) return res.status(404).json({ error: 'Service not found' });

    await service.update(req.body);
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function deleteService(req, res) {
  try {
    const { serviceId } = req.params;
    await Service.destroy({ where: { id: serviceId } });
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { addService, getAllServices, updateService, deleteService };
