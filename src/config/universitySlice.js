import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
      next_id: 631,
      users: [
        {
          name: 'Nicat',
          surname: 'Əliyev',
          father: 'Nazim',
          gender: 'm',
          birth: '2004/3/29',
          type: 'admin',
          id: 1,
          username: 'nicat.əliyev',
          password: 'adminadmin',
          password_reseted: false
        },
        {
          name: 'Rəhim',
          surname: 'Əlizadə',
          father: 'Yusif',
          gender: 'm',
          birth: '2004/11/25',
          type: 'dean',
          id: 3,
          username: 'rəhim.əlizadə',
          password: 'jWGussYP',
          password_reseted: true
        },
        {
          name: 'Gülana',
          surname: 'Hacızadə',
          father: 'Əli',
          gender: 'f',
          birth: '2004/06/15',
          type: 'dean',
          id: 5,
          username: 'gülana.hacızadə',
          password: 'pO4U5dfN',
          password_reseted: true
        },
        {
          name: 'Ramin',
          surname: 'Əliyev',
          father: 'Ramin',
          gender: 'm',
          birth: '2000/02/16',
          type: 'head of department',
          id: 7,
          username: 'ramin.əliyev',
          password: '12345678',
          password_reseted: true
        },
        {
          name: 'Həsən',
          surname: 'Vüsalov',
          father: 'Vaqif',
          gender: 'm',
          birth: '2009/06/08',
          type: 'head of department',
          id: 9,
          username: 'həsən.vüsalov',
          password: 'FduYvQrm',
          password_reseted: true
        },
        {
          name: 'Məhəmməd',
          surname: 'Musayev',
          father: 'Natiq',
          gender: 'm',
          birth: '2004/07/29',
          type: 'head of department',
          id: 11,
          username: 'məhəmməd.musayev',
          password: 'A5x0ojgL',
          password_reseted: true
        },
        {
          name: 'Murad',
          surname: 'Əmirov',
          father: 'Azad',
          gender: 'm',
          birth: '2001/05/14',
          type: 'head of department',
          id: 13,
          username: 'murad.əmirov',
          password: '12341234',
          password_reseted: false
        },
        {
          name: 'Vüsal',
          surname: 'Quliyev',
          father: 'Ramin',
          gender: 'm',
          birth: '1974/05/21',
          type: 'head of department',
          id: 15,
          username: 'vüsal.quliyev',
          password: 'gET3qbwQ',
          password_reseted: true
        },
        {
          name: 'Azər',
          surname: 'Əmirov',
          father: 'Azər',
          gender: 'm',
          birth: '1995-01-09',
          type: 'teacher',
          department_id: 6,
          id: 17,
          username: 'azər.əmirov',
          password: '4oQNitS4',
          password_reseted: true
        },
        {
          name: 'Mehdi',
          surname: 'Qafarov',
          father: 'Ramil',
          gender: 'm',
          birth: '1998-02-17',
          type: 'teacher',
          department_id: 6,
          id: 18,
          username: 'mehdi.qafarov',
          password: 'NKkxYDs2',
          password_reseted: true
        },
        {
          name: 'Günel',
          surname: 'Pənahi',
          father: 'Samir',
          gender: 'f',
          birth: '2003-04-01',
          type: 'teacher',
          department_id: 6,
          id: 19,
          username: 'günel.pənahi',
          password: 'wZpcCQcB',
          password_reseted: true
        },
        {
          name: 'Vüqar',
          surname: 'Ramalov',
          father: 'Vüqar',
          gender: 'm',
          birth: '1994-01-11',
          type: 'teacher',
          department_id: 8,
          id: 23,
          username: 'vüqar.ramalov',
          password: 'cncZFZK6',
          password_reseted: true
        },
        {
          name: 'Vüsalə',
          surname: 'Əliyeva',
          father: 'Həsən',
          gender: 'f',
          birth: '2006-01-10',
          type: 'teacher',
          department_id: 8,
          id: 24,
          username: 'vüsalə.əliyeva',
          password: 'MRZT4syD',
          password_reseted: true
        },
        {
          name: 'Hüseynli',
          surname: 'Aybəniz',
          father: 'Ayaz',
          gender: 'f',
          birth: '1989-05-10',
          type: 'teacher',
          department_id: 8,
          id: 25,
          username: 'hüseynli.aybəniz',
          password: 'VADRBNhi',
          password_reseted: true
        },
        {
          name: 'Gülşən',
          surname: 'Əliyeva',
          father: 'Əli',
          gender: 'f',
          birth: '1993-02-02',
          type: 'teacher',
          department_id: 10,
          id: 33,
          username: 'gülşən.əliyeva',
          password: 'ejEHmLcP',
          password_reseted: true
        },
        {
          name: 'Vüsal',
          surname: 'Qafarov',
          father: 'Qafar',
          gender: 'm',
          birth: '1997-01-28',
          type: 'teacher',
          department_id: 10,
          id: 34,
          username: 'vüsal.qafarov',
          password: 'Z28TCGZy',
          password_reseted: true
        },
        {
          name: 'Musayev',
          surname: 'Musa',
          father: 'Musa',
          gender: 'm',
          birth: '1989-01-01',
          type: 'teacher',
          department_id: 12,
          id: 39,
          username: 'musayev.musa',
          password: 'gVQn3V90',
          password_reseted: true
        },
        {
          name: 'Cəmil',
          surname: 'Mehdiyev',
          father: 'Mehdi',
          gender: 'm',
          birth: '2006-02-14',
          type: 'teacher',
          department_id: 12,
          id: 40,
          username: 'cəmil.mehdiyev',
          password: '6sKEDj7o',
          password_reseted: true
        },
        {
          name: 'Həsən',
          surname: 'Həsənov',
          father: 'Həsən',
          gender: 'm',
          birth: '1998-03-11',
          type: 'teacher',
          department_id: 14,
          id: 44,
          username: 'həsən.həsənov',
          password: 'xHDOkH4i',
          password_reseted: true
        },
        {
          name: 'Vüqar',
          surname: 'Əmirov',
          father: 'Vüqar',
          birth: '1995-09-11',
          gender: 'm',
          type: 'tutor',
          id: 50,
          username: 'vüqar.əmirov',
          password: 'Uri0gZJe',
          password_reseted: true
        },
        {
          name: 'Nicat',
          surname: 'Əliyev',
          father: 'Nazim',
          gender: 'm',
          birth: '2004-03-29',
          type: 'student',
          group_id: 51,
          id: 74,
          username: 'nicat.əliyev2',
          password: 'SdYxEDaB',
          password_reseted: true
        },
        {
          name: 'Zaməddin',
          surname: 'İsrafilov',
          father: 'İsrafil',
          gender: 'm',
          birth: '1998-02-03',
          type: 'student',
          group_id: 163,
          id: 186,
          username: 'zaməddin.i̇srafilov',
          password: 'upalxPv5',
          password_reseted: true
        },
        {
          name: 'Ramin',
          surname: 'Bayramov',
          father: 'Ramin',
          gender: 'm',
          birth: '2000-05-08',
          type: 'student',
          group_id: 163,
          id: 187,
          username: 'ramin.bayramov',
          password: 'xe91xMOW',
          password_reseted: true
        },
        {
          name: 'Cəlalə',
          surname: 'Hacıyeva',
          father: 'Cəlal',
          gender: 'f',
          birth: '2003-02-03',
          type: 'student',
          group_id: 163,
          id: 188,
          username: 'cəlalə.hacıyeva',
          password: 'z4KoOWxq',
          password_reseted: true
        },
        {
          name: 'Fəqan',
          surname: 'Muradov',
          father: 'Cəmil',
          gender: 'm',
          birth: '2003-02-12',
          type: 'student',
          group_id: 163,
          id: 189,
          username: 'fəqan.muradov',
          password: 'E02C8gUS',
          password_reseted: true
        },
        {
          name: 'Nohəddin',
          surname: 'Qurbanlı',
          father: 'Cəmil',
          gender: 'm',
          birth: '2004-06-16',
          type: 'student',
          group_id: 163,
          id: 190,
          username: 'nohəddin.qurbanlı',
          password: 'JTdfBhA5',
          password_reseted: true
        }
      ],
      faculties: [
        {
          id: 2,
          name: 'Energetika fakültəsi',
          dean_id: 3,
          symbol: 'EF'
        },
        {
          id: 4,
          name: 'İnformasiya texnologiyaları və idarəetmə fakültəsi',
          dean_id: 5,
          symbol: 'İTİF'
        }
      ],
      specialties: [
        {
          id: 49,
          name: 'Cihaz mühəndisliyi',
          faculty_id: 4,
          tutor_id: 50,
          education_plan: [
            {
              subject_id: 16,
              name: 'Tarix',
              credit: 6,
              semester: 1
            },
            {
              subject_id: 20,
              name: 'Fəlsəfə',
              credit: 8,
              semester: 1
            },
            {
              subject_id: 21,
              name: 'Mülki müdafiə',
              credit: 8,
              semester: 1
            },
            {
              subject_id: 22,
              name: 'Azərbaycan tarixi',
              credit: 8,
              semester: 1
            },
            {
              subject_id: 26,
              name: 'Riyazi analiz',
              credit: 7,
              semester: 2
            },
            {
              subject_id: 27,
              name: 'Diferensial tənliklər',
              credit: 8,
              semester: 2
            },
            {
              subject_id: 28,
              name: 'Diskret riyaziyyat',
              credit: 7,
              semester: 2
            },
            {
              subject_id: 29,
              name: 'Xətti cəbr',
              credit: 8,
              semester: 2
            },
            {
              subject_id: 30,
              name: 'Analitik həndəsə',
              credit: 7,
              semester: 3
            },
            {
              subject_id: 31,
              name: 'Ehtimal nəzəriyyəsi',
              credit: 8,
              semester: 3
            },
            {
              subject_id: 32,
              name: 'Statistika',
              credit: 7,
              semester: 3
            },
            {
              subject_id: 35,
              name: 'Kompüter mühəndisliyinin əsasları',
              credit: 8,
              semester: 3
            },
            {
              subject_id: 36,
              name: 'Proqramlaşdırma',
              credit: 7,
              semester: 4
            },
            {
              subject_id: 37,
              name: 'Sistem inzibatçılığı',
              credit: 8,
              semester: 4
            },
            {
              subject_id: 38,
              name: 'Veb proqramlaşdırma',
              credit: 7,
              semester: 4
            },
            {
              subject_id: 41,
              name: 'Neftin kompleks hazırlanması',
              credit: 8,
              semester: 4
            },
            {
              subject_id: 42,
              name: 'Qaz quyularının istismarı',
              credit: 7,
              semester: 5
            },
            {
              subject_id: 43,
              name: 'Quyuların təhlili',
              credit: 8,
              semester: 5
            },
            {
              subject_id: 45,
              name: 'Ədəbiyyat',
              credit: 7,
              semester: 5
            },
            {
              subject_id: 46,
              name: 'Azərbaycan dili',
              credit: 8,
              semester: 5
            },
            {
              subject_id: 47,
              name: 'Orta əsrlər ədəbiyyatı',
              credit: 30,
              semester: 6
            },
            {
              subject_id: 48,
              name: 'İşgüzar kommunikasiya',
              credit: 30,
              semester: 7
            }
          ]
        }
      ],
      education_plans: [],
      groups: [
        {
          id: 51,
          number: '657.21',
          specialty_id: 49,
          enterance_year: '2021-2022'
        },
        {
          id: 163,
          number: '655.20',
          specialty_id: 49,
          enterance_year: '2020-2021'
        }
      ],
      departments: [
        {
          id: 6,
          name: 'Humanitar fənnlər',
          head_of_department_id: 7
        },
        {
          id: 8,
          name: 'Tətbiqi riyaziyyat',
          head_of_department_id: 9
        },
        {
          id: 10,
          name: 'Kompüter mühəndisliyi',
          head_of_department_id: 11
        },
        {
          id: 12,
          name: 'Qaz neft',
          head_of_department_id: 13
        },
        {
          id: 14,
          name: 'Dil və ədəbiyyat',
          head_of_department_id: 15
        }
      ],
      subjects: [
        {
          id: 16,
          name: 'Tarix',
          department_id: 6
        },
        {
          id: 20,
          name: 'Fəlsəfə',
          department_id: 6
        },
        {
          id: 21,
          name: 'Mülki müdafiə',
          department_id: 6
        },
        {
          id: 22,
          name: 'Azərbaycan tarixi',
          department_id: 6
        },
        {
          id: 26,
          name: 'Riyazi analiz',
          department_id: 8
        },
        {
          id: 27,
          name: 'Diferensial tənliklər',
          department_id: 8
        },
        {
          id: 28,
          name: 'Diskret riyaziyyat',
          department_id: 8
        },
        {
          id: 29,
          name: 'Xətti cəbr',
          department_id: 8
        },
        {
          id: 30,
          name: 'Analitik həndəsə',
          department_id: 8
        },
        {
          id: 31,
          name: 'Ehtimal nəzəriyyəsi',
          department_id: 8
        },
        {
          id: 32,
          name: 'Statistika',
          department_id: 8
        },
        {
          id: 35,
          name: 'Kompüter mühəndisliyinin əsasları',
          department_id: 10
        },
        {
          id: 36,
          name: 'Proqramlaşdırma',
          department_id: 10
        },
        {
          id: 37,
          name: 'Sistem inzibatçılığı',
          department_id: 10
        },
        {
          id: 38,
          name: 'Veb proqramlaşdırma',
          department_id: 10
        },
        {
          id: 41,
          name: 'Neftin kompleks hazırlanması',
          department_id: 12
        },
        {
          id: 42,
          name: 'Qaz quyularının istismarı',
          department_id: 12
        },
        {
          id: 43,
          name: 'Quyuların təhlili',
          department_id: 12
        },
        {
          id: 45,
          name: 'Ədəbiyyat',
          department_id: 14
        },
        {
          id: 46,
          name: 'Azərbaycan dili',
          department_id: 14
        },
        {
          id: 47,
          name: 'Orta əsrlər ədəbiyyatı',
          department_id: 14
        },
        {
          id: 48,
          name: 'İşgüzar kommunikasiya',
          department_id: 14
        }
      ],
      subject_groups: [
        {
          subject_id: 16,
          name: 'Tarix',
          credit: 6,
          semester: '2021-2022_payız',
          id: 52,
          group_id: 51,
          teacher_id: 18
        },
        {
          subject_id: 20,
          name: 'Fəlsəfə',
          credit: 8,
          semester: '2021-2022_payız',
          id: 53,
          group_id: 51,
          teacher_id: 19
        },
        {
          subject_id: 21,
          name: 'Mülki müdafiə',
          credit: 8,
          semester: '2021-2022_payız',
          id: 54,
          group_id: 51,
          teacher_id: 17
        },
        {
          subject_id: 22,
          name: 'Azərbaycan tarixi',
          credit: 8,
          semester: '2021-2022_payız',
          id: 55,
          group_id: 51,
          teacher_id: 18
        },
        {
          subject_id: 26,
          name: 'Riyazi analiz',
          credit: 7,
          semester: '2021-2022_yaz',
          id: 56,
          group_id: 51,
          teacher_id: 23
        },
        {
          subject_id: 27,
          name: 'Diferensial tənliklər',
          credit: 8,
          semester: '2021-2022_yaz',
          id: 57,
          group_id: 51
        },
        {
          subject_id: 28,
          name: 'Diskret riyaziyyat',
          credit: 7,
          semester: '2021-2022_yaz',
          id: 58,
          group_id: 51,
          teacher_id: 24
        },
        {
          subject_id: 29,
          name: 'Xətti cəbr',
          credit: 8,
          semester: '2021-2022_yaz',
          id: 59,
          group_id: 51
        },
        {
          subject_id: 30,
          name: 'Analitik həndəsə',
          credit: 7,
          semester: '2022-2023_payız',
          id: 60,
          group_id: 51
        },
        {
          subject_id: 31,
          name: 'Ehtimal nəzəriyyəsi',
          credit: 8,
          semester: '2022-2023_payız',
          id: 61,
          group_id: 51,
          teacher_id: 25
        },
        {
          subject_id: 32,
          name: 'Statistika',
          credit: 7,
          semester: '2022-2023_payız',
          id: 62,
          group_id: 51
        },
        {
          subject_id: 35,
          name: 'Kompüter mühəndisliyinin əsasları',
          credit: 8,
          semester: '2022-2023_payız',
          id: 63,
          group_id: 51
        },
        {
          subject_id: 36,
          name: 'Proqramlaşdırma',
          credit: 7,
          semester: '2022-2023_yaz',
          id: 64,
          group_id: 51
        },
        {
          subject_id: 37,
          name: 'Sistem inzibatçılığı',
          credit: 8,
          semester: '2022-2023_yaz',
          id: 65,
          group_id: 51
        },
        {
          subject_id: 38,
          name: 'Veb proqramlaşdırma',
          credit: 7,
          semester: '2022-2023_yaz',
          id: 66,
          group_id: 51
        },
        {
          subject_id: 41,
          name: 'Neftin kompleks hazırlanması',
          credit: 8,
          semester: '2022-2023_yaz',
          id: 67,
          group_id: 51
        },
        {
          subject_id: 42,
          name: 'Qaz quyularının istismarı',
          credit: 7,
          semester: '2023-2024_payız',
          id: 68,
          group_id: 51
        },
        {
          subject_id: 43,
          name: 'Quyuların təhlili',
          credit: 8,
          semester: '2023-2024_payız',
          id: 69,
          group_id: 51
        },
        {
          subject_id: 45,
          name: 'Ədəbiyyat',
          credit: 7,
          semester: '2023-2024_payız',
          id: 70,
          group_id: 51
        },
        {
          subject_id: 46,
          name: 'Azərbaycan dili',
          credit: 8,
          semester: '2023-2024_payız',
          id: 71,
          group_id: 51
        },
        {
          subject_id: 47,
          name: 'Orta əsrlər ədəbiyyatı',
          credit: 30,
          semester: '2023-2024_yaz',
          id: 72,
          group_id: 51
        },
        {
          subject_id: 48,
          name: 'İşgüzar kommunikasiya',
          credit: 30,
          semester: '2024-2025_payız',
          id: 73,
          group_id: 51
        },
        {
          subject_id: 16,
          name: 'Tarix',
          credit: 6,
          semester: '2020-2021_payız',
          id: 164,
          group_id: 163,
          teacher_id: 18
        },
        {
          subject_id: 20,
          name: 'Fəlsəfə',
          credit: 8,
          semester: '2020-2021_payız',
          id: 165,
          group_id: 163
        },
        {
          subject_id: 21,
          name: 'Mülki müdafiə',
          credit: 8,
          semester: '2020-2021_payız',
          id: 166,
          group_id: 163
        },
        {
          subject_id: 22,
          name: 'Azərbaycan tarixi',
          credit: 8,
          semester: '2020-2021_payız',
          id: 167,
          group_id: 163
        },
        {
          subject_id: 26,
          name: 'Riyazi analiz',
          credit: 7,
          semester: '2020-2021_yaz',
          id: 168,
          group_id: 163,
          teacher_id: 25
        },
        {
          subject_id: 27,
          name: 'Diferensial tənliklər',
          credit: 8,
          semester: '2020-2021_yaz',
          id: 169,
          group_id: 163,
          teacher_id: 24
        },
        {
          subject_id: 28,
          name: 'Diskret riyaziyyat',
          credit: 7,
          semester: '2020-2021_yaz',
          id: 170,
          group_id: 163,
          teacher_id: 23
        },
        {
          subject_id: 29,
          name: 'Xətti cəbr',
          credit: 8,
          semester: '2020-2021_yaz',
          id: 171,
          group_id: 163
        },
        {
          subject_id: 30,
          name: 'Analitik həndəsə',
          credit: 7,
          semester: '2021-2022_payız',
          id: 172,
          group_id: 163
        },
        {
          subject_id: 31,
          name: 'Ehtimal nəzəriyyəsi',
          credit: 8,
          semester: '2021-2022_payız',
          id: 173,
          group_id: 163
        },
        {
          subject_id: 32,
          name: 'Statistika',
          credit: 7,
          semester: '2021-2022_payız',
          id: 174,
          group_id: 163
        },
        {
          subject_id: 35,
          name: 'Kompüter mühəndisliyinin əsasları',
          credit: 8,
          semester: '2021-2022_payız',
          id: 175,
          group_id: 163
        },
        {
          subject_id: 36,
          name: 'Proqramlaşdırma',
          credit: 7,
          semester: '2021-2022_yaz',
          id: 176,
          group_id: 163
        },
        {
          subject_id: 37,
          name: 'Sistem inzibatçılığı',
          credit: 8,
          semester: '2021-2022_yaz',
          id: 177,
          group_id: 163
        },
        {
          subject_id: 38,
          name: 'Veb proqramlaşdırma',
          credit: 7,
          semester: '2021-2022_yaz',
          id: 178,
          group_id: 163
        },
        {
          subject_id: 41,
          name: 'Neftin kompleks hazırlanması',
          credit: 8,
          semester: '2021-2022_yaz',
          id: 179,
          group_id: 163
        },
        {
          subject_id: 42,
          name: 'Qaz quyularının istismarı',
          credit: 7,
          semester: '2022-2023_payız',
          id: 180,
          group_id: 163
        },
        {
          subject_id: 43,
          name: 'Quyuların təhlili',
          credit: 8,
          semester: '2022-2023_payız',
          id: 181,
          group_id: 163
        },
        {
          subject_id: 45,
          name: 'Ədəbiyyat',
          credit: 7,
          semester: '2022-2023_payız',
          id: 182,
          group_id: 163
        },
        {
          subject_id: 46,
          name: 'Azərbaycan dili',
          credit: 8,
          semester: '2022-2023_payız',
          id: 183,
          group_id: 163
        },
        {
          subject_id: 47,
          name: 'Orta əsrlər ədəbiyyatı',
          credit: 30,
          semester: '2022-2023_yaz',
          id: 184,
          group_id: 163
        },
        {
          subject_id: 48,
          name: 'İşgüzar kommunikasiya',
          credit: 30,
          semester: '2023-2024_payız',
          id: 185,
          group_id: 163
        }
      ],
      points: [],
      main_journal: [
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 75,
          student_id: 74,
          subject_group_id: 52
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 76,
          student_id: 74,
          subject_group_id: 52
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 77,
          student_id: 74,
          subject_group_id: 52
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 78,
          student_id: 74,
          subject_group_id: 52
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 79,
          student_id: 74,
          subject_group_id: 53
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 80,
          student_id: 74,
          subject_group_id: 53
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 81,
          student_id: 74,
          subject_group_id: 53
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 82,
          student_id: 74,
          subject_group_id: 53
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 83,
          student_id: 74,
          subject_group_id: 54
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 84,
          student_id: 74,
          subject_group_id: 54
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 85,
          student_id: 74,
          subject_group_id: 54
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 86,
          student_id: 74,
          subject_group_id: 54
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 87,
          student_id: 74,
          subject_group_id: 55
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 88,
          student_id: 74,
          subject_group_id: 55
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 89,
          student_id: 74,
          subject_group_id: 55
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 90,
          student_id: 74,
          subject_group_id: 55
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 91,
          student_id: 74,
          subject_group_id: 56
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 92,
          student_id: 74,
          subject_group_id: 56
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 93,
          student_id: 74,
          subject_group_id: 56
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 94,
          student_id: 74,
          subject_group_id: 56
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 95,
          student_id: 74,
          subject_group_id: 57
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 96,
          student_id: 74,
          subject_group_id: 57
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 97,
          student_id: 74,
          subject_group_id: 57
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 98,
          student_id: 74,
          subject_group_id: 57
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 99,
          student_id: 74,
          subject_group_id: 58
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 100,
          student_id: 74,
          subject_group_id: 58
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 101,
          student_id: 74,
          subject_group_id: 58
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 102,
          student_id: 74,
          subject_group_id: 58
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 103,
          student_id: 74,
          subject_group_id: 59
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 104,
          student_id: 74,
          subject_group_id: 59
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 105,
          student_id: 74,
          subject_group_id: 59
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 106,
          student_id: 74,
          subject_group_id: 59
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 107,
          student_id: 74,
          subject_group_id: 60
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 108,
          student_id: 74,
          subject_group_id: 60
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 109,
          student_id: 74,
          subject_group_id: 60
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 110,
          student_id: 74,
          subject_group_id: 60
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 111,
          student_id: 74,
          subject_group_id: 61
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 112,
          student_id: 74,
          subject_group_id: 61
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 113,
          student_id: 74,
          subject_group_id: 61
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 114,
          student_id: 74,
          subject_group_id: 61
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 115,
          student_id: 74,
          subject_group_id: 62
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 116,
          student_id: 74,
          subject_group_id: 62
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 117,
          student_id: 74,
          subject_group_id: 62
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 118,
          student_id: 74,
          subject_group_id: 62
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 119,
          student_id: 74,
          subject_group_id: 63
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 120,
          student_id: 74,
          subject_group_id: 63
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 121,
          student_id: 74,
          subject_group_id: 63
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 122,
          student_id: 74,
          subject_group_id: 63
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 123,
          student_id: 74,
          subject_group_id: 64
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 124,
          student_id: 74,
          subject_group_id: 64
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 125,
          student_id: 74,
          subject_group_id: 64
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 126,
          student_id: 74,
          subject_group_id: 64
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 127,
          student_id: 74,
          subject_group_id: 65
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 128,
          student_id: 74,
          subject_group_id: 65
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 129,
          student_id: 74,
          subject_group_id: 65
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 130,
          student_id: 74,
          subject_group_id: 65
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 131,
          student_id: 74,
          subject_group_id: 66
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 132,
          student_id: 74,
          subject_group_id: 66
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 133,
          student_id: 74,
          subject_group_id: 66
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 134,
          student_id: 74,
          subject_group_id: 66
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 135,
          student_id: 74,
          subject_group_id: 67
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 136,
          student_id: 74,
          subject_group_id: 67
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 137,
          student_id: 74,
          subject_group_id: 67
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 138,
          student_id: 74,
          subject_group_id: 67
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 139,
          student_id: 74,
          subject_group_id: 68
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 140,
          student_id: 74,
          subject_group_id: 68
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 141,
          student_id: 74,
          subject_group_id: 68
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 142,
          student_id: 74,
          subject_group_id: 68
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 143,
          student_id: 74,
          subject_group_id: 69
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 144,
          student_id: 74,
          subject_group_id: 69
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 145,
          student_id: 74,
          subject_group_id: 69
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 146,
          student_id: 74,
          subject_group_id: 69
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 147,
          student_id: 74,
          subject_group_id: 70
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 148,
          student_id: 74,
          subject_group_id: 70
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 149,
          student_id: 74,
          subject_group_id: 70
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 150,
          student_id: 74,
          subject_group_id: 70
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 151,
          student_id: 74,
          subject_group_id: 71
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 152,
          student_id: 74,
          subject_group_id: 71
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 153,
          student_id: 74,
          subject_group_id: 71
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 154,
          student_id: 74,
          subject_group_id: 71
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 155,
          student_id: 74,
          subject_group_id: 72
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 156,
          student_id: 74,
          subject_group_id: 72
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 157,
          student_id: 74,
          subject_group_id: 72
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 158,
          student_id: 74,
          subject_group_id: 72
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 159,
          student_id: 74,
          subject_group_id: 73
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 160,
          student_id: 74,
          subject_group_id: 73
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 161,
          student_id: 74,
          subject_group_id: 73
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 162,
          student_id: 74,
          subject_group_id: 73
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 191,
          student_id: 186,
          subject_group_id: 164,
          amount: 20
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 192,
          student_id: 186,
          subject_group_id: 164,
          amount: 20
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 193,
          student_id: 186,
          subject_group_id: 164,
          amount: 10
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 194,
          student_id: 186,
          subject_group_id: 164,
          amount: 50
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 195,
          student_id: 186,
          subject_group_id: 165
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 196,
          student_id: 186,
          subject_group_id: 165
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 197,
          student_id: 186,
          subject_group_id: 165
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 198,
          student_id: 186,
          subject_group_id: 165
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 199,
          student_id: 186,
          subject_group_id: 166
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 200,
          student_id: 186,
          subject_group_id: 166
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 201,
          student_id: 186,
          subject_group_id: 166
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 202,
          student_id: 186,
          subject_group_id: 166
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 203,
          student_id: 186,
          subject_group_id: 167
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 204,
          student_id: 186,
          subject_group_id: 167
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 205,
          student_id: 186,
          subject_group_id: 167
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 206,
          student_id: 186,
          subject_group_id: 167
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 207,
          student_id: 186,
          subject_group_id: 168
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 208,
          student_id: 186,
          subject_group_id: 168
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 209,
          student_id: 186,
          subject_group_id: 168
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 210,
          student_id: 186,
          subject_group_id: 168
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 211,
          student_id: 186,
          subject_group_id: 169
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 212,
          student_id: 186,
          subject_group_id: 169
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 213,
          student_id: 186,
          subject_group_id: 169
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 214,
          student_id: 186,
          subject_group_id: 169
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 215,
          student_id: 186,
          subject_group_id: 170
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 216,
          student_id: 186,
          subject_group_id: 170
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 217,
          student_id: 186,
          subject_group_id: 170
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 218,
          student_id: 186,
          subject_group_id: 170
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 219,
          student_id: 186,
          subject_group_id: 171
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 220,
          student_id: 186,
          subject_group_id: 171
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 221,
          student_id: 186,
          subject_group_id: 171
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 222,
          student_id: 186,
          subject_group_id: 171
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 223,
          student_id: 186,
          subject_group_id: 172
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 224,
          student_id: 186,
          subject_group_id: 172
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 225,
          student_id: 186,
          subject_group_id: 172
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 226,
          student_id: 186,
          subject_group_id: 172
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 227,
          student_id: 186,
          subject_group_id: 173
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 228,
          student_id: 186,
          subject_group_id: 173
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 229,
          student_id: 186,
          subject_group_id: 173
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 230,
          student_id: 186,
          subject_group_id: 173
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 231,
          student_id: 186,
          subject_group_id: 174
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 232,
          student_id: 186,
          subject_group_id: 174
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 233,
          student_id: 186,
          subject_group_id: 174
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 234,
          student_id: 186,
          subject_group_id: 174
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 235,
          student_id: 186,
          subject_group_id: 175
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 236,
          student_id: 186,
          subject_group_id: 175
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 237,
          student_id: 186,
          subject_group_id: 175
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 238,
          student_id: 186,
          subject_group_id: 175
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 239,
          student_id: 186,
          subject_group_id: 176
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 240,
          student_id: 186,
          subject_group_id: 176
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 241,
          student_id: 186,
          subject_group_id: 176
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 242,
          student_id: 186,
          subject_group_id: 176
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 243,
          student_id: 186,
          subject_group_id: 177
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 244,
          student_id: 186,
          subject_group_id: 177
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 245,
          student_id: 186,
          subject_group_id: 177
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 246,
          student_id: 186,
          subject_group_id: 177
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 247,
          student_id: 186,
          subject_group_id: 178
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 248,
          student_id: 186,
          subject_group_id: 178
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 249,
          student_id: 186,
          subject_group_id: 178
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 250,
          student_id: 186,
          subject_group_id: 178
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 251,
          student_id: 186,
          subject_group_id: 179
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 252,
          student_id: 186,
          subject_group_id: 179
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 253,
          student_id: 186,
          subject_group_id: 179
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 254,
          student_id: 186,
          subject_group_id: 179
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 255,
          student_id: 186,
          subject_group_id: 180
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 256,
          student_id: 186,
          subject_group_id: 180
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 257,
          student_id: 186,
          subject_group_id: 180
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 258,
          student_id: 186,
          subject_group_id: 180
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 259,
          student_id: 186,
          subject_group_id: 181
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 260,
          student_id: 186,
          subject_group_id: 181
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 261,
          student_id: 186,
          subject_group_id: 181
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 262,
          student_id: 186,
          subject_group_id: 181
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 263,
          student_id: 186,
          subject_group_id: 182
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 264,
          student_id: 186,
          subject_group_id: 182
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 265,
          student_id: 186,
          subject_group_id: 182
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 266,
          student_id: 186,
          subject_group_id: 182
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 267,
          student_id: 186,
          subject_group_id: 183
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 268,
          student_id: 186,
          subject_group_id: 183
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 269,
          student_id: 186,
          subject_group_id: 183
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 270,
          student_id: 186,
          subject_group_id: 183
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 271,
          student_id: 186,
          subject_group_id: 184
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 272,
          student_id: 186,
          subject_group_id: 184
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 273,
          student_id: 186,
          subject_group_id: 184
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 274,
          student_id: 186,
          subject_group_id: 184
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 275,
          student_id: 186,
          subject_group_id: 185
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 276,
          student_id: 186,
          subject_group_id: 185
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 277,
          student_id: 186,
          subject_group_id: 185
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 278,
          student_id: 186,
          subject_group_id: 185
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 279,
          student_id: 187,
          subject_group_id: 164,
          amount: 9
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 280,
          student_id: 187,
          subject_group_id: 164,
          amount: 20
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 281,
          student_id: 187,
          subject_group_id: 164,
          amount: 5
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 282,
          student_id: 187,
          subject_group_id: 164,
          amount: 34
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 283,
          student_id: 187,
          subject_group_id: 165
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 284,
          student_id: 187,
          subject_group_id: 165
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 285,
          student_id: 187,
          subject_group_id: 165
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 286,
          student_id: 187,
          subject_group_id: 165
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 287,
          student_id: 187,
          subject_group_id: 166
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 288,
          student_id: 187,
          subject_group_id: 166
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 289,
          student_id: 187,
          subject_group_id: 166
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 290,
          student_id: 187,
          subject_group_id: 166
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 291,
          student_id: 187,
          subject_group_id: 167
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 292,
          student_id: 187,
          subject_group_id: 167
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 293,
          student_id: 187,
          subject_group_id: 167
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 294,
          student_id: 187,
          subject_group_id: 167
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 295,
          student_id: 187,
          subject_group_id: 168
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 296,
          student_id: 187,
          subject_group_id: 168
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 297,
          student_id: 187,
          subject_group_id: 168
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 298,
          student_id: 187,
          subject_group_id: 168
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 299,
          student_id: 187,
          subject_group_id: 169
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 300,
          student_id: 187,
          subject_group_id: 169
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 301,
          student_id: 187,
          subject_group_id: 169
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 302,
          student_id: 187,
          subject_group_id: 169
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 303,
          student_id: 187,
          subject_group_id: 170,
          amount: 20
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 304,
          student_id: 187,
          subject_group_id: 170,
          amount: 20
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 305,
          student_id: 187,
          subject_group_id: 170,
          amount: 10
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 306,
          student_id: 187,
          subject_group_id: 170,
          amount: 16
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 307,
          student_id: 187,
          subject_group_id: 171
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 308,
          student_id: 187,
          subject_group_id: 171
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 309,
          student_id: 187,
          subject_group_id: 171
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 310,
          student_id: 187,
          subject_group_id: 171
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 311,
          student_id: 187,
          subject_group_id: 172
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 312,
          student_id: 187,
          subject_group_id: 172
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 313,
          student_id: 187,
          subject_group_id: 172
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 314,
          student_id: 187,
          subject_group_id: 172
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 315,
          student_id: 187,
          subject_group_id: 173
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 316,
          student_id: 187,
          subject_group_id: 173
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 317,
          student_id: 187,
          subject_group_id: 173
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 318,
          student_id: 187,
          subject_group_id: 173
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 319,
          student_id: 187,
          subject_group_id: 174
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 320,
          student_id: 187,
          subject_group_id: 174
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 321,
          student_id: 187,
          subject_group_id: 174
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 322,
          student_id: 187,
          subject_group_id: 174
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 323,
          student_id: 187,
          subject_group_id: 175
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 324,
          student_id: 187,
          subject_group_id: 175
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 325,
          student_id: 187,
          subject_group_id: 175
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 326,
          student_id: 187,
          subject_group_id: 175
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 327,
          student_id: 187,
          subject_group_id: 176
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 328,
          student_id: 187,
          subject_group_id: 176
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 329,
          student_id: 187,
          subject_group_id: 176
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 330,
          student_id: 187,
          subject_group_id: 176
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 331,
          student_id: 187,
          subject_group_id: 177
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 332,
          student_id: 187,
          subject_group_id: 177
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 333,
          student_id: 187,
          subject_group_id: 177
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 334,
          student_id: 187,
          subject_group_id: 177
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 335,
          student_id: 187,
          subject_group_id: 178
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 336,
          student_id: 187,
          subject_group_id: 178
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 337,
          student_id: 187,
          subject_group_id: 178
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 338,
          student_id: 187,
          subject_group_id: 178
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 339,
          student_id: 187,
          subject_group_id: 179
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 340,
          student_id: 187,
          subject_group_id: 179
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 341,
          student_id: 187,
          subject_group_id: 179
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 342,
          student_id: 187,
          subject_group_id: 179
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 343,
          student_id: 187,
          subject_group_id: 180
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 344,
          student_id: 187,
          subject_group_id: 180
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 345,
          student_id: 187,
          subject_group_id: 180
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 346,
          student_id: 187,
          subject_group_id: 180
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 347,
          student_id: 187,
          subject_group_id: 181
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 348,
          student_id: 187,
          subject_group_id: 181
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 349,
          student_id: 187,
          subject_group_id: 181
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 350,
          student_id: 187,
          subject_group_id: 181
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 351,
          student_id: 187,
          subject_group_id: 182
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 352,
          student_id: 187,
          subject_group_id: 182
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 353,
          student_id: 187,
          subject_group_id: 182
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 354,
          student_id: 187,
          subject_group_id: 182
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 355,
          student_id: 187,
          subject_group_id: 183
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 356,
          student_id: 187,
          subject_group_id: 183
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 357,
          student_id: 187,
          subject_group_id: 183
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 358,
          student_id: 187,
          subject_group_id: 183
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 359,
          student_id: 187,
          subject_group_id: 184
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 360,
          student_id: 187,
          subject_group_id: 184
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 361,
          student_id: 187,
          subject_group_id: 184
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 362,
          student_id: 187,
          subject_group_id: 184
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 363,
          student_id: 187,
          subject_group_id: 185
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 364,
          student_id: 187,
          subject_group_id: 185
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 365,
          student_id: 187,
          subject_group_id: 185
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 366,
          student_id: 187,
          subject_group_id: 185
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 367,
          student_id: 188,
          subject_group_id: 164
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 368,
          student_id: 188,
          subject_group_id: 164
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 369,
          student_id: 188,
          subject_group_id: 164
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 370,
          student_id: 188,
          subject_group_id: 164
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 371,
          student_id: 188,
          subject_group_id: 165
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 372,
          student_id: 188,
          subject_group_id: 165
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 373,
          student_id: 188,
          subject_group_id: 165
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 374,
          student_id: 188,
          subject_group_id: 165
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 375,
          student_id: 188,
          subject_group_id: 166
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 376,
          student_id: 188,
          subject_group_id: 166
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 377,
          student_id: 188,
          subject_group_id: 166
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 378,
          student_id: 188,
          subject_group_id: 166
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 379,
          student_id: 188,
          subject_group_id: 167
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 380,
          student_id: 188,
          subject_group_id: 167
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 381,
          student_id: 188,
          subject_group_id: 167
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 382,
          student_id: 188,
          subject_group_id: 167
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 383,
          student_id: 188,
          subject_group_id: 168
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 384,
          student_id: 188,
          subject_group_id: 168
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 385,
          student_id: 188,
          subject_group_id: 168
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 386,
          student_id: 188,
          subject_group_id: 168
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 387,
          student_id: 188,
          subject_group_id: 169
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 388,
          student_id: 188,
          subject_group_id: 169
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 389,
          student_id: 188,
          subject_group_id: 169
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 390,
          student_id: 188,
          subject_group_id: 169
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 391,
          student_id: 188,
          subject_group_id: 170
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 392,
          student_id: 188,
          subject_group_id: 170
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 393,
          student_id: 188,
          subject_group_id: 170
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 394,
          student_id: 188,
          subject_group_id: 170
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 395,
          student_id: 188,
          subject_group_id: 171
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 396,
          student_id: 188,
          subject_group_id: 171
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 397,
          student_id: 188,
          subject_group_id: 171
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 398,
          student_id: 188,
          subject_group_id: 171
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 399,
          student_id: 188,
          subject_group_id: 172
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 400,
          student_id: 188,
          subject_group_id: 172
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 401,
          student_id: 188,
          subject_group_id: 172
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 402,
          student_id: 188,
          subject_group_id: 172
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 403,
          student_id: 188,
          subject_group_id: 173
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 404,
          student_id: 188,
          subject_group_id: 173
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 405,
          student_id: 188,
          subject_group_id: 173
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 406,
          student_id: 188,
          subject_group_id: 173
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 407,
          student_id: 188,
          subject_group_id: 174
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 408,
          student_id: 188,
          subject_group_id: 174
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 409,
          student_id: 188,
          subject_group_id: 174
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 410,
          student_id: 188,
          subject_group_id: 174
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 411,
          student_id: 188,
          subject_group_id: 175
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 412,
          student_id: 188,
          subject_group_id: 175
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 413,
          student_id: 188,
          subject_group_id: 175
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 414,
          student_id: 188,
          subject_group_id: 175
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 415,
          student_id: 188,
          subject_group_id: 176
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 416,
          student_id: 188,
          subject_group_id: 176
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 417,
          student_id: 188,
          subject_group_id: 176
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 418,
          student_id: 188,
          subject_group_id: 176
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 419,
          student_id: 188,
          subject_group_id: 177
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 420,
          student_id: 188,
          subject_group_id: 177
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 421,
          student_id: 188,
          subject_group_id: 177
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 422,
          student_id: 188,
          subject_group_id: 177
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 423,
          student_id: 188,
          subject_group_id: 178
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 424,
          student_id: 188,
          subject_group_id: 178
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 425,
          student_id: 188,
          subject_group_id: 178
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 426,
          student_id: 188,
          subject_group_id: 178
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 427,
          student_id: 188,
          subject_group_id: 179
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 428,
          student_id: 188,
          subject_group_id: 179
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 429,
          student_id: 188,
          subject_group_id: 179
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 430,
          student_id: 188,
          subject_group_id: 179
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 431,
          student_id: 188,
          subject_group_id: 180
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 432,
          student_id: 188,
          subject_group_id: 180
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 433,
          student_id: 188,
          subject_group_id: 180
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 434,
          student_id: 188,
          subject_group_id: 180
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 435,
          student_id: 188,
          subject_group_id: 181
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 436,
          student_id: 188,
          subject_group_id: 181
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 437,
          student_id: 188,
          subject_group_id: 181
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 438,
          student_id: 188,
          subject_group_id: 181
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 439,
          student_id: 188,
          subject_group_id: 182
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 440,
          student_id: 188,
          subject_group_id: 182
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 441,
          student_id: 188,
          subject_group_id: 182
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 442,
          student_id: 188,
          subject_group_id: 182
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 443,
          student_id: 188,
          subject_group_id: 183
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 444,
          student_id: 188,
          subject_group_id: 183
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 445,
          student_id: 188,
          subject_group_id: 183
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 446,
          student_id: 188,
          subject_group_id: 183
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 447,
          student_id: 188,
          subject_group_id: 184
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 448,
          student_id: 188,
          subject_group_id: 184
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 449,
          student_id: 188,
          subject_group_id: 184
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 450,
          student_id: 188,
          subject_group_id: 184
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 451,
          student_id: 188,
          subject_group_id: 185
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 452,
          student_id: 188,
          subject_group_id: 185
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 453,
          student_id: 188,
          subject_group_id: 185
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 454,
          student_id: 188,
          subject_group_id: 185
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 455,
          student_id: 189,
          subject_group_id: 164,
          amount: 5
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 456,
          student_id: 189,
          subject_group_id: 164,
          amount: 18
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 457,
          student_id: 189,
          subject_group_id: 164,
          amount: 10
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 458,
          student_id: 189,
          subject_group_id: 164,
          amount: 23
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 459,
          student_id: 189,
          subject_group_id: 165
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 460,
          student_id: 189,
          subject_group_id: 165
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 461,
          student_id: 189,
          subject_group_id: 165
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 462,
          student_id: 189,
          subject_group_id: 165
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 463,
          student_id: 189,
          subject_group_id: 166
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 464,
          student_id: 189,
          subject_group_id: 166
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 465,
          student_id: 189,
          subject_group_id: 166
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 466,
          student_id: 189,
          subject_group_id: 166
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 467,
          student_id: 189,
          subject_group_id: 167
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 468,
          student_id: 189,
          subject_group_id: 167
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 469,
          student_id: 189,
          subject_group_id: 167
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 470,
          student_id: 189,
          subject_group_id: 167
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 471,
          student_id: 189,
          subject_group_id: 168
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 472,
          student_id: 189,
          subject_group_id: 168
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 473,
          student_id: 189,
          subject_group_id: 168
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 474,
          student_id: 189,
          subject_group_id: 168
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 475,
          student_id: 189,
          subject_group_id: 169
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 476,
          student_id: 189,
          subject_group_id: 169
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 477,
          student_id: 189,
          subject_group_id: 169
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 478,
          student_id: 189,
          subject_group_id: 169
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 479,
          student_id: 189,
          subject_group_id: 170
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 480,
          student_id: 189,
          subject_group_id: 170
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 481,
          student_id: 189,
          subject_group_id: 170
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 482,
          student_id: 189,
          subject_group_id: 170
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 483,
          student_id: 189,
          subject_group_id: 171
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 484,
          student_id: 189,
          subject_group_id: 171
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 485,
          student_id: 189,
          subject_group_id: 171
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 486,
          student_id: 189,
          subject_group_id: 171
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 487,
          student_id: 189,
          subject_group_id: 172
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 488,
          student_id: 189,
          subject_group_id: 172
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 489,
          student_id: 189,
          subject_group_id: 172
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 490,
          student_id: 189,
          subject_group_id: 172
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 491,
          student_id: 189,
          subject_group_id: 173
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 492,
          student_id: 189,
          subject_group_id: 173
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 493,
          student_id: 189,
          subject_group_id: 173
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 494,
          student_id: 189,
          subject_group_id: 173
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 495,
          student_id: 189,
          subject_group_id: 174
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 496,
          student_id: 189,
          subject_group_id: 174
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 497,
          student_id: 189,
          subject_group_id: 174
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 498,
          student_id: 189,
          subject_group_id: 174
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 499,
          student_id: 189,
          subject_group_id: 175
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 500,
          student_id: 189,
          subject_group_id: 175
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 501,
          student_id: 189,
          subject_group_id: 175
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 502,
          student_id: 189,
          subject_group_id: 175
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 503,
          student_id: 189,
          subject_group_id: 176
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 504,
          student_id: 189,
          subject_group_id: 176
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 505,
          student_id: 189,
          subject_group_id: 176
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 506,
          student_id: 189,
          subject_group_id: 176
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 507,
          student_id: 189,
          subject_group_id: 177
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 508,
          student_id: 189,
          subject_group_id: 177
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 509,
          student_id: 189,
          subject_group_id: 177
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 510,
          student_id: 189,
          subject_group_id: 177
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 511,
          student_id: 189,
          subject_group_id: 178
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 512,
          student_id: 189,
          subject_group_id: 178
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 513,
          student_id: 189,
          subject_group_id: 178
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 514,
          student_id: 189,
          subject_group_id: 178
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 515,
          student_id: 189,
          subject_group_id: 179
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 516,
          student_id: 189,
          subject_group_id: 179
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 517,
          student_id: 189,
          subject_group_id: 179
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 518,
          student_id: 189,
          subject_group_id: 179
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 519,
          student_id: 189,
          subject_group_id: 180
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 520,
          student_id: 189,
          subject_group_id: 180
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 521,
          student_id: 189,
          subject_group_id: 180
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 522,
          student_id: 189,
          subject_group_id: 180
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 523,
          student_id: 189,
          subject_group_id: 181
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 524,
          student_id: 189,
          subject_group_id: 181
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 525,
          student_id: 189,
          subject_group_id: 181
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 526,
          student_id: 189,
          subject_group_id: 181
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 527,
          student_id: 189,
          subject_group_id: 182
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 528,
          student_id: 189,
          subject_group_id: 182
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 529,
          student_id: 189,
          subject_group_id: 182
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 530,
          student_id: 189,
          subject_group_id: 182
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 531,
          student_id: 189,
          subject_group_id: 183
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 532,
          student_id: 189,
          subject_group_id: 183
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 533,
          student_id: 189,
          subject_group_id: 183
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 534,
          student_id: 189,
          subject_group_id: 183
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 535,
          student_id: 189,
          subject_group_id: 184
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 536,
          student_id: 189,
          subject_group_id: 184
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 537,
          student_id: 189,
          subject_group_id: 184
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 538,
          student_id: 189,
          subject_group_id: 184
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 539,
          student_id: 189,
          subject_group_id: 185
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 540,
          student_id: 189,
          subject_group_id: 185
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 541,
          student_id: 189,
          subject_group_id: 185
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 542,
          student_id: 189,
          subject_group_id: 185
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 543,
          student_id: 190,
          subject_group_id: 164
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 544,
          student_id: 190,
          subject_group_id: 164
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 545,
          student_id: 190,
          subject_group_id: 164
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 546,
          student_id: 190,
          subject_group_id: 164
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 547,
          student_id: 190,
          subject_group_id: 165
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 548,
          student_id: 190,
          subject_group_id: 165
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 549,
          student_id: 190,
          subject_group_id: 165
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 550,
          student_id: 190,
          subject_group_id: 165
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 551,
          student_id: 190,
          subject_group_id: 166
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 552,
          student_id: 190,
          subject_group_id: 166
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 553,
          student_id: 190,
          subject_group_id: 166
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 554,
          student_id: 190,
          subject_group_id: 166
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 555,
          student_id: 190,
          subject_group_id: 167
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 556,
          student_id: 190,
          subject_group_id: 167
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 557,
          student_id: 190,
          subject_group_id: 167
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 558,
          student_id: 190,
          subject_group_id: 167
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 559,
          student_id: 190,
          subject_group_id: 168
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 560,
          student_id: 190,
          subject_group_id: 168
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 561,
          student_id: 190,
          subject_group_id: 168
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 562,
          student_id: 190,
          subject_group_id: 168
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 563,
          student_id: 190,
          subject_group_id: 169
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 564,
          student_id: 190,
          subject_group_id: 169
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 565,
          student_id: 190,
          subject_group_id: 169
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 566,
          student_id: 190,
          subject_group_id: 169
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 567,
          student_id: 190,
          subject_group_id: 170
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 568,
          student_id: 190,
          subject_group_id: 170
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 569,
          student_id: 190,
          subject_group_id: 170
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 570,
          student_id: 190,
          subject_group_id: 170
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 571,
          student_id: 190,
          subject_group_id: 171
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 572,
          student_id: 190,
          subject_group_id: 171
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 573,
          student_id: 190,
          subject_group_id: 171
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 574,
          student_id: 190,
          subject_group_id: 171
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 575,
          student_id: 190,
          subject_group_id: 172
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 576,
          student_id: 190,
          subject_group_id: 172
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 577,
          student_id: 190,
          subject_group_id: 172
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 578,
          student_id: 190,
          subject_group_id: 172
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 579,
          student_id: 190,
          subject_group_id: 173
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 580,
          student_id: 190,
          subject_group_id: 173
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 581,
          student_id: 190,
          subject_group_id: 173
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 582,
          student_id: 190,
          subject_group_id: 173
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 583,
          student_id: 190,
          subject_group_id: 174
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 584,
          student_id: 190,
          subject_group_id: 174
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 585,
          student_id: 190,
          subject_group_id: 174
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 586,
          student_id: 190,
          subject_group_id: 174
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 587,
          student_id: 190,
          subject_group_id: 175
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 588,
          student_id: 190,
          subject_group_id: 175
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 589,
          student_id: 190,
          subject_group_id: 175
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 590,
          student_id: 190,
          subject_group_id: 175
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 591,
          student_id: 190,
          subject_group_id: 176
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 592,
          student_id: 190,
          subject_group_id: 176
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 593,
          student_id: 190,
          subject_group_id: 176
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 594,
          student_id: 190,
          subject_group_id: 176
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 595,
          student_id: 190,
          subject_group_id: 177
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 596,
          student_id: 190,
          subject_group_id: 177
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 597,
          student_id: 190,
          subject_group_id: 177
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 598,
          student_id: 190,
          subject_group_id: 177
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 599,
          student_id: 190,
          subject_group_id: 178
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 600,
          student_id: 190,
          subject_group_id: 178
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 601,
          student_id: 190,
          subject_group_id: 178
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 602,
          student_id: 190,
          subject_group_id: 178
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 603,
          student_id: 190,
          subject_group_id: 179
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 604,
          student_id: 190,
          subject_group_id: 179
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 605,
          student_id: 190,
          subject_group_id: 179
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 606,
          student_id: 190,
          subject_group_id: 179
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 607,
          student_id: 190,
          subject_group_id: 180
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 608,
          student_id: 190,
          subject_group_id: 180
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 609,
          student_id: 190,
          subject_group_id: 180
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 610,
          student_id: 190,
          subject_group_id: 180
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 611,
          student_id: 190,
          subject_group_id: 181
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 612,
          student_id: 190,
          subject_group_id: 181
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 613,
          student_id: 190,
          subject_group_id: 181
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 614,
          student_id: 190,
          subject_group_id: 181
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 615,
          student_id: 190,
          subject_group_id: 182
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 616,
          student_id: 190,
          subject_group_id: 182
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 617,
          student_id: 190,
          subject_group_id: 182
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 618,
          student_id: 190,
          subject_group_id: 182
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 619,
          student_id: 190,
          subject_group_id: 183
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 620,
          student_id: 190,
          subject_group_id: 183
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 621,
          student_id: 190,
          subject_group_id: 183
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 622,
          student_id: 190,
          subject_group_id: 183
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 623,
          student_id: 190,
          subject_group_id: 184
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 624,
          student_id: 190,
          subject_group_id: 184
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 625,
          student_id: 190,
          subject_group_id: 184
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 626,
          student_id: 190,
          subject_group_id: 184
        },
        {
          name: 'mitderm',
          max: 20,
          min: 0,
          id: 627,
          student_id: 190,
          subject_group_id: 185
        },
        {
          name: 'təqdimat',
          max: 20,
          min: 0,
          id: 628,
          student_id: 190,
          subject_group_id: 185
        },
        {
          name: 'quiz',
          max: 10,
          min: 0,
          id: 629,
          student_id: 190,
          subject_group_id: 185
        },
        {
          name: 'imtahan',
          max: 50,
          min: 17,
          id: 630,
          student_id: 190,
          subject_group_id: 185
        }
      ],
      rooms: [],
      lessonTable: [],
      lesson: [],
      attendance_journal: [],
      currentUser: {
        name: 'Nicat',
        surname: 'Əliyev',
        father: 'Nazim',
        gender: 'm',
        birth: '2004/3/29',
        type: 'admin',
        id: 1,
        username: 'nicat.əliyev',
        password: 'adminadmin',
        password_reseted: false
      },
      adminAboutStudent: 186,
      lastCreatedUser: {
        name: 'Nohəddin',
        surname: 'Qurbanlı',
        father: 'Cəmil',
        gender: 'm',
        birth: '2004-06-16',
        type: 'student',
        group_id: 163,
        id: 190,
        username: 'nohəddin.qurbanlı',
        password: 'JTdfBhA5',
        password_reseted: true
      },
      currentDepartment: {
        id: 8,
        name: 'Tətbiqi riyaziyyat',
        head_of_department_id: 9
      },
      adminCurrentFaculty: {
        id: 4,
        name: 'İnformasiya texnologiyaları və idarəetmə fakültəsi',
        dean_id: 5,
        symbol: 'İTİF'
      },
      currentGroupId: 163
    }
  

    // const initialState =  {
    //   next_id: 49,
    //   users: [
    //     {
    //       name: 'Nicat',
    //       surname: 'Əliyev',
    //       father: 'Nazim',
    //       gender: 'm',
    //       birth: '2004/3/29',
    //       type: 'admin',
    //       id: 1,
    //       username: 'nicat.əliyev',
    //       password: 'adminadmin',
    //       password_reseted: false
    //     },
    //     {
    //       name: 'Rəhim',
    //       surname: 'Əlizadə',
    //       father: 'Yusif',
    //       gender: 'm',
    //       birth: '2004/11/25',
    //       type: 'dean',
    //       id: 3,
    //       username: 'rəhim.əlizadə',
    //       password: 'jWGussYP',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Gülana',
    //       surname: 'Hacızadə',
    //       father: 'Əli',
    //       gender: 'f',
    //       birth: '2004/06/15',
    //       type: 'dean',
    //       id: 5,
    //       username: 'gülana.hacızadə',
    //       password: 'pO4U5dfN',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Ramin',
    //       surname: 'Əliyev',
    //       father: 'Ramin',
    //       gender: 'm',
    //       birth: '2000/02/16',
    //       type: 'head of department',
    //       id: 7,
    //       username: 'ramin.əliyev',
    //       password: '5r7vW8AS',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Həsən',
    //       surname: 'Vüsalov',
    //       father: 'Vaqif',
    //       gender: 'm',
    //       birth: '2009/06/08',
    //       type: 'head of department',
    //       id: 9,
    //       username: 'həsən.vüsalov',
    //       password: 'FduYvQrm',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Məhəmməd',
    //       surname: 'Musayev',
    //       father: 'Natiq',
    //       gender: 'm',
    //       birth: '2004/07/29',
    //       type: 'head of department',
    //       id: 11,
    //       username: 'məhəmməd.musayev',
    //       password: 'A5x0ojgL',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Murad',
    //       surname: 'Əmirov',
    //       father: 'Azad',
    //       gender: 'm',
    //       birth: '2001/05/14',
    //       type: 'head of department',
    //       id: 13,
    //       username: 'murad.əmirov',
    //       password: 'qaDjNY7q',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Vüsal',
    //       surname: 'Quliyev',
    //       father: 'Ramin',
    //       gender: 'm',
    //       birth: '1974/05/21',
    //       type: 'head of department',
    //       id: 15,
    //       username: 'vüsal.quliyev',
    //       password: 'gET3qbwQ',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Azər',
    //       surname: 'Əmirov',
    //       father: 'Azər',
    //       gender: 'm',
    //       birth: '1995-01-09',
    //       type: 'teacher',
    //       department_id: 6,
    //       id: 17,
    //       username: 'azər.əmirov',
    //       password: '4oQNitS4',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Mehdi',
    //       surname: 'Qafarov',
    //       father: 'Ramil',
    //       gender: 'm',
    //       birth: '1998-02-17',
    //       type: 'teacher',
    //       department_id: 6,
    //       id: 18,
    //       username: 'mehdi.qafarov',
    //       password: 'NKkxYDs2',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Günel',
    //       surname: 'Pənahi',
    //       father: 'Samir',
    //       gender: 'f',
    //       birth: '2003-04-01',
    //       type: 'teacher',
    //       department_id: 6,
    //       id: 19,
    //       username: 'günel.pənahi',
    //       password: 'wZpcCQcB',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Vüqar',
    //       surname: 'Ramalov',
    //       father: 'Vüqar',
    //       gender: 'm',
    //       birth: '1994-01-11',
    //       type: 'teacher',
    //       department_id: 8,
    //       id: 23,
    //       username: 'vüqar.ramalov',
    //       password: 'cncZFZK6',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Vüsalə',
    //       surname: 'Əliyeva',
    //       father: 'Həsən',
    //       gender: 'f',
    //       birth: '2006-01-10',
    //       type: 'teacher',
    //       department_id: 8,
    //       id: 24,
    //       username: 'vüsalə.əliyeva',
    //       password: 'MRZT4syD',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Hüseynli',
    //       surname: 'Aybəniz',
    //       father: 'Ayaz',
    //       gender: 'f',
    //       birth: '1989-05-10',
    //       type: 'teacher',
    //       department_id: 8,
    //       id: 25,
    //       username: 'hüseynli.aybəniz',
    //       password: 'VADRBNhi',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Gülşən',
    //       surname: 'Əliyeva',
    //       father: 'Əli',
    //       gender: 'f',
    //       birth: '1993-02-02',
    //       type: 'teacher',
    //       department_id: 10,
    //       id: 33,
    //       username: 'gülşən.əliyeva',
    //       password: 'ejEHmLcP',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Vüsal',
    //       surname: 'Qafarov',
    //       father: 'Qafar',
    //       gender: 'm',
    //       birth: '1997-01-28',
    //       type: 'teacher',
    //       department_id: 10,
    //       id: 34,
    //       username: 'vüsal.qafarov',
    //       password: 'Z28TCGZy',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Musayev',
    //       surname: 'Musa',
    //       father: 'Musa',
    //       gender: 'm',
    //       birth: '1989-01-01',
    //       type: 'teacher',
    //       department_id: 12,
    //       id: 39,
    //       username: 'musayev.musa',
    //       password: 'gVQn3V90',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Cəmil',
    //       surname: 'Mehdiyev',
    //       father: 'Mehdi',
    //       gender: 'm',
    //       birth: '2006-02-14',
    //       type: 'teacher',
    //       department_id: 12,
    //       id: 40,
    //       username: 'cəmil.mehdiyev',
    //       password: '6sKEDj7o',
    //       password_reseted: true
    //     },
    //     {
    //       name: 'Həsən',
    //       surname: 'Həsənov',
    //       father: 'Həsən',
    //       gender: 'm',
    //       birth: '1998-03-11',
    //       type: 'teacher',
    //       department_id: 14,
    //       id: 44,
    //       username: 'həsən.həsənov',
    //       password: 'xHDOkH4i',
    //       password_reseted: true
    //     }
    //   ],
    //   faculties: [
    //     {
    //       id: 2,
    //       name: 'Energetika fakültəsi',
    //       dean_id: 3,
    //       symbol: 'EF'
    //     },
    //     {
    //       id: 4,
    //       name: 'İnformasiya texnologiyaları və idarəetmə fakültəsi',
    //       dean_id: 5,
    //       symbol: 'İTİF'
    //     }
    //   ],
    //   specialties: [],
    //   education_plans: [],
    //   groups: [],
    //   departments: [
    //     {
    //       id: 6,
    //       name: 'Humanitar fənnlər',
    //       head_of_department_id: 7
    //     },
    //     {
    //       id: 8,
    //       name: 'Tətbiqi riyaziyyat',
    //       head_of_department_id: 9
    //     },
    //     {
    //       id: 10,
    //       name: 'Kompüter mühəndisliyi',
    //       head_of_department_id: 11
    //     },
    //     {
    //       id: 12,
    //       name: 'Qaz neft',
    //       head_of_department_id: 13
    //     },
    //     {
    //       id: 14,
    //       name: 'Dil və ədəbiyyat',
    //       head_of_department_id: 15
    //     }
    //   ],
    //   subjects: [
    //     {
    //       id: 16,
    //       name: 'Tarix',
    //       department_id: 6
    //     },
    //     {
    //       id: 20,
    //       name: 'Fəlsəfə',
    //       department_id: 6
    //     },
    //     {
    //       id: 21,
    //       name: 'Mülki müdafiə',
    //       department_id: 6
    //     },
    //     {
    //       id: 22,
    //       name: 'Azərbaycan tarixi',
    //       department_id: 6
    //     },
    //     {
    //       id: 26,
    //       name: 'Riyazi analiz',
    //       department_id: 8
    //     },
    //     {
    //       id: 27,
    //       name: 'Diferensial tənliklər',
    //       department_id: 8
    //     },
    //     {
    //       id: 28,
    //       name: 'Diskret riyaziyyat',
    //       department_id: 8
    //     },
    //     {
    //       id: 29,
    //       name: 'Xətti cəbr',
    //       department_id: 8
    //     },
    //     {
    //       id: 30,
    //       name: 'Analitik həndəsə',
    //       department_id: 8
    //     },
    //     {
    //       id: 31,
    //       name: 'Ehtimal nəzəriyyəsi',
    //       department_id: 8
    //     },
    //     {
    //       id: 32,
    //       name: 'Statistika',
    //       department_id: 8
    //     },
    //     {
    //       id: 35,
    //       name: 'Kompüter mühəndisliyinin əsasları',
    //       department_id: 10
    //     },
    //     {
    //       id: 36,
    //       name: 'Proqramlaşdırma',
    //       department_id: 10
    //     },
    //     {
    //       id: 37,
    //       name: 'Sistem inzibatçılığı',
    //       department_id: 10
    //     },
    //     {
    //       id: 38,
    //       name: 'Veb proqramlaşdırma',
    //       department_id: 10
    //     },
    //     {
    //       id: 41,
    //       name: 'Neftin kompleks hazırlanması',
    //       department_id: 12
    //     },
    //     {
    //       id: 42,
    //       name: 'Qaz quyularının istismarı',
    //       department_id: 12
    //     },
    //     {
    //       id: 43,
    //       name: 'Quyuların təhlili',
    //       department_id: 12
    //     },
    //     {
    //       id: 45,
    //       name: 'Ədəbiyyat',
    //       department_id: 14
    //     },
    //     {
    //       id: 46,
    //       name: 'Azərbaycan dili',
    //       department_id: 14
    //     },
    //     {
    //       id: 47,
    //       name: 'Orta əsrlər ədəbiyyatı',
    //       department_id: 14
    //     },
    //     {
    //       id: 48,
    //       name: 'İşgüzar kommunikasiya',
    //       department_id: 14
    //     }
    //   ],
    //   subject_groups: [],
    //   points: [],
    //   main_journal: [],
    //   rooms: [],
    //   lessonTable: [],
    //   lesson: [],
    //   attendance_journal: [],
    //   currentUser: {
    //     name: 'Nicat',
    //     surname: 'Əliyev',
    //     father: 'Nazim',
    //     gender: 'm',
    //     birth: '2004/3/29',
    //     type: 'admin',
    //     id: 1,
    //     username: 'nicat.əliyev',
    //     password: 'adminadmin',
    //     password_reseted: false
    //   },
    //   adminAboutStudent: null,
    //   lastCreatedUser: {
    //     name: 'Həsən',
    //     surname: 'Həsənov',
    //     father: 'Həsən',
    //     gender: 'm',
    //     birth: '1998-03-11',
    //     type: 'teacher',
    //     department_id: 14,
    //     id: 44,
    //     username: 'həsən.həsənov',
    //     password: 'xHDOkH4i',
    //     password_reseted: true
    //   },
    //   currentDepartment: {
    //     id: 14,
    //     name: 'Dil və ədəbiyyat',
    //     head_of_department_id: 15
    //   }
    // }
  



