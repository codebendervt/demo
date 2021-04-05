import GenusForm from './genus/genus.forms'
import PlugForm from './plug/plug.form';


const models = (form) => {


    switch (form.type) {
        case "link":
            return <GenusForm type={form.type} modal={form.modal} length={form.length} data={form.data.data} initData={form._data} id={form.data.id} mode={form.mode} dataId={form.dataId} />
        case "brand":
            return <GenusForm type={form.type} modal={form.modal} length={form.length} data={form.data} initData={form._data} id={form.id} mode={form.mode} dataId={form.dataId} />
        case "product":
            return <PlugForm type={form.type} modal={form.modal} length={form.length} data={form.data} initData={form._data} id={form.id} mode={form.mode} dataId={form.dataId} cat={form.cat} />
        case "service":
            return <PlugForm type={form.type} modal={form.modal} length={form.length} data={form.data} initData={form._data} id={form.id} mode={form.mode} dataId={form.dataId} cat={form.cat} />
        default:
            return <></>;
    }
}

export default models;

