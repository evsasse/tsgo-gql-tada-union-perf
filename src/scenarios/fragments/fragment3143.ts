import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3141 } from "./fragment3141";
import type { FragmentToken3142 } from "./fragment3142";

export const FRAGMENT_3143 = gql(`
  fragment Fragment3143 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult3143 = ResultOf<typeof FRAGMENT_3143>;
type FragmentSelf3143 = NonNullable<FragmentResult3143>;

export type FragmentToken3143 =
  | FragmentSelf3143["__typename"]
  | FragmentSelf3143["typenameHint"] | FragmentToken3141 | FragmentToken3142;
