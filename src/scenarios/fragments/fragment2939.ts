import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2937 } from "./fragment2937";
import type { FragmentToken2938 } from "./fragment2938";

export const FRAGMENT_2939 = gql(`
  fragment Fragment2939 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult2939 = ResultOf<typeof FRAGMENT_2939>;
type FragmentSelf2939 = NonNullable<FragmentResult2939>;

export type FragmentToken2939 =
  | FragmentSelf2939["__typename"]
  | FragmentSelf2939["typenameHint"] | FragmentToken2937 | FragmentToken2938;
