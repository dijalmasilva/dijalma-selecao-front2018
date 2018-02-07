# DijalmaSelecaoFront2018

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

##Answers to questions

1. Qual a diferença entre AOT(Ahead-of-time) e JIT(Just-in-time)?

*   No JIT o código é compilado durante a execução e no AOT o mesmo é compilado antes da execução.

2. Defina os Lifecycle Hooks e as suas responsabilidades.

*  LifeCycle Hooks são métodos que são acionados atráves de eventos quando chegam em determinada fase do ciclo de vida do Angular. As etapas do ciclo são: criar, atualizar e destruir. Depois de criar um componente ou diretiva ao chamar seu construtor, Angular chama seus métodos ngOnChanges(), ngOnInit(), ngDoCheck(), ngAfterContentInit(), ngAfterContentChecked(), ngAfterViewInit(), ngAfterViewChecked(), ngOnDestroy().

* ngOnChanges() - é chamado quando um valor 'property-binding' é atualizado e também após o método ngOnInit();
* ngOnInit() - chamado apenas uma vez quando o Componente/Diretiva é iniciado;
* ngDoCheck() - a cada ciclo de verificação de mudanças, sendo imediato depois do ngOnChanges() e do ngOnInit();
* ngAfterContentInit() -> Método disponível apenas para Componente - depois de ser inserido conteúdo externo na view, mais precisamente, ele é chamado uma vez depois do ngDoCheck();
* ngAfterContentChecked() -> Método disponível apenas para Componente - a cada verificação do conteúdo inserido, após o ngAfterContentInit() e sempre a cada ngDoCheck();
* ngAfterViewInit() -> Método disponível apenas para Componente - depois do Angular inicializar as views dos componentes e views filhas, sendo após a primeira chamada do ngAfterContentChecked();
* ngAfterViewChecked() -> Método disponível apenas para Componente - após a cada verificação de conteúdo da view e views filhas, sempre depois de cada chamada do ngAfterContentChecked();
* ngOnDestroy() - um pouco antes da diretiva ou componente ser destruído, cancelando observadores e manipuladores de eventos para evitar estouro de memória.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Developer

Manoel Dijalma da Silva Filho - https://dijalmasilva.github.io
