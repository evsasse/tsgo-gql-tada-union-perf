import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3010 } from "./fragment3010";
import type { FragmentToken3011 } from "./fragment3011";

export const FRAGMENT_3012 = gql(`
  fragment Fragment3012 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult3012 = ResultOf<typeof FRAGMENT_3012>;
type FragmentSelf3012 = NonNullable<FragmentResult3012>;

export type FragmentToken3012 =
  | FragmentSelf3012["__typename"]
  | FragmentSelf3012["typenameHint"] | FragmentToken3010 | FragmentToken3011;
