import React, { useState, useEffect, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
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

interface TeacherProps {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    user_id: number;
    whatsapp: string;
}

function TeacherList() {
    const [filters, setFilters] = useState({
        week_day: 1,
        subject: 'Matemática',
        time: '08:00'
    })
    const [teachersList, setTeachersList] = useState<Array<TeacherProps>>([])

    function loadClasses() {
        let params = {}

        if (filters.subject) {
            params = { ...params, subject: filters.subject }
        }
        if (filters.week_day) {
            params = { ...params, week_day: filters.week_day }
        }
        if (filters.time) {
            params = { ...params, time: filters.time }
        }

        api.get('/classes', { params }).then(response => {
            setTeachersList(response.data ?? [])
        })
    }

    useEffect(() => {
        loadClasses()
    }, [])

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={subjects}
                        value={filters.subject}
                        onChange={e => setFilters({ ...filters, subject: e.target.value })}
                    />
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        options={week_days}
                        value={filters.week_day}
                        onChange={e => setFilters({ ...filters, week_day: Number(e.target.value) })}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Horário"
                        value={filters.time}
                        onChange={e => setFilters({ ...filters, time: e.target.value })}
                    />
                    <button type="button" onClick={loadClasses}>Buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachersList.map(c => {
                    return (
                        <TeacherItem
                            key={c.id}
                            data={c}
                        />
                    )
                })}
            </main>
        </div>
    );
}

export default TeacherList;