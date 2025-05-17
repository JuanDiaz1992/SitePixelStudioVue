<template>
    <section>
        <div id="app" class="container my-5">
            <h2 class="text-center mb-3">Completa el siguiente formulario</h2>

            <!-- Paso 1 -->
            <div v-if="step === 1">
                <h3 style="font-size: 20px;">Paso 1: Datos Personales</h3>
                <input v-model="form.name" type="text" class="form-control mb-2" placeholder="Nombre" required>
                <input v-model="form.email" type="email" class="form-control mb-2" placeholder="Email" required>
                <button class="btn btn-primary" @click="nextStep">Siguiente</button>
            </div>

            <!-- Paso 2 -->
            <div v-if="step === 2">
                <h3 style="font-size: 20px;">Paso 2: Dirección y Datos</h3>
                <input v-model="form.address" type="text" class="form-control mb-2" placeholder="Dirección" required>
                <select v-model="form.city" class="form-control mb-2" required>
                    <option value="">Seleccione su ciudad</option>
                    <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                </select>

                <div class="mb-2">
                    <label class="form-label d-block">Tipo de servicio:</label>
                    <div class="form-check form-check-inline">
                        <input v-model="form.tipo" class="form-check-input" type="radio" value="Web" id="web">
                        <label class="form-check-label" for="web">Web</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input v-model="form.tipo" class="form-check-input" type="radio" value="Movil" id="Movil">
                        <label class="form-check-label" for="Movil">App Móvil</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input v-model="form.tipo" class="form-check-input" type="radio" value="Otro" id="genderOther">
                        <label class="form-check-label" for="genderOther">Otro</label>
                    </div>
                </div>

                <div class="d-flex justify-content-start gap-3">
                    <button class="btn btn-secondary" @click="prevStep">Atrás</button>
                    <button class="btn btn-primary" @click="nextStep">Siguiente</button>
                </div>
            </div>

            <!-- Paso 3 -->
            <div v-if="step === 3">
                <h3 style="font-size: 20px;">Paso 3: Qué buscas</h3>
                <div class="mb-3">
                    <label class="form-label d-block">¿Quieres crear un sitio nuevo?</label>
                    <div class="form-check form-check-inline">
                        <input v-model="form.sitionuevo" class="form-check-input" type="radio" value="Sí"
                            id="sitionuevoSi">
                        <label class="form-check-label" for="sitionuevoSi">Sí</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input v-model="form.sitionuevo" class="form-check-input" type="radio" value="No"
                            id="sitionuevoNo">
                        <label class="form-check-label" for="sitionuevoNo">No</label>
                    </div>
                </div>

                <label class="form-label d-block">¿Por dónde nos encontró?</label>
                <div v-for="red in ['Facebook', 'Instagram', 'Google', 'Tiktok']" :key="red" class="form-check">
                    <input v-model="form.redes" class="form-check-input" type="checkbox" :value="red">
                    <label class="form-check-label">{{ red }}</label>
                </div>

                <div class="d-flex justify-content-start gap-3 mt-3">
                    <button class="btn btn-secondary" @click="prevStep">Atrás</button>
                    <button class="btn btn-success" @click="submitForm">Enviar</button>
                </div>
            </div>

            <!-- Paso 4 -->
            <div v-if="step === 4" class="mt-5">
                <h2 class="text-center mb-4">Resumen de Registro</h2>
                <p><strong>Nombre:</strong> {{ form.name }}</p>
                <p><strong>Email:</strong> {{ form.email }}</p>
                <p><strong>Dirección:</strong> {{ form.address }}</p>
                <p><strong>Ciudad:</strong> {{ form.city }}</p>
                <p><strong>Tipo Servicio:</strong> {{ form.tipo }}</p>
                <p><strong>¿Ya hay un proyecto existente?:</strong> {{ form.sitionuevo }}</p>
                <p><strong>¿Por dónde nos encontró?:</strong> {{ form.redes.join(', ') }}</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'FormSteps',
    data() {
        return {
            step: 1,
            form: {
                name: '', email: '', address: '',
                city: '', tipo: '', sitionuevo: '',
                redes: []
            },
            cities: [
                'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena',
                'Cúcuta', 'Bucaramanga', 'Pereira', 'Santa Marta', 'Ibagué',
                'Manizales', 'Villavicencio', 'Neiva', 'Pasto', 'Montería',
                'Armenia', 'Sincelejo', 'Popayán', 'Valledupar', 'Tunja'
            ]
        };
    },
    methods: {
        nextStep() { if (this.validateStep()) this.step++; else alert('Completa los campos.'); },
        prevStep() { this.step--; },
        validateStep() {
            if (this.step === 1) return this.form.name && this.form.email;
            if (this.step === 2) return this.form.address && this.form.city && this.form.tipo;
            if (this.step === 3) return this.form.sitionuevo && this.form.redes.length > 0;
            return true;
        },
        submitForm() { this.step = 4; }
    }
}
</script>