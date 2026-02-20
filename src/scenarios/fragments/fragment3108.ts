import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3106 } from "./fragment3106";
import type { FragmentToken3107 } from "./fragment3107";

export const FRAGMENT_3108 = gql(`
  fragment Fragment3108 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult3108 = ResultOf<typeof FRAGMENT_3108>;
type FragmentSelf3108 = NonNullable<FragmentResult3108>;

export type FragmentToken3108 =
  | FragmentSelf3108["__typename"]
  | FragmentSelf3108["typenameHint"] | FragmentToken3106 | FragmentToken3107;
