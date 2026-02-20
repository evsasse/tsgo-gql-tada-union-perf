import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3509 } from "./fragment3509";
import type { FragmentToken3510 } from "./fragment3510";

export const FRAGMENT_3511 = gql(`
  fragment Fragment3511 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult3511 = ResultOf<typeof FRAGMENT_3511>;
type FragmentSelf3511 = NonNullable<FragmentResult3511>;

export type FragmentToken3511 =
  | FragmentSelf3511["__typename"]
  | FragmentSelf3511["typenameHint"] | FragmentToken3509 | FragmentToken3510;
