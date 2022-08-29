import api from 'src/api';

export function useBaseCrud<Model, CreateModel, UpdateModel>() {
  async function get(url: string): Promise<Awaited<Model>> {
    const { data } = await api.get(url);
    return data;
  }

  async function getAll(url: string): Promise<Awaited<Model[]>> {
    const { data } = await api.get(url);
    return data;
  }

  async function create(
    url: string,
    newElement: CreateModel
  ): Promise<Awaited<Model>> {
    const { data } = await api.post(url, newElement);
    return data;
  }

  async function update(
    url: string,
    elementToUpdate: UpdateModel
  ): Promise<Awaited<Model>> {
    const { data } = await api.put(url, elementToUpdate);
    return data;
  }

  async function remove(url: string): Promise<Awaited<Model>> {
    const { data } = await api.delete(url);
    return data;
  }

  return { get, getAll, create, update, remove };
}