// const initialState = {  //baslangic deyerler ucun obyekt yaradiriq
//     next_id: 2,
//     users: [
//       {
//         "name": "Nicat",
//         "surname": "Əliyev",
//         "father": "Nazim",
//         "gender": "m",
//         "birth": "2004/3/29",
//         "type": "admin",
//         "id": 1,
//         "username": "nicat.əliyev",
//         "password": "adminadmin",
//         "password_reseted": false
//       }
//     ],
//     faculties: [],
//     specialties: [],
//     education_plans: [],
//     groups: [],
//     departments: [],
//     subjects: [],
//     subject_groups: [],
//     points: [],
//     main_journal: [],
//     rooms: [],
//     lessonTable: [],
//     lesson: [],
//     attendance_journal: [],
// currentUser: null,
//     adminAboutStudent: null,
// }

const getUserByUsernameF = (state, username) => {
    if (!state.users.find(item => item.username === username)) {
        return false;
    }
    return JSON.parse(JSON.stringify(state.users.find(item => item.username === username)));
}

const updateId = (state) => {
    return state.next_id++;
}

const canBeName = (state, word) => {
    let arrayWord = word.split("");
    if (arrayWord.find(item => item.toLowerCase() === item.toUpperCase())) {
        return false;
    }
    else {
        if (arrayWord[0] === arrayWord[0].toUpperCase()) {
            arrayWord.shift();
            return word.substring(1, word.length).toLowerCase() === word.substring(1, word.length);
        }
        else {
            return false;
        }
    }
}

