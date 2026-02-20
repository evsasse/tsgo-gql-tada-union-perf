import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken115 } from "./fragment115";
import type { FragmentToken116 } from "./fragment116";

export const FRAGMENT_117 = gql(`
  fragment Fragment117 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult117 = ResultOf<typeof FRAGMENT_117>;
type FragmentSelf117 = NonNullable<FragmentResult117>;

export type FragmentToken117 =
  | FragmentSelf117["__typename"]
  | FragmentSelf117["typenameHint"] | FragmentToken115 | FragmentToken116;
