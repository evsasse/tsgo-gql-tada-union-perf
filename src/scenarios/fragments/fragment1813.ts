import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1811 } from "./fragment1811";
import type { FragmentToken1812 } from "./fragment1812";

export const FRAGMENT_1813 = gql(`
  fragment Fragment1813 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult1813 = ResultOf<typeof FRAGMENT_1813>;
type FragmentSelf1813 = NonNullable<FragmentResult1813>;

export type FragmentToken1813 =
  | FragmentSelf1813["__typename"]
  | FragmentSelf1813["typenameHint"] | FragmentToken1811 | FragmentToken1812;
