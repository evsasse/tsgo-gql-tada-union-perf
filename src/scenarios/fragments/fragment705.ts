import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken703 } from "./fragment703";
import type { FragmentToken704 } from "./fragment704";

export const FRAGMENT_705 = gql(`
  fragment Fragment705 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult705 = ResultOf<typeof FRAGMENT_705>;
type FragmentSelf705 = NonNullable<FragmentResult705>;

export type FragmentToken705 =
  | FragmentSelf705["__typename"]
  | FragmentSelf705["typenameHint"] | FragmentToken703 | FragmentToken704;
