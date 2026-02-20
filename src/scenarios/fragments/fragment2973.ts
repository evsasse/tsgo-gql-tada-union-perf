import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2971 } from "./fragment2971";
import type { FragmentToken2972 } from "./fragment2972";

export const FRAGMENT_2973 = gql(`
  fragment Fragment2973 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult2973 = ResultOf<typeof FRAGMENT_2973>;
type FragmentSelf2973 = NonNullable<FragmentResult2973>;

export type FragmentToken2973 =
  | FragmentSelf2973["__typename"]
  | FragmentSelf2973["typenameHint"] | FragmentToken2971 | FragmentToken2972;
