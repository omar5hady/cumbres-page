<template>

    <div class="bg-card relative bg-cover rounded-xl w-[380px] h-[526px]">
        <img class="absolute top-3 right-6"
            :src="imageSrc('logosFraccionamientos',data.proyecto.replace(/\s/g, '').toLowerCase()+'.png')" width="380"
            alt="no image" height="200" />
        <div class="p-0 flex flex-col justify-center items-center mt-24">
            <div>
                <Title :title="data.prototipo" />
            </div>
            <img class="translate-y-7" :src="imageSrc('casas',data.prototipo.replace(/\s/g, '').toLowerCase()+'.png')"
                alt="product image" width="180" height="190" />

            <div class="transform translate-y-7">
                <p class="font-bebas text-3xl text-center tracking-wide font-medium z-10 text-yellow-300">
                    ${{formatNumber((data.precio_base+data.ajuste+data.excedente_terreno+data.obra_extra).toFixed(2))}}</p>
                <div class="transform -translate-y-1/4 -translate-x-3">
                    <p v-if="data.etapa !=='EXTERIOR' && data.etapa !=='EXTERIOR 2'"
                        class="font-bebas text-sm opacity-60 font-extralight text-right text-white">En privada</p>
                    <p v-if="data.etapa === 'EXTERIOR' || data.etapa === 'EXTERIOR 2'"
                        class="font-bebas text-sm opacity-60 font-extralight text-right text-white">En exterior</p>
                </div>
            </div>
            <div class="transform translate-y-5">
                <div class="flex items-center justify-center">
                    <svg class="w-8 h-8" fill="#00AAEF" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 28.13 27.89" style="enable-background:new 0 0 28.13 27.89;" xml:space="preserve">
                        <g id="Texto">
                            <g>
                                <path d="M22.07,6.34c0.18,0.1,0.24,0.25,0.24,0.45c-0.01,2.09,0,4.18,0,6.28c0,0.05,0,0.1,0,0.15
                                    c-0.02,0.17-0.17,0.29-0.33,0.29c-0.16,0-0.31-0.13-0.33-0.3c-0.01-0.06,0-0.12,0-0.18c0-1.95,0-3.9,0-5.85
                                    C21.65,7.03,21.6,7,21.45,7c-4.12,0-8.25,0-12.37,0c-0.16,0-0.2,0.04-0.2,0.2c0,4.12,0,8.24,0,12.35c0,0.17,0.05,0.21,0.21,0.21
                                    c4.12,0,8.24,0,12.35,0c0.16,0,0.2-0.04,0.2-0.2c-0.01-1.11,0-2.23,0-3.34c0-0.06,0-0.11,0-0.17c0.02-0.16,0.16-0.28,0.32-0.28
                                    c0.17,0,0.31,0.11,0.34,0.28c0.01,0.06,0.01,0.12,0.01,0.18c0,2.21,0,4.43,0,6.64c0,0.36-0.1,0.46-0.46,0.46
                                    c-5.36,0-10.73,0-16.09,0c-0.2,0-0.35-0.06-0.45-0.24c0-5.51,0-11.03,0-16.54c0.06-0.1,0.14-0.17,0.23-0.23
                                    C11.05,6.34,16.56,6.34,22.07,6.34z M5.96,14.82c0,2.55,0,5.1,0,7.65c0,0.17,0.05,0.2,0.21,0.2c4.53,0,9.07,0,13.6,0
                                    c0.58,0,1.16,0,1.74,0c0.1,0,0.13-0.02,0.13-0.13c0-0.67,0-1.34,0-2.01c0-0.09-0.01-0.13-0.12-0.13c-0.81,0-1.62,0-2.42,0
                                    c-0.09,0-0.13,0.02-0.12,0.12c0.01,0.17,0,0.34,0,0.51c-0.01,0.23-0.14,0.37-0.34,0.37c-0.19,0-0.32-0.14-0.32-0.37
                                    c0-0.17-0.01-0.34,0-0.51c0-0.1-0.03-0.12-0.12-0.12c-0.82,0-1.64,0-2.46,0c-0.1,0-0.12,0.04-0.12,0.13c0,0.18,0.01,0.35,0,0.53
                                    c-0.01,0.22-0.15,0.35-0.35,0.34c-0.19-0.01-0.31-0.14-0.31-0.36c0-0.18,0-0.35,0-0.53c0-0.09-0.03-0.11-0.12-0.11
                                    c-0.87,0-1.74,0-2.61,0c-0.09,0-0.12,0.03-0.11,0.11c0,0.17,0,0.33,0,0.5c0,0.25-0.13,0.39-0.33,0.39c-0.2,0-0.33-0.15-0.33-0.39
                                    c0-0.17,0-0.33,0-0.5c0-0.08-0.02-0.11-0.1-0.11c-0.79,0-1.57,0-2.36,0c-0.09,0-0.11,0.04-0.11,0.12c0,0.17,0,0.34,0,0.51
                                    c0,0.22-0.13,0.36-0.32,0.37c-0.2,0.01-0.34-0.14-0.34-0.36c0-0.18,0-0.35,0-0.53c0-0.08-0.02-0.11-0.1-0.1
                                    c-0.18,0-0.37,0.01-0.55,0c-0.21-0.01-0.35-0.15-0.35-0.34c0-0.19,0.14-0.32,0.35-0.32c0.18,0,0.35,0,0.53,0
                                    c0.08,0,0.12-0.01,0.12-0.11c0-0.78,0-1.56,0-2.34c0-0.09-0.04-0.11-0.12-0.11c-0.17,0-0.34,0-0.51,0c-0.22,0-0.36-0.13-0.37-0.32
                                    c-0.01-0.2,0.14-0.34,0.36-0.34c0.18,0,0.35,0,0.53,0c0.08,0,0.11-0.02,0.11-0.1c0-0.87,0-1.75,0-2.62c0-0.08-0.03-0.1-0.11-0.1
                                    c-0.18,0-0.37,0.01-0.55,0c-0.21-0.01-0.35-0.15-0.35-0.34c0.01-0.19,0.14-0.31,0.35-0.32c0.18,0,0.35,0,0.53,0
                                    c0.08,0,0.12-0.02,0.12-0.11c0-0.87,0-1.74,0-2.61c0-0.1-0.04-0.12-0.13-0.12c-0.18,0-0.35,0.01-0.53,0
                                    c-0.21-0.01-0.34-0.15-0.34-0.33c0-0.19,0.13-0.32,0.34-0.33c0.17-0.01,0.34-0.01,0.51,0C8.2,9.56,8.23,9.52,8.23,9.4
                                    c0-0.75-0.01-1.51,0-2.26C8.23,7.03,8.19,7,8.08,7C7.44,7,6.8,7.01,6.15,7C6.01,7,5.96,7.03,5.96,7.18
                                    C5.97,9.73,5.96,12.28,5.96,14.82z"/>
                                <path d="M19.65,9.51c-2.78,2.78-5.56,5.56-8.35,8.35c0.02,0.03,0.07,0.01,0.11,0.01c0.29,0,0.58,0,0.86,0
                                    c0.22,0,0.36,0.13,0.36,0.33c0,0.2-0.14,0.33-0.37,0.34c-0.59,0-1.18,0-1.78,0c-0.25,0-0.38-0.13-0.38-0.38c0-0.59,0-1.18,0-1.78
                                    c0-0.23,0.13-0.38,0.33-0.38c0.21,0,0.34,0.14,0.34,0.38c0,0.33,0,0.65,0,0.95c2.78-2.78,5.56-5.56,8.35-8.35
                                    c-0.01-0.02-0.06,0.01-0.1,0.01c-0.29,0-0.58,0-0.86,0c-0.23,0-0.37-0.14-0.37-0.34c0-0.19,0.15-0.32,0.37-0.32
                                    c0.6,0,1.2,0,1.79,0c0.23,0,0.36,0.12,0.36,0.36c0.01,0.61,0.01,1.22,0,1.83c0,0.22-0.14,0.35-0.34,0.35
                                    c-0.19,0-0.32-0.14-0.32-0.35c-0.01-0.28,0-0.56,0-0.85C19.66,9.61,19.68,9.55,19.65,9.51z"/>
                                <path d="M21.98,14.94c-0.19,0-0.33-0.14-0.34-0.32c0-0.19,0.15-0.34,0.33-0.34c0.18,0,0.33,0.15,0.33,0.33
                                    C22.3,14.8,22.16,14.94,21.98,14.94z"/>
                            </g>
                        </g>
                    </svg>
                    <span class="font-bebas text-white font-normal text-lg ">{{data.construccion.toFixed(1)}}
                        m??</span>&nbsp;&nbsp;

                    <svg version="1.1" class="w-8 h-8" fill="#00AAEF" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 25.66 28.75" style="enable-background:new 0 0 25.66 28.75;" xml:space="preserve">
                        <g id="Texto">
                            <g>
                                <path d="M17.89,5.87c0.12,0.08,0.21,0.18,0.16,0.33C18,6.35,17.87,6.37,17.72,6.37c-3.49,0-6.98,0-10.48,0
                                    c-0.07,0-0.14,0-0.23,0c0,0.07-0.01,0.13-0.01,0.19c0,4.48,0,8.96,0,13.43c0,0.16,0.04,0.19,0.2,0.19c4.48,0,8.96,0,13.43,0
                                    c0.05,0,0.11,0,0.17-0.01c0-2.58,0-5.15,0-7.74c-0.19,0-0.38,0-0.59,0c0,0.16,0,0.33,0,0.49c0,0.39-0.21,0.59-0.59,0.6
                                    c-0.47,0-0.94,0-1.41,0c-0.06,0-0.12,0-0.19,0c0,0.21,0,0.39,0,0.61c0.07,0,0.12,0,0.18,0c0.47,0,0.94,0,1.41,0
                                    c0.39,0,0.6,0.21,0.6,0.59c0,1.42,0,2.84,0,4.27c0,0.37-0.21,0.59-0.59,0.59c-1.61,0-3.22,0-4.83,0c-0.37,0-0.58-0.22-0.59-0.59
                                    c0-0.35,0-0.69,0-1.05c-0.2,0-0.39,0-0.6,0c0,0.05,0,0.1,0,0.16c0,0.32,0,0.63,0,0.95c0,0.29-0.19,0.5-0.48,0.54
                                    c-0.06,0.01-0.12,0.01-0.18,0.01c-1.56,0-3.11,0-4.67,0c-0.48,0-0.67-0.19-0.67-0.66c0-1.38,0-2.76,0-4.13
                                    c0-0.47,0.19-0.66,0.65-0.66c1.57,0,3.14,0,4.72,0c0.45,0,0.63,0.19,0.63,0.63c0,0.15,0,0.3,0,0.45c0.2,0,0.39,0,0.6,0
                                    c0-0.17,0-0.33,0-0.49c0-0.39,0.21-0.6,0.59-0.6c0.16,0,0.32,0,0.49,0c0-0.2,0-0.39,0-0.61c-0.16,0-0.33,0-0.49,0
                                    c-0.39,0-0.59-0.21-0.59-0.6c0-0.16,0-0.32,0-0.49c-0.2,0-0.39,0-0.6,0c0,0.18,0,0.35,0,0.52c0,0.35-0.2,0.57-0.55,0.57
                                    c-0.8,0.01-1.59,0-2.39,0c-0.19,0-0.29-0.1-0.29-0.25c0-0.15,0.1-0.24,0.29-0.24c0.74,0,1.47,0,2.21,0c0.07,0,0.13,0,0.23,0
                                    c0-0.22,0-0.44,0-0.65c0-0.41,0.03-0.44,0.44-0.45c0.03,0,0.06-0.01,0.1-0.01c0.06-0.2-0.09-0.53,0.27-0.52
                                    c0.34,0.01,0.21,0.32,0.26,0.53c0.09,0,0.17,0,0.26,0c0.17,0.01,0.26,0.1,0.27,0.27c0,0.13,0,0.27,0,0.4c0,0.13,0,0.26,0,0.43
                                    c0.18,0,0.35,0,0.52,0c0.02,0,0.04,0,0.07,0c0.49,0,0.49,0,0.52,0.49c0,0.02,0.01,0.03,0.02,0.07c0.09,0,0.18,0,0.27,0
                                    c0.15,0.01,0.26,0.11,0.26,0.25c0,0.14-0.1,0.24-0.26,0.25c-0.05,0-0.1,0-0.15,0c-0.04,0-0.09,0.01-0.14,0.01
                                    c0,0.08,0,0.16,0,0.24c0,0.22-0.08,0.3-0.3,0.3c-0.22,0-0.44,0-0.66,0c-0.04,0-0.07,0.01-0.13,0.02c0,0.24,0,0.48,0,0.71
                                    c0,0.3-0.06,0.37-0.37,0.37c-0.05,0-0.1,0-0.18,0c0,0.1,0.01,0.19,0,0.28c-0.01,0.17-0.11,0.27-0.26,0.26
                                    c-0.14-0.01-0.23-0.1-0.23-0.27c0-0.08,0-0.16,0-0.28c-0.1,0-0.18,0-0.27,0c-0.19-0.01-0.28-0.1-0.28-0.29c0-0.26,0-0.52,0-0.8
                                    c-0.07,0-0.13-0.01-0.18-0.01c-1.54,0-3.09,0-4.63,0c-0.16,0-0.19,0.05-0.19,0.2c0.01,1.36,0.01,2.71,0,4.07
                                    c0,0.15,0.04,0.2,0.19,0.2c1.54-0.01,3.09,0,4.63,0c0.05,0,0.11,0,0.18-0.01c0-0.3,0-0.58,0-0.87c0-0.15,0-0.31,0-0.46
                                    c0-0.22,0.09-0.31,0.31-0.31c0.07,0,0.14,0,0.24,0c0-0.11,0-0.21,0-0.3c0.01-0.15,0.11-0.24,0.24-0.25c0.13,0,0.24,0.09,0.25,0.24
                                    c0.01,0.1,0,0.2,0,0.31c0.1,0,0.18,0,0.26,0c0.19,0.01,0.28,0.09,0.28,0.29c0,0.41,0,0.82,0,1.23c0,0.04,0.01,0.07,0.01,0.12
                                    c1.66,0,3.32,0,4.99,0c0-1.48,0-2.95,0-4.43c-0.07,0-0.13-0.01-0.18-0.01c-0.53,0-1.06,0-1.59,0c-0.36,0-0.41-0.05-0.41-0.41
                                    c0-0.04,0-0.08-0.01-0.14c-0.1,0-0.19,0-0.28,0c-0.16-0.01-0.27-0.12-0.26-0.26c0.01-0.14,0.11-0.23,0.27-0.24
                                    c0.09,0,0.18,0,0.28,0c0-0.09,0-0.17,0-0.24c0-0.23,0.08-0.31,0.31-0.31c0.56,0,1.13,0,1.69,0c0.06,0,0.12-0.01,0.19-0.01
                                    c0-0.25,0-0.49,0-0.72c0-0.3,0.07-0.37,0.37-0.37c0.05,0,0.1,0,0.18,0c0-0.1,0-0.19,0-0.28c0.01-0.16,0.1-0.26,0.24-0.26
                                    c0.15,0,0.24,0.09,0.25,0.27c0,0.09,0,0.17,0,0.28c0.11,0,0.21-0.01,0.3,0c0.15,0.01,0.24,0.1,0.25,0.26c0,0.05,0,0.1,0,0.15
                                    c0,2.56,0,5.11,0,7.67c0,0.3,0,0.59,0,0.89c0,0.21-0.08,0.32-0.24,0.33c-0.17,0-0.25-0.11-0.25-0.33c0-0.06,0-0.12,0-0.2
                                    c-4.6,0-9.2,0-13.81,0c0,0.1,0,0.19,0,0.28C7,21.13,6.9,21.22,6.77,21.22c-0.14,0-0.24-0.08-0.25-0.23c-0.01-0.1,0-0.2,0-0.29
                                    c-0.21-0.05-0.53,0.08-0.54-0.26c-0.01-0.36,0.32-0.21,0.52-0.27c0-4.59,0-9.19,0-13.79c-0.07,0-0.14,0-0.2,0
                                    C6.15,6.38,6.03,6.35,5.98,6.2C5.93,6.05,6.01,5.95,6.14,5.87C10.05,5.87,13.97,5.87,17.89,5.87z"/>
                                <path d="M20.91,5.87c0.3,0.12,0.41,0.35,0.4,0.67c-0.01,1.09,0,2.18,0,3.27c0,0.36-0.05,0.41-0.41,0.41
                                    c-0.04,0-0.08,0-0.14,0.01c0,0.1,0.01,0.2,0,0.29c-0.01,0.15-0.1,0.24-0.24,0.24c-0.14,0-0.24-0.09-0.25-0.24
                                    c-0.01-0.1,0-0.2,0-0.31c-0.08,0-0.13,0-0.18,0c-0.3,0-0.37-0.07-0.37-0.37c0-0.72,0-1.45,0-2.17c0-0.06,0-0.12,0-0.19
                                    c-1.67,0-3.33,0-5,0c0,0.06-0.01,0.12-0.01,0.18c0,0.72,0,1.45,0,2.17c0,0.33-0.06,0.38-0.39,0.39c-0.04,0-0.09,0-0.16,0
                                    c0,0.1,0,0.19,0,0.28c-0.01,0.17-0.11,0.27-0.26,0.26c-0.14,0-0.23-0.1-0.24-0.26c0-0.09,0-0.17,0-0.28c-0.1,0-0.18,0-0.26,0
                                    c-0.21,0-0.29-0.1-0.29-0.31c0-0.75,0-1.49,0-2.24c0-0.06,0-0.12,0-0.19c-1.67,0-3.32,0-4.99,0c0,0.06-0.01,0.12-0.01,0.18
                                    c0,1.73,0,3.45,0,5.18c0,0.16,0.05,0.19,0.2,0.19c0.4-0.01,0.81,0,1.21,0c0.05,0,0.1,0,0.15,0.01c0.14,0.02,0.22,0.11,0.22,0.25
                                    c0,0.14-0.09,0.24-0.23,0.24c-0.53,0-1.06,0.01-1.59-0.01c-0.2,0-0.38-0.18-0.43-0.38c-0.02-0.09-0.02-0.18-0.02-0.26
                                    c0-1.74,0-3.49,0-5.23c0-0.47,0.19-0.66,0.67-0.66c1.57,0,3.13,0,4.7,0c0.44,0,0.64,0.19,0.64,0.64c0,0.7,0,1.39,0,2.1
                                    c0.2,0,0.39,0,0.6,0c0-0.06,0-0.12,0-0.17c0-0.65,0-1.31,0-1.96c0-0.4,0.21-0.61,0.6-0.61c1.6,0,3.2,0,4.8,0
                                    c0.39,0,0.6,0.21,0.6,0.61c0,0.71,0,1.42,0,2.14c0.2,0,0.39,0,0.59,0c0-1.1,0-2.21,0-3.33c-0.05,0-0.11-0.01-0.17-0.01
                                    c-0.58,0-1.15,0-1.73,0c-0.14,0-0.27-0.01-0.33-0.17c-0.06-0.16,0.04-0.25,0.14-0.33C19.45,5.87,20.18,5.87,20.91,5.87z"/>
                                <path d="M4.31,7.14c0.08-0.13,0.2-0.17,0.35-0.17c0.31,0.01,0.62,0,0.93,0c0.2,0,0.32,0.1,0.31,0.26
                                    C5.9,7.39,5.79,7.47,5.59,7.47c-0.07,0-0.14,0-0.22,0c0,3.87,0,7.73,0,11.61c0.1,0,0.19,0,0.28,0c0.15,0.01,0.25,0.1,0.26,0.23
                                    c0.01,0.14-0.08,0.26-0.24,0.26c-0.37,0.01-0.74,0.01-1.11,0c-0.08,0-0.16-0.09-0.24-0.15c0-0.07,0-0.13,0-0.2
                                    c0.13-0.2,0.35-0.12,0.54-0.16c0-3.87,0-7.73,0-11.59C4.65,7.45,4.43,7.54,4.31,7.3C4.31,7.25,4.31,7.19,4.31,7.14z"/>
                                <path d="M4.31,21.45c0.17-0.22,0.29-0.23,0.48-0.04c0.1,0.1,0.2,0.21,0.32,0.33c0.12-0.13,0.23-0.25,0.34-0.36
                                    c0.13-0.13,0.27-0.13,0.38-0.03c0.11,0.11,0.09,0.25-0.03,0.38c-0.05,0.06-0.11,0.11-0.16,0.16c-0.06,0.05-0.12,0.1-0.22,0.19
                                    c0.14,0.12,0.27,0.22,0.38,0.33c0.13,0.13,0.14,0.27,0.04,0.38c-0.11,0.11-0.25,0.1-0.39-0.03c-0.11-0.11-0.22-0.22-0.34-0.34
                                    c-0.11,0.11-0.21,0.22-0.31,0.32c-0.19,0.19-0.32,0.18-0.49-0.03c0-0.06,0-0.11,0-0.17c0.15-0.16,0.29-0.31,0.44-0.47
                                    c-0.15-0.16-0.29-0.31-0.44-0.46C4.31,21.56,4.31,21.51,4.31,21.45z"/>
                                <path d="M4.31,20.35c0.07-0.13,0.18-0.18,0.33-0.17c0.15,0.01,0.31,0,0.46,0c0.15,0.01,0.25,0.1,0.25,0.23
                                    c0.01,0.14-0.09,0.25-0.24,0.26c-0.19,0.01-0.38,0.02-0.56-0.01c-0.08-0.01-0.16-0.1-0.24-0.15C4.31,20.46,4.31,20.41,4.31,20.35z
                                    "/>
                                <path d="M8.1,22.34c0,0.11,0.01,0.2,0,0.29c-0.01,0.15-0.11,0.25-0.24,0.24c-0.14-0.01-0.24-0.08-0.24-0.22
                                    c-0.01-0.38-0.01-0.76,0-1.14c0-0.15,0.12-0.24,0.26-0.22c0.14,0.01,0.22,0.1,0.23,0.24c0.01,0.09,0,0.19,0,0.29
                                    c3.87,0,7.73,0,11.61,0c0-0.09,0-0.18,0-0.28c0.01-0.16,0.11-0.26,0.25-0.26c0.13,0,0.24,0.09,0.25,0.24
                                    c0.01,0.37,0.01,0.74,0,1.11c0,0.14-0.11,0.24-0.25,0.24c-0.14,0-0.24-0.1-0.25-0.26c0-0.09,0-0.18,0-0.28
                                    C15.85,22.34,11.99,22.34,8.1,22.34z"/>
                                <path d="M20.82,22.35c0-0.09-0.01-0.19,0-0.28c0.01-0.14,0.12-0.24,0.25-0.23c0.14,0.01,0.23,0.09,0.24,0.23
                                    c0.01,0.19,0.01,0.39,0,0.58c-0.01,0.14-0.12,0.24-0.25,0.23c-0.14-0.01-0.22-0.09-0.24-0.23C20.81,22.55,20.82,22.45,20.82,22.35
                                    z"/>
                                <path d="M4.93,5.87c0.09,0,0.19-0.01,0.28,0c0.14,0.01,0.24,0.12,0.23,0.25C5.44,6.26,5.36,6.35,5.22,6.36
                                    c-0.19,0.01-0.39,0.01-0.58,0C4.5,6.35,4.39,6.24,4.4,6.11c0.01-0.14,0.09-0.22,0.23-0.24C4.73,5.86,4.83,5.87,4.93,5.87z"/>
                                <path d="M7,22.37c0,0.09,0.01,0.19,0,0.28c-0.01,0.13-0.09,0.21-0.22,0.23c-0.14,0.01-0.25-0.06-0.26-0.2
                                    c-0.02-0.21-0.02-0.43,0-0.64c0.01-0.13,0.12-0.2,0.25-0.19c0.14,0.01,0.22,0.09,0.23,0.23C7.01,22.17,7,22.27,7,22.37z"/>
                            </g>
                        </g>
                    </svg>
                    <span class="font-bebas text-white font-normal text-lg">{{data.terreno_m > data.terreno ?
                    data.terreno_m.toFixed(1) : data.terreno.toFixed(1)}} m??</span>


                </div>
                <div class="flex items-center justify-center space-x-1">
                    <svg class="w-8 h-8" fill="#00AAEF" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 25.37 26.09" style="enable-background:new 0 0 25.37 26.09;" xml:space="preserve">
                        <g id="Texto">
                            <g>
                                <path class="st12647" d="M6.64,22.15c-0.16-0.08-0.18-0.22-0.18-0.38c0-1.33,0-2.65,0-3.98c0-0.13-0.04-0.19-0.16-0.24
                                    c-0.43-0.17-0.86-0.36-1.29-0.53c-0.13-0.05-0.23-0.12-0.23-0.27c0-0.14,0.1-0.21,0.23-0.26c0.44-0.18,0.87-0.37,1.32-0.54
                                    c0.2-0.08,0.11-0.22,0.13-0.35c0.02-0.13-0.09-0.12-0.17-0.14c-0.81-0.22-1.61-0.43-2.42-0.64c-0.04-0.01-0.08-0.02-0.11-0.03
                                    c-0.16-0.05-0.24-0.18-0.2-0.31c0.04-0.14,0.17-0.21,0.33-0.17c0.67,0.17,1.34,0.35,2,0.53c0.26,0.07,0.51,0.14,0.77,0.21
                                    c0.24,0.07,0.29,0.12,0.29,0.37c0,0.26,0,0.26,0.25,0.16c0.57-0.24,1.13-0.47,1.7-0.71c0.03-0.01,0.07-0.02,0.08-0.07
                                    c-0.3-0.08-0.61-0.16-0.91-0.24c-0.24-0.06-0.29-0.12-0.29-0.37c0-1.83,0-3.66,0-5.49c0-0.3,0.12-0.39,0.41-0.32
                                    c2.59,0.68,5.17,1.37,7.76,2.06c0.13,0.04,0.24,0.1,0.25,0.25c0.01,0.19-0.16,0.29-0.38,0.23c-0.42-0.11-0.84-0.22-1.27-0.34
                                    c-2.03-0.54-4.06-1.07-6.09-1.62C8.31,8.92,8.28,8.96,8.28,9.11c0,1.61,0,3.22,0,4.83c0,0.12,0.03,0.17,0.15,0.2
                                    c0.42,0.1,0.84,0.21,1.25,0.33c0.08,0.02,0.14,0.02,0.21-0.01c0.26-0.11,0.52-0.22,0.78-0.33c0.11-0.05,0.22-0.07,0.33,0.02
                                    c0.09,0.08,0.09,0.19,0.06,0.31c-0.08,0.35-0.08,0.36,0.28,0.45c1.66,0.44,3.31,0.88,4.97,1.32c0.14,0.04,0.19,0.01,0.24-0.12
                                    c0.59-1.46,1.19-2.91,1.8-4.36c0.05-0.12,0.03-0.15-0.09-0.18c-0.38-0.09-0.76-0.2-1.14-0.3c-0.14-0.04-0.25-0.11-0.24-0.27
                                    c0.01-0.18,0.16-0.27,0.37-0.21c0.34,0.09,0.68,0.18,1.03,0.27c0.14,0.04,0.29,0.08,0.43,0.12c0.28,0.08,0.34,0.19,0.23,0.46
                                    c-0.66,1.6-1.32,3.19-1.97,4.79c-0.18,0.44-0.18,0.44-0.65,0.32c-1.76-0.47-3.52-0.93-5.27-1.4c-0.11-0.03-0.17-0.03-0.19,0.11
                                    c-0.03,0.18-0.07,0.36-0.12,0.53c-0.04,0.12,0.01,0.15,0.11,0.18c1.35,0.36,2.7,0.71,4.06,1.07c0.41,0.11,0.81,0.21,1.22,0.33
                                    c0.24,0.07,0.3,0.19,0.21,0.42c-0.54,1.32-1.09,2.64-1.63,3.96c-0.04,0.09-0.1,0.16-0.17,0.21c-0.06,0-0.11,0-0.17,0
                                    c-0.19-0.15-0.2-0.21-0.11-0.44c0.49-1.19,0.98-2.38,1.47-3.56c0.05-0.13,0.05-0.18-0.1-0.22c-1.6-0.42-3.21-0.85-4.81-1.27
                                    c-0.21-0.06-0.21-0.06-0.26,0.16c-0.27,1.21-0.55,2.42-0.82,3.63c-0.03,0.13-0.07,0.24-0.21,0.27c-0.15,0.03-0.23-0.06-0.31-0.18
                                    c-0.26-0.42-0.53-0.83-0.8-1.25c-0.02-0.04-0.03-0.1-0.11-0.1c0,0.06,0,0.12,0,0.19c0,0.79,0,1.59,0,2.38
                                    c0,0.16-0.02,0.29-0.16,0.39c-0.06,0-0.11,0-0.17,0c-0.15-0.08-0.18-0.2-0.18-0.36c0-1.1,0-2.19,0-3.29
                                    c0-0.23-0.08-0.35-0.28-0.43c-0.13-0.05-0.25-0.11-0.38-0.16c-0.17-0.07-0.17-0.07-0.17,0.11c0,1.25,0,2.49,0,3.74
                                    c0,0.16-0.02,0.29-0.16,0.39C6.75,22.15,6.69,22.15,6.64,22.15z M5.71,16.74c0.05,0.06,0.11,0.07,0.16,0.09
                                    c0.62,0.26,1.24,0.53,1.87,0.78c0.17,0.07,0.3,0.17,0.4,0.33c0.36,0.57,0.72,1.14,1.09,1.71c0.03,0.05,0.05,0.11,0.12,0.14
                                    c0.38-1.68,0.76-3.35,1.14-5.05C8.87,15.42,7.3,16.08,5.71,16.74z"/>
                                <path class="st12647" d="M15.71,5.11c0.19,0.16,0.2,0.21,0.1,0.44C15.4,6.54,15,7.53,14.59,8.51c-0.06,0.15-0.02,0.18,0.11,0.22
                                    c1.42,0.37,2.83,0.74,4.24,1.12c0.12,0.03,0.17,0.01,0.22-0.11c0.29-0.71,0.58-1.42,0.88-2.13c0.04-0.11,0.09-0.2,0.22-0.23
                                    c0.14-0.03,0.22,0.06,0.3,0.16c0,0.06,0,0.11,0,0.17c-0.23,0.49-0.42,1-0.63,1.49c-0.14,0.34-0.28,0.68-0.42,1.01
                                    c-0.09,0.21-0.18,0.26-0.4,0.2c-1.63-0.43-3.26-0.86-4.88-1.29c-0.28-0.07-0.34-0.19-0.23-0.46c0.45-1.09,0.9-2.19,1.35-3.28
                                    c0.04-0.11,0.1-0.19,0.19-0.26C15.59,5.11,15.65,5.11,15.71,5.11z"/>
                                <path class="st12647" d="M8.13,5.11c0.13,0.1,0.16,0.24,0.16,0.39c-0.01,0.45,0,0.91,0,1.36c0,0.12,0.03,0.17,0.15,0.2
                                    c1.38,0.36,2.77,0.73,4.15,1.1c0.13,0.04,0.18,0,0.22-0.12c0.36-0.9,0.74-1.79,1.1-2.69c0.04-0.11,0.1-0.2,0.2-0.25
                                    c0.06,0,0.11,0,0.17,0c0.17,0.17,0.18,0.23,0.08,0.47c-0.4,0.96-0.79,1.92-1.19,2.88c-0.12,0.3-0.19,0.33-0.49,0.25
                                    C11.16,8.3,9.63,7.9,8.1,7.49C7.82,7.42,7.79,7.38,7.79,7.08c0-0.54,0-1.09,0-1.63c0-0.15,0.04-0.27,0.18-0.34
                                    C8.02,5.11,8.07,5.11,8.13,5.11z"/>
                                <path class="st12647" d="M20.56,17.62c-0.1,0.15-0.22,0.19-0.4,0.14c-0.73-0.2-1.46-0.39-2.2-0.58c-0.29-0.08-0.35-0.2-0.23-0.48
                                    c0.68-1.64,1.35-3.29,2.03-4.93c0.03-0.06,0.05-0.12,0.1-0.17c0.08-0.08,0.17-0.1,0.27-0.05c0.11,0.05,0.16,0.14,0.14,0.26
                                    c-0.01,0.07-0.04,0.14-0.07,0.2c-0.63,1.52-1.25,3.04-1.88,4.56c-0.06,0.14-0.04,0.18,0.11,0.22c0.61,0.15,1.21,0.32,1.81,0.47
                                    c0.13,0.03,0.24,0.08,0.31,0.19C20.56,17.51,20.56,17.57,20.56,17.62z"/>
                                <path class="st12647" d="M20.56,18.99c-0.12,0.18-0.19,0.21-0.4,0.15c-0.81-0.21-1.61-0.42-2.42-0.64
                                    c-0.14-0.04-0.2-0.02-0.25,0.12c-0.44,1.1-0.9,2.19-1.35,3.28c-0.04,0.11-0.1,0.2-0.2,0.25c-0.06,0-0.11,0-0.17,0
                                    c-0.17-0.16-0.19-0.22-0.1-0.45c0.49-1.19,0.98-2.37,1.47-3.56c0.09-0.23,0.19-0.27,0.43-0.21c0.91,0.24,1.81,0.48,2.72,0.72
                                    c0.12,0.03,0.21,0.09,0.27,0.2C20.56,18.9,20.56,18.94,20.56,18.99z"/>
                                <path class="st12647" d="M6.8,5.11c0.13,0.1,0.16,0.24,0.16,0.39c-0.01,0.41,0,0.82,0,1.23c0,0.33-0.12,0.42-0.43,0.34
                                    C5.63,6.84,4.73,6.6,3.83,6.36C3.8,6.35,3.77,6.34,3.74,6.33C3.59,6.28,3.52,6.15,3.56,6.02c0.04-0.13,0.17-0.2,0.32-0.17
                                    c0.38,0.1,0.76,0.2,1.14,0.3C5.44,6.27,5.87,6.38,6.3,6.5c0.12,0.03,0.17,0.02,0.16-0.12c-0.01-0.31,0-0.62,0-0.93
                                    c0-0.15,0.04-0.27,0.18-0.34C6.69,5.11,6.75,5.11,6.8,5.11z"/>
                                <path class="st12647" d="M6.95,11.09c0,0.9,0,1.8,0,2.69c0,0.36-0.11,0.44-0.46,0.35c-0.89-0.23-1.77-0.47-2.66-0.7
                                    c-0.04-0.01-0.08-0.02-0.11-0.03c-0.13-0.05-0.2-0.15-0.16-0.29c0.03-0.14,0.13-0.21,0.27-0.18c0.16,0.03,0.32,0.07,0.48,0.12
                                    c0.67,0.18,1.34,0.35,2,0.53c0.12,0.03,0.14,0,0.14-0.11c0-1.64,0-3.27,0-4.91c0-0.11-0.05-0.14-0.14-0.16
                                    C5.49,8.18,4.66,7.96,3.83,7.74C3.78,7.72,3.72,7.71,3.68,7.68c-0.1-0.06-0.15-0.15-0.12-0.27C3.59,7.3,3.67,7.23,3.8,7.23
                                    c0.06,0,0.12,0.02,0.18,0.03c0.9,0.24,1.79,0.47,2.69,0.71C6.91,8.04,6.95,8.1,6.95,8.35C6.95,9.26,6.95,10.18,6.95,11.09z"/>
                            </g>
                        </g>
                    </svg>

                    <span class="font-bebas text-white font-normal text-lg">Mzn. {{data.manzana}}</span>
                    &nbsp;
                    <svg class="w-8 h-8" fill="#00AAEF" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 27.58 24.23" style="enable-background:new 0 0 27.58 24.23;" xml:space="preserve">
                        <g id="Texto">
                            <g>
                                <path class="st12647" d="M6.31,17.88C6.64,18,6.96,18.15,7.3,18.25c0.97,0.28,1.98,0.4,2.98,0.48c1.44,0.12,2.89,0.15,4.34,0.08
                                    c1.48-0.06,2.96-0.16,4.39-0.56c0.34-0.1,0.67-0.25,1.01-0.38c0-0.04,0-0.07,0-0.11c-0.3-0.1-0.59-0.22-0.89-0.3
                                    c-0.92-0.23-1.86-0.3-2.8-0.32c-0.35-0.01-0.6-0.14-0.76-0.45c-0.16-0.33-0.13-0.65,0.08-0.94c0.15-0.21,0.36-0.32,0.61-0.31
                                    c1.2,0.03,2.4,0.11,3.56,0.47c0.33,0.1,0.65,0.24,0.94,0.42c1.17,0.72,1.2,2.14,0.08,2.93c-0.61,0.43-1.31,0.63-2.02,0.79
                                    c-1.17,0.26-2.36,0.37-3.55,0.44c-1.59,0.08-3.17,0.08-4.76-0.04c-1.31-0.1-2.62-0.23-3.88-0.64c-0.5-0.16-0.97-0.37-1.36-0.71
                                    c-0.84-0.74-0.82-1.91,0.05-2.61c0.55-0.44,1.21-0.63,1.88-0.78c0.92-0.2,1.86-0.26,2.81-0.27c0.48-0.01,0.83,0.37,0.83,0.85
                                    c0,0.48-0.35,0.84-0.82,0.85c-0.96,0.01-1.92,0.07-2.86,0.32c-0.29,0.08-0.57,0.2-0.85,0.3C6.31,17.8,6.31,17.84,6.31,17.88z"/>
                                <path class="st12647" d="M12.31,14.22c0-0.69,0-1.38,0-2.07c0-0.14-0.03-0.2-0.18-0.24c-1.88-0.47-3.2-2.14-3.23-4.07
                                    c-0.03-1.92,1.25-3.62,3.12-4.14c2.83-0.8,5.61,1.49,5.37,4.43c-0.15,1.83-1.42,3.34-3.2,3.79c-0.16,0.04-0.19,0.1-0.19,0.25
                                    c0,1.35,0,2.71,0,4.06c0,0.44-0.22,0.76-0.59,0.87c-0.54,0.17-1.09-0.21-1.1-0.78C12.3,15.62,12.31,14.92,12.31,14.22
                                    C12.31,14.22,12.31,14.22,12.31,14.22z M13.15,10.34c1.41,0,2.55-1.13,2.56-2.54c0-1.41-1.15-2.57-2.55-2.56
                                    c-1.39,0-2.54,1.14-2.55,2.53C10.6,9.19,11.73,10.33,13.15,10.34z"/>
                            </g>
                        </g>
                    </svg>
                    <span class="font-bebas text-white font-normal text-lg">Lt. {{data.num_lote}} {{(data.sublote)
                    ? 'Int. '.data.sublote:''}}</span>
                </div>
            </div>


        </div>

        <div class="flex flex-1 mr-6 transform translate-y-14">
            <button @click="openModal(imageSrc('casasInfo',data.prototipo.replace(/\s/g, '').toLowerCase()+'.webp'))"
                class="ml-auto font-bebas text-white bg-pink-600 focus:outline-none font-extralight rounded-2xl text-base px-9 -py-1/2 text-center">
                +&nbsp;&nbsp;&nbsp;Info</button>
        </div>
    </div>

</template>

<script>
import { defineAsyncComponent, ref } from 'vue'
import RulerSquareIcon from 'vue-material-design-icons/RulerSquare.vue';
import CropSquareIcon from 'vue-material-design-icons/CropSquare.vue';
import MapSearchIcon from 'vue-material-design-icons/MapSearch.vue';
import MapMarkerRadiusIcon from 'vue-material-design-icons/MapMarkerRadius.vue';
import { formatNumber } from '../composables/helpers';

export default {
    props: {
        data: Object
    },
    emits: ['open-modal'],
    components: {
        NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
        Title: defineAsyncComponent(() => import('../components/TitleCardComponent.vue')),
        RulerSquareIcon,
        CropSquareIcon,
        MapSearchIcon,
        MapMarkerRadiusIcon
    },
    setup({ data }, { emit }) {

        const imageSrc = (path, image) => {
            return new URL(`../assets/${path}/${image}`, import.meta.url).href
        }


        return {
            imageSrc,
            formatNumber,
            openModal: (image) => {
                emit('open-modal', image);
            }

        }

    },
}
</script>


