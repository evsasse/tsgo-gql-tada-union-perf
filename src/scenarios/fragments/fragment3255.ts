import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3253 } from "./fragment3253";
import type { FragmentToken3254 } from "./fragment3254";

export const FRAGMENT_3255 = gql(`
  fragment Fragment3255 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult3255 = ResultOf<typeof FRAGMENT_3255>;
type FragmentSelf3255 = NonNullable<FragmentResult3255>;

export type FragmentToken3255 =
  | FragmentSelf3255["__typename"]
  | FragmentSelf3255["typenameHint"] | FragmentToken3253 | FragmentToken3254;
