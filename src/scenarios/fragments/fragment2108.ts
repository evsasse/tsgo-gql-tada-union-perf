import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2106 } from "./fragment2106";
import type { FragmentToken2107 } from "./fragment2107";

export const FRAGMENT_2108 = gql(`
  fragment Fragment2108 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult2108 = ResultOf<typeof FRAGMENT_2108>;
type FragmentSelf2108 = NonNullable<FragmentResult2108>;

export type FragmentToken2108 =
  | FragmentSelf2108["__typename"]
  | FragmentSelf2108["typenameHint"] | FragmentToken2106 | FragmentToken2107;
