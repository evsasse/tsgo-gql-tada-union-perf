import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3990 } from "./fragment3990";
import type { FragmentToken3991 } from "./fragment3991";

export const FRAGMENT_3992 = gql(`
  fragment Fragment3992 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult3992 = ResultOf<typeof FRAGMENT_3992>;
type FragmentSelf3992 = NonNullable<FragmentResult3992>;

export type FragmentToken3992 =
  | FragmentSelf3992["__typename"]
  | FragmentSelf3992["typenameHint"] | FragmentToken3990 | FragmentToken3991;
