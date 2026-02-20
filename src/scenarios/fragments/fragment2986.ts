import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2984 } from "./fragment2984";
import type { FragmentToken2985 } from "./fragment2985";

export const FRAGMENT_2986 = gql(`
  fragment Fragment2986 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult2986 = ResultOf<typeof FRAGMENT_2986>;
type FragmentSelf2986 = NonNullable<FragmentResult2986>;

export type FragmentToken2986 =
  | FragmentSelf2986["__typename"]
  | FragmentSelf2986["typenameHint"] | FragmentToken2984 | FragmentToken2985;
