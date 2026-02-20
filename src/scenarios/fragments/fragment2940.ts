import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2938 } from "./fragment2938";
import type { FragmentToken2939 } from "./fragment2939";

export const FRAGMENT_2940 = gql(`
  fragment Fragment2940 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult2940 = ResultOf<typeof FRAGMENT_2940>;
type FragmentSelf2940 = NonNullable<FragmentResult2940>;

export type FragmentToken2940 =
  | FragmentSelf2940["__typename"]
  | FragmentSelf2940["typenameHint"] | FragmentToken2938 | FragmentToken2939;
