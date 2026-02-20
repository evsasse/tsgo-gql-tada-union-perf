import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3840 } from "./fragment3840";
import type { FragmentToken3841 } from "./fragment3841";

export const FRAGMENT_3842 = gql(`
  fragment Fragment3842 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult3842 = ResultOf<typeof FRAGMENT_3842>;
type FragmentSelf3842 = NonNullable<FragmentResult3842>;

export type FragmentToken3842 =
  | FragmentSelf3842["__typename"]
  | FragmentSelf3842["typenameHint"] | FragmentToken3840 | FragmentToken3841;
