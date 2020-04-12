import React from 'react';
import renderer from 'react-test-renderer';

import Icon from '../Icon';

describe('Radio.List 快照测试', () => {
    it('renders correctly basic', () => {
        const tree = renderer.create(
            <Icon type={Icon.heart} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with size="xl"', () => {
        const tree = renderer.create(
            <Icon type={Icon.heart} size="xl" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with color="#ff571a"', () => {
        const tree = renderer.create(
            <Icon type={Icon.heart} color="#0000ff" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});