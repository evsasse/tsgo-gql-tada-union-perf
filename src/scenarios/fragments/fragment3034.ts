import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3032 } from "./fragment3032";
import type { FragmentToken3033 } from "./fragment3033";

export const FRAGMENT_3034 = gql(`
  fragment Fragment3034 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult3034 = ResultOf<typeof FRAGMENT_3034>;
type FragmentSelf3034 = NonNullable<FragmentResult3034>;

export type FragmentToken3034 =
  | FragmentSelf3034["__typename"]
  | FragmentSelf3034["typenameHint"] | FragmentToken3032 | FragmentToken3033;
