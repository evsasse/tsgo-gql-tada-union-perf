import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3312 } from "./fragment3312";
import type { FragmentToken3313 } from "./fragment3313";

export const FRAGMENT_3314 = gql(`
  fragment Fragment3314 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult3314 = ResultOf<typeof FRAGMENT_3314>;
type FragmentSelf3314 = NonNullable<FragmentResult3314>;

export type FragmentToken3314 =
  | FragmentSelf3314["__typename"]
  | FragmentSelf3314["typenameHint"] | FragmentToken3312 | FragmentToken3313;