function isDateValid(state, dateStr) {
    return !isNaN(new Date(dateStr));
}


function generatePassword(state) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


const generateUsername = (state, name, surname) => {
    let username = (name).toLowerCase() + "." + (surname).toLowerCase();
    let i = 1;
    while (getUserByUsernameF(state, username)) {
        i++;
        username = (name).toLowerCase() + "." + (surname).toLowerCase() + i;
    }
    return username;
}

const createUser = (state, newUser) => {
    if (newUser.name && newUser.surname && newUser.father && newUser.gender && newUser.birth && newUser.type) {
        if (canBeName(state, newUser.name) && canBeName(state, newUser.surname) && ['m', 'f'].includes(newUser.gender) && isDateValid(state, newUser.birth)) {
            newUser.id = updateId(state);
            newUser.username = generateUsername(state, newUser.name, newUser.surname);
            newUser.password = generatePassword(state);
            newUser.password_reseted = true;
            state.users.push(newUser);
            state.lastCreatedUser = newUser;
            return newUser;   
        }
    }
}

function removeAdditonalSpaces(state, word) {
    return word.split(" ").filter(item => item).join(" ");
}

function createFaculity(state, name, symbol, dean) {

    if (name && symbol && dean) {
        name = removeAdditonalSpaces(state, name);

        dean.type = 'dean';
        if (!state.faculties.find(item => name === item.name) && symbol.toUpperCase() === symbol) {
            const newFaculity = {
                id: updateId(state),
                name,
                dean_id: createUser(state, dean).id,
                symbol
            }
            state.faculties.push(newFaculity);
            return newFaculity;
        }
    }
}

