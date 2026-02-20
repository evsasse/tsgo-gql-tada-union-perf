import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3601 } from "./fragment3601";
import type { FragmentToken3602 } from "./fragment3602";

export const FRAGMENT_3603 = gql(`
  fragment Fragment3603 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult3603 = ResultOf<typeof FRAGMENT_3603>;
type FragmentSelf3603 = NonNullable<FragmentResult3603>;

export type FragmentToken3603 =
  | FragmentSelf3603["__typename"]
  | FragmentSelf3603["typenameHint"] | FragmentToken3601 | FragmentToken3602;
