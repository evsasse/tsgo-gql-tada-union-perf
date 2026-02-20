import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3135 } from "./fragment3135";
import type { FragmentToken3136 } from "./fragment3136";

export const FRAGMENT_3137 = gql(`
  fragment Fragment3137 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult3137 = ResultOf<typeof FRAGMENT_3137>;
type FragmentSelf3137 = NonNullable<FragmentResult3137>;

export type FragmentToken3137 =
  | FragmentSelf3137["__typename"]
  | FragmentSelf3137["typenameHint"] | FragmentToken3135 | FragmentToken3136;
