import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3067 } from "./fragment3067";
import type { FragmentToken3068 } from "./fragment3068";

export const FRAGMENT_3069 = gql(`
  fragment Fragment3069 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult3069 = ResultOf<typeof FRAGMENT_3069>;
type FragmentSelf3069 = NonNullable<FragmentResult3069>;

export type FragmentToken3069 =
  | FragmentSelf3069["__typename"]
  | FragmentSelf3069["typenameHint"] | FragmentToken3067 | FragmentToken3068;