function createDepartment(state, name, head_of_department) {
    if (name && head_of_department) {
        name = removeAdditonalSpaces(state, name);
        head_of_department.type = 'head of department';
        if (!state.departments.find(item => name === item.name)) {
            const newDepartment = {
                id: updateId(state),
                name,
                head_of_department_id: createUser(state, head_of_department).id
            }
            state.departments.push(newDepartment);
            
            return newDepartment;
        }
    }
}

function createSubject(state, name, department_id) {
    if (name && department_id) {
        name = removeAdditonalSpaces(state, name);
        if (state.departments.find(item => item.id === department_id) && !state.subjects.find(item => item.name === name)) {
            const newSubject = {
                id: updateId(state),
                name,
                department_id
            }
            state.subjects.push(newSubject);
            return newSubject;
        }
    }
}



function createSpecialty(state, name, faculty_id, tutor, education_plan) {
  console.log("");
  if (name && faculty_id && tutor && education_plan) {
console.log("");
name = removeAdditonalSpaces(state, name);
tutor.type = 'tutor';


if (!state.specialties.find(item => item.name === name) && state.faculties.find(item => item.id === faculty_id)) {
          
          let check = true;
          console.log(check);
          education_plan.forEach((element, ind) => {
            console.log(check);
              if (typeof element.credit !== "number" || typeof element.semester !== "number") {
                  console.log(check);
                  check = false;
                }
                console.log(check);
                if (!state.subjects.find(item => element.subject_id === item.id)) {
                    console.log(check);
                    check = false;
                    
                }
                for (let index = ind + 1; index < education_plan.length; index++) {
                  if (education_plan[index].subject_id === element.subject_id) {
                      console.log(education_plan[index]);
                      check = false
                }

            }
            
        })
        console.log("");
        for (let i = 1; i < 8; i++) {
                  console.log("");
                  
                  if (education_plan.filter(item => item.semester === i).reduce((sum, element) => sum + element.credit, 0) !== 30) {
                      check = false;
                      console.log("");
                      
                    }
                    console.log("");
                    
                }
                
                console.log(check);
                if (check) {
              
              const newSpeciality = {
                  id: updateId(state),
                  name,
                  faculty_id,
                  tutor_id: createUser(state, tutor).id,
                  education_plan
                }
                
                console.log(check);
                state.specialties.push(newSpeciality)
                console.log(check);
                

                return newSpeciality;
              }
              
              
            }
          }
        }

