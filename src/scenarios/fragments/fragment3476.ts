import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3474 } from "./fragment3474";
import type { FragmentToken3475 } from "./fragment3475";

export const FRAGMENT_3476 = gql(`
  fragment Fragment3476 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult3476 = ResultOf<typeof FRAGMENT_3476>;
type FragmentSelf3476 = NonNullable<FragmentResult3476>;

export type FragmentToken3476 =
  | FragmentSelf3476["__typename"]
  | FragmentSelf3476["typenameHint"] | FragmentToken3474 | FragmentToken3475;
