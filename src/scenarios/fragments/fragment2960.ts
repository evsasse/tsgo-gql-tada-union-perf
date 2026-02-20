import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2958 } from "./fragment2958";
import type { FragmentToken2959 } from "./fragment2959";

export const FRAGMENT_2960 = gql(`
  fragment Fragment2960 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult2960 = ResultOf<typeof FRAGMENT_2960>;
type FragmentSelf2960 = NonNullable<FragmentResult2960>;

export type FragmentToken2960 =
  | FragmentSelf2960["__typename"]
  | FragmentSelf2960["typenameHint"] | FragmentToken2958 | FragmentToken2959;