function createGroup(state, number, specialty_id, enterance_year, students) {
    if (number && typeof specialty_id === 'number' && enterance_year) {
      if (number.split(" ").join('') === number) {
          let check = true;
          
          if (state.groups.find(item => item.number === number)) {
              check = false;
            }
            let enterance_yearArray = enterance_year.split("-");
            if (enterance_yearArray.length !== 2) {
              check = false;
            }
            
            enterance_yearArray.forEach(item => {
              if (!isDateValid(state, `${item}/01/01`)) {
                check = false;
              }
            })
              
              if (!state.specialties.find(item => item.id === specialty_id)) {
                check = false;
              }
            if (check) {
                let inputs = {

                }
                const groupId = updateId(state)

                let newGroup = {
                    id: groupId,
                    number,
                    specialty_id,
                    enterance_year
                }

                inputs.newGroup = newGroup;

                const education_plan = state.specialties.find(item => item.id === specialty_id).education_plan


                let enteranceStart = Number(enterance_year.split("-")[0]);
                let enteranceEnd = Number(enterance_year.split("-")[1]);
                let semesters = [];
                for (let i = 0; i < 4; i++) {
                    semesters.push(String(enteranceStart + i) + "-" + String(enteranceEnd + i) + '_payız');
                    semesters.push(String(enteranceStart + i) + "-" + String(enteranceEnd + i) + '_yaz');
                }
                let newGroupSubjects = [];
                education_plan.forEach(item => {
                    newGroupSubjects.push({ ...item, id: updateId(state), group_id: groupId, semester: semesters[item.semester - 1] })
                })

                inputs.newGroupSubjects = newGroupSubjects;
                if (!students.find(item => !Boolean(createUser(state, { ...item, type: 'student', group_id: groupId })))) {
                    inputs.students = state.users.filter(element => element.group_id === groupId);
                    state.groups.push(newGroup);

                    state.subject_groups = [...state.subject_groups, ...inputs.newGroupSubjects];


                    let points = [
                        {
                            name: "mitderm",
                            max: 20,
                            min: 0
                        },
                        {
                            name: "təqdimat",
                            max: 20,
                            min: 0
                        },
                        {
                            name: "quiz",
                            max: 10,
                            min: 0
                        },
                        {
                            name: "imtahan",
                            max: 50,
                            min: 17
                        }


                    ]
                    inputs.main_journal = []
                    inputs.students.forEach(student => {
                        inputs.newGroupSubjects.forEach(groupSubject => {
                            points.forEach(point => {
                                const newMainJournal = { ...point, id: updateId(state), student_id: student.id, subject_group_id: groupSubject.id }
                                state.main_journal.push(newMainJournal)
                                inputs.main_journal.push(newMainJournal)
                            })
                        })
                    })
                    return inputs;
                }

            }


        }
    }



  }


