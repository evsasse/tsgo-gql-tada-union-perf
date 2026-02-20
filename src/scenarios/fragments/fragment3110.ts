import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3108 } from "./fragment3108";
import type { FragmentToken3109 } from "./fragment3109";

export const FRAGMENT_3110 = gql(`
  fragment Fragment3110 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult3110 = ResultOf<typeof FRAGMENT_3110>;
type FragmentSelf3110 = NonNullable<FragmentResult3110>;

export type FragmentToken3110 =
  | FragmentSelf3110["__typename"]
  | FragmentSelf3110["typenameHint"] | FragmentToken3108 | FragmentToken3109;
