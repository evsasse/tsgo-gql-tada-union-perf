import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3895 } from "./fragment3895";
import type { FragmentToken3896 } from "./fragment3896";

export const FRAGMENT_3897 = gql(`
  fragment Fragment3897 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult3897 = ResultOf<typeof FRAGMENT_3897>;
type FragmentSelf3897 = NonNullable<FragmentResult3897>;

export type FragmentToken3897 =
  | FragmentSelf3897["__typename"]
  | FragmentSelf3897["typenameHint"] | FragmentToken3895 | FragmentToken3896;