function setTeacher(state, subject_group_id, teacher_id) {
    let index;
    state.subject_groups.forEach((item, ind) => {
        if (item.id === subject_group_id) {
            index = ind;
        }
    })
    state.subject_groups[index].teacher_id = teacher_id;
}

function setResultByAdmin(state, main_journal_id, amount) {
    let current = state.main_journal.find(item => item.id === main_journal_id);
    if (amount <= current.max && amount >= 0) {
        let ind;
        state.main_journal.forEach((item, index) => {
            if (item.id === main_journal_id) {
                ind = index;
            }
        })

        state.main_journal[ind].amount = amount;

    }
}

function setResultByTeacher(state, main_journal_id, amount) {
    if (state.main_journal.find(item => item.id === main_journal_id && typeof item.amount != 'number')) {
        setResultByAdmin(state, main_journal_id, amount);
    }
}

function setAdminCurrentFaculty(state,faculty) {
    state.adminCurrentFaculty = faculty
}


const universitySlice = createSlice({
    name: "university",
    initialState,
    reducers: { //reducerleri burda yaradiriq
        createFaculityR: (state, action) => { createFaculity(state, action.payload.name, action.payload.symbol, action.payload.dean) },
        createDepartmentR: (state, action) => { createDepartment(state, action.payload.name, action.payload.head_of_department) },
        createSubjectR: (state, action) => { createSubject(state, action.payload.name, action.payload.department_id) },
        createSpecialtyR: (state, action) => { createSpecialty(state, action.payload.name, action.payload.faculty_id, action.payload.tutor, action.payload.education_plan) },
        createGroupR: (state, action) => { createGroup(state, action.payload.number, action.payload.specialty_id, action.payload.enterance_year, action.payload.students) },
        setTeacherR: (state, action) => { setTeacher(state, action.payload.subject_group_id, action.payload.teacher_id) },
        setResultByAdminP: (state, action) => { setResultByAdmin(state, action.payload.main_journal_id, action.payload.amount) },
        setResultByTeacherP: (state, action) => { setResultByTeacher(state, action.payload.main_journal_id, action.payload.amount) },
        setCurrentUser: (state,action) => {state.currentUser = action.payload},
        setPasswordForUser: (state,action) => {let ind;state.users.forEach((item,index) => {if (item.id === action.payload.id) {ind = index}}); state.users[ind].password = action.payload.password; state.users[ind].password_reseted = false;},
        setAdminAboutStudentId: (state,action) => {state.adminAboutStudent = action.payload},
        resetPassword: (state,action) => {let index; state.users.forEach((item,ind) => {if (item.id === action.payload.id) {index = ind}}); state.users[index] = {...state.users[index],password: action.payload.newPassword,password_reseted: true}; },
        setAdminCurrentFacultyR: (state,action) => {setAdminCurrentFaculty(state,action.payload)},
        setAdminCurrentGroupIdR: (state,action) => {state.currentGroupId = action.payload.id},
        createUserR: (state,action) => {createUser(state,action.payload)},
        setCurrentDepartmentR: (state,action) => {state.currentDepartment = action.payload},
      }
});

export const { createFaculityR, createDepartmentR, createSubjectR, createSpecialtyR, createGroupR, setResultByAdminP, setTeacherR, setResultByTeacherP,setCurrentUser,setPasswordForUser,setAdminAboutStudentId,resetPassword,setAdminCurrentFacultyR,setAdminCurrentGroupIdR,createUserR,setCurrentDepartmentR  } = universitySlice.actions;  //burda butun reducerleri export edirik

export default universitySlice.reducer;