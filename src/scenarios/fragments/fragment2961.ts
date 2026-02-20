import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2959 } from "./fragment2959";
import type { FragmentToken2960 } from "./fragment2960";

export const FRAGMENT_2961 = gql(`
  fragment Fragment2961 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult2961 = ResultOf<typeof FRAGMENT_2961>;
type FragmentSelf2961 = NonNullable<FragmentResult2961>;

export type FragmentToken2961 =
  | FragmentSelf2961["__typename"]
  | FragmentSelf2961["typenameHint"] | FragmentToken2959 | FragmentToken2960;
