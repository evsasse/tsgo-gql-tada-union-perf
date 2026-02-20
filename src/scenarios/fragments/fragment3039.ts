import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3037 } from "./fragment3037";
import type { FragmentToken3038 } from "./fragment3038";

export const FRAGMENT_3039 = gql(`
  fragment Fragment3039 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult3039 = ResultOf<typeof FRAGMENT_3039>;
type FragmentSelf3039 = NonNullable<FragmentResult3039>;

export type FragmentToken3039 =
  | FragmentSelf3039["__typename"]
  | FragmentSelf3039["typenameHint"] | FragmentToken3037 | FragmentToken3038;
