import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken514 } from "./fragment514";
import type { FragmentToken515 } from "./fragment515";

export const FRAGMENT_516 = gql(`
  fragment Fragment516 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult516 = ResultOf<typeof FRAGMENT_516>;
type FragmentSelf516 = NonNullable<FragmentResult516>;

export type FragmentToken516 =
  | FragmentSelf516["__typename"]
  | FragmentSelf516["typenameHint"] | FragmentToken514 | FragmentToken515;
