package com.counter_redux.native_comp;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nonnull;

public class RNGradientViewManager extends SimpleViewManager<RNGradientDrawable> {
    @Nonnull
    @Override
    public String getName() {
        return "RNGradientView";
    }

    @Nonnull
    @Override
    protected RNGradientDrawable createViewInstance(@Nonnull ThemedReactContext reactContext) {
        return new RNGradientDrawable(reactContext);
    }

    //prop

    @ReactProp(name = "fromColor", customType = "Color")
    public void setFromColor(RNGradientDrawable view, int fromColor){
        view.setFromColor(fromColor);
    }

    @ReactProp(name = "toColor", customType = "Color")
    public void setToColor(RNGradientDrawable view, int toColor){
        view.setToColor(toColor);
    }

    @ReactProp(name = "cornerRadius")
    public void setCornerRadius(RNGradientDrawable view, float cornerRadius){
        view.setCornerRadius(cornerRadius);
    }

    @ReactProp(name = "gradientType")
    public void setGradientType(RNGradientDrawable view, int gradientType){
        view.setGradientType(gradientType);
    }

    @ReactProp(name = "gradientShape")
    public void setGradientShape(RNGradientDrawable view, int gradientShape){
        view.setGradientShape(gradientShape);
    }

    @ReactProp(name = "text")
    public void setText(RNGradientDrawable view, String text){
        view.setText(text);
    }
}
