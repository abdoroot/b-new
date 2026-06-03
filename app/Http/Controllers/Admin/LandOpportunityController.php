<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Area;
use App\Models\LandOpportunity;
use App\Models\LandUse;
use App\Models\OwnershipType;
use App\Models\PriceRange;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class LandOpportunityController extends Controller
{
    public function index(Request $request)
    {
        $query = LandOpportunity::query()
            ->with(['area', 'landUse', 'ownershipType', 'priceRange'])
            ->latest('published_at');

        if ($request->filled('search')) {
            $query->where('title_en', 'like', '%' . $request->search . '%');
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('featured')) {
            $query->where('is_featured', $request->featured === '1');
        }

        if ($request->filled('area_id')) {
            $query->where('area_id', $request->area_id);
        }

        return Inertia::render('Admin/Opportunities/Index', [
            'opportunities' => $query->paginate(15)->withQueryString(),
            'filters' => $request->only(['search', 'status', 'featured', 'area_id']),
            'areas' => Area::orderBy('name_en')->get(['id', 'name_en']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Opportunities/Create', $this->getFormData());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title_en' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:land_opportunities,slug',
            'area_id' => 'nullable|exists:areas,id',
            'land_use_id' => 'nullable|exists:land_uses,id',
            'ownership_type_id' => 'nullable|exists:ownership_types,id',
            'price_range_id' => 'nullable|exists:price_ranges,id',
            'location_en' => 'nullable|string|max:255',
            'short_description_en' => 'nullable|string',
            'investment_insight_en' => 'nullable|string',
            'area_growth_trigger_en' => 'nullable|string',
            'is_featured' => 'boolean',
            'status' => ['required', Rule::in(['draft', 'published', 'archived'])],
            'sort_order' => 'integer',
            'published_at' => 'nullable|date',
        ]);

        LandOpportunity::create($validated);

        return redirect()->route('admin.opportunities.index')
            ->with('success', __('messages.opportunity_created'));
    }

    public function edit(LandOpportunity $opportunity)
    {
        return Inertia::render('Admin/Opportunities/Edit', array_merge(
            $this->getFormData(),
            ['opportunity' => $opportunity]
        ));
    }

    public function update(Request $request, LandOpportunity $opportunity)
    {
        $validated = $request->validate([
            'title_en' => 'required|string|max:255',
            'slug' => ['required', 'string', 'max:255', Rule::unique('land_opportunities', 'slug')->ignore($opportunity->id)],
            'area_id' => 'nullable|exists:areas,id',
            'land_use_id' => 'nullable|exists:land_uses,id',
            'ownership_type_id' => 'nullable|exists:ownership_types,id',
            'price_range_id' => 'nullable|exists:price_ranges,id',
            'location_en' => 'nullable|string|max:255',
            'short_description_en' => 'nullable|string',
            'investment_insight_en' => 'nullable|string',
            'area_growth_trigger_en' => 'nullable|string',
            'is_featured' => 'boolean',
            'status' => ['required', Rule::in(['draft', 'published', 'archived'])],
            'sort_order' => 'integer',
            'published_at' => 'nullable|date',
        ]);

        $opportunity->update($validated);

        return redirect()->route('admin.opportunities.index')
            ->with('success', __('messages.opportunity_updated'));
    }

    public function destroy(LandOpportunity $opportunity)
    {
        $opportunity->delete();

        return redirect()->route('admin.opportunities.index')
            ->with('success', __('messages.opportunity_deleted'));
    }

    protected function getFormData()
    {
        return [
            'areas' => Area::orderBy('name_en')->get(['id', 'name_en']),
            'landUses' => LandUse::orderBy('name_en')->get(['id', 'name_en']),
            'ownershipTypes' => OwnershipType::orderBy('name_en')->get(['id', 'name_en']),
            'priceRanges' => PriceRange::orderBy('sort_order')->get(['id', 'label_en']),
        ];
    }
}
