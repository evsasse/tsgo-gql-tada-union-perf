import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3374 } from "./fragment3374";
import type { FragmentToken3375 } from "./fragment3375";

export const FRAGMENT_3376 = gql(`
  fragment Fragment3376 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult3376 = ResultOf<typeof FRAGMENT_3376>;
type FragmentSelf3376 = NonNullable<FragmentResult3376>;

export type FragmentToken3376 =
  | FragmentSelf3376["__typename"]
  | FragmentSelf3376["typenameHint"] | FragmentToken3374 | FragmentToken3375;
