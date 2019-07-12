package com.counter_redux.native_comp;

import android.content.Context;
import android.graphics.drawable.GradientDrawable;
import android.support.annotation.Nullable;
import android.support.v4.content.ContextCompat;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.ViewGroup;

import com.counter_redux.R;


public class RNGradientDrawable extends android.support.v7.widget.AppCompatTextView {

    private int fromColor;
    private int toColor;
    private float cornerRadius;
    private int gradientType = GradientDrawable.LINEAR_GRADIENT;
    private int gradientShape = GradientDrawable.RECTANGLE;
    private String text;

    public RNGradientDrawable(Context context) {
        super(context);
    }

    public RNGradientDrawable(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public RNGradientDrawable(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    private void update() {

        GradientDrawable gradient = new GradientDrawable();

        gradient.setColors(new int[]{
                this.fromColor,
                this.toColor
        });

        gradient.setOrientation(GradientDrawable.Orientation.LEFT_RIGHT);
        gradient.setGradientType(gradientType);
        gradient.setShape(gradientShape);
        gradient.setCornerRadius(cornerRadius * 4);

//        ScaleDrawable scale = new ScaleDrawable(gradient, Gravity.LEFT, 1, -1);
//        scale.setLevel((int)(this.progress * 10000));
        this.setBackground(gradient);
        this.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
        this.setText(TextUtils.isEmpty(text) ? "" : text);
        this.setTextColor(ContextCompat.getColor(getContext(), R.color.catalyst_redbox_background));

    }

    //Getter and Setter

    public void setFromColor(int fromColor) {
        this.fromColor = fromColor;
        update();
    }

    public void setToColor(int toColor) {
        this.toColor = toColor;
        update();
    }

    public void setCornerRadius(float cornerRadius) {
        this.cornerRadius = cornerRadius;
        update();
    }

    /**
     * @param gradientType should be one of
     *                     {@link GradientDrawable#LINEAR_GRADIENT}
     *                     {@link GradientDrawable#RADIAL_GRADIENT}
     *                     {@link GradientDrawable#SWEEP_GRADIENT}
     */
    public void setGradientType(int gradientType) {
        if (gradientType >= GradientDrawable.LINEAR_GRADIENT && gradientType <= GradientDrawable.SWEEP_GRADIENT) {
            this.gradientType = gradientType;
        }
        update();
    }

    /**
     * @param gradientShape should be one of
     *                      {@link GradientDrawable#RECTANGLE}
     *                      {@link GradientDrawable#OVAL}
     *                      {@link GradientDrawable#LINE}
     *                      {@link GradientDrawable#RING}
     */
    public void setGradientShape(int gradientShape) {
        if (gradientType >= GradientDrawable.RECTANGLE && gradientType <= GradientDrawable.RING) {
            this.gradientShape = gradientShape;
        }
        update();
    }

    public void setText(String text) {
        this.text = text;
        update();
    }


}
