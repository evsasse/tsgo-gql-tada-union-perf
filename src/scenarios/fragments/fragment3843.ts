import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3841 } from "./fragment3841";
import type { FragmentToken3842 } from "./fragment3842";

export const FRAGMENT_3843 = gql(`
  fragment Fragment3843 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult3843 = ResultOf<typeof FRAGMENT_3843>;
type FragmentSelf3843 = NonNullable<FragmentResult3843>;

export type FragmentToken3843 =
  | FragmentSelf3843["__typename"]
  | FragmentSelf3843["typenameHint"] | FragmentToken3841 | FragmentToken3842;
