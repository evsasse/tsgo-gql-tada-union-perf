import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2154 } from "./fragment2154";
import type { FragmentToken2155 } from "./fragment2155";

export const FRAGMENT_2156 = gql(`
  fragment Fragment2156 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult2156 = ResultOf<typeof FRAGMENT_2156>;
type FragmentSelf2156 = NonNullable<FragmentResult2156>;

export type FragmentToken2156 =
  | FragmentSelf2156["__typename"]
  | FragmentSelf2156["typenameHint"] | FragmentToken2154 | FragmentToken2155;
