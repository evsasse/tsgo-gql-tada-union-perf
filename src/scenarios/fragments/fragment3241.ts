import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3239 } from "./fragment3239";
import type { FragmentToken3240 } from "./fragment3240";

export const FRAGMENT_3241 = gql(`
  fragment Fragment3241 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult3241 = ResultOf<typeof FRAGMENT_3241>;
type FragmentSelf3241 = NonNullable<FragmentResult3241>;

export type FragmentToken3241 =
  | FragmentSelf3241["__typename"]
  | FragmentSelf3241["typenameHint"] | FragmentToken3239 | FragmentToken3240;
