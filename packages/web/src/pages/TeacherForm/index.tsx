import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import WarningIcon from './../../assets/images/icons/warning.svg'
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css'

const subjects = [
  { value: 'Matemática', label: 'Matemática' },
  { value: 'Português', label: 'Português' },
  { value: 'Ciências', label: 'Ciências' },
  { value: 'Biologia', label: 'Biologia' },
  { value: 'Química', label: 'Química' },
  { value: 'Física', label: 'Física' },
  { value: 'História', label: 'História' },
  { value: 'Filosofia', label: 'Filosofia' },
  { value: 'Artes', label: 'Artes' },
]

const week_days = [
  { value: '0', label: 'Domingo' },
  { value: '1', label: 'Segunda-Feira' },
  { value: '2', label: 'Terça-Feira' },
  { value: '3', label: 'Quarta-Feira' },
  { value: '4', label: 'Quinta-Feira' },
  { value: '5', label: 'Sexta-Feira' },
  { value: '6', label: 'Sábado' },
]

const TeacherForm: React.FC = () => {
  const history = useHistory()
  const [form, setForm] = useState({
    name: '',
    avatar: '',
    whatsapp: '',
    bio: '',
    subject: '',
    cost: '',
    schedule: [
      {
        week_day: 0,
        from: '',
        to: ''
      }
    ]
  })

  function addNewScheduleItem() {
    setForm(items => (
      {
        ...items,
        schedule: [
          ...items.schedule,
          {
            week_day: 0,
            from: '',
            to: ''
          }
        ]
      }
    ))
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault()

    api.post('/classes', form).then(() => {
      alert('Cadastro realizado com sucesso!')
      history.push('/')
    }).catch(err => {
      alert('Erro ao realizar cadastro!')
    })
  }

  function handleChangeSchedule(index: number, name: string, value: string) {

    const newForm = {
      ...form,
      schedule: form.schedule.map((s, idx) => {
        if (index === idx) {
          return { ...s, [name]: value }
        }
        return s
      })
    }
    setForm(newForm)
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              name="name"
              label="Nome Completo"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={form.avatar}
              onChange={e => setForm({ ...form, avatar: e.target.value })}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={form.whatsapp}
              onChange={e => setForm({ ...form, whatsapp: e.target.value })}
            />
            <TextArea name="bio" label="Biografia" />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              options={subjects}
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
            />
            <Input
              name="cost"
              label="Custo da sua hora/aula"
              value={form.cost}
              onChange={e => setForm({ ...form, cost: e.target.value })}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários Disponíveis
            <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
            </legend>
            {form.schedule.map((scheduleItem, index) => {

              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    options={week_days}
                    onChange={e => handleChangeSchedule(index, 'week_day', e.target.value)}
                  />
                  <Input
                    name="from"
                    value={scheduleItem.from}
                    label="Das"
                    type="time"
                    onChange={e => handleChangeSchedule(index, 'from', e.target.value)}
                  />
                  <Input
                    name="to"
                    value={scheduleItem.to}
                    label="Até"
                    type="time"
                    onChange={e => handleChangeSchedule(index, 'to', e.target.value)}
                  />
                </div>
              )
            })}
          </fieldset>
          <footer>
            <p>
              <img src={WarningIcon} alt="Alerta" />
            Importante! <br />
            Preencha todos os dados
          </p>
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;