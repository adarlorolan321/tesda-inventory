<?php

namespace Innsite19\CrudGenerator\App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;

class GenerateCrud extends Command
{

    protected $signature = 'crud:generate';
    protected $descripton = 'Innsite19 Crud Generator';
    protected $files;
    public function __construct(Filesystem $files)
    {
        parent::__construct();
        $this->files = $files;
    }

    public function handle()
    {
        $model = $this->inputModel();
        $this->createModelStub($model);
        $this->createRequestStub($model);
        dd($model);
        $columns = $this->inputColumn();
    }

    public function inputColumn()
    {
        $columns = [];
        $initColumn = $this->ask('Enter new column (press enter to finish)');

        while (!empty($initColumn)) {

            $type = $this->ask('Enter column type');
            while (empty($type)) {
                $this->info("Column type is required!");
                $type = $this->ask('Enter column type');
            }
            $modifiers = [];
            $modifier = $this->ask('Enter column modifier (press enter to finish)');
            while (!empty($modifier)) {
                $newModifier = [
                    'modifier' => $modifier,
                    'value' => null
                ];
                if (!empty($modifier)) {
                    $newModifier['value'] = $this->ask('Enter column modifier value');
                }
                $modifier = $this->ask('Enter column modifier (press enter to finish)');
                $modifiers[] = $newModifier;
            }

            $modifierString = '';

            foreach ($modifiers as $mod) {
                $modifierString .= '->' . $mod['modifier'] . '(' . (!empty($mod['value']) ? "'" . $mod['value'] . "'" : '') . ')';
            }

            $columns[] = '$table->' . $type . "('" . $initColumn . "')" . $modifierString . ';';

            $initColumn = $this->ask("Enter new column (press enter to finish):");
        }
        return $columns;
    }


    public function inputModel()
    {
        $model = Str::studly(Str::singular($this->ask('Enter model name (press enter to finish)')));
        while (empty($model)) {
            $this->info("Model is required!");
            $model = $this->ask('Enter model name (press enter to finish)');
        }
        $folder = "";
        $askFolder =  $this->ask('Enter model folder name: (press enter to finish)');
        if (!empty($askFolder)) {
            $folder = Str::studly(Str::title(Str::singular($askFolder)));
        }

        return [
            'rawModel' => $model,
            'modelClass' => $model,
            'model' => (!empty($folder) ? $folder . '\\' : '') . $model,
            'modelNamespace' => 'App\Models\\' . (!empty($folder) ? $folder : ''),

            'singular_model' => Str::snake(Str::singular($model)),
            'controller' => 'Api\\V1\\' . (!empty($folder) ? $folder . '\\' : '') . $model . 'Controller',
            'resources' => [
                (!empty($folder) ? $folder . '\\' : '') . $model . 'ListResource'
            ],
            'requests' => [
                (!empty($folder) ? $folder . '\\' : '') . 'Store' . $model . 'Request',
                (!empty($folder) ? $folder . '\\' : '') . 'Update' . $model . 'Request',
            ],
            'requestNamespace' => 'App\\Http\\Requests\\' . (!empty($folder) ? $folder : ''),

            'table' => Str::snake(Str::pluralStudly($model)),
            'folder' => !empty($folder) ?  $folder : '',
        ];
    }

    public function getStub($type)
    {
        $base_path = base_path('packages\innsite19\crud-generator\src\App\Console\Commands\stubs\\' . $type . '.stub');
        return file_get_contents($base_path);
    }

    public function createModelStub($model)
    {
        $stub = $this->getStub('model');

        $modelTemplate = str_replace(
            [
                "{{ class }}",
                "{{ namespace }}"
            ],
            [
                $model['modelClass'],
                $model['modelNamespace']
            ],
            $stub
        );

        $path = app_path('\Models\\' . $model['folder']);

        if (!$this->files->isDirectory($path)) {
            $this->files->makeDirectory($path, 0777, true, true);
        }

        file_put_contents($path . '\\' . $model['modelClass'] . '.php', $modelTemplate);
    }

    public function createRequestStub($model)
    {
        $stub = $this->getStub('request');

        $storeStubTemplate = str_replace(
            [
                "{{ class }}",
                "{{ namespace }}",
                "{{ permission }}",
            ],
            [
                $model['modelClass'],
                $model['requestNamespace'],
                'store ' . $model['singular_model']
            ],
            $stub
        );

        $updateStubTemplate = str_replace(
            [
                "{{ class }}",
                "{{ namespace }}",
                "{{ permission }}",
            ],
            [
                $model['modelClass'],
                $model['requestNamespace'],
                'update ' . $model['singular_model']
            ],
            $stub
        );

        $path = app_path('\Http\\Requests\\' . $model['folder']);

        if (!$this->files->isDirectory($path)) {
            $this->files->makeDirectory($path, 0777, true, true);
        }

        file_put_contents($path . '\\Store' . $model['modelClass'] . 'Request.php', $storeStubTemplate);
        file_put_contents($path . '\\Update' . $model['modelClass'] . 'Request.php', $updateStubTemplate);
    }
}
